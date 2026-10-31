import {stationFor} from './camera-stations.js';
import {TRACK_LENGTH,signedGap} from './track.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function hermite(a,b,va,vb,u,seconds){const u2=u*u,u3=u2*u;return (2*u3-3*u2+1)*a+(u3-2*u2+u)*va*seconds+(-2*u3+3*u2)*b+(u3-u2)*vb*seconds;}
export class SnapshotHistory {
 constructor(){this.frames=[];this.lastTime=null;this.lastNow=null;}
 push(state,arrival){if(this.frames.length&&(state.round!==this.frames.at(-1).state.round||state.time<this.frames.at(-1).state.time)){this.frames=[];this.lastTime=null;}const frame={state,arrival,cars:new Map(state.cars.map(c=>[c.id,c]))};if(this.frames.at(-1)?.state.time===state.time)this.frames[this.frames.length-1]=frame;else this.frames.push(frame);if(this.frames.length>(state.cars.length>100?8:40))this.frames.shift();}
 renderTime(now){const f=this.frames.at(-1);if(!f)return 0;const scale=f.state.settings.timeScale,desired=f.state.time+clamp((now-f.arrival)/1000,0,.15)*scale-.12*scale,dt=clamp((now-(this.lastNow??now))/1000,0,.25);this.lastNow=now;
  if(this.lastTime===null)this.lastTime=desired;if(f.state.paused)return this.lastTime;
  // Run a local presentation clock. Packet arrival jitter corrects its pace
  // gradually rather than teleporting every vehicle to the newest snapshot.
  const predicted=this.lastTime+dt*scale,error=desired-predicted,adjustment=clamp(error*dt*3,-dt*scale*.18,dt*scale*.18);
  this.lastTime=Math.max(this.lastTime,Math.min(predicted+adjustment,f.state.time+.08*scale));return this.lastTime;
 }
 pose(id,time,target=null){if(!this.frames.length)return null;let a,b;if(this.sampleTime===time&&this.sampleNewest===this.frames.at(-1)){({a,b}=this.sample);}else{a=this.frames[0];b=null;for(const f of this.frames){if(f.state.time<=time)a=f;else{b=f;break;}}this.sample={a,b};this.sampleTime=time;this.sampleNewest=this.frames.at(-1);}const newest=this.frames.at(-1).cars.get(id),aa=a.cars.get(id)||newest,bb=b?.cars.get(id);if(!aa||!newest)return null;let d=aa.distance,lane=aa.lane,speed=aa.speed,lv=aa.laneVelocity||0;
  if(bb&&b.state.time>a.state.time){const seconds=b.state.time-a.state.time,u=clamp((time-a.state.time)/seconds,0,1);d=clamp(hermite(aa.distance,bb.distance,aa.progressSpeed??aa.speed,bb.progressSpeed??bb.speed,u,seconds),Math.min(aa.distance,bb.distance),Math.max(aa.distance,bb.distance));lane=hermite(aa.lane,bb.lane,aa.laneVelocity||0,bb.laneVelocity||0,u,seconds);speed=aa.speed+(bb.speed-aa.speed)*u;lv=(aa.laneVelocity||0)+((bb.laneVelocity||0)-(aa.laneVelocity||0))*u;}
  else if(!a.state.paused&&!aa.finished){const dt=clamp(time-a.state.time,0,.10*a.state.settings.timeScale);d+=(aa.progressSpeed??aa.speed)*dt;lane+=lv*dt;}
  const finished=newest.finished&&time>=(newest.finishSceneTime??Infinity);if(finished){const dt=clamp(time-(newest.finishSceneTime??time),0,3),v=newest.finishSpeed||20;d=newest.distance+v*(dt-dt*dt/8);speed=v*Math.max(0,1-dt/4);}
  const result=target||{};if(result.snapshotSource!==newest){for(const key of Object.keys(result))delete result[key];Object.assign(result,newest);Object.defineProperty(result,'snapshotSource',{value:newest,writable:true,configurable:true,enumerable:false});}return Object.assign(result,{distance:d,lane,speed,laneVelocity:lv,finished,shield:Math.max(0,newest.shieldUntil-time,newest.bubbleCharges>0?newest.bubbleUntil-time:0),renderDistance:d});
 }
}
export class RaceDirector {
 constructor(){this.seen=0;this.pending=[];this.shot=null;this.nextAuto=0;this.sequence=0;this.round=null;this.cuts=0;this.lastEvent=-Infinity;this.duels=new Map();}
 update(state,now){
  if(state.time<(this.serverTime??0)){this.seen=0;this.round=null;}this.serverTime=state.time;
  if(this.round!==state.round){this.round=state.round;this.pending=[];this.shot=null;this.nextAuto=0;this.lastEvent=-Infinity;this.duels.clear();}
  const cars=new Map(state.cars.map(c=>[c.id,c])),alive=state.cars.filter(c=>!c.finished);if(!alive.length)return this.shot;
  const rank=c=>c.rank||state.cars.indexOf(c)+1;
  for(const e of state.notices||[]){if(e.id<=this.seen)continue;this.seen=e.id;const actor=cars.get(e.player);if(!actor||e.queued)continue;
   let kind,priority,life=14000;
   if(e.type==='gift'){
    const coins=state.gifts?.find(g=>g.key===e.key)?.coins||{rose:1,icecream:1,heart:5,doughnut:30,cap:99,glasses:199,money:500,galaxy:1000,motorcycle:2988,diamond:5000}[e.key]||0;
    if(coins<500&&!(rank(actor)<=10&&coins*(e.count||1)>=99))continue;
    kind='gift';priority=coins>=1000?90:coins>=500?75:60;life=26000;
   }else if(e.type==='finish'&&rank(actor)<=3){kind='finish';priority=100;}
   else if(['maneuver','overtake'].includes(e.type)){
    const rival=cars.get(e.rival);if(rank(actor)>5||!rival||rank(rival)>10||Math.abs(actor.distance-rival.distance)>25||now-(this.duels.get(actor.id)??-Infinity)<30000)continue;
    kind='duel';priority=45;this.duels.set(actor.id,now);
   }else continue;
   const old=this.pending.find(p=>p.id===actor.id&&p.kind===kind);if(old){old.key=e.key;old.priority=Math.max(old.priority,priority);continue;}
   this.pending.push({id:actor.id,rival:e.rival,key:e.key,kind,priority,eventId:e.id,text:e.text,expires:now+life});
  }
  this.pending=this.pending.filter(e=>e.expires>now&&cars.has(e.id)&&(!cars.get(e.id).finished||e.kind==='finish')).sort((a,b)=>b.priority-a.priority||a.eventId-b.eventId).slice(0,16);
  if(state.camera.mode==='zone')return null;
  if(state.camera.mode==='selected'){
   const actor=alive.find(c=>c.id===state.camera.id)||alive[0];if(this.shot?.id!==actor.id||this.shot.priority!==-1){this.shot={id:actor.id,kind:'chase',started:now,priority:-1,text:''};this.cuts++;}return this.shot;
  }
  if(['enrollment','countdown'].includes(state.phase)||state.phase==='racing'&&Number.isFinite(state.raceTime)&&state.raceTime<7){
   if(this.shot?.kind!=='grid'){this.shot={id:alive[0].id,kind:'grid',started:now,priority:0,text:'СТАРТОВАЯ РЕШЁТКА · ВСЕ УЧАСТНИКИ'};this.cuts++;}
   return this.shot;
  }
  if(this.shot?.priority===-1||this.shot?.kind==='grid'||this.shot&&!cars.has(this.shot.id)){this.shot=null;this.nextAuto=0;}
  if(this.shot?.kind==='track'){
   const leader=alive[0],gap=signedGap(leader.distance,this.shot.station.s);
   if(now-this.shot.started>=5500&&(gap>200||gap< -160))this.nextAuto=0;
  }
  const major=this.pending.find(e=>e.priority>=90&&now-this.lastEvent>=20000);
  if(this.shot?.kind==='track'&&major&&now-this.shot.started>=5500)this.nextAuto=0;
  if(this.shot&&now<this.nextAuto)return this.shot;
  const event=this.shot?(major|| (now-this.lastEvent>=40000?this.pending[0]:this.pending.find(e=>e.kind==='finish'))):null;
  if(event){this.pending=[];this.shot={...event,started:now,duration:event.kind==='finish'?4500:6000};this.lastEvent=now;this.nextAuto=now+this.shot.duration;}
  else{
   const leader=alive[0],station=stationFor(leader.distance);if(!this.shot)this.lastEvent=now;
   this.shot={id:leader.id,kind:'track',station,started:now,priority:0,text:'ОБЩИЙ ПЛАН · ЛИДЕРЫ'};this.sequence++;this.nextAuto=now+10000;
  }
  this.cuts++;return this.shot;
 }
}
