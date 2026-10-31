const {app,BrowserWindow}=require('electron'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),{pathToFileURL}=require('node:url');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
app.setPath('userData',fs.mkdtempSync(path.join(os.tmpdir(),'loop-polish-browser-')));
app.whenReady().then(async()=>{let service,win;const report={errors:[],views:[]};const watchdog=setTimeout(()=>app.exit(2),90000);
 try{
  const root=process.argv.includes('--packaged')?path.resolve('release/Live Loop Racers/resources/app'):process.cwd();
  const {createServer}=await import(pathToFileURL(path.join(root,'server/index.js')).href);
  service=await createServer({dataDir:fs.mkdtempSync(path.join(os.tmpdir(),'loop-polish-')),manualClock:true});
  const e=service.engine;e.settings={...e.settings,bots:18,autoRounds:false,mapEvents:false};e.start();e.paused=true;
  win=new BrowserWindow({width:540,height:960,useContentSize:true,show:false,webPreferences:{offscreen:true,sandbox:true,backgroundThrottling:false}});win.webContents.setAudioMuted(true);
  win.webContents.on('console-message',(_event,details)=>{if(details?.level==='error')report.errors.push(details.message);});
  const js=s=>win.webContents.executeJavaScript(s),capture=async label=>{
   for(let attempt=0;attempt<3;attempt++)try{const image=await win.webContents.capturePage();fs.writeFileSync('verification/polish-'+(process.argv.includes('--packaged')?'package-':'')+label+'.png',image.toPNG());return;}catch(error){if(attempt===2)throw error;await sleep(500);}
  };
  await win.loadURL(service.url+'/?qa=1');await sleep(2500);
  for(const [label,w,h] of [['portrait',540,960],['compact',360,640],['landscape',1280,720]]){
   win.setContentSize(w,h);service.broadcast();await sleep(600);await js('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))');
   const data=await js(`(()=>{const el=document.querySelector('.like-hint'),r=el.getBoundingClientRect(),info=document.querySelector('.race-info').getBoundingClientRect();return {diagnostics:gameDiagnostics,hint:el.textContent,hintFits:r.left>=0&&r.right<=innerWidth&&r.bottom<=document.getElementById('map-events').getBoundingClientRect().top,infoBottom:info.bottom};})()`);
   report.views.push({label,...data});await capture(label);assert.match(data.hint,/12%/);assert.ok(data.hintFits,JSON.stringify(data));assert.equal(data.diagnostics.cameraMode,'grid');assert.equal(data.diagnostics.renderedCars,18);
  }
  win.setContentSize(540,960);e.beginRace();e.paused=true;e.raceTime=3;service.broadcast();await sleep(600);await capture('launch');
  e.raceTime=20;service.broadcast();await sleep(300);await js('window.__qa.directorReset()');await sleep(100);assert.equal(await js('gameDiagnostics.cameraMode'),'track');
  // Simulate a previously held broadcast shot so a major gift is immediately eligible.
  await js('window.__qa.directorReset()');e.handle({type:'gift',user:{id:e.cars[0].id},key:'diamond'});service.broadcast();await sleep(150);
  // Exercise the same camera path with wall-clock progress at three points.
  for(const [label,progress] of [['zoom-far',0],['zoom-near',.6],['zoom-out',1]]){
   await js(`window.__qa.forceKind('gift');`);
   // Expose the director through the existing QA hook for deterministic shot timing.
   await js(`window.__qa.setShot({kind:'gift',id:${JSON.stringify(e.cars[0].id)},key:'diamond',started:performance.now()-${progress*6000},duration:6000,priority:90},performance.now()+10000)`);
   await sleep(500);await capture(label);report.views.push({label,diagnostics:await js('gameDiagnostics')});
  }
  e.phase='enrollment';e.cars=[];e.queue.clear();e.settings.bots=1000;e.start();e.paused=true;service.broadcast();await sleep(400);
  for(const [label,progress] of [['grid-tail',0],['grid-middle',.5],['grid-front',1]]){
   e.phaseTime=progress*(e.settings.countdown+7);service.broadcast();await sleep(600);await capture(label);
   const diagnostics=await js('gameDiagnostics');assert.equal(diagnostics.cameraMode,'grid');assert.ok(diagnostics.renderedCars>0);report.views.push({label,diagnostics});
  }
  assert.deepEqual(report.errors,[]);report.ok=true;
 }catch(err){report.ok=false;report.error=err.stack;}finally{clearTimeout(watchdog);fs.writeFileSync('verification/polish-'+(process.argv.includes('--packaged')?'package-':'')+'report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));win?.destroy();await service?.close();app.exit(report.ok?0:1);}
});
