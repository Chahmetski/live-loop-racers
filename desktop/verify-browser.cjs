const {app,BrowserWindow}=require('electron');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
app.whenReady().then(async()=>{
 let service,win;const report={errors:[]};
 try{
  const {createServer}=await import('../server/index.js');service=await createServer({dataDir:fs.mkdtempSync(path.join(os.tmpdir(),'loop-browser-')),manualClock:true});
  const e=service.engine;e.settings.autoRounds=false;for(let i=0;i<12;i++)e.handle({type:'follow',user:{id:'viewer:'+i,name:'Гонщик '+(i+1)}});e.start();e.beginRace();for(let i=0;i<180;i++)e.update(1/30);e.paused=true;
  win=new BrowserWindow({width:960,height:540,useContentSize:true,show:false,webPreferences:{offscreen:true,sandbox:true,backgroundThrottling:false}});
  win.webContents.setAudioMuted(true);win.webContents.on('console-message',(event,details)=>{const info=typeof details==='object'?details:event.details;if(info?.level==='error')report.errors.push(info.message);});
  await win.loadURL(service.url+'/game');await wait(2300);
  const dimensions=()=>win.webContents.executeJavaScript(`(()=>{const c=document.getElementById('scene');return {canvas:[c.width,c.height],viewport:[innerWidth,innerHeight],status:document.getElementById('status').textContent};})()`);
  report.landscape=await dimensions();assert.deepEqual(report.landscape.canvas,[1920,1080]);
  win.setContentSize(1920,1080);await wait(500);
  fs.writeFileSync(path.resolve('verification/browser-landscape.png'),(await win.webContents.capturePage()).toPNG());
  e.handle({type:'gift',user:{id:'late-donor',name:'Новый зритель'},key:'rose',count:3});service.broadcast();assert.equal(e.cars.length,13);assert.ok(e.cars.at(-1).boosts.length);
  win.setContentSize(540,960);await wait(900);report.portrait=await dimensions();assert.deepEqual(report.portrait.canvas,[1080,1920]);
  win.setContentSize(1080,1920);await wait(500);
  fs.writeFileSync(path.resolve('verification/browser-portrait.png'),(await win.webContents.capturePage()).toPNG());
  e.leave('late-donor');service.broadcast();assert.equal(e.cars.length,12);
  await win.loadURL(service.url+'/panel');await wait(500);report.panel=await win.webContents.executeJavaScript(`({connected:document.getElementById('local-status').textContent,error:document.getElementById('error').textContent})`);assert.equal(report.panel.error,'');assert.deepEqual(report.errors,[]);report.ok=true;
 }catch(err){report.ok=false;report.error=err.stack;}
 finally{fs.writeFileSync(path.resolve('verification/browser-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));win?.destroy();await service?.close();app.exit(report.ok?0:1);}
});
