(function(root){
const D=typeof module!=='undefined'?require('./questions.js'):root.QuizData;
const modes={classic:{name:'Classic Quiz',icon:'❓',desc:'Everyone answers. Correct answers score by speed: fastest gets the full player-count score, then one point less per place.'},buzzer:{name:'Buzzer Round',icon:'🚨',desc:'Fastest finger wins the right to answer. A wrong answer reopens the buzzer for the remaining players.'},music:{name:'Name That Tune',icon:'🎵',desc:'Buzz first, then name the song and artist. Upload clips in setup.'},evil:{name:'Evil Round',icon:'😈',desc:'Answer correctly to steal 5 points from your chosen rival. Get it wrong and lose 5 points.'},bingo:{name:'Quiz Bingo',icon:'🎱',desc:'Solve each clue by tapping the answer on your personal card. Lines earn bonuses.'},picture:{name:'Picture This',icon:'🖼️',desc:'Identify the image as it is gradually revealed. Includes flags and shapes; add your own.'},higher:{name:'Higher or Lower',icon:'↕️',desc:'Is the true number higher or lower than Lex’s suggested number?'},bet:{name:'Confidence Bet',icon:'💰',desc:'Stake up to 500 of your points. Right: gain your stake + 100. Wrong: lose your stake.'},quote:{name:'Who Said It?',icon:'💬',desc:'Match a short quote to its character, house, film or game.'},closest:{name:'Closest Wins',icon:'🎯',desc:'Enter a number. Closest wins 50 points; get it spot on for 100.'},final:{name:'Final Showdown',icon:'🏆',desc:'Eight-second questions, worth double points. No elimination.'},chaos:{name:'Cadoops Chaos',icon:'🃏',desc:'Use your one secret card: Double, Shield or Steal. Choose the moment carefully.'}};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const firstLetter=s=>String(s||'').trim().replace(/^(the|a|an)\s+/i,'').charAt(0).toUpperCase();
const uuid=()=>globalThis.crypto.randomUUID();
const clamp=(x,a,b,d)=>Number.isFinite(Number(x))?Math.max(a,Math.min(b,Math.floor(Number(x)))):d;
function assert(ok,msg){if(!ok)throw new Error(msg)}
function cleanImage(s){assert(!s||(/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s)&&s.length<42000),'Use a small PNG, JPEG or WebP photo.');return s||''}
function media(items,type){assert(Array.isArray(items)&&items.length<=40,'Maximum 40 media items per type.');return items.map((x,i)=>{assert(D.categories.includes(x.category),'Choose a category for each media item.');assert(typeof x.answer==='string'&&x.answer.trim().length>0&&x.answer.length<=150,'Give each media item an answer.');let p={id:`custom${type}${i}`,category:x.category,answer:x.answer.trim(),prompt:String(x.prompt||'Name this image.').slice(0,300),artist:String(x.artist||'').slice(0,150),aliases:String(x.aliases||'').slice(0,500).split('|').map(v=>v.trim()).filter(Boolean)};if(type==='music'){assert(typeof x.audio==='string'&&/^data:audio\/(mpeg|mp3|wav|x-wav|ogg|mp4|aac|webm|x-m4a);base64,[A-Za-z0-9+/=]+$/.test(x.audio)&&x.audio.length<3000000,'Use a song clip below 2 MB (MP3, WAV, OGG or M4A).');p.audio=x.audio;p.prompt='Buzz when you recognise the song. Name the title and artist.';}else{p.image=cleanImage(x.image);assert(p.image,'Add a photo for the picture question.');p.options=shuffle([p.answer,...(x.wrong||[]).filter(a=>norm(a)!==norm(p.answer))]);assert(p.options.length===4&&new Set(p.options.map(norm)).size===4,'Picture questions need three distinct wrong answers.')}return p})}
function plan(config){
const cats=Array.isArray(config.categories)?config.categories.filter(c=>D.categories.includes(c)):D.categories;assert(cats.length,'Select at least one category.');
const songs=media(config.songs||[],'music'),pics=media(config.pictures||[],'picture');
let rounds=config.rounds;
if(config.play==='random'){
let wanted=clamp(config.roundCount,1,12,5),count=clamp(config.perRound,1,10,3);
let remaining={trivia:D.questions.filter(q=>cats.includes(q.category)).length,numeric:D.numeric.filter(q=>cats.includes(q.category)).length,quote:D.quotes.filter(q=>cats.includes(q.category)).length,picture:[...D.pictures,...pics].filter(q=>cats.includes(q.category)).length,music:songs.filter(q=>cats.includes(q.category)).length};
let family=m=>['higher','closest'].includes(m)?'numeric':['quote','picture','music'].includes(m)?m:'trivia';
let available=shuffle(Object.keys(modes));
function choose(start,picked,left){if(picked.length===wanted)return picked;for(let i=start;i<available.length;i++){let mode=available[i],n=mode==='bingo'?9:count,f=family(mode);if(left[f]<n)continue;if(mode==='bingo'&&new Set(D.questions.filter(q=>cats.includes(q.category)).map(q=>norm(q.answer))).size<9)continue;let found=choose(i+1,[...picked,{mode,count:n,category:'Mixed'}],{...left,[f]:left[f]-n});if(found)return found}return null}
rounds=choose(0,[],remaining);
assert(rounds,`There aren’t enough unused questions for ${wanted} rounds with these categories and question counts. Choose fewer rounds/questions, more categories, or add media.`);
} 
assert(Array.isArray(rounds)&&rounds.length>=1&&rounds.length<=20,'Choose between 1 and 20 rounds.');
const used=new Set();let output=[];
rounds.forEach((r,ri)=>{assert(modes[r.mode],'Unknown round type.');let selected=r.category&&r.category!=='Mixed'?[r.category]:cats;assert(selected.every(c=>cats.includes(c)),'Round category must be selected in the quiz categories.');let pool;
if(['higher','closest'].includes(r.mode))pool=D.numeric;
else if(r.mode==='quote')pool=D.quotes;
else if(r.mode==='picture')pool=[...D.pictures,...pics];
else if(r.mode==='music')pool=songs;
else pool=D.questions;
pool=shuffle(pool.filter(q=>selected.includes(q.category)&&!used.has(`${r.mode==='higher'||r.mode==='closest'?'numeric':r.mode==='quote'?'quote':r.mode==='picture'?'picture':r.mode==='music'?'music':'trivia'}:${q.id}`)));
if(r.mode==='bingo')pool=pool.filter((q,i,arr)=>arr.findIndex(x=>norm(x.answer)===norm(q.answer))===i);
const count=r.mode==='bingo'?9:clamp(r.count,1,20,3);
assert(pool.length>=count,`${modes[r.mode].name}: only ${pool.length} unused questions/clips in the selected categories; choose fewer questions, different categories, or add media.`);
let chosen=pool.slice(0,count);let card=chosen.map(q=>q.answer);
chosen.forEach((source,qi)=>{let q={...source,round:ri+1,roundTotal:rounds.length,position:qi+1,roundSize:count,mode:r.mode,roundName:modes[r.mode].name};delete q.svg;
used.add(`${['higher','closest'].includes(r.mode)?'numeric':r.mode==='quote'?'quote':r.mode==='picture'?'picture':r.mode==='music'?'music':'trivia'}:${q.id}`);
if(r.mode==='quote'){q.options=shuffle([q.answer,...shuffle(D.quotes.filter(a=>a.answer!==q.answer).map(a=>a.answer)).filter((a,i,arr)=>arr.indexOf(a)===i).slice(0,3)])}
else if(r.mode==='higher'){q.reference=Math.max(1,Math.round(q.value*(Math.random()<.5?.8:1.2)));if(q.reference===q.value)q.reference++;q.prompt=`${q.prompt} Higher or lower than ${q.reference}?`;q.answer=q.value>q.reference?'Higher':'Lower';q.options=['Higher','Lower']}
else if(r.mode==='closest'){q.options=undefined}
else if(r.mode==='bingo'){q.cardAnswers=card;q.options=undefined}
else if(q.options)q.options=shuffle(q.options);
output.push(q)})});return output;
}
class Game{
constructor(config={},code='DEMO',now=Date.now()){
this.code=code;this.hostToken=uuid();this.created=now;this.updated=now;this.version=1;this.capacity=clamp(config.capacity,1,100,8);this.seconds=10;this.auto=config.auto!==false;this.questions=plan(config);this.players=[];this.phase='lobby';this.index=-1;this.deadline=0;this.paused=false;this.buzz=null;this.message='Alright, buddy! I’m Lex. Get everyone in the room and let’s find out who knows their stuff.';this.events=[];
}
change(now=Date.now()){this.version++;this.updated=now}
player(token){return this.players.find(p=>p.token===token)}
join(data,now=Date.now()){
assert(this.phase==='lobby','This quiz has started. Existing players can reconnect.');assert(this.players.length<this.capacity,'This room is full.');let name=String(data.name||'').trim().slice(0,24);assert(name,'Enter a player name.');assert(!this.players.some(p=>p.name.toLowerCase()===name.toLowerCase()),'That name is already in this room.');let theme=typeof data.theme==='string'&&data.theme.startsWith('data:audio/')&&data.theme.length<1500000?data.theme:'';let themePreset=/^preset:(?:[1-9]|[1-9][0-9]|1[01][0-9]|120)$/.test(String(data.themePreset||''))?String(data.themePreset):'';if(!theme&&!themePreset){let available=Array.from({length:120},(_,i)=>'preset:'+(i+1)).filter(id=>!this.players.some(x=>x.themePreset===id));themePreset=available.length?available[Math.floor(Math.random()*available.length)]:''}if(themePreset)assert(!this.players.some(x=>x.themePreset===themePreset),'That built-in theme has already been picked by another player. Choose a different one.');let p={id:uuid(),token:uuid(),name,photo:cleanImage(data.photo),theme,themePreset,avatar:clamp(data.avatar,0,11,0),score:0,correct:0,answered:0,steals:0,buzzWins:0,card:shuffle(['double','shield','steal'])[0],cardUsed:false,answer:null,marks:[],lines:[],lastSeen:now};this.players.push(p);this.change(now);return p;
}
q(){return this.questions[this.index]}
start(now=Date.now()){assert(this.phase==='lobby','The quiz has already started.');assert(this.players.length,'At least one player must join.');this.next(now)}
next(now=Date.now()){
assert(this.phase!=='finished','The quiz is finished.');this.paused=false;this.buzz=null;this.index++;
if(this.index>=this.questions.length){this.phase='finished';let lead=[...this.players].sort((a,b)=>b.score-a.score);let tied=lead.filter(p=>p.score===lead[0].score);this.message=tied.length>1?`We have a tie! ${tied.map(p=>p.name).join(' and ')} share the win with ${lead[0].score} points.`:`${lead[0].name} takes the crown with ${lead[0].score} points! What a quiz, buddy.`;this.change(now);return}
this.phase='question';let q=this.q();if(q.mode==='buzzer'&&q.position===1)this.buzzerLocked=[];this.deadline=now+10000;
this.firstCorrect=null;this.players.forEach(p=>{p.answer=null;p.activePower=null;if(q.mode==='bingo'&&q.position===1){p.grid=shuffle(q.cardAnswers);p.marks=[];p.lines=[]}});
this.message=q.position===1?`${modes[q.mode].icon} Round ${q.round}: ${q.roundName}. ${modes[q.mode].desc}`:`Let’s go, buddy. Question ${q.position} of ${q.roundSize}.`;this.change(now)
}
tick(now=Date.now()){if(this.paused)return;if(this.phase==='question'){if(this.buzz&&now>=this.buzz.until){let p=this.players.find(p=>p.id===this.buzz.id);if(p&&!p.answer){p.answer={value:'',correct:false,delta:0};p.answered++}this.buzz=null;this.change(now)}if(now>=this.deadline)this.reveal(now)}else if(this.phase==='reveal'&&this.auto&&now>=this.deadline)this.next(now)}
buzzer(token,now=Date.now()){
this.tick(now);let p=this.player(token);assert(p,'Rejoin the room.');assert(this.phase==='question'&&!this.paused&&['music','buzzer'].includes(this.q().mode),'The buzzer is not open.');assert(!p.answer,'You have already had your attempt.');assert(!(this.q().mode==='buzzer'&&(this.buzzerLocked||[]).includes(p.id)),'You are locked out for the rest of this Buzzer Round.');assert(!this.buzz,'Another player buzzed first.');this.buzz={id:p.id,until:Math.min(this.deadline,now+12000)};p.buzzWins++;this.message=`${p.name} buzzed first! Name the song, buddy.`;this.change(now)
}
power(token,data,now=Date.now()){this.tick(now);let p=this.player(token);assert(p&&this.phase==='question'&&!this.paused,'No active question.');assert(this.q().mode==='chaos'&&!p.answer&&!p.cardUsed,'That card cannot be played now.');if(p.card==='steal')assert(this.players.some(x=>x.id===data.target&&x.id!==p.id),'Choose a rival.');p.activePower={kind:p.card,target:data.target};p.cardUsed=true;this.change(now)}
answer(token,data,now=Date.now()){
this.tick(now);let p=this.player(token);assert(p,'Rejoin the room.');assert(this.phase==='question'&&!this.paused,'Answers are closed.');assert(!p.answer,'Your answer is already locked.');let q=this.q(),value=String(data.value??'').trim().slice(0,160);assert(value,'Choose or enter an answer.');let correct=false,stake=0;
if(q.mode==='music'){assert(this.buzz?.id===p.id,'Buzz first to answer.');correct=[q.answer,...q.aliases].some(a=>norm(a)===norm(value));let artist=String(data.artist||'').trim().slice(0,150);p.answer={value,artist,correct,artistCorrect:!!q.artist&&norm(artist)===norm(q.artist),delta:0,submittedAt:now};this.buzz=null;this.message=correct?`Song locked in for ${p.name}. The reveal is coming.`:`That title isn’t it, buddy. The buzzer is open again.`}
else if(q.mode==='buzzer'){assert(this.buzz?.id===p.id,'Buzz first to answer.');if(q.options)assert(q.options.includes(value),'Choose one of the answers.');correct=norm(value)===norm(q.answer);p.answer={value,correct,delta:0,submittedAt:now};this.buzz=null;if(!correct){this.buzzerLocked=this.buzzerLocked||[];if(!this.buzzerLocked.includes(p.id))this.buzzerLocked.push(p.id)}this.message=correct?`${p.name} nailed the buzzer question!`:`${p.name} missed it — locked out for the rest of this Buzzer Round!`}
else if(q.mode==='closest'){assert(Number.isFinite(Number(value))&&Math.abs(Number(value))<=1e12,'Enter a valid number.');p.answer={value:Number(value),correct:false,delta:0,submittedAt:now}}
else{if(q.mode==='bingo'){assert(p.grid.includes(value),'Choose a square from your card.');correct=norm(value)===norm(q.answer)}else if(q.mode==='higher'){assert(q.options.includes(value),'Choose Higher or Lower.');correct=norm(value)===norm(q.answer)}else{assert(/^[A-Za-z]$/.test(value),'Tap the first letter of the answer.');correct=value.toUpperCase()===firstLetter(q.answer)}if(q.mode==='bet')stake=clamp(data.stake,0,Math.min(500,p.score),0);if(q.mode==='evil')assert(this.players.length===1||this.players.some(x=>x.id===data.target&&x.id!==p.id),'Choose a rival to steal from.');p.answer={value,correct,stake,target:data.target,delta:0,submittedAt:now}}
p.answered++;if(correct&&!['music','buzzer','closest'].includes(q.mode)&&!this.firstCorrect){this.firstCorrect={id:p.id,name:p.name,photo:p.photo,avatar:p.avatar,theme:p.theme||'',themePreset:p.themePreset||'',at:now};this.message=`⚡ ${p.name} is first with the correct answer!`;};this.change(now);if(this.players.every(x=>x.answer))this.reveal(now)
}
reveal(now=Date.now()){
if(this.phase!=='question')return;let q=this.q();if(q.mode==='closest'){let answered=this.players.filter(p=>p.answer);let best=Math.min(...answered.map(p=>Math.abs(p.answer.value-q.value)));answered.forEach(p=>p.answer.correct=Math.abs(p.answer.value-q.value)===best)}
let changes=new Map(this.players.map(p=>[p.id,0]));let stealActions=[];
let speedModes=!['closest','music','buzzer','bet'].includes(q.mode);let correctOrder=speedModes?this.players.filter(p=>p.answer?.correct).sort((a,b)=>(a.answer.submittedAt??Infinity)-(b.answer.submittedAt??Infinity)):[];let speedPoints=new Map(correctOrder.map((p,i)=>[p.id,Math.max(1,this.players.length-i)]));
this.players.forEach(p=>{if(!p.answer){p.answer={value:null,correct:false,delta:0};return}let a=p.answer,d=0;if(q.mode==='closest')d=a.correct?(Number(a.value)===Number(q.value)?100:50):0;else if(q.mode==='music')d=(a.correct?100:0)+(a.artistCorrect?100:0);else if(q.mode==='buzzer')d=a.correct?this.players.length:0;else if(q.mode==='bet')d=a.correct?100+a.stake:-a.stake;else d=a.correct?(speedPoints.get(p.id)||0):q.mode==='evil'?-5:0;
if(a.correct){p.correct++;if(q.mode==='bingo'){let cell=p.grid.indexOf(q.answer);if(cell>=0&&!p.marks.includes(cell))p.marks.push(cell);let lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];lines.forEach((line,i)=>{if(!p.lines.includes(i)&&line.every(c=>p.marks.includes(c))){p.lines.push(i);d+=300}});if(p.marks.length===9)d+=1000}if(q.mode==='evil'&&a.target)stealActions.push({p,target:a.target,amount:5});if(q.mode==='chaos'&&p.activePower?.kind==='double')d*=2;if(q.mode==='chaos'&&p.activePower?.kind==='steal')stealActions.push({p,target:p.activePower.target,amount:5})}changes.set(p.id,d)});
// Apply each steal against pre-question balances, so scoring is independent of join order.
let remaining=new Map(this.players.map(p=>[p.id,p.score]));stealActions.forEach(s=>{let victim=this.players.find(p=>p.id===s.target);if(!victim||victim.activePower?.kind==='shield')return;let amount=Math.min(s.amount,remaining.get(victim.id));remaining.set(victim.id,remaining.get(victim.id)-amount);changes.set(victim.id,changes.get(victim.id)-amount);changes.set(s.p.id,changes.get(s.p.id)+amount);s.p.steals+=amount});
this.players.forEach(p=>{p.answer.delta=changes.get(p.id);p.score=Math.max(0,p.score+p.answer.delta)});
this.phase='reveal';this.deadline=now+9000;this.buzz=null;let n=this.players.filter(p=>p.answer.correct).length;this.message=q.mode==='closest'?`The answer is ${q.value}. Closest gets 50 points — spot on gets 100!`:`The answer is ${q.answer}. ${n} ${n===1?'player got':'players got'} it right${q.mode==='evil'?' — check those scores, buddy!':'.'}`;this.change(now)
}
host(token,data,now=Date.now()){
assert(token===this.hostToken,'Host controls are private.');this.tick(now);
switch(data.action){case 'start':this.start(now);break;case 'next':assert(this.phase==='reveal','Reveal the answer before moving on.');this.next(now);break;case 'reveal':assert(this.phase==='question','No question to reveal.');this.reveal(now);break;case 'pause':assert(['question','reveal'].includes(this.phase),'Nothing to pause.');if(!this.paused){this.pauseAt=now;this.paused=true}else{let delta=now-this.pauseAt;this.deadline+=delta;if(this.buzz)this.buzz.until+=delta;this.paused=false}this.change(now);break;case 'auto':this.auto=!!data.value;this.change(now);break;case 'adjust':assert(this.phase==='reveal'||this.phase==='finished','Adjust scores after the reveal.');let p=this.players.find(p=>p.id===data.id);assert(p,'Player not found.');let d=clamp(data.delta,-10000,10000,0);p.score=Math.max(0,p.score+d);this.events.push(`${p.name}: host adjustment ${d>=0?'+':''}${d}`);this.change(now);break;case 'kick':assert(this.phase==='lobby','Remove players before starting.');this.players=this.players.filter(p=>p.id!==data.id);this.change(now);break;default:throw new Error('Unknown host action.');}
}
state(token,now=Date.now()){
this.tick(now);let me=this.player(token);if(me)me.lastSeen=now;let q=this.q(),publicQ=null;
if(q){publicQ={id:q.id,prompt:q.prompt,category:q.category,mode:q.mode,round:q.round,roundTotal:q.roundTotal,position:q.position,roundSize:q.roundSize,roundName:q.roundName,options:q.options,image:q.image,audio:q.audio,unit:q.unit,reference:q.reference};if(this.phase==='reveal'||this.phase==='finished')Object.assign(publicQ,{answer:q.mode==='closest'?q.value:q.answer,actual:q.value,artist:q.artist})}
return {code:this.code,version:this.version,capacity:this.capacity,seconds:this.seconds,phase:this.phase,index:this.index,total:this.questions.length,deadline:this.deadline,paused:this.paused,pauseAt:this.pauseAt,auto:this.auto,buzz:this.buzz,buzzerLocked:this.buzzerLocked||[],firstCorrect:this.firstCorrect,message:this.message,q:publicQ,serverTime:now,events:this.events.slice(-5),players:this.players.map(p=>({id:p.id,name:p.name,avatar:p.avatar,photo:p.photo,theme:p.theme||'',themePreset:p.themePreset||'',score:p.score,correct:p.correct,answered:p.answered,steals:p.steals,buzzWins:p.buzzWins,submitted:!!p.answer,online:now-p.lastSeen<15000,...(this.phase==='reveal'||this.phase==='finished'?{answer:p.answer}:{} )})),me:me?{id:me.id,card:me.card,cardUsed:me.cardUsed,activePower:me.activePower,answer:me.answer?{value:me.answer.value}:null,grid:me.grid,marks:me.marks,lines:me.lines}:null,isHost:token===this.hostToken};
}
}
const API={Game,modes,shuffle,norm,plan};if(typeof module!=='undefined')module.exports=API;else root.QuizEngine=API;
})(globalThis);
