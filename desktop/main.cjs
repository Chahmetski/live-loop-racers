const {app,BrowserWindow,Menu,ipcMain,screen}=require('electron');
const path=require('node:path');
let service,game,panel,quitting=false;
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
if(!app.requestSingleInstanceLock())app.quit();
else {
 app.on('second-instance',()=>{if(panel){panel.restore();panel.focus();}});
 app.whenReady().then(async()=>{
  const {createServer}=await import('../server/index.js');
  service=await createServer({dataDir:path.join(app.getPath('userData'),'data')});
  Menu.setApplicationMenu(null);
  const display=screen.getPrimaryDisplay().workAreaSize;
  function options(title,w,h){return {title,width:Math.min(w,display.width),height:Math.min(h,display.height),backgroundColor:'#10172c',autoHideMenuBar:true,
   icon:path.join(__dirname,'../public/assets/icon.png'),webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,backgroundThrottling:false,preload:path.join(__dirname,'preload.cjs')}};}
  game=new BrowserWindow(options('LIVE LOOP • Игра для OBS',540,960));
  panel=new BrowserWindow(options('LIVE LOOP • Панель стримера',1050,820));
  const origin=new URL(service.url).origin;
  for(const win of [game,panel]){win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',(e,url)=>{if(new URL(url).origin!==origin)e.preventDefault();});}
  await game.loadURL(service.url+'/game');await panel.loadURL(service.url+'/panel');
  function orientation(value){game.setAspectRatio(value==='portrait'?9/16:16/9);game.setSize(value==='portrait'?540:1100,value==='portrait'?960:660);}
  orientation(service.engine.settings.orientation);
  service.setWindowAction((action,value)=>{if(action==='orientation')orientation(value);if(action==='fullscreen')game.setFullScreen(!game.isFullScreen());});
  ipcMain.on('audio-ready',e=>{if(e.sender===game.webContents)game.webContents.setAudioMuted(false);});
  game.webContents.on('before-input-event',(e,input)=>{if(input.type==='keyDown'&&input.key==='F11'){game.setFullScreen(!game.isFullScreen());e.preventDefault();}});
  panel.on('closed',()=>{panel=null;app.quit();});game.on('closed',()=>{game=null;app.quit();});
  panel.focus();
 }).catch(err=>{require('electron').dialog.showErrorBox('Ошибка запуска',String(err.stack||err));app.quit();});
 app.on('before-quit',e=>{if(service&&!quitting){e.preventDefault();quitting=true;service.close().finally(()=>app.quit());}});
 app.on('window-all-closed',()=>app.quit());
}
