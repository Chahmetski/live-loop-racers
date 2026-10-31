const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('desktop',{audioReady:()=>ipcRenderer.send('audio-ready')});
