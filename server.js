'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const {Game}=require('./engine.js');
const rooms=new Map(),rates=new Map(),themeClaims=new Map();const root=__dirname;
const builtInTheme=id=>/^(?:real:(?:ace|finalfantasy)|preset:(?:[1-9]|[1-9][0-9]|1[01][0-9]|120))$/.test(String(id||''));
const files=new Set(['index.html','app.js','style.css','config.js','questions.js','engine.js','icon.svg']);
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data))}
function code(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';return Array.from({length:6},()=>chars[crypto.getRandomValues(new Uint8Array(1))[0]%chars.length]).join('')}
const server=http.createServer(async(req,res)=>{
res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS');res.setHeader('X-Content-Type-Options','nosniff');
if(req.method==='OPTIONS'){res.writeHead(204);return res.end()}
let url=new URL(req.url,'http://localhost');if(url.pathname==='/api/health')return json(res,200,{ok:true,version:'1.0.0'});
if(url.pathname==='/api/theme-claims'&&req.method==='GET'){let owner=String(url.searchParams.get('owner')||'');return json(res,200,{claims:[...themeClaims.entries()].map(([themeId,v])=>({themeId,name:v.name,mine:v.owner===owner}))})}
if(!url.pathname.startsWith('/api/')){let name=url.pathname==='/'?'index.html':url.pathname.slice(1);if(!files.has(name))return json(res,404,{error:'Not found'});res.setHeader('Content-Type',({html:'text/html',js:'text/javascript',css:'text/css',svg:'image/svg+xml'})[name.split('.').pop()]);res.setHeader('Cache-Control','no-cache');return fs.createReadStream(path.join(root,name)).pipe(res)}
try{
let data={};if(req.method==='POST'){let chunks=[],size=0;for await(let chunk of req){size+=chunk.length;if(size>16*1024*1024)throw new Error('Quiz media is too large. Keep total uploads below 16 MB.');chunks.push(chunk)}data=JSON.parse(Buffer.concat(chunks).toString()||'{}')}
let token=(req.headers.authorization||'').replace(/^Bearer /,'');
if(url.pathname==='/api/theme-claims'&&req.method==='POST'){let owner=String(data.owner||'').slice(0,80),name=String(data.name||'Player').trim().slice(0,24),themeId=String(data.themeId||'');if(!owner)throw new Error('This player profile needs a claim ID.');if(themeId&&!builtInTheme(themeId))throw new Error('Unknown built-in theme.');if(themeId){let claim=themeClaims.get(themeId);if(claim&&claim.owner!==owner)throw new Error('That theme is already claimed by '+claim.name+'. Choose a different one.')}for(let[id,v]of themeClaims)if(v.owner===owner&&id!==themeId)themeClaims.delete(id);if(themeId)themeClaims.set(themeId,{owner,name,at:Date.now()});return json(res,200,{ok:true,themeId})}
if(url.pathname==='/api/rooms'&&req.method==='POST'){let ip=req.socket.remoteAddress,old=rates.get(ip)||{at:Date.now(),count:0};if(Date.now()-old.at>60000)old={at:Date.now(),count:0};if(++old.count>20)throw new Error('Please wait a minute before creating more rooms.');rates.set(ip,old);if(rooms.size>=500)throw new Error('Server room limit reached. Try again later.');let c;do{c=code()}while(rooms.has(c));let g=new Game(data,c);rooms.set(c,g);return json(res,201,{code:c,hostToken:g.hostToken,state:g.state(g.hostToken)})}
let match=url.pathname.match(/^\/api\/rooms\/([A-Z0-9]{6})(?:\/(join|answer|buzz|power|steal|host))?$/);if(!match)return json(res,404,{error:'Unknown endpoint'});let g=rooms.get(match[1]);if(!g)return json(res,404,{error:'Room not found or expired. Ask the host for a new code.'});let action=match[2];
if(!action&&req.method==='GET'){let state=g.state(token);if(Number(url.searchParams.get('v'))===state.version)return json(res,200,{unchanged:true,serverTime:state.serverTime,version:state.version});return json(res,200,state)}
if(req.method!=='POST')return json(res,405,{error:'Use POST'});
if(action==='join'){let p=g.join(data);return json(res,201,{token:p.token,state:g.state(p.token)})}
if(action==='answer')g.answer(token,data);else if(action==='buzz')g.buzzer(token);else if(action==='power')g.power(token,data);else if(action==='steal')g.steal(token,data);else if(action==='host')g.host(token,data);else throw new Error('Unknown action');return json(res,200,g.state(token))
}catch(e){json(res,400,{error:e.message||'Request failed'})}
});
const sweep=setInterval(()=>{let now=Date.now();for(let[c,g]of rooms){g.tick(now);if(now-g.updated>6*3600000)rooms.delete(c)}for(let[ip,r]of rates)if(now-r.at>60000)rates.delete(ip)},1000);sweep.unref();
if(require.main===module)server.listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('Cadoops Quiz is listening on port '+(process.env.PORT||3000)));
module.exports={server,rooms};
