const {app,BrowserWindow}=require('electron');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
app.whenReady().then(async()=>{
 let service,win;const report={errors:[]};
 try{
  const {createServer}=await import('../server/index.js');service=await createServer({dataDir:fs.mkdtempSync(path.join(os.tmpdir(),'loop-site-'))});service.engine.settings.autoRounds=false;
  win=new BrowserWindow({width:1440,height:900,useContentSize:true,show:false,webPreferences:{offscreen:true,sandbox:true,backgroundThrottling:false}});win.webContents.setAudioMuted(true);
  win.webContents.on('console-message',(event,details)=>{const info=typeof details==='object'?details:event.details;if(info?.level==='error')report.errors.push(info.message);});
  const js=code=>win.webContents.executeJavaScript(code);
  await win.loadURL(service.url);await wait(1500);
  assert.equal(await js(`document.getElementById('admin').hidden`),false);
  assert.equal(await js(`!!document.getElementById('game-frame').contentWindow.gameDiagnostics`),true);
  await js(`document.getElementById('demo').click()`);await wait(600);assert.equal(service.engine.cars.length,12);
  await js(`document.getElementById('start-race').click()`);await wait(3800);assert.equal(service.engine.phase,'racing');
  await js(`document.getElementById('test-rose').click()`);await wait(500);assert.ok(service.engine.cars[0].boosts.some(b=>b.key==='rose'));
  await js(`document.getElementById('pause-race').click()`);await wait(450);assert.equal(service.engine.paused,true);
  report.page=await js(`(()=>{const f=document.getElementById('game-frame'),r=f.getBoundingClientRect(),c=f.contentDocument.getElementById('scene');return {frame:[r.width,r.height],canvas:[c.width,c.height],connection:document.getElementById('local-status').textContent,players:document.getElementById('racers').textContent,obs:document.getElementById('obs-url').value,error:document.getElementById('error').textContent};})()`);assert.equal(report.page.players,'12');assert.equal(report.page.error,'');assert.ok(report.page.canvas[1]>=1700);
  fs.writeFileSync(path.resolve('verification/site-admin.png'),(await win.webContents.capturePage()).toPNG());
  assert.equal(await js(`document.getElementById('tools-frame').contentDocument.getElementById('tab-players').classList.contains('active')`),true);
  service.engine.paused=false;const progressBefore=service.engine.cars[0].distance;const gameOrigin=await js(`document.getElementById('game-frame').contentWindow.performance.timeOrigin`);
  const gameTime=await js(`document.getElementById('game-frame').contentWindow.gameDiagnostics`);assert.ok(gameTime);
  for(const tab of ['gifts','settings','rating','logs','live','test','players']){await js(`document.getElementById('tools-frame').contentDocument.querySelector('[data-tab="${tab}"]').click()`);await wait(60);assert.equal(await js(`document.getElementById('tools-frame').contentDocument.getElementById('tab-${tab}').classList.contains('active')`),true);}
  assert.ok(service.engine.cars[0].distance>progressBefore);assert.equal(await js(`document.getElementById('game-frame').contentWindow.performance.timeOrigin`),gameOrigin);
  report.columns=await js(`(()=>{const box=id=>{const r=document.getElementById(id).getBoundingClientRect();return {left:r.left,right:r.right};};return {left:box('left-tools'),game:box('game-frame'),right:box('admin')};})()`);assert.ok(report.columns.left.right<report.columns.game.left);assert.ok(report.columns.game.right<report.columns.right.left);
  fs.writeFileSync(path.resolve('verification/site-admin.png'),(await win.webContents.capturePage()).toPNG());
  await js(`const format=document.getElementById('format');format.value='landscape';format.dispatchEvent(new Event('change'))`);await wait(600);assert.equal(service.engine.settings.orientation,'landscape');assert.equal(await js(`document.body.dataset.format`),'landscape');
  await js(`document.getElementById('clear-test').click()`);await wait(450);assert.equal(service.engine.cars.length,0);assert.equal(service.engine.settings.testMode,false);
  await win.loadURL(service.url+'/?overlay=1');await wait(800);assert.equal(await js(`getComputedStyle(document.querySelector('.page-controls')).display`),'none');assert.equal(await js(`document.getElementById('admin').hidden`),true);
  await js(`document.getElementById('game-frame').contentDocument.dispatchEvent(new KeyboardEvent('keydown',{key:'a',bubbles:true}))`);await wait(100);assert.equal(await js(`document.getElementById('admin').hidden`),false);
  await win.loadURL(service.url);win.setContentSize(390,844);await wait(750);await js(`if(document.getElementById('admin').hidden)document.getElementById('admin-toggle').click()`);report.mobile=await js(`(()=>{const r=document.getElementById('admin').getBoundingClientRect();return {left:r.left,right:r.right,bottom:r.bottom,width:innerWidth,height:innerHeight};})()`);assert.ok(report.mobile.right>report.mobile.left&&report.mobile.bottom>0&&report.mobile.left>=0&&report.mobile.right<=390&&report.mobile.bottom<=844);
  fs.writeFileSync(path.resolve('verification/site-mobile.png'),(await win.webContents.capturePage()).toPNG());assert.deepEqual(report.errors,[]);report.ok=true;
 }catch(err){report.ok=false;report.error=err.stack;}
 finally{fs.writeFileSync(path.resolve('verification/site-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));win?.destroy();await service?.close();app.exit(report.ok?0:1);}
});
