import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {WebSocketServer} from 'ws';
import {Engine} from './engine.js';
import {Store} from './store.js';
import {Avatars} from './avatars.js';
import {TikTokAdapter} from './tiktok.js';
import {Simulator} from './simulator.js';
import {validateSettings,validateGifts} from '../shared/config.js';
import {packState} from '../shared/wire.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function createServer({port=0,dataDir=path.join(root,'data'),manualClock=false}={}) {
 const store=new Store(dataDir);let engine;const avatars=new Avatars(dataDir,()=>{});
 engine=new Engine(store.load(),{onSave:d=>store.save(d),onAvatar:(p,u)=>avatars.request(p,u)});
 const adapter=new TikTokAdapter(engine),sim=new Simulator(engine);
 let windowAction=()=>{},stopping=false;
 const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.wav':'audio/wav','.mp3':'audio/mpeg','.webp':'image/webp','.json':'application/json'};
 const server=http.createServer(async(req,res)=>{
  try{const url=new URL(req.url,'http://localhost');if(req.method!=='GET'){res.writeHead(405);res.end();return;}
   if(url.pathname==='/api/health'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({app:'live-loop-racers-browser-v1',pid:process.pid}));return;}
   if(url.pathname==='/api/state'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(engine.snapshot(true)));return;}
   let file;
   if(url.pathname==='/')file=path.join(root,url.searchParams.has('qa')?'public/game.html':'public/index.html');
   else if(url.pathname==='/game')file=path.join(root,'public/game.html');
   else if(url.pathname==='/panel')file=path.join(root,'public/panel.html');
   else if(url.pathname==='/vendor/three.js')file=path.join(root,'node_modules/three/build/three.module.js');
   else if(url.pathname==='/vendor/three.core.js')file=path.join(root,'node_modules/three/build/three.core.js');
   else if(url.pathname.startsWith('/vendor/addons/'))file=path.join(root,'node_modules/three/examples/jsm',decodeURIComponent(url.pathname.slice('/vendor/addons/'.length)));
   else if(url.pathname.startsWith('/shared/'))file=path.join(root,decodeURIComponent(url.pathname.slice(1)));
   else if(/^\/avatars\/[a-f0-9]{32}\.png$/.test(url.pathname))file=path.join(avatars.dir,path.basename(url.pathname));
   else file=path.join(root,'public',decodeURIComponent(url.pathname));
   const resolved=path.resolve(file);if(![path.join(root,'public'),path.join(root,'shared'),path.join(root,'node_modules/three/build'),path.join(root,'node_modules/three/examples/jsm'),avatars.dir].some(p=>resolved.startsWith(p+path.sep))){res.writeHead(403);res.end();return;}
   if(!fs.existsSync(resolved)||!fs.statSync(resolved).isFile()){res.writeHead(404);res.end('Not found');return;}
   res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.setHeader('X-Content-Type-Options','nosniff');
   res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' ws://127.0.0.1:*; media-src 'self' blob:; object-src 'none'; frame-ancestors 'self'");
   fs.createReadStream(resolved).pipe(res);
  }catch{res.writeHead(500);res.end('Ошибка локального сервера');}
 });
 const wss=new WebSocketServer({noServer:true,maxPayload:100000});
 server.on('upgrade',(req,socket,head)=>{const origin=req.headers.origin,host=`http://127.0.0.1:${server.address().port}`;
  if(origin!==host&&origin!==`http://localhost:${server.address().port}`){socket.destroy();return;}
  if(!['/ws/game','/ws/panel'].includes(req.url)){socket.destroy();return;}
  wss.handleUpgrade(req,socket,head,ws=>{ws.panel=req.url==='/ws/panel';wss.emit('connection',ws,req);});});
 async function command(m){
  switch(m.action){
   case 'settings':engine.settings=validateSettings(m.value,engine.settings);if(engine.settings.timeScale>1&&!engine.settings.testMode)engine.settings.timeScale=1;if(Object.hasOwn(m.value,'bots')&&engine.settings.bots===0)engine.removeSimulatedParticipants();else engine.persist();if(m.value.orientation)windowAction('orientation',engine.settings.orientation);break;
   case 'clear-simulated':engine.removeSimulatedParticipants();broadcast();break;
   case 'gifts':engine.gifts=validateGifts(m.value);engine.persist();break;
   case 'start':engine.start();break;
   case 'pause':engine.paused=!engine.paused;break;
   case 'finish':if(['racing','overtime'].includes(engine.phase)){engine.log('Досрочное завершение гонки из панели стримера.','warn');engine.finishRound();}break;
   case 'connect':engine.settings.account=String(m.account||'').slice(0,64);engine.persist();await adapter.connect(m.account);break;
   case 'disconnect':await adapter.disconnect();break;
   case 'catalog':await adapter.catalog();break;
   case 'camera':engine.camera={mode:m.id?'selected':'auto',id:m.id||null,zone:null};break;
   case 'zone':engine.camera={mode:'zone',id:null,zone:Math.max(0,Math.min(4,+m.zone||0))};break;
   case 'queue-remove':engine.queue.delete(m.id);if(engine.phase==='enrollment')engine.refreshGrid();break;
   case 'follow':{const p=engine.players.get(m.id);if(p)engine.handle({type:'follow',user:p,eventId:'manual:'+Date.now()});break;}
   case 'give':{const p=engine.players.get(m.id);if(p)engine.handle({type:'gift',user:p,key:m.key,count:1,eventId:'manual:'+Date.now()+Math.random()});break;}
   case 'recover':{const c=engine.cars.find(c=>c.id===m.id);if(c)engine.recover(c);break;}
   case 'map-event':if(!engine.triggerMapEvent(m.kind))throw new Error('Событие доступно во время гонки; одновременно не более двух разных событий.');break;
   case 'reset':if(m.confirm==='СБРОСИТЬ'){engine.rating.clear();engine.sessionRating.clear();engine.persist();engine.log('Рейтинг сброшен вручную.');}break;
   case 'new-session':engine.sessionRating.clear();engine.persist();engine.log('Начата новая стрим-сессия. Подписчики и общий рейтинг сохранены.');break;
   case 'fullscreen':windowAction('fullscreen');break;
   case 'leave':engine.leave(m.id);broadcast();break;
   case 'test':{
    const i=Math.max(0,Math.min(999,+m.i||0));
    if(m.kind==='join')sim.join(m.count||12);
    if(m.kind==='like')sim.send('like',i,{count:100});
    if(m.kind==='anonymous')engine.handle({type:'like',count:100,eventId:'anonymous:'+Date.now()});
    if(m.kind==='follow')sim.send('follow',i);
    if(m.kind==='gift')sim.gift(m.key,i);
    if(m.kind==='roses')sim.roses(i);
    if(m.kind==='duplicate')sim.duplicate();
    if(m.kind==='before')sim.gift('cap',999);
    if(m.kind==='after'){const c=engine.cars.find(c=>c.finished);if(c)engine.handle({type:'gift',user:engine.players.get(c.id),key:'rose',count:5,eventId:'after:'+Date.now()});else engine.log('Тест после финиша: дождитесь финишировавшего участника.','warn');}
    if(m.kind==='disconnect')engine.handle({type:'disconnect',message:'ТЕСТ: разрыв источника событий. Гонка продолжается.'});
    if(m.kind==='burst')sim.burst();
    if(m.kind==='short'){engine.settings={...engine.settings,testMode:true,timeScale:10};engine.settings.duration=20;sim.join(30);engine.start();}
    break;}
   default:throw new Error('Неизвестная команда');
  }
 }
 wss.on('connection',ws=>{const initial=engine.snapshot(ws.panel);ws.send(JSON.stringify({type:'state',data:ws.panel?initial:packState(initial)}));ws.on('message',async raw=>{if(!ws.panel)return;try{const m=JSON.parse(String(raw));await command(m);if(ws.readyState===1)ws.send(JSON.stringify({type:'ack',action:m.action}));}catch(err){if(ws.readyState===1)ws.send(JSON.stringify({type:'error',message:String(err.message).slice(0,250)}));}});ws.on('error',()=>{});});
 await new Promise(resolve=>server.listen(port,'127.0.0.1',resolve));
 let last=performance.now(),accumulator=0,network=0,panelNetwork=0;
 const timer=manualClock?null:setInterval(()=>{const now=performance.now(),dt=Math.min(.25,(now-last)/1000);last=now;
  accumulator+=dt*engine.settings.timeScale;let steps=0;while(accumulator>=1/30&&steps++<200){engine.update(1/30);sim.update(1/30);accumulator-=1/30;}
  network+=dt;panelNetwork+=dt;if(network>=(engine.cars.length>100?.10:.05)){network=0;const panelDue=panelNetwork>=.35,payloads=new Map();if(panelDue)panelNetwork=0;const key=engine.cars.map(c=>{const p=engine.players.get(c.id);return c.id+':'+p.name+':'+p.avatar;}).join('|');
   for(const ws of wss.clients)if(ws.readyState===1&&ws.bufferedAmount<500000&&(!ws.panel||panelDue)){const includeRoster=key!==ws.rosterKey,payloadKey=ws.panel?'panel':includeRoster?'game-roster':'game';if(!payloads.has(payloadKey)){const snapshot=engine.snapshot(ws.panel);payloads.set(payloadKey,JSON.stringify({type:'state',data:ws.panel?snapshot:packState(snapshot,includeRoster)}));}ws.send(payloads.get(payloadKey));if(!ws.panel)ws.rosterKey=key;}}
 },16);
 async function close(){if(stopping)return;stopping=true;if(timer)clearInterval(timer);engine.persist();await adapter.disconnect();for(const ws of wss.clients)ws.close();wss.close();await new Promise(resolve=>server.close(resolve));}
 const broadcast=()=>{const payloads=new Map();for(const ws of wss.clients)if(ws.readyState===1){if(!payloads.has(ws.panel)){const s=engine.snapshot(ws.panel);payloads.set(ws.panel,JSON.stringify({type:'state',data:ws.panel?s:packState(s)}));}ws.send(payloads.get(ws.panel));}};
 return {server,engine,sim,command,close,broadcast,url:`http://127.0.0.1:${server.address().port}`,setWindowAction:fn=>windowAction=fn};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const s=await createServer({port:Number(process.env.PORT)||3210,dataDir:process.env.LIVE_RACERS_DATA||path.join(root,'data')});
 console.log(`Игра: ${s.url}\nПанель: ${s.url}/panel`);process.on('SIGINT',async()=>{await s.close();process.exit();});
}
