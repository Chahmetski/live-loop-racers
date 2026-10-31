import {TRACK_LENGTH,ROAD_WIDTH,mod,signedGap} from '../shared/track.js';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const airborne=(c,time)=>c.floatUntil>time||c.orbitUntil>time||c.hopUntil>time&&time-c.hopStarted>.06&&c.hopUntil-time>.06;
export function activateGift(e,c,g,count){
 const now=e.time,base=TRACK_LENGTH/84;
 if(g.mechanic==='jet'){e.addBoost(c,g,count);c.speed=Math.min(base*e.settings.maxSpeedMultiplier,c.speed+base*.16);}
 if(g.mechanic==='iceTrail'){c.iceTrailUntil=Math.max(now,c.iceTrailUntil||0)+Math.min(18,g.duration*count);c.iceTrailUntil=Math.min(now+18,c.iceTrailUntil);c.nextIceTrail=now;}
 if(g.mechanic==='balloons'){c.floatStarted=now;c.floatUntil=Math.min(now+18,Math.max(now,c.floatUntil||0)+g.duration*count);}
 if(g.mechanic==='rollingDonut')for(let i=0;i<Math.min(count,8);i++)e.projectiles.push({id:e.nextProjectile++,type:'doughnut',owner:c.id,s:mod(c.s-8-i*4,TRACK_LENGTH),lane:c.lane,created:now,until:now+g.duration,speed:40,radius:2.8,slowDuration:g.slowDuration,factor:g.slow});
 if(g.mechanic==='bulldozer'){c.capUntil=now+g.duration;c.capCharges=1;c.capFlewAt=null;}
 if(g.mechanic==='truck'){c.truckUntil=now+g.duration;c.bikeUntil=0;c.level=2;}
 if(g.mechanic==='bike'){c.bikeUntil=now+g.duration;c.truckUntil=0;c.level=1;e.addBoost(c,g,1);}
 if(g.mechanic==='greenVolley'||g.mechanic==='diamondVolley'){
  e.addBoost(c,g,1);c.weaponKey=g.key;c.weaponUntil=now+g.duration;
  if(e.volleys.length>=24)resolveVolley(e,e.volleys.shift(),new Map(e.cars.map(o=>[o.id,o])));
  e.volleys.push({id:e.nextVolley++,key:g.key,owner:c.id,created:now,impactAt:now+.85,until:now+1.15,sourceS:c.s,sourceLane:c.lane,slowDuration:g.slowDuration,factor:g.slow,targets:e.cars.filter(o=>o.id!==c.id&&!o.finished).map(o=>o.id)});
 }
 if(g.mechanic==='orbit'){
  c.orbitUntil=now;c.orbitOwner=null;
  c.galaxyUntil=now+g.duration;
  const victims=e.cars.filter(o=>o!==c&&!o.finished&&!airborne(o,now)&&!e.protected(o)&&Math.abs(signedGap(o.s,c.s))<g.radius).sort((a,b)=>Math.abs(signedGap(a.s,c.s))-Math.abs(signedGap(b.s,c.s))).slice(0,8);
  victims.forEach((o,i)=>{o.orbitOwner=c.id;o.orbitStarted=now;o.orbitUntil=now+g.duration;o.orbitPhase=i/Math.max(1,victims.length)*Math.PI*2;o.immuneUntil=now+g.duration+e.settings.immunity;});
 }
}
export function tickGiftEffects(e,c,nearby,traps,dt){
 const now=e.time;
 c.level=c.truckUntil>now?2:c.bikeUntil>now?1:0;
 if(c.iceTrailUntil>now&&now>=(c.nextIceTrail||0)){
  c.nextIceTrail=now+.35;const own=e.traps.filter(t=>t.owner===c.id&&t.type==='ice'&&t.until>now);
  if(e.settings.playerTrapLimit>0&&own.length>=e.settings.playerTrapLimit){own.sort((a,b)=>a.id-b.id)[0].until=now;e.traps=e.traps.filter(t=>t.until>now);}
  e.spawnTrap(c,'ice',c.distance-7,c.lane,e.gifts.find(g=>g.key==='icecream'));
 }
 const flying=airborne(c,now),truck=c.truckUntil>now,cap=c.capUntil>now&&c.capCharges>0;
 if(truck||cap)for(const t of traps)if(t.until>now&&t.activeAt<=now){const gap=signedGap(t.s,c.s);if(gap>-4&&gap<Math.max(13,c.speed*dt+10)&&Math.abs(t.lane-c.lane)<t.radius+(truck?3.3:2.8)){t.until=now;c.clearedAt=now;}}
 if(c.bikeUntil>now&&!(c.hopUntil>now)&&now>(c.nextHopAt||0))for(const t of traps){const gap=signedGap(t.s,c.s);if(t.until>now&&t.activeAt<=now&&gap>0&&gap<c.speed*.65+5&&Math.abs(t.lane-c.lane)<t.radius+1){c.hopStarted=now;c.hopUntil=now+.9;c.nextHopAt=now+1.15;break;}}
 if(!flying&&(truck||cap))for(const o of nearby){if(o===c||o.finished||airborne(o,now))continue;const gap=signedGap(o.s,c.s);if(gap<-5||gap>(truck?12:16)||Math.abs(o.lane-c.lane)>(truck?4.5:3.3))continue;
  const direction=o.lane===c.lane?(o.slot%2?1:-1):Math.sign(o.lane-c.lane);o.pushVelocity=direction*(truck?5:3.8);o.pushUntil=now+.35;o.targetLane=clamp(o.lane+direction*5,-ROAD_WIDTH/2+2,ROAD_WIDTH/2-2);
  if(truck&&!(o.flatUntil>now)&&e.harm(o,3,.5,'crush',c.id,true)){o.flatStarted=now;o.flatUntil=now+3;}
 }
}
function resolveVolley(e,volley,byId){
 if(!volley||volley.resolved)return;volley.resolved=true;
 for(const id of volley.targets){const o=byId.get(id);if(!o||o.finished)continue;
  if(e.harm(o,volley.slowDuration,volley.factor,volley.key,volley.owner,true)&&volley.key==='diamond')o.crystalUntil=e.time+volley.slowDuration;
 }
}
export function tickProjectiles(e,dt,byId){
 for(const v of e.volleys)if(e.time>=v.impactAt)resolveVolley(e,v,byId);
 e.volleys=e.volleys.filter(v=>v.until>e.time);
 for(const p of e.projectiles){if(p.hitAt!=null){const victim=byId.get(p.hitPlayer);if(victim){p.s=victim.s;p.lane=victim.lane;}continue;}const before=p.s,step=p.speed*dt;p.s=mod(p.s-step,TRACK_LENGTH);
  for(const o of e.cars){if(o.id===p.owner||o.finished||airborne(o,e.time)||Math.abs(o.lane-p.lane)>p.radius+1)continue;const crossed=mod(before-(o.previousS??o.s),TRACK_LENGTH);if(crossed>step+(o.progressSpeed||o.speed)*dt+3.8)continue;
   if(o.truckUntil>e.time){p.until=e.time;break;}
   const hit=e.harm(o,p.slowDuration,p.factor,'doughnut',p.owner,true);if(hit){o.spinStarted=e.time;o.spinUntil=e.time+p.slowDuration;}
   p.hitAt=e.time;p.hitPlayer=o.id;p.until=e.time+.55;break;
  }
 }
 e.projectiles=e.projectiles.filter(p=>p.until>e.time).slice(-80);
}
