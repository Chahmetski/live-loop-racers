import test from 'node:test';
import assert from 'node:assert/strict';
import {Engine} from '../server/engine.js';
import {GIFTS} from '../shared/config.js';
import {RaceDirector} from '../shared/presentation.js';
import {carSurface,liftHeight} from '../shared/render-effects.js';
import {TRACK_LENGTH,at,LANES} from '../shared/track.js';
import {packState,unpackState} from '../shared/wire.js';
const gift=key=>GIFTS.find(g=>g.key===key);
function race(n=4){const e=new Engine(null,{seed:100});e.settings={...e.settings,bots:n,autoRounds:false,mapEvents:false};e.start();e.beginRace();e.notices=[];for(const c of e.cars){c.distance=c.s=200+c.slot*16;c.lane=c.targetLane=LANES[c.slot%6];c.speed=35;c.decision=5;}return e;}
function tick(e,seconds){for(let i=0;i<Math.ceil(seconds*30);i++)e.update(1/30);}
test('money hits every unprotected rival for 4s, boosts sender for 5s; diamond hits all for 10s',()=>{
 const e=race(20),owner=e.cars[0];e.applyGift(owner,gift('money'));assert.equal(e.volleys[0].targets.length,19);tick(e,1);assert.ok(e.cars.slice(1).every(c=>c.slowUntil>e.time+3.5));assert.ok(owner.boosts.find(b=>b.key==='money').remaining>3.8);
 for(const c of e.cars){c.immuneUntil=c.slowUntil=0;c.slowFactor=1;}e.applyGift(owner,gift('diamond'));tick(e,1);assert.ok(e.cars.slice(1).every(c=>c.crystalUntil>e.time+9.5&&c.slowFactor<=.2));assert.ok(owner.boosts.find(b=>b.key==='diamond').remaining>8.8);
});
test('simultaneous gift boosts expire from receipt rather than waiting behind the strongest boost',()=>{
 const e=race(1),c=e.cars[0];e.applyGift(c,gift('money'));e.applyGift(c,gift('diamond'));tick(e,5.1);assert.ok(!c.boosts.some(b=>b.key==='money'&&b.remaining>0));assert.ok(c.boosts.find(b=>b.key==='diamond').remaining<5);tick(e,5);assert.ok(!c.boosts.some(b=>b.remaining>0));
});
test('balloons avoid floor hazards while bullets still hit the flying vehicle',()=>{
 const e=race(),c=e.cars[0];e.applyGift(c,gift('heart'));e.time+=.5;for(const kind of ['ice','oil','tires','tree','puddle','doughnut'])assert.equal(e.harm(c,3,.5,kind),false);assert.ok(liftHeight(c,e.time)>2.7);assert.equal(e.harm(c,4,.5,'money'),true);e.time=c.floatUntil+.01;assert.equal(liftHeight(c,e.time),0);
});
test('ice keeps laying a fresh trail for the full effect while retaining the trap limit',()=>{
 const e=race(1),c=e.cars[0];e.applyGift(c,gift('icecream'));tick(e,5);const ice=e.traps.filter(t=>t.type==='ice');assert.ok(ice.length<=e.settings.playerTrapLimit);assert.ok(ice.some(t=>t.until>e.time+9.5));assert.ok(c.iceTrailUntil>e.time);
});
test('cap clears real obstacles, pushes cars, absorbs one projectile and flies off',()=>{
 const e=race(2),c=e.cars[0],v=e.cars[1];c.lane=v.lane=c.targetLane=v.targetLane=0;v.distance=v.s=205;e.spawnTrap(c,'ice',210,0,gift('icecream'));e.traps[0].owner=null;e.applyGift(c,gift('cap'));e.simulate(.05);assert.equal(e.traps[0].until,e.time);assert.ok(v.pushUntil>e.time);assert.equal(e.harm(c,4,.5,'money',v.id),false);assert.equal(c.capCharges,0);assert.equal(c.capFlewAt,e.time);assert.equal(e.harm(c,10,.2,'diamond',v.id),true);
});
test('truck physically flattens a rival and breaks a tree; victim and truck restore',()=>{
 const e=race(2),c=e.cars[0],v=e.cars[1];c.lane=v.lane=c.targetLane=v.targetLane=0;v.distance=v.s=205;e.traps.push({id:333,type:'tree',owner:null,s:211,lane:0,radius:4,activeAt:0,until:20,hits:[],factor:.5,slowDuration:2});e.applyGift(c,gift('glasses'));e.simulate(.05);assert.equal(c.level,2);assert.ok(v.flatUntil>e.time);assert.equal(e.traps[0].until,e.time);tick(e,3.2);assert.ok(v.flatUntil<=e.time);tick(e,9.1);assert.equal(c.level,0);
});
test('rolling donut goes backward, bounces visually and spins a rival on impact',()=>{
 const e=race(2),c=e.cars[0],v=e.cars[1];c.lane=v.lane=c.targetLane=v.targetLane=0;v.distance=v.s=180;e.applyGift(c,gift('doughnut'));const p=e.projectiles[0],start=p.s;tick(e,.05);assert.ok(p.s<start);tick(e,.3);assert.ok(v.spinUntil>e.time);assert.equal(v.slowFactor,.45);assert.ok(p.hitAt!=null);assert.ok(p.until>p.hitAt);
});
test('bike stays for 15s, retains identity and hops over an obstacle without taking its slow',()=>{
 const e=race(1),c=e.cars[0],id=c.id;e.traps.push({id:334,type:'tires',owner:null,s:219,lane:c.lane,radius:1.5,activeAt:0,until:20,hits:[],factor:.5,slowDuration:2});e.applyGift(c,gift('motorcycle'));tick(e,.2);assert.equal(c.id,id);assert.equal(c.level,1);assert.ok(c.hopUntil>e.time);assert.ok(liftHeight(c,e.time)>1);assert.equal(c.slowUntil,0);tick(e,15);assert.equal(c.level,0);
});
test('orbit moves models around a moving sender and releases onto their own route smoothly',()=>{
 const e=race(6),c=e.cars[0],v=e.cars[1];e.applyGift(c,gift('galaxy'));assert.equal(v.orbitOwner,c.id);const poses=new Map(e.cars.map(c=>[c.id,c]));let p=carSurface(v,e.time+1,poses),q=carSurface(v,e.time+1.5,poses);assert.ok(Math.hypot(p.x-q.x,p.z-q.z)>2);assert.ok(p.y>at(c.distance).y+2);v.distance+=20;const released=carSurface(v,v.orbitUntil+.91,poses),base=at(v.distance,v.lane);assert.ok(Math.hypot(released.x-base.x,released.y-base.y,released.z-base.z)<.03);assert.equal(v.id,e.cars[1].id);
});
test('gift mechanics migration retains IDs, catalog prices, settings, followers and ratings',()=>{
 const saved={gameplayVersion:3,mediaVersion:2,settings:{duration:600,quality:'high'},gifts:[{key:'motorcycle',id:'123',coins:2999,duration:12},{key:'rose',id:'555',boost:.9}],rating:[{id:'u',points:42}],players:[{id:'u',name:'U'}],followed:['u'],queue:['u']};const e=new Engine(saved);assert.equal(e.gifts.find(g=>g.key==='motorcycle').duration,15);assert.equal(e.gifts.find(g=>g.key==='motorcycle').id,'123');assert.equal(e.gifts.find(g=>g.key==='motorcycle').coins,2999);assert.equal(e.gifts.find(g=>g.key==='rose').boost,.22);assert.equal(e.settings.duration,600);assert.equal(e.rating.get('u').points,42);let next;e.onSave=s=>next=s;e.persist();assert.equal(next.giftMechanicsVersion,2);const reload=new Engine(next);assert.equal(reload.gifts.find(g=>g.key==='motorcycle').id,'123');assert.ok(reload.followed.has('u'));
});
test('all rendering effect fields survive compact snapshots and missing trailing fields clear cleanly',()=>{
 const e=race(3),c=e.cars[0];for(const key of ['heart','cap','galaxy','motorcycle','diamond'])e.applyGift(c,gift(key));const roster=new Map(),decoded=unpackState(packState(e.snapshot()),roster),p=decoded.cars.find(x=>x.id===c.id);assert.equal(p.floatUntil,c.floatUntil);assert.equal(p.bikeUntil,c.bikeUntil);assert.equal(p.weaponKey,'diamond');assert.equal(decoded.volleys[0].targets.length,2);assert.equal(p.boostKey,c.boosts[0].key);const cleared=e.makeCar(e.players.get(c.id),0);e.cars=[cleared];const reset=unpackState(packState(e.snapshot(),false),roster).cars[0];assert.equal(reset.weaponUntil,undefined);
});
test('broadcast ignores ordinary overtakes at 900th place and does not grow an old gift queue',()=>{
 const e=race(1000),d=new RaceDirector();let tracks=0,total=0;for(let i=0;i<900;i++){const s=e.snapshot();s.raceTime=20;s.notices=[{id:i+1,type:'overtake',player:s.cars[899].id,rival:s.cars[900].id}];const shot=d.update(s,i*100);if(shot.kind==='track')tracks++;assert.ok(s.cars.find(c=>c.id===shot.id).rank<=5);total++;}assert.ok(tracks/total>.9);assert.equal(d.pending.length,0);
});
test('fixed camera station is fixed while racers move and expensive gifts get one timely shot',()=>{const e=race(4),d=new RaceDirector(),s=e.snapshot();s.raceTime=20;s.notices=[];let shot=d.update(s,0);assert.equal(shot.kind,'track');const station=shot.station;for(let i=1;i<40;i++){s.cars.forEach(c=>c.distance+=1);shot=d.update(s,i*100);assert.deepEqual(shot.station,station);}s.notices=[{id:100,type:'gift',key:'diamond',player:s.cars[3].id,count:1}];let firstGift=null;for(let now=4000;now<=30000;now+=100){const current=d.update(s,now);if(current.kind==='gift'&&firstGift===null)firstGift=now;}assert.ok(firstGift>=20000&&firstGift<27000);assert.equal(d.shot.kind,'track');assert.equal(d.pending.length,0);});
