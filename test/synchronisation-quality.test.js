'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const banks=path.join(__dirname,'..','banks');
for(const name of fs.readdirSync(banks).filter(n=>n.endsWith('.js')).sort())require(path.join(banks,name));
const {Game,answerKey}=require('../engine.js');
const D=require('../questions.js');
const css=fs.readFileSync(path.join(__dirname,'..','style.css'),'utf8');
const app=fs.readFileSync(path.join(__dirname,'..','app.js'),'utf8');
function enterQuestion(g,now){
  g.start(now);
  for(let n=0;n<10&&g.phase!=='question';n++){
    if(g.phase==='roundIntro')g.host(g.hostToken,{action:'startRound'},now);
    else if(g.deadline)g.tick(now=g.deadline);
    else throw Error('Unexpected '+g.phase);
  }
  assert.equal(g.phase,'question');
  return now;
}
test('all clients receive the same server-timed fastest-correct FX and answer reveal',()=>{
  const g=new Game({auto:true,categories:['General Knowledge'],rounds:[{mode:'classic',count:1}]},'SYNC',1000);
  const a=g.join({name:'A'},1000),b=g.join({name:'B'},1000);
  let now=enterQuestion(g,1000);
  g.answer(a.token,{value:answerKey(g.q().answer)},++now);
  g.answer(b.token,{value:answerKey(g.q().answer)==='Z'?'Y':'Z'},++now);
  assert.equal(g.phase,'reveal');
  assert.equal(g.celebrationUntil,now+5000);
  assert.equal(g.deadline,now+12000);
  let viewA=g.state(a.token,now),viewB=g.state(b.token,now);
  assert.equal(viewA.celebrationUntil,viewB.celebrationUntil);
  assert.equal(viewA.deadline,viewB.deadline);
  assert.equal(viewA.q.answer,viewB.q.answer);
  g.tick(now+4999);assert.equal(g.phase,'reveal');
  g.tick(now+5000);assert.equal(g.phase,'reveal');
  assert.throws(()=>g.host(g.hostToken,{action:'next'},now+6000),/time to see the correct answer/);
  g.tick(now+11999);assert.equal(g.phase,'reveal');
  g.tick(now+12000);assert.equal(g.phase,'finished');
});
test('host cannot skip the correct answer immediately, but can advance after the viewing period',()=>{
  const g=new Game({auto:false,categories:['General Knowledge'],rounds:[{mode:'classic',count:2}]},'SYNC',1000);
  const p=g.join({name:'A'},1000);let now=enterQuestion(g,1000);
  g.answer(p.token,{value:answerKey(g.q().answer)},now+1);
  assert.equal(g.phase,'reveal');
  assert.throws(()=>g.host(g.hostToken,{action:'next'},now+2),/time to see/);
  const proceed=g.celebrationUntil+3000;
  g.host(g.hostToken,{action:'next'},proceed);
  assert.equal(g.phase,'reading');
  assert.equal(g.celebrationUntil,0);
});
test('the frontend uses the server clock instead of individual audio metadata timers',()=>{
  assert.doesNotThrow(()=>new vm.Script(app));
  assert.match(app,/function showingFastestEvent\(\)/);
  assert.match(app,/state\.celebrationUntil/);
  assert.match(app,/function startFastestEvent\(fc,fcKey\)\{fastestEventKey=fcKey;playPlayerTheme\(fc\)\}/);
  assert.doesNotMatch(app,/themeAudio\.onloadedmetadata/);
  assert.match(app,/id="fastestOverlay"/);
});
test('profile pictures stay static while the scene effects run in all intro variants',()=>{
  assert.match(css,/v120: keep the profile portrait absolutely still/);
  assert.match(css,/\.player-intro \.event-portrait img,[\s\S]*?animation:none!important/);
  assert.match(css,/\.intro-preview \.event-portrait img\{[\s\S]*?transform:none!important/);
});
test('all normal quiz questions are short-answer compatible, with original Alicent issue repaired',()=>{
  const exists=D.questions.find(q=>q.category==='House of the Dragon'&&q.prompt==='Who had already been crowned king when Alicent attempted to negotiate with Rhaenyra?');
  assert.ok(exists,'Rewritten Alicent question should remain playable');
  assert.equal(exists.answer,'Aegon II Targaryen');
  assert.ok(!D.questions.some(q=>/Why can Alicent not simply reverse Aegon/i.test(q.prompt)));
  const explain=/^Why\b/i;
  const wc=t=>String(t||'').trim().split(/\s+/).length;
  for(const q of D.questions){
    if(explain.test(q.prompt))assert.ok(wc(q.answer)<=4,q.prompt+' '+q.answer);
    const namedLong=/\b(?:title of|episode titled|full-time score|scoreline|first appear|first appearing)\b/i.test(q.prompt);
    if(!namedLong)assert.ok(wc(q.answer)<=6,q.prompt+' '+q.answer);
  }
  const counts=D.categories.map(category=>[category,D.questions.filter(q=>q.category===category).length]);
  console.log('Quality-screened category totals: '+JSON.stringify(counts));
});

test('orphaned canvas effects stop on every stage re-render and browser detachment',()=>{
  assert.match(app,/function frame\(t\)\{if\(!c\.isConnected\)\{c\._stop\?\.\(\);return\}/);
  assert.match(app,/app\.querySelectorAll\('canvas\.intro-fx-canvas'\)\.forEach\(c=>c\._stop\?\.\(\)\)/);
});
