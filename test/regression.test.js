const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const bankDir=path.join(__dirname,'..','banks');
for(const name of fs.readdirSync(bankDir).filter(name=>name.endsWith('.js')).sort())require(path.join(bankDir,name));
const {Game,plan}=require('../engine.js');
const D=require('../questions.js');

test('custom mixed rounds never repeat a source question when distractors start alike',()=>{
  const family=['classic','buzzer','steal','toxic','bingo','bet','clue','whoami','connections','headtohead','elimination','roulette','chasedown','final','chaos'];
  const rounds=family.map(mode=>({mode,count:20,category:'Friends'}));
  for(let trial=0;trial<30;trial++){
    const questions=plan({categories:['Friends'],rounds});
    const ids=questions.map(q=>q.id);
    assert.equal(questions.length,14*20+9,'Each custom round should be fully populated');
    assert.equal(new Set(ids).size,ids.length,'Quiz must not repeat a source question');
    assert.ok(questions.every(q=>q.category==='Friends'),'Custom category must be respected');
  }
});

function startMusicGame(){
  const c={categories:D.categories,capacity:2,auto:false,rounds:[{mode:'music',count:1,category:'General Knowledge'}],songs:[{answer:'Test Song',artist:'Test Artist',category:'General Knowledge',audio:'data:audio/mpeg;base64,AAAA'}]};
  const g=new Game(c,'MUSIC1',1000),p=g.join({name:'Player'},1000);
  g.start(1000);
  for(let n=0;n<20&&g.phase!=='question';n++){
    if(g.phase==='roundIntro')g.host(g.hostToken,{action:'startRound'},1001+n);
    else if(g.deadline)g.tick(g.deadline);
    else throw new Error('Music quiz stalled in '+g.phase);
  }
  assert.equal(g.phase,'question');
  return {g,p,now:g.deadline-1000};
}

test('music gives no artist-only bonus when the song title is wrong',()=>{
  let {g,p,now}=startMusicGame();
  g.buzzer(p.token,now);
  g.answer(p.token,{value:'Wrong Song',artist:'Test Artist'},now+1);
  g.reveal(now+2);
  assert.equal(p.score,0,'Artist alone must not score without the title');
});

test('music gives title points even when the artist is wrong',()=>{
  let {g,p,now}=startMusicGame();
  g.buzzer(p.token,now);
  g.answer(p.token,{value:'Test Song',artist:'Wrong Artist'},now+1);
  g.reveal(now+2);
  assert.equal(p.score,100);
});
