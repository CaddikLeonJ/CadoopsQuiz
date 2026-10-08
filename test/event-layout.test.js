const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');
test('browser app parses and all event presentations use the shared portrait frame',()=>{
  assert.doesNotThrow(()=>new vm.Script(app,{filename:'app.js'}));
  for(const call of ['eventPortrait(profile)','eventPortrait(p)','eventPortrait(state.firstCorrect)','eventPortrait(buzzWinner)']){
    assert.ok(app.includes(call),'Missing shared portrait for '+call);
  }
  for(const name of ['profile.name','p.name','state.firstCorrect.name','buzzWinner.name']){
    assert.ok(app.includes('eventNameSize('+name),'Missing length-aware name for '+name);
  }
  assert.match(app,/event-portrait--photo/);
  assert.match(app,/event-portrait--icon/);
});
test('all 50 intro FX use the common stage and photo dimensions',()=>{
  const match=app.match(/function effectMarkup\(fx\)\{let family=(\[[^\]]+\])/);
  assert.ok(match,'Effect definitions missing');
  const types=match[1].match(/'[^']+'/g)||[];
  assert.equal(types.length,50);
  assert.match(css,/\.event-portrait\{[\s\S]*?width:var\(--event-photo-size\)!important;/);
  assert.match(css,/\.event-portrait::after\{[\s\S]*?inset:0;/);
  assert.match(css,/\.event-portrait--photo\{border-radius:0!important\}/);
  assert.match(css,/\.event-portrait--icon\{border-radius:50%!important\}/);
});
test('small layouts and lengthy real/bot names have explicit mobile fitting styles',()=>{
  assert.match(css,/\.player-intro \.event-name--long/);
  assert.match(css,/\.fastest-event \.event-name--long/);
  assert.match(css,/body\.quiz-active \.buzzer-event \.event-name--long/);
  assert.match(css,/overflow-wrap:anywhere!important/);
  assert.match(css,/@media\(max-height:600px\)/);
});

test('Ting Tong theme is in the picker, bot pool and real audio mapping',()=>{
  assert.match(app,/tingtong:'Cadoops Quiz The Ting Tong Song\.mp3'/);
  assert.match(app,/\['real:tingtong','The Ting Tong Song'\]/);
  assert.match(app,/pool=\[\.\.\.realThemeOptions\.map/);
});
