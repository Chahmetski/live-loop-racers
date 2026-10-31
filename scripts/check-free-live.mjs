import fs from 'node:fs';import {TikTokLive,Discovery,loadBundle,Signer,PRODUCT} from '../server/vendor/ttl-live/dist/index.js';import WebSocket from 'ws';
const originalFetch=globalThis.fetch;globalThis.fetch=(url,options={})=>originalFetch(url,{...options,signal:AbortSignal.timeout(20000)});
const report={startedAt:new Date().toISOString(),provider:'Local ttl-live signer; no Euler service',counts:{}};let live;
try{
 const source=await loadBundle();const signer=await Signer.create({bundleSource:source});report.localSigning=signer.sign('wss://webcast-ws.tiktok.com/webcast/im/ws_proxy/ws_reuse_supplement/?room_id=7300000000000000001&aid=1988',PRODUCT.ws).includes('X-Gnarly=');
 const rooms=await new Discovery().liveChannels();const room=rooms.find(r=>r.uniqueId);if(!room)throw Error('No live room returned for read-only transport check');
 live=new TikTokLive(room.uniqueId,{roomId:room.roomId,sessionCookie:'',WebSocketImpl:WebSocket,reconnect:{attempts:0}});live.on('error',e=>{report.socketError=e.message;});live.on('event',e=>{report.counts[e.type]=(report.counts[e.type]||0)+1;});await live.connect();report.connected=true;report.room=room.uniqueId;
 await new Promise(r=>setTimeout(r,12000));report.publicEvents=Object.values(report.counts).reduce((a,b)=>a+b,0);
}catch(e){report.error=e.message;report.connected=false;}finally{live?.disconnect();fs.writeFileSync('verification/free-live-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));}
