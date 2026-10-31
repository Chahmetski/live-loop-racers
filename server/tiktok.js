import {TikTokLive} from './vendor/ttl-live/dist/index.js';
import WebSocket from 'ws';
export function normalize(type,d,room='') {
 const u=d.user||d;
 const id=u.userId||u.id||d.userId;
 const status=Number(u.followInfo?.followStatus??u.followStatus??d.followInfo?.followStatus);
 const user=id&&String(id)!=='0'?{id:String(id),name:u.nickname||u.uniqueId||u.displayId||String(id),avatar:u.avatarUrl||u.avatarThumb?.urlList?.[0]||u.profilePicture?.urls?.[0]||u.profilePictureUrls?.[0],following:status===1||status===2}:null;
 const candidate=d.common?.msgId||d.msgId||d.orderId||d.logId;
 const msg=candidate&&String(candidate)!=='0'?candidate:null;
 const e={type,eventId:msg?`live:${room}:${type}:${msg}`:undefined,user};
 if(type==='chat')e.text=d.comment;
 if(type==='like')e.count=Number(d.likeCount)||Number(d.count)||0; // never totalLikeCount
 if(type==='gift')Object.assign(e,{giftId:String(d.giftId??d.gift?.id??d.giftDetails?.giftId??''),name:d.gift?.name||d.giftDetails?.giftName||d.extendedGiftInfo?.name||d.giftName,
  coins:Number(d.diamondCount??d.gift?.diamondCount)||0,
  count:Number(d.repeatCount)||1,streak:d.streakable??Number(d.gift?.type??d.giftDetails?.giftType??d.giftType??d.extendedGiftInfo?.type)===1,repeatEnd:!!d.repeatEnd,
  seriesId:d.groupId&&String(d.groupId)!=='0'?String(d.groupId):d.giftDetails?.groupId?String(d.giftDetails.groupId):undefined});
 return e;
}
export class TikTokAdapter {
 constructor(engine,{Connection=TikTokLive}={}){this.engine=engine;this.Connection=Connection;this.connection=null;this.intent=false;this.retry=null;this.attempt=0;this.generation=0;}
 async connect(account){
  await this.disconnect();account=String(account).trim().replace(/^@/,'');
  if(!/^[\w.]{2,64}$/.test(account))throw new Error('Введите имя аккаунта TikTok без ссылки.');
  this.intent=true;this.account=account;this.attempt=0;await this.open();
 }
 async open(){
  const generation=++this.generation;const engine=this.engine;
  engine.connection.status='connecting';engine.connection.viewers=null;engine.connection.message='Подключение к @'+this.account;
  const conn=new this.Connection(this.account,{fetchGifts:true,WebSocketImpl:WebSocket,sessionCookie:'',reconnect:{attempts:0}});
  this.connection=conn;
  for(const type of ['chat','like','gift'])conn.on(type,d=>{if(generation!==this.generation||d.isHistory)return;engine.handle(normalize(type,d,conn.roomId));});
  conn.on('member',d=>{if(generation!==this.generation||d.isHistory)return;const action=String(d.action??'').toLowerCase();
   const left=d.left===true||d.isLeave===true||['leave','left','exit'].includes(action);
   // Unknown numeric actions are not evidence of joining or leaving.
   if(left||d.action===undefined||['1','3','join','joined','enter','subscribe','subscribed'].includes(action))engine.handle(normalize(left?'leave':'join',d,conn.roomId));
  });
  // Only explicit departures are reliable. roomUser ranks are a partial top list, not a roster.
  conn.on('leave',d=>{if(generation===this.generation&&!d.isHistory)engine.handle(normalize('leave',d,conn.roomId));});
  conn.on('roomUser',d=>{if(generation!==this.generation||d.isHistory)return;
   const count=Number(d.viewers);if(Number.isFinite(count)&&count>=0)engine.connection.viewers=count;
   // Rankings can contain departed donors. Only direct viewer events establish presence.
  });
  conn.on('social',d=>{if(generation===this.generation&&!d.isHistory&&d.action===1)engine.handle(normalize('follow',d,conn.roomId));});
  conn.on('error',err=>{if(generation===this.generation){engine.connection.message=String(err?.message||'Ошибка TikTok').slice(0,220);engine.log(engine.connection.message,'error');}});
  conn.on('disconnected',()=>{if(generation!==this.generation)return;engine.handle({type:'disconnect',message:'TikTok отключён. Гонка продолжается.'});this.schedule();});
  try {const state=await conn.connect();if(generation!==this.generation){await conn.disconnect();return;}
   engine.connection.status='connected';engine.connection.message=`LIVE @${this.account} · комната ${state.roomId}`;this.attempt=0;engine.log(engine.connection.message);
   try{await this.catalog();}catch(err){engine.log('Каталог подарков: '+err.message,'warn');}
  }catch(err){if(generation!==this.generation)return;engine.connection.status='error';engine.connection.message=String(err.message||err).slice(0,220);engine.log('TikTok: '+engine.connection.message,'error');this.schedule();throw err;}
 }
 schedule(){if(!this.intent||!this.engine.settings.reconnect||this.retry)return;const seconds=Math.min(60,5*2**this.attempt++);
  this.retry=setTimeout(()=>{this.retry=null;if(this.intent)this.open().catch(()=>{});},seconds*1000);}
 async catalog(){if(!this.connection?.roomId)throw new Error('Сначала подключитесь к эфиру.');const response=await this.connection.discovery.giftList(this.connection.roomId);
  const raw=[...response.values()];this.connection.gifts=response;
  const gifts=raw.map(g=>({id:String(g.id),name:String(g.name),coins:Number(g.diamondCount??g.diamond_count)||0}));
  this.engine.connection.catalog=gifts;this.engine.connection.catalogAt=Date.now();
  for(const configured of this.engine.gifts){const found=gifts.find(g=>configured.aliases.some(a=>a.toLowerCase()===g.name.toLowerCase()));
   if(found&&found.coins>0&&found.coins<=5000){configured.id=found.id;configured.coins=found.coins;configured.available=true;}else if(found&&found.coins>5000){configured.id=null;configured.available=false;this.engine.log(`${configured.name} недоступен: цена в этой комнате выше 5000 монет.`,'warn');}}
  this.engine.log(`Каталог проверен для @${this.account}: ${gifts.length} подарков.`);this.engine.persist();return gifts;
 }
 async disconnect(){this.intent=false;this.generation++;if(this.retry)clearTimeout(this.retry);this.retry=null;
  const conn=this.connection;this.connection=null;if(conn)try{await conn.disconnect();}catch{}
  this.engine.connection.status='offline';this.engine.connection.message='TikTok не подключён';}
}
