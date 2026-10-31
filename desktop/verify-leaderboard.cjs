const {app,BrowserWindow}=require('electron');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
app.whenReady().then(async()=>{
 let service,win;const report={};
 try{
  const {createServer}=await import('../server/index.js');service=await createServer({dataDir:fs.mkdtempSync(path.join(os.tmpdir(),'loop-top-')),manualClock:true});const e=service.engine;e.settings.autoRounds=false;e.sim;
  service.sim.join(12);e.start();e.beginRace();e.paused=true;for(const c of e.cars){c.distance=350-c.slot*8;c.s=c.distance;c.speed=30;}
  win=new BrowserWindow({width:540,height:960,useContentSize:true,show:false,webPreferences:{offscreen:true,sandbox:true,backgroundThrottling:false}});win.webContents.setAudioMuted(true);
  const js=code=>win.webContents.executeJavaScript(code);await win.loadURL(service.url+'/game');await wait(1800);
  await js(`window.topRows=new Map([...document.querySelectorAll('#leaders .leader')].map(r=>[r.dataset.player,{row:r,image:r.querySelector('img')}]));window.avatarWrites=0;window.topObserver=new MutationObserver(changes=>{for(const c of changes)if(c.type==='attributes'&&c.attributeName==='src')avatarWrites++;});topObserver.observe(document.getElementById('leaders'),{subtree:true,attributes:true,attributeFilter:['src']});`);
  for(let n=0;n<12;n++){for(let i=0;i<10;i++){const c=e.cars[i];c.distance=350-(n%2?9-i:i)*8;c.s=c.distance;c.laps=n%3;}service.broadcast();await wait(190);}
  report.updates=await js(`({rows:[...document.querySelectorAll('#leaders .leader')].every(r=>topRows.get(r.dataset.player)?.row===r),images:[...document.querySelectorAll('#leaders .leader')].every(r=>topRows.get(r.dataset.player)?.image===r.querySelector('img')),decoded:[...document.querySelectorAll('#leaders img')].every(i=>i.complete&&i.naturalWidth>0),avatarWrites,order:[...document.querySelectorAll('#leaders .leader')].map(r=>r.dataset.player)})`);
  assert.equal(report.updates.rows,true);assert.equal(report.updates.images,true);assert.equal(report.updates.decoded,true);assert.equal(report.updates.avatarWrites,0);assert.deepEqual(report.updates.order,e.snapshot().cars.slice(0,10).map(c=>c.id));
  // A real avatar change loads once; a leave removes only that driver's row.
  e.players.get(e.cars[0].id).avatar='/assets/avatar-11.svg';service.broadcast();await wait(500);assert.equal(await js(`avatarWrites`),1);
  const removed=e.cars[3].id;e.leave(removed);service.broadcast();await wait(400);assert.equal(await js(`!!document.querySelector('#leaders [data-player="${removed}"]')`),false);
  fs.writeFileSync(path.resolve('verification/leaderboard-stable.png'),(await win.webContents.capturePage()).toPNG());report.ok=true;
 }catch(err){report.ok=false;report.error=err.stack;}
 finally{fs.writeFileSync(path.resolve('verification/leaderboard-report.json'),JSON.stringify(report,null,2));win?.destroy();await service?.close();app.exit(report.ok?0:1);}
});
