// Application-level visual QA using Electron's renderer and capturePage, no OS input automation.
const {app,BrowserWindow,Menu}=require('electron');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),folder=path.join(root,'verification');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
app.setPath('userData',path.resolve('verification/browser-verify'));app.whenReady().then(async()=>{
 let service;
 try{
  fs.mkdirSync(folder,{recursive:true});Menu.setApplicationMenu(null);
  const {createServer}=await import('../server/index.js');const {TRACK_LENGTH,zoneStarts}=await import('../shared/track.js');
  service=await createServer({manualClock:true,dataDir:path.join(folder,'visual-data')});const e=service.engine;
  e.settings={...e.settings,duration:420,bots:30,maxPlayers:30,autoRounds:false,testMode:false,timeScale:1};service.sim.join(30);e.start();e.beginRace();e.notices=[];
  const win=new BrowserWindow({width:1080,height:1920,show:false,useContentSize:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,backgroundThrottling:false,offscreen:true}});
  win.webContents.setFrameRate(60);
  const errors=[];win.webContents.on('console-message',(_event,...args)=>{const info=args[0];if(typeof info==='object'&&info.level==='error')errors.push(info.message);else if(args[0]===3)errors.push(args[1]);});
  win.webContents.on('render-process-gone',(_event,details)=>errors.push(JSON.stringify(details)));
  await win.loadURL(service.url+'?qa=1');win.webContents.debugger.attach('1.3');await win.webContents.debugger.sendCommand('Emulation.setDeviceMetricsOverride',{width:1080,height:1920,deviceScaleFactor:1,mobile:false});await sleep(1800);const diagnostics=[];
  async function portrait(filename){const result=await win.webContents.debugger.sendCommand('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,fromSurface:true,clip:{x:0,y:0,width:1080,height:1920,scale:1}});fs.writeFileSync(path.join(folder,filename),Buffer.from(result.data,'base64'));}
  for(let zone=0;zone<5;zone++){await win.webContents.executeJavaScript('window.__qa.directorReset?.('+(zone===4?2:0)+')');
   const target=zoneStarts[zone]+(zone===0?80:100);
   for(const c of e.cars){const wanted=target-Math.floor(c.slot/3)*5.2;let delta=(wanted-c.s+TRACK_LENGTH)%TRACK_LENGTH;while(delta>0){const step=Math.min(delta,50);e.advance(c,step);delta-=step;}c.speed=0;}
   e.notices=[];e.camera={mode:'selected',id:e.cars[0].id,zone:null};service.broadcast();await sleep(1500);
   await portrait(`zone-${zone}-portrait.png`);const bounds=await win.webContents.executeJavaScript(`(async()=>{const {roadClearance}=await import('/shared/track.js');return {volcano:window.gameDiagnostics.volcanoClearance,clear:window.__qa.world.collisionBounds.every(b=>roadClearance(b.x,b.z)>b.radius+3),gifts:[...document.querySelectorAll('.gift-item')].map(x=>({name:x.textContent,visible:x.getBoundingClientRect().bottom<=innerHeight})),viewport:[innerWidth,innerHeight]};})()`);if(!bounds.clear||bounds.volcano===null||bounds.volcano<3||bounds.gifts.length!==10||bounds.gifts.some(g=>!g.visible))throw Error('Scenery/UI bounds failed');
   diagnostics.push(await win.webContents.executeJavaScript('window.gameDiagnostics'));
  }
  const c=e.cars[0];e.applyGift(c,e.gifts.find(g=>g.key==='universe'));e.applyGift(e.cars[1],e.gifts.find(g=>g.key==='lion'));e.applyGift(e.cars[2],e.gifts.find(g=>g.key==='sports'));service.broadcast();await sleep(1000);
  await portrait('upgrades-portrait.png');
  win.setContentSize(1920,1080);await win.webContents.debugger.sendCommand('Emulation.setDeviceMetricsOverride',{width:1920,height:1080,deviceScaleFactor:1,mobile:false});await sleep(1200);fs.writeFileSync(path.join(folder,'game-landscape.png'),(await win.webContents.capturePage()).toPNG());
  // A valid finish with podium and original racer models.
  for(let i=0;i<30*530&&e.phase!=='results';i++)e.update(1/30);if(e.phase!=='results')throw new Error('Visual finish did not reach results');service.broadcast();await sleep(1800);fs.writeFileSync(path.join(folder,'podium-landscape.png'),(await win.webContents.capturePage()).toPNG());
  diagnostics.push(await win.webContents.executeJavaScript('window.gameDiagnostics'));if(diagnostics.at(-1).stageCharacters!==30)throw Error('All participants must appear on stage');
  const panel=new BrowserWindow({width:1280,height:1000,show:false,useContentSize:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,backgroundThrottling:false,offscreen:true}});
  await panel.loadURL(service.url+'/panel');await sleep(1000);fs.writeFileSync(path.join(folder,'streamer-panel.png'),(await panel.webContents.capturePage()).toPNG());
  fs.writeFileSync(path.join(folder,'visual-report.json'),JSON.stringify({errors,diagnostics,resolutions:{portrait:'1080x1920',landscape:'1920x1080'},files:fs.readdirSync(folder).filter(x=>x.endsWith('.png'))},null,2));
  console.log(JSON.stringify({errors,diagnostics},null,2));panel.destroy();win.destroy();await service.close();app.quit();
 }catch(err){console.error(err);fs.writeFileSync(path.join(folder,'visual-error.txt'),String(err.stack||err));if(service)await service.close();app.exit(1);}
});
