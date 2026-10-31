import {TRACK_LENGTH,CHECKPOINTS,fastAt as at,mod,signedGap,ROAD_WIDTH,LANES} from '../shared/track.js';
import {DEFAULTS,GIFTS,validateSettings,validateGifts} from '../shared/config.js';
import {activateGift,tickGiftEffects,tickProjectiles,airborne} from './gift-effects.js';
import {MAP_EVENTS,EVENT_KEYS} from '../shared/map-events.js';
const colors=['#ff786e','#63caff','#ffd166','#a99aff','#6be5aa','#ff93d2','#fcaa67','#a3d865'];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const clean=(s,n=64)=>String(s??'').replace(/[\u0000-\u001f]/g,'').slice(0,n);
export class Engine {
 constructor(saved=null,{seed=12345,onSave=()=>{},onAvatar=()=>{}}={}) {
  this.settings=validateSettings(saved?.settings||{});this.gifts=validateGifts(saved?.giftMechanicsVersion===2?saved.gifts:(saved?.gifts||GIFTS).map(g=>({key:g.key,id:g.id,coins:g.coins})));
  if(saved&&![3,4].includes(saved.gameplayVersion)){this.settings.maxPlayers=1000;this.settings.bots=0;this.settings.testMode=false;this.settings.timeScale=1;this.gifts=validateGifts(GIFTS);}
  if(saved&&!saved.mediaVersion)this.settings.music=Math.min(this.settings.music,.08);
  if(saved&&!saved.graphicsVersion)this.settings.quality='high';
  this.seed=seed>>>0;this.onSave=onSave;this.onAvatar=onAvatar;this.time=0;this.phase='enrollment';this.phaseTime=0;
  this.round=0;this.raceTime=0;this.paused=false;this.players=new Map();this.queue=new Set();this.cars=[];
  this.traps=[];this.projectiles=[];this.volleys=[];this.nextProjectile=1;this.nextVolley=1;this.logs=[];this.notices=[];this.dedup=new Map();this.series=new Map();this.spam=new Map();
  this.mapEvents=[];this.nextMapEvent=1;this.nextMapEventAt=Infinity;this.eventDeck=[];this.trapHits=new Map();
  this.rating=new Map((saved?.rating||[]).filter(x=>x.id).map(x=>[x.id,x]));this.sessionRating=new Map((saved?.sessionRating||[]).filter(x=>x.id).map(x=>[x.id,x]));
  this.results=[];this.followed=new Set(saved?.followed||[]);this.camera={mode:'auto',id:null,zone:null};this.eventCounter=0;
  this.connection={status:'offline',message:'TikTok не подключён',viewers:null,anonymousLikes:0,catalog:[],catalogAt:null};
  this.nextTrap=1;this.nextNotice=1;this.lastPersist=0;this.leaderFinished=false;this.overtimeLeader=null;this.overtimeFinishGate=null;
  for(const u of (saved?.players||[]).slice(0,3000)){const p=this.profile(u);if(p){p.pending=Array.isArray(u.pending)?u.pending.slice(0,32):[];p.avatar=u.avatar||null;p.lastRound=0;p.giftEntry=!!u.giftEntry;p.present=u.present;}}
  for(const id of (saved?.queue||[]))if(this.players.has(id)&&(this.followed.has(id)||this.players.get(id).giftEntry)&&this.players.get(id).present!==false)this.queue.add(id);
  this.refreshGrid();this.log('Готово. Единая карта, 5 зон. Набор участников.');
 }
 random(){this.seed=(1664525*this.seed+1013904223)>>>0;return this.seed/4294967296;}
 log(message,type='info'){this.logs.push({time:Date.now(),message:clean(message,220),type});if(this.logs.length>250)this.logs.shift();}
 notice(text,type='gift',id=null,data={}){
  if(type==='like'){const old=this.notices.find(n=>n.type===type&&n.player===id&&this.time-n.created<1);if(old){old.count=(old.count||0)+(data.count||0);old.text=`${this.players.get(id)?.name||'Зритель'} · ♥ ${old.count} лайков`;old.until=this.time+12;return old;}}
  const n={id:this.nextNotice++,text:clean(text,140),type,player:id,created:this.time,until:this.time+14,...data};this.notices.push(n);if(this.notices.length>128)this.notices.shift();return n;
 }
 profile(u) {
  if(!u||typeof u.id!=='string'||!u.id.trim()||u.id.length>100)return null;
  let p=this.players.get(u.id);
  if(!p){if(this.players.size>=3000){for(const [id,old] of this.players)if(!this.queue.has(id)&&!this.cars.some(c=>c.id===id)&&!old.pending.length){this.players.delete(id);break;}if(this.players.size>=3000)return null;}
   p={id:u.id,name:clean(u.name||u.id),color:colors[this.players.size%colors.length],model:this.players.size%8,avatar:null,bot:!!u.bot,lastRound:this.round,pending:[]};this.players.set(p.id,p);}
  if(u.name)p.name=clean(u.name);if(u.avatar&&u.avatar!==p.avatarSource){p.avatarSource=u.avatar;this.onAvatar(p,u.avatar);}
  return p;
 }
 enroll(p){
  p.lastRound=this.round;p.present=true;
  const existing=this.cars.find(c=>c.id===p.id);if(existing&&!existing.finished)return existing;
  this.queue.add(p.id);
  if(!['enrollment','countdown','racing','overtime'].includes(this.phase)||existing||this.cars.length>=this.settings.maxPlayers)return null;
  if(!this.cars.length)this.phaseTime=0;
  const c=this.makeCar(p,Math.max(-1,...this.cars.map(c=>c.slot))+1);
  if(['racing','overtime'].includes(this.phase)){
   const tail=this.sorted().filter(c=>!c.finished).at(-1);
   c.distance=tail?tail.distance-8:0;c.s=mod(c.distance,TRACK_LENGTH);c.gridOffset=c.distance;
   const gates=Math.max(0,Math.floor(c.distance/(TRACK_LENGTH/CHECKPOINTS)));c.laps=Math.floor(gates/CHECKPOINTS);c.checkpoint=gates%CHECKPOINTS;c.nextGate=(gates+1)*TRACK_LENGTH/CHECKPOINTS;c.speed=tail?.speed||TRACK_LENGTH/84*.6;
   this.queue.delete(p.id);
  }
  this.cars.push(c);
  if(['racing','overtime'].includes(this.phase)){if(p.likeCharge)this.likeBoost(c,p.likeCharge);p.likeCharge=0;for(const pending of p.pending){const g=this.gifts.find(g=>g.key===pending.key);if(g)this.applyGift(c,g,pending.count,true);}p.pending=[];}
  return c;
 }
 leave(id){
  const p=this.players.get(id);if(!p)return false;p.present=false;p.pending=[];p.lobbyGas=0;p.likeCharge=0;this.queue.delete(id);
  this.cars=this.cars.filter(c=>c.id!==id);this.traps=this.traps.filter(t=>t.owner!==id);this.projectiles=this.projectiles.filter(p=>p.owner!==id);this.volleys=this.volleys.filter(v=>v.owner!==id);
  for(const c of this.cars){if(c.orbitOwner===id){c.orbitOwner=null;c.orbitUntil=this.time;}if(c.overTargetId===id){c.overTargetId=null;c.overUntil=0;}}
  if(this.camera.id===id||this.camera.gift?.id===id)this.camera={mode:'auto',id:null,zone:null};
  if(this.overtimeLeader===id){const leader=this.sorted().find(c=>!c.finished);this.overtimeLeader=leader?.id;this.overtimeFinishGate=leader?(Math.floor(Math.max(0,leader.distance)/TRACK_LENGTH)+1)*TRACK_LENGTH:null;}
  if(!this.cars.length&&this.phase!=='results'){this.phase='enrollment';this.phaseTime=0;this.raceTime=0;this.mapEvents=[];this.nextMapEventAt=Infinity;}
  this.log(`${p.name} вышел из эфира — машина убрана.`);this.savePending=true;return true;
 }
 refreshGrid(){
  const ids=[...this.queue].filter(id=>this.players.has(id)).slice(0,this.settings.maxPlayers);
  this.cars=ids.map((id,i)=>this.makeCar(this.players.get(id),i));
 }
 makeCar(p,i){const offset=-7-Math.floor(i/LANES.length)*7-(i%2)*1.4;return {id:p.id,slot:i,distance:offset,s:mod(offset,TRACK_LENGTH),gridOffset:offset,speed:0,lane:LANES[i%LANES.length],targetLane:LANES[i%LANES.length],laneVelocity:0,
  laps:0,checkpoint:0,nextGate:TRACK_LENGTH/CHECKPOINTS,follow:this.followed.has(p.id),gas:Math.max(0,(p.lobbyGas||0)-this.settings.likeDrain*(this.time-(p.gasAt??this.time))),
  boosts:[],level:0,baseBonus:0,shieldUntil:0,immuneUntil:0,slowUntil:0,slowFactor:1,slipUntil:0,
  finished:false,finishTime:null,rankDistance:0,hit:0,decision:this.random(),lastProgress:0,stuck:0,restoreCount:0,trail:null,
  pace:1,paceTarget:1,pacePhase:this.random()*Math.PI*2,nextPace:this.time+3+this.random()*4,overTargetId:null,overUntil:0,lastPass:-20,passBoostUntil:0,finishSceneTime:null};}
 handle(event){
  if(!event||!['chat','like','follow','gift','join','leave','disconnect'].includes(event.type))return false;
  if(event.type==='disconnect'){this.connection.status='offline';this.connection.message=clean(event.message||'Соединение потеряно. Гонка продолжается.',160);this.log(this.connection.message,'warn');return true;}
  const id=typeof event.eventId==='string'?event.eventId.slice(0,200):null;
  if(id&&this.dedup.has(id))return false;
  if(id){this.dedup.set(id,this.time+900);if(this.dedup.size>20000)this.dedup.delete(this.dedup.keys().next().value);}
  if(event.type==='like'&&!event.user?.id){this.connection.anonymousLikes+=clamp(Number(event.count)||0,0,10000);return false;}
  if(event.type==='leave')return this.leave(event.user?.id);
  const p=this.profile(event.user);if(!p)return false;this.eventCounter++;p.lastRound=this.round;p.present=true;
  if(event.user.following===true){this.followed.add(p.id);const existing=this.cars.find(c=>c.id===p.id);if(existing)existing.follow=true;this.savePending=true;}
  if(event.type!=='follow'&&(this.followed.has(p.id)||p.giftEntry))this.enroll(p);
  const car=this.cars.find(c=>c.id===p.id);const active=car&&!car.finished&&['racing','overtime'].includes(this.phase);
  if(event.type==='chat'||event.type==='join')return true;
  if(event.type==='like') {
   const count=clamp(Number(event.count)||0,0,10000),gain=count*this.settings.likeGain;
   if(count>0){
    const seconds=Math.min(6,2.5+(count-1)*.15);
    if(active){car.gas=clamp(car.gas+gain,0,1);this.likeBoost(car,seconds);}
    else if(this.queue.has(p.id)||car&&!car.finished&&this.phase==='countdown'){
     p.lobbyGas=clamp(Math.max(0,(p.lobbyGas||0)-this.settings.likeDrain*(this.time-(p.gasAt??this.time)))+gain,0,1);p.gasAt=this.time;
     p.likeCharge=Math.min(8,(p.likeCharge||0)+seconds);if(car)car.gas=p.lobbyGas;
    }
    this.notice(`${p.name} · ♥ ${count} лайков · ускорение +12%`,'like',p.id,{count,priority:20});
   }
   return true;
  }
  if(event.type==='follow') {const fresh=!this.followed.has(p.id);this.followed.add(p.id);const joined=this.enroll(p);if(car)car.follow=true;if(joined)joined.follow=true;if(fresh)this.notice(`${p.name} · подписался и входит в гонку`,'follow',p.id,{priority:0});this.savePending=true;return true;}
  if(Number(event.coins)>5000){this.log('Подарок дороже 5000 монет не участвует в игре.','warn');return false;}
  let g=this.gifts.find(g=>g.available!==false&&((event.key&&g.key===event.key)||(g.id!==null&&String(g.id)===String(event.giftId))));
  if(!g&&event.name)g=this.gifts.find(g=>g.available!==false&&g.aliases.some(a=>a.toLowerCase()===String(event.name).toLowerCase()));
  if(!g){this.log(`Несопоставленный подарок: ${clean(event.name||event.giftId,70)}. Назначьте его ID в редакторе.`,'warn');return false;}
  let count=clamp(Math.floor(Number(event.count)||1),1,1000);
  // For streaks only cumulative increments are applied; final repeatEnd never re-applies an increment.
  if(event.streak){
   const key=`${p.id}:${g.key}:${event.seriesId||'live-combo'}`;let previous=this.series.get(key);
   if(!event.seriesId&&previous?.ended&&count===1&&!event.repeatEnd)previous=null;
   const old=previous?.count||0;this.series.set(key,{count:Math.max(old,count),ended:!!event.repeatEnd,until:this.time+(event.seriesId?900:30)});count=Math.max(0,count-old);
  }
  if(!count)return false;
  p.giftEntry=true;this.savePending=true;const sender=this.enroll(p);
  if(sender&&!sender.finished&&['racing','overtime'].includes(this.phase))this.applyGift(sender,g,count);else{if(p.pending.length>=32){const same=p.pending.find(x=>x.key===g.key);if(same)same.count=clamp(same.count+count,1,1000);else p.pending.shift();}if(p.pending.length<32)p.pending.push({key:g.key,count});this.log(`${p.name}: ${g.name} сохранён до старта.`);}
  return true;
 }
 likeBoost(c,seconds){this.addBoost(c,{key:'like',boost:.12,duration:seconds,maxDuration:8},1);}
 addBoost(c,g,count){if(!g.boost||!g.duration)return;const duration=Math.min(g.maxDuration||30,g.duration*count);
  const existing=c.boosts.find(b=>b.key===g.key);if(existing)existing.remaining=Math.min(g.maxDuration||30,existing.remaining+duration);
  else{c.boosts.push({key:g.key,power:g.boost,remaining:duration});if(c.boosts.length>this.settings.effectQueue)c.boosts.sort((a,b)=>b.power-a.power).splice(this.settings.effectQueue);}
 }
 applyGift(c,g,count=1,restored=false){
  activateGift(this,c,g,count);
  c.trail=g.key;c.effectAt=this.time;if(!restored)this.notice(`${this.players.get(c.id).name} · ${g.name}${count>1?' ×'+count:''}`,'gift',c.id,{key:g.key,count,name:this.players.get(c.id).name,avatar:this.players.get(c.id).avatar,priority:75});
  this.log(`${this.players.get(c.id).name} → ${g.name} ×${count}`);
  if(g.level>=1)this.camera.gift={id:c.id,until:this.time+4};
 }
 protected(c){return c.shieldUntil>this.time||c.immuneUntil>this.time;}
 absorb(c){if(c.capCharges>0&&c.capUntil>this.time){c.capCharges=0;c.capUntil=this.time;c.capFlewAt=this.time;c.hit=.4;return true;}return false;}
 harm(c,duration,factor,type,owner=null,environment=false){
  const ground=['oil','puddle','tires','tree','ice','meteor','doughnut','crush'].includes(type);
  if(ground&&airborne(c,this.time))return false;
  if(['money','diamond','doughnut','meteor'].includes(type)&&this.absorb(c))return false;
  if(this.protected(c)&&!(c.slowUntil>this.time&&factor<c.slowFactor&&c.shieldUntil<=this.time&&c.orbitUntil<=this.time))return false;
  const previousFactor=c.slowUntil>this.time?c.slowFactor:1;c.slowUntil=Math.max(c.slowUntil,this.time+duration);c.slowFactor=Math.min(previousFactor,factor);c.slowType=type;c.immuneUntil=this.time+duration+this.settings.immunity;c.hit=1;
  if(['oil','puddle','ice'].includes(type))c.slipUntil=this.time+duration;
  if(type==='ice')c.icyUntil=this.time+duration;
  if(!environment)this.notice(this.players.get(c.id).name+' · '+type,'attack',c.id,{priority:0});return true;
 }
 spawnTrap(owner,type,distance,lane,g,activeAt=this.time){
  if(this.traps.length>=this.settings.trapLimit||this.traps.filter(t=>t.owner===owner.id).length>=this.settings.playerTrapLimit)return false;
  let s=mod(distance,TRACK_LENGTH);if(s<55||s>TRACK_LENGTH-55)return false;
  // Shift the placement a few metres when the requested center is inside a vehicle.
  let free=type==='ice';for(let attempt=0;!free&&attempt<5;attempt++){s=mod(distance-attempt*2.6,TRACK_LENGTH);if(s<55||s>TRACK_LENGTH-55)continue;
   if(!this.cars.some(c=>Math.abs(signedGap(c.s,s))<2.8&&Math.abs(c.lane-lane)<1.4)){free=true;break;}}
  if(!free)return false;
  this.traps.push({id:this.nextTrap++,owner:owner.id,type,s,lane:clamp(lane,-ROAD_WIDTH/2+2,ROAD_WIDTH/2-2),radius:type==='ice'?2.3:type==='oil'?1.8:1.45,
   activeAt,until:activeAt+(g.trapLife||g.duration||12),slowDuration:g.slowDuration||2,factor:g.slow||.5,hits:[]});return true;
 }
 removeSimulatedParticipants(){
  const simulated=(id,p)=>!!p?.bot||/^(bot|test):\d+$/.test(id);
  const ids=new Set();for(const [id,p] of this.players)if(simulated(id,p))ids.add(id);
  for(const collection of [this.rating,this.sessionRating])for(const [id,p] of collection)if(simulated(id,p))ids.add(id);
  for(const id of [...this.queue,...this.followed,...this.cars.map(c=>c.id)])if(simulated(id,this.players.get(id)))ids.add(id);
  this.settings={...this.settings,bots:0,testMode:false,timeScale:1};
  for(const id of ids){this.players.delete(id);this.queue.delete(id);this.followed.delete(id);this.rating.delete(id);this.sessionRating.delete(id);}
  this.cars=this.cars.filter(c=>!ids.has(c.id));
  for(const c of this.cars){if(ids.has(c.orbitOwner)){c.orbitOwner=null;c.orbitUntil=this.time;}if(ids.has(c.overTargetId)){c.overTargetId=null;c.overUntil=0;}}
  this.results=this.results.filter(p=>!simulated(p.id,p)).map((p,i)=>({...p,rank:i+1}));
  this.traps=this.traps.filter(t=>!ids.has(t.owner));this.projectiles=this.projectiles.filter(p=>!ids.has(p.owner)&&!ids.has(p.hitPlayer));
  this.volleys=this.volleys.filter(v=>!ids.has(v.owner));for(const v of this.volleys)v.targets=v.targets.filter(id=>!ids.has(id));
  this.notices=this.notices.filter(n=>!ids.has(n.player));
  for(const hits of this.trapHits.values())for(const id of ids)hits.delete(id);
  if(ids.has(this.camera.id)||ids.has(this.camera.gift?.id))this.camera={mode:'auto',id:null,zone:null};
  if(!this.cars.length){this.phase='enrollment';this.phaseTime=0;this.raceTime=0;this.paused=false;this.refreshGrid();this.mapEvents=[];this.nextMapEventAt=Infinity;this.leaderFinished=false;this.overtimeLeader=null;this.overtimeFinishGate=null;}
  else if(ids.has(this.overtimeLeader)){this.overtimeLeader=this.sorted()[0].id;this.overtimeFinishGate=(Math.floor(Math.max(0,this.sorted()[0].distance)/TRACK_LENGTH)+1)*TRACK_LENGTH;this.leaderFinished=false;}
  this.log(`Боты и тестовые участники убраны: ${ids.size}. Тестовый поток отключён.`);this.persist();return ids.size;
 }
 start(){if(['countdown','racing','overtime'].includes(this.phase))return;if(!this.queue.size&&!this.settings.bots){this.log('Ожидаем подписчиков для старта.');return;}this.phase='countdown';this.phaseTime=0;this.paused=false;this.log('Обратный отсчёт');this.prepare();}
 prepare(){
  this.round++;for(const [id,p] of this.players){if(!p.bot&&this.round-p.lastRound>this.settings.inactiveRounds)this.queue.delete(id);}
  const ids=[...this.queue].filter(id=>this.players.has(id)&&(this.followed.has(id)||this.players.get(id).giftEntry)&&this.players.get(id).present!==false&&!this.players.get(id).bot).slice(0,this.settings.maxPlayers);
  const botTarget=Math.min(this.settings.maxPlayers,Math.max(ids.length,this.settings.bots));
  for(let i=0;ids.length<botTarget;i++){const p=this.profile({id:`bot:${i}`,name:`БОТ · ${['Бублик','Тапыч','Краб','Пиксель','Жужа','Кактус','Луна','Борщ'][i%8]} ${i+1}`,bot:true,avatar:`/assets/avatar-${i%12}.svg`});ids.push(p.id);}
  this.cars=ids.map((id,i)=>this.makeCar(this.players.get(id),i));this.traps=[];this.projectiles=[];this.volleys=[];this.trapHits.clear();this.mapEvents=[];this.eventDeck=[];this.nextMapEventAt=Infinity;this.results=[];this.raceTime=0;this.currentRaceStepEnd=0;this.leaderFinished=false;this.overtimeLeader=null;this.overtimeFinishGate=null;
  for(const c of this.cars)this.queue.delete(c.id);
 }
 beginRace(){this.phase='racing';this.phaseTime=0;this.raceTime=0;this.nextMapEventAt=this.time+18;for(const c of this.cars){const p=this.players.get(c.id);c.gas=Math.max(c.gas,Math.max(0,(p.lobbyGas||0)-this.settings.likeDrain*(this.time-(p.gasAt??this.time))));p.lobbyGas=0;if(p.likeCharge)this.likeBoost(c,p.likeCharge);p.likeCharge=0;for(const pending of p.pending){const g=this.gifts.find(g=>g.key===pending.key);if(g){if(['iceTrail','rollingDonut','greenVolley','diamondVolley'].includes(g.mechanic)){c.startGifts??=[];c.startGifts.push(pending);}else this.applyGift(c,g,pending.count,true);}}p.pending=[];}this.notice('ПОЕХАЛИ!','start');this.log(`Раунд ${this.round}. ${this.cars.length} участников. ${this.settings.duration} секунд.`);}
 updateMapEvents(){
  this.mapEvents=this.mapEvents.filter(e=>e.until>this.time);
  if(!this.settings.mapEvents)return;
  if(this.time<this.nextMapEventAt)return;
  this.nextMapEventAt=this.time+this.settings.eventInterval-4+this.random()*8;
  if(this.mapEvents.length>=2)return;
  if(!this.eventDeck.length){this.eventDeck=[...EVENT_KEYS];for(let i=this.eventDeck.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[this.eventDeck[i],this.eventDeck[j]]=[this.eventDeck[j],this.eventDeck[i]];}}
  const kind=this.eventDeck.pop();if(this.mapEvents.some(e=>e.kind===kind)){this.eventDeck.unshift(kind);return;}
  this.triggerMapEvent(kind);
 }
 triggerMapEvent(kind){
  const spec=MAP_EVENTS[kind];if(!spec||!['racing','overtime'].includes(this.phase)||this.mapEvents.some(e=>e.kind===kind)||this.mapEvents.length>=2)return false;
  const candidates=this.sorted().filter(c=>!c.finished),actor=candidates[Math.floor(this.random()*Math.min(20,candidates.length))];if(!actor)return false;
  let s=mod(actor.s+Math.max(110,actor.speed*3.5),TRACK_LENGTH);
  // Outdoor events avoid the sea tunnel and the start line.
  for(let i=0;i<80&&(at(s).t>.55&&at(s).t<.82||s<90||s>TRACK_LENGTH-90);i++)s=mod(s+60,TRACK_LENGTH);
  const event={id:this.nextMapEvent++,kind,s,zone:at(s).zone,created:this.time,activeAt:this.time+3,until:this.time+3+spec.duration,length:kind==='charge'?240:kind==='rain'?450:90,laneIndex:Math.floor(this.random()*LANES.length)};
  this.mapEvents.push(event);
  const add=(type,pos,lane,radius=1.9)=>{if(this.traps.length>=this.settings.trapLimit)return;this.traps.push({id:this.nextTrap++,owner:null,eventId:event.id,environment:true,type,s:mod(pos,TRACK_LENGTH),lane,radius,activeAt:event.activeAt,until:event.until,slowDuration:type==='tree'?1.6:type==='puddle'?1.4:2.1,factor:type==='tree'?.5:type==='puddle'?.64:.55,hits:[]});};
  if(kind==='tree'){const side=this.random()<.5?-1:1;add('tree',s,side*10,4.3);}
  if(kind==='rain')for(let i=0;i<16;i++){const pos=s+i*27;if(at(pos).zone!==3)add('puddle',pos,LANES[Math.floor(this.random()*LANES.length)],2.1+this.random()*.8);}
  if(kind==='oil'||kind==='tires')for(let i=0;i<5;i++)add(kind,s+i*18,LANES[(event.laneIndex+i*2)%LANES.length]);
  this.notice(spec.name,'map-event',null,{kind,priority:0});this.log('Событие трассы: '+spec.name);return event;
 }
 sorted(){return [...this.cars].sort((a,b)=>b.distance-a.distance||(a.finishTime??Infinity)-(b.finishTime??Infinity)||a.slot-b.slot);}
 // Only sequential forward gates produce laps; recovery never changes distance or gate state.
 advance(c,delta,stepSeconds=0){
  if(!Number.isFinite(delta)||delta<=0||delta>TRACK_LENGTH/4)return false;
  const before=c.distance;c.distance+=delta;
  while(c.distance+1e-7>=c.nextGate){const gate=c.nextGate;c.checkpoint=(c.checkpoint+1)%CHECKPOINTS;c.nextGate+=TRACK_LENGTH/CHECKPOINTS;if(c.checkpoint===0){c.laps++;this.crossFinish(c,(this.currentRaceStepEnd??this.raceTime)-stepSeconds+stepSeconds*clamp((gate-before)/delta,0,1),gate);}if(c.finished)break;}
  c.s=mod(c.distance,TRACK_LENGTH);return true;
 }
 crossFinish(c,crossTime=this.raceTime,gate=c.distance){if(this.phase!=='overtime'||c.finished)return;
  if(this.finishCrossings){this.finishCrossings.push({c,crossTime,gate});return;}
  // An overtaker reaching the leading lap gate must not be sent around again.
  if(c.id===this.overtimeLeader||gate>=(this.overtimeFinishGate??Infinity)-1e-6){this.leaderFinished=true;}
  if(this.leaderFinished){c.finished=true;c.finishTime=crossTime;c.finishSceneTime=this.time;c.finishSpeed=c.speed;c.distance=gate;c.s=mod(gate,TRACK_LENGTH);c.speed=0;c.rankDistance=gate;this.notice(`${this.players.get(c.id).name} · ФИНИШ`,'finish',c.id,{priority:90});}
 }
 recover(c){c.speed=Math.max(c.speed,TRACK_LENGTH/84*.35);c.lane=clamp(c.targetLane,-ROAD_WIDTH/2+2,ROAD_WIDTH/2-2);c.laneVelocity=0;c.s=mod(c.distance,TRACK_LENGTH);c.stuck=0;c.restoreCount++;this.log(`${this.players.get(c.id).name}: восстановление на достигнутом участке.`);this.notice(`${this.players.get(c.id).name} · возвращается в гонку`,'recover',c.id,{priority:50});}
 update(dt){
  if(this.paused)return;dt=clamp(dt,0,.1);this.time+=dt;this.phaseTime+=dt;
  if(this.phase==='enrollment'){if(this.phaseTime>=this.settings.enrollment&&this.settings.autoRounds&&(this.cars.length||this.settings.bots))this.start();}
  else if(this.phase==='countdown'){if(this.phaseTime>=this.settings.countdown)this.beginRace();}
  else if(['racing','overtime'].includes(this.phase)){
   this.raceTime+=dt;
   if(this.phase==='racing'&&this.raceTime>=this.settings.duration){this.phase='overtime';this.phaseTime=0;const leader=this.sorted()[0];this.overtimeLeader=leader?.id;this.overtimeFinishGate=(Math.floor(Math.max(0,leader?.distance||0)/TRACK_LENGTH)+1)*TRACK_LENGTH;this.notice('ПОСЛЕДНИЙ КРУГ','lastlap');this.log('Время вышло: лидер завершает текущий круг, затем остальные финишируют на линии.');}
   this.updateMapEvents();this.simulate(dt);
   if(this.phase==='overtime'&&(this.cars.every(c=>c.finished)||this.phaseTime>=this.settings.extraTime))this.finishRound();
  }else if(this.phase==='results'&&this.phaseTime>=this.settings.results&&this.settings.autoRounds){this.phase='enrollment';this.phaseTime=0;this.traps=[];
   if(this.settings.autoRejoin)for(const c of this.cars){const p=this.players.get(c.id);if(p&&!p.bot&&p.present!==false&&(this.followed.has(p.id)||p.giftEntry))this.queue.add(p.id);}this.refreshGrid();}
  this.traps=this.traps.filter(t=>t.until>this.time);this.notices=this.notices.filter(n=>n.until>this.time);
  const trapIds=new Set(this.traps.map(t=>t.id));for(const id of this.trapHits.keys())if(!trapIds.has(id))this.trapHits.delete(id);
  if(Math.floor(this.time)!==Math.floor(this.time-dt)){for(const map of [this.dedup,this.series])for(const [key,v] of map)if((v.until||v)<this.time)map.delete(key);for(const [key,t] of this.spam)if(t<this.time-30)this.spam.delete(key);}
  if(this.time-this.lastPersist>=(this.savePending?1:10)){this.persist();this.savePending=false;this.lastPersist=this.time;}
 }
 simulate(dt){
  this.currentRaceStepEnd=Math.max(this.raceTime,(this.currentRaceStepEnd??0)+dt);
  if(this.phase==='overtime'&&this.overtimeFinishGate===null)this.overtimeFinishGate=(Math.floor(Math.max(0,...this.cars.map(c=>c.distance))/TRACK_LENGTH)+1)*TRACK_LENGTH;
  this.finishCrossings=[];
  const base=TRACK_LENGTH/84;
  const bucketCount=Math.ceil(TRACK_LENGTH/40),bucketWidth=TRACK_LENGTH/bucketCount,buckets=Array.from({length:bucketCount},()=>[]),byId=new Map(this.cars.map(c=>[c.id,c]));
  const trapBuckets=Array.from({length:bucketCount},()=>[]);for(const t of this.traps)if(t.until>this.time)trapBuckets[Math.floor(mod(t.s,TRACK_LENGTH)/bucketWidth)].push(t);
  for(const c of this.cars)if(!c.finished)buckets[Math.floor(mod(c.s,TRACK_LENGTH)/bucketWidth)].push(c);
  const neighbors=c=>{const index=Math.floor(mod(c.s,TRACK_LENGTH)/bucketWidth),near=[];for(let d=-1;d<=1;d++)near.push(...buckets[mod(index+d,bucketCount)]);return near;};
  for(const c of this.cars){
   if(c.finished)continue;const nearby=neighbors(c),nearTraps=[];if(this.traps.length){const trapIndex=Math.floor(mod(c.s,TRACK_LENGTH)/bucketWidth),trapReach=Math.ceil(Math.max(65,c.speed*1.8)/bucketWidth)+1;for(let d=-trapReach;d<=trapReach;d++)nearTraps.push(...trapBuckets[mod(trapIndex+d,bucketCount)]);}if(c.startGifts?.length&&c.distance>75){const pending=c.startGifts;c.startGifts=[];for(const gift of pending){const g=this.gifts.find(g=>g.key===gift.key);if(g)this.applyGift(c,g,gift.count,true);}}tickGiftEffects(this,c,nearby,nearTraps,dt);const surface=at(c.s),ahead=at(c.s+8);
   const turn=Math.atan2(Math.sin(ahead.yaw-surface.yaw),Math.cos(ahead.yaw-surface.yaw)),curvature=Math.abs(turn);
   if(this.time>=c.nextPace){c.paceTarget=.90+this.random()*.20;c.nextPace=this.time+4+this.random()*6;}c.pace+=(c.paceTarget-c.pace)*Math.min(1,dt*.6);
   c.decision-=dt;if(c.decision<=0&&!(c.frozenUntil>this.time)){c.decision=.6+this.random()*.45;
    const lanes=LANES;const score=lane=>{
     let cost=Math.abs(lane-c.lane)*.065-turn*lane*.4+this.random()*.14;
     for(const o of nearby){const gap=signedGap(o.s,c.s);if(o===c||o.finished||Math.abs(o.lane-lane)>(c.bikeUntil>this.time?1:2.5))continue;if(Math.abs(gap)<7)cost+=14;else if(gap>0&&gap<35)cost+=(35-gap)/5+Math.max(0,c.speed-o.speed)*.4;}
     for(const t of nearTraps){const gap=signedGap(t.s,c.s);if(t.owner!==c.id&&t.until>this.time&&t.activeAt<this.time+3&&gap>0&&gap<Math.max(65,c.speed*1.8)&&Math.abs(t.lane-lane)<t.radius+1.2)cost+=t.environment?48:8;}
     return cost;
    };const choice=lanes.map(l=>[l,score(l)]).sort((a,b)=>a[1]-b[1])[0][0];
    if(Math.abs(choice-c.targetLane)>1&&this.time-(c.lastLaneChange??-10)>2){c.targetLane=choice;c.lastLaneChange=this.time;const front=nearby.filter(o=>o!==c&&!o.finished&&o.distance-c.distance>0&&o.distance-c.distance<35&&Math.abs(o.lane-c.lane)<2.7).sort((a,b)=>a.distance-b.distance)[0];if(front){c.overTargetId=front.id;c.overUntil=this.time+12;c.passBoostUntil=this.time+6;this.notice('','maneuver',c.id,{rival:front.id,priority:55});}}
   }
   let target=base*.985*(c.pace+Math.sin(this.time*.26+c.pacePhase)*.025)*(1+c.baseBonus)*(1+(c.follow?this.settings.followSpeed:0))*(1+this.settings.likeBonus*c.gas);
   if(c.passBoostUntil>this.time)target*=1.035;
   if(c.boosts.length){c.boosts=c.boosts.filter(b=>b.remaining>0);c.boosts.sort((a,b)=>b.power-a.power);}
   if(c.boosts[0])target*=1+c.boosts[0].power;for(const boost of c.boosts)boost.remaining-=dt;
   target=Math.min(base*this.settings.maxSpeedMultiplier,target);target*=Math.max(c.bikeUntil>this.time?.93:.77,1-curvature*(c.bikeUntil>this.time?.20:.6));target*=clamp(1-surface.pitch*.15,.92,1.04);
   if(c.slowUntil>this.time)target*=c.slowFactor;else c.slowFactor=1;if(c.orbitUntil>this.time){const owner=byId.get(c.orbitOwner);if(owner&&!owner.finished)target=owner.speed;else c.orbitUntil=this.time;}
   for(const event of this.mapEvents)if(event.kind==='charge'&&this.time>=event.activeAt&&mod(c.s-event.s,TRACK_LENGTH)<event.length){
    const lane=LANES[(event.laneIndex+Math.floor((this.time-event.activeAt)/6))%LANES.length];
    if(Math.abs(c.lane-lane)<1.6&&this.time>(c.chargeAt??-Infinity)+6){c.gas=1;c.chargeAt=this.time;this.addBoost(c,{key:'charge',boost:.16,duration:2.5,maxDuration:2.5},1);}
   }
   // Traffic and mild contact, bounded to road surface.
   for(const o of nearby){if(o===c||o.finished)continue;const gap=signedGap(o.s,c.s);
    if(gap>0&&gap<7&&Math.abs(c.lane-o.lane)<(c.bikeUntil>this.time?.8:2.3)&&!airborne(c,this.time)&&!airborne(o,this.time)&&!(c.truckUntil>this.time||c.capUntil>this.time)){target=Math.min(target,Math.max(base*.42,o.speed*.96));if(gap<3&&!this.protected(c)){c.hit=Math.max(c.hit,.6);c.laneVelocity+=((c.lane>=o.lane)?1:-1)*dt*2;}}
   }
   const acceleration=base*.5*(1+(c.follow?this.settings.followAccel:0))*(c.boosts.some(b=>b.key==='like'&&b.remaining>0)?1.12:1);c.speed+=clamp(target-c.speed,-base*1.4*dt,acceleration*dt);
   const laneBefore=c.lane,steerLane=c.targetLane;c.laneVelocity=c.frozenUntil>this.time?0:clamp((c.laneVelocity||0)+((steerLane-c.lane)*2.6-(c.laneVelocity||0)*3.7)*dt,-2.4,2.4);
   if(c.icyUntil>this.time)c.laneVelocity*=Math.max(0,1-dt*3);if(c.pushUntil>this.time)c.laneVelocity+=c.pushVelocity*dt*4;
   if(c.slipUntil>this.time)c.laneVelocity+=Math.sin(this.time*6+c.slot)*dt*4;
   c.lane=clamp(c.lane+c.laneVelocity*dt,-ROAD_WIDTH/2+2,ROAD_WIDTH/2-2);
   c.gas=Math.max(0,c.gas-this.settings.likeDrain*dt);c.hit=Math.max(0,c.hit-dt*2);
   const oldS=c.s,p0=at(c.s,c.lane),p1=at(c.s+2,c.lane),laneMetric=clamp(Math.hypot(p1.x-p0.x,p1.y-p0.y,p1.z-p0.z)/2,.84,1.16);
   c.previousS=oldS;const forwardFactor=Math.sqrt(Math.max(.86,1-((c.lane-laneBefore)/dt/Math.max(10,c.speed))**2));c.progressSpeed=c.speed*forwardFactor/laneMetric;this.advance(c,c.progressSpeed*dt,dt);
   if(c.overTargetId){const rival=byId.get(c.overTargetId);if(rival&&c.distance>rival.distance+2){if(this.time-c.lastPass>8){this.notice('','overtake',c.id,{rival:rival.id,priority:55});c.lastPass=this.time;}c.overTargetId=null;}else if(this.time>c.overUntil)c.overTargetId=null;}
   for(const t of nearTraps){let hits=this.trapHits.get(t.id);if(!hits){hits=new Set(t.hits);this.trapHits.set(t.id,hits);}if(t.owner===c.id||t.activeAt>this.time||t.until<=this.time||hits.has(c.id)||airborne(c,this.time))continue;
    const gap=mod(t.s-oldS,TRACK_LENGTH);if(gap<=c.speed*dt+1.5&&Math.abs(c.lane-t.lane)<t.radius+1){
     hits.add(c.id);if(!t.environment)t.hits.push(c.id);if(this.harm(c,t.slowDuration,t.factor,t.type,t.owner,true)&&!['oil','ice','puddle'].includes(t.type)&&!t.environment)t.until=this.time;
    }}
   // Oil remains dangerous on following laps, bounded immunity handles repeated exposure.
   for(const t of nearTraps)if((['oil','ice'].includes(t.type)||t.environment)&&Math.abs(signedGap(c.s,t.s))>15){this.trapHits.get(t.id)?.delete(c.id);if(!t.environment&&t.hits.includes(c.id))t.hits=t.hits.filter(id=>id!==c.id);}
   if(c.distance-c.lastProgress<.001)c.stuck+=dt;else c.stuck=0;c.lastProgress=c.distance;
   if(c.stuck>5)this.recover(c);
  }
  tickProjectiles(this,dt,byId);
  const crossings=this.finishCrossings;this.finishCrossings=null;crossings.sort((a,b)=>a.crossTime-b.crossTime||a.c.slot-b.c.slot);
  for(const {c,crossTime,gate} of crossings)this.crossFinish(c,crossTime,gate);
 }
 finishRound(){
  if(this.phase==='results')return;const ranked=this.sorted();this.phase='results';this.phaseTime=0;this.traps=[];this.projectiles=[];this.volleys=[];this.mapEvents=[];this.trapHits.clear();this.nextMapEventAt=Infinity;
  this.results=ranked.map((c,i)=>{const p=this.players.get(c.id),points=c.finished?this.settings.points[Math.min(i,3)]:0;
   for(const rating of [this.rating,this.sessionRating]){let r=rating.get(c.id)||{id:c.id,name:p.name,avatar:p.avatar,points:0,wins:0,participations:0,bot:p.bot};r={...r,name:p.name,avatar:p.avatar,points:r.points+points,wins:r.wins+(i===0&&c.finished?1:0),participations:r.participations+1};rating.set(c.id,r);}
   return {...p,rank:i+1,laps:c.laps,distance:c.distance,finishTime:c.finishTime,finished:c.finished,points,level:c.level};});
  this.notice('ГОНКА ЗАВЕРШЕНА','victory');this.log(`Раунд ${this.round} завершён. Победитель: ${this.results[0]?.name||'нет участников'}`);this.persist();
 }
 persist(){this.onSave({graphicsVersion:1,mediaVersion:2,gameplayVersion:4,giftMechanicsVersion:2,settings:this.settings,gifts:this.gifts,rating:[...this.rating.values()].sort((a,b)=>b.points-a.points).slice(0,10000),sessionRating:[...this.sessionRating.values()],followed:[...this.followed],players:[...this.players.values()].filter(p=>!p.bot),queue:[...new Set([...this.queue,...(this.settings.autoRejoin?this.cars.filter(c=>!this.players.get(c.id)?.bot).map(c=>c.id):[])])],savedAt:Date.now()});}
 snapshot(panel=false){
  const cars=this.sorted().map((c,i)=>({...c,rank:i+1,...this.players.get(c.id),pending:undefined,avatarSource:undefined,
   boost:c.boosts[0]?.power||0,shield:Math.max(0,c.shieldUntil-this.time,c.capCharges>0?c.capUntil-this.time:0),slow:c.slowUntil>this.time}));
  const s={time:this.time,phase:this.phase,phaseTime:this.phaseTime,round:this.round,raceTime:this.raceTime,paused:this.paused,
   cars,traps:this.traps,projectiles:this.projectiles,volleys:this.volleys,mapEvents:this.mapEvents,notices:this.notices,results:this.results,settings:this.settings,gifts:this.gifts,camera:this.camera,queueCount:this.queue.size,connection:{...this.connection,catalog:panel?this.connection.catalog:[]},eventCounter:this.eventCounter};
  if(panel){s.queue=[...this.queue].map(id=>this.players.get(id)).filter(Boolean);s.profiles=[...this.players.values()].slice(-100);s.logs=this.logs;s.rating=[...this.rating.values()].sort((a,b)=>b.points-a.points).slice(0,100);s.sessionRating=[...this.sessionRating.values()].sort((a,b)=>b.points-a.points).slice(0,100);}
  return s;
 }
}
