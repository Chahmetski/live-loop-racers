import test from 'node:test';
import assert from 'node:assert/strict';
import {Engine} from '../server/engine.js';
import {Simulator} from '../server/simulator.js';
import {GiftFeed} from '../shared/gift-feed.js';
import {packState,unpackState} from '../shared/wire.js';
import {MAP_EVENTS} from '../shared/map-events.js';
import {TRACK_LENGTH,LANES,ROAD_WIDTH,fastAt,at} from '../shared/track.js';
import {AudioSystem,soundForNotice} from '../public/audio.js';

function race(n=6){const e=new Engine(null,{seed:541});e.settings={...e.settings,bots:n,autoRounds:false};e.start();e.beginRace();e.notices=[];for(const c of e.cars){c.distance=c.s=500+c.slot*8;c.speed=30;}return e;}
const tick=(e,seconds)=>{for(let i=0;i<seconds*30;i++)e.update(1/30);};
const notice=(id,player,count=1,key='rose')=>({id,player,key,count,type:'gift',created:1,name:player});

test('three donors stay visible; series increments accumulate and fourth waits fairly',()=>{
 const feed=new GiftFeed(),state={round:1,time:1,cars:[],notices:[notice(1,'a'),notice(2,'b'),notice(3,'c'),notice(4,'d')]};
 let cards=feed.update(state,0);assert.deepEqual(cards.map(c=>c.id),['a','b','c']);
 state.notices.push(notice(5,'a',4));cards=feed.update(state,1000);assert.equal(cards[0].count,5);assert.equal(cards[0].gifts.get('rose'),5);
 cards=feed.update(state,7001);assert.ok(cards.some(c=>c.id==='d'));assert.ok(cards.length<=3);
 state.round=2;assert.equal(feed.update(state,8000).length,0,'old gifts do not replay next round');
});
test('cumulative rose streak counts once in card and gameplay',()=>{
 const e=race(1),sim=new Simulator(e);sim.send('follow',0);sim.roses(0);const feed=new GiftFeed(),cards=feed.update(e.snapshot(),0);
 assert.equal(cards.length,1);assert.equal(cards[0].count,10);assert.equal(cards[0].gifts.get('rose'),10);
});
test('joining 1000 viewers and automatic simulator never create gifts or rose audio',()=>{
 const e=new Engine(),sim=new Simulator(e);sim.join(1000);e.settings.testMode=true;
 for(let i=0;i<120;i++)sim.update(.5);
 assert.equal(e.cars.length,1000);assert.equal(e.notices.filter(n=>n.type==='gift').length,0);assert.ok(e.cars.every(c=>!c.roseCharges));
 assert.equal(soundForNotice({type:'like'}),null);assert.equal(soundForNotice({type:'attack'}),null);assert.equal(soundForNotice({type:'join'}),null);
});
test('queued gifts apply silently at start and delayed projectile placement, without new donation notices',()=>{const e=new Engine(),user={id:'saved'};e.settings.autoRounds=false;e.handle({type:'follow',user});e.handle({type:'gift',user,key:'rose',count:8});e.handle({type:'gift',user,key:'doughnut'});const last=e.nextNotice;e.start();e.beginRace();tick(e,5);assert.ok(e.cars[0].boosts.find(b=>b.key==='rose').remaining>4.5);assert.ok(e.projectiles.some(t=>t.type==='doughnut'));assert.equal(e.notices.filter(n=>n.id>=last&&n.type==='gift').length,0);});

test('audio uses unique soft gift cues, skips historical packets and never repeats a notice',()=>{
 const sounds=new Set(Object.keys(MAP_EVENTS));for(const key of ['rose','icecream','heart','doughnut','cap','glasses','money','galaxy','motorcycle','diamond'])sounds.add(soundForNotice({type:'gift',key}));assert.equal(sounds.size,15);
 const a=new AudioSystem(),played=[],gain={gain:{setTargetAtTime(){}}};a.ready=true;a.context={currentTime:10};a.musicGain=gain;a.fxGain=gain;a.switchMusic=()=>{};a.play=(...args)=>played.push(args);
 const state={time:10,phase:'racing',notices:[{...notice(1,'a'),created:9.5}]};a.update({music:0,sound:.3},null,state);assert.equal(played.length,0);
 state.notices.push({...notice(2,'a'),created:10});a.update({music:0,sound:.3},{hit:1},state);a.context.currentTime=12;a.update({music:0,sound:.3},{hit:1},state);assert.equal(played.length,1);assert.equal(played[0][0],'gift-rose');
 assert.equal(soundForNotice({...notice(3,'a'),restored:true}),null);
});
test('wire round trip retains rendering, ranking, shield and donor identity with a small packet',()=>{
 const e=race(1000),state=e.snapshot(),roster=new Map(),full=packState(state),decoded=unpackState(full,roster),slim=packState(state,false);
 assert.equal(decoded.cars.length,1000);assert.equal(decoded.cars[25].name,state.cars[25].name);assert.equal(decoded.cars[25].distance,state.cars[25].distance);assert.equal(decoded.cars[25].lane,state.cars[25].lane);
 assert.equal(unpackState(slim,roster).cars[0].model,state.cars[0].model);assert.ok(JSON.stringify(slim).length<JSON.stringify(state).length*.3);
});
test('larger loop and six lanes retain smooth authoritative and rendered positions',()=>{
 assert.ok(TRACK_LENGTH>4200);assert.equal(ROAD_WIDTH,36);assert.equal(LANES.length,6);
 for(let s=0;s<TRACK_LENGTH;s+=7){const a=at(s,12.5),b=fastAt(s,12.5);assert.ok(Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z)<.03);}
});
test('environment hazards have warnings, persist for multiple racers and balloons avoid them',()=>{
 const e=race(3),event=e.triggerMapEvent('rain');assert.ok(event.activeAt>e.time);assert.ok(e.traps.some(t=>t.type==='puddle'));const trap=e.traps[0];e.time=trap.activeAt+.1;
 for(const c of e.cars){c.distance=c.s=trap.s-.5;c.lane=c.targetLane=trap.lane;c.speed=30;c.decision=5;}
 const protectedCar=e.cars[2];protectedCar.floatUntil=e.time+10;e.simulate(.05);
 assert.ok(e.cars[0].slowUntil>e.time);assert.ok(e.cars[1].slowUntil>e.time);assert.equal(protectedCar.slowUntil,0);assert.equal(trap.until,event.until);assert.equal(e.notices.filter(n=>n.type==='attack').length,0);
});
test('fallen tree encourages an open lane; energy corridor rewards its current lane',()=>{
 const e=race(1);e.mapEvents=[];const tree=e.triggerMapEvent('tree'),trap=e.traps[0],c=e.cars[0];e.time=tree.activeAt;c.distance=c.s=trap.s-50;c.lane=c.targetLane=trap.lane;c.decision=0;e.simulate(.05);assert.ok(Math.abs(c.targetLane-trap.lane)>trap.radius);
 e.mapEvents=[];e.traps=[];const charge=e.triggerMapEvent('charge');e.time=charge.activeAt+.1;c.distance=c.s=charge.s+50;c.lane=c.targetLane=LANES[charge.laneIndex];c.decision=5;e.simulate(.05);assert.equal(c.gas> .9,true);assert.ok(c.boosts.some(b=>b.key==='charge'));assert.equal(c.roseCharges,undefined);
});
test('events stay bounded, pause with race and clear on results; 1000 cars stay on road',()=>{
 const e=race(1000);for(const kind of ['tree','oil','tires'])e.triggerMapEvent(kind);assert.equal(e.mapEvents.length,2);assert.equal(e.triggerMapEvent('nope'),false);const original=e.time;e.paused=true;tick(e,1);assert.equal(e.time,original);e.paused=false;tick(e,45);assert.ok(e.mapEvents.length<=2);assert.ok(e.traps.length<=e.settings.trapLimit);assert.ok(e.cars.every(c=>Number.isFinite(c.distance)&&Math.abs(c.lane)<=ROAD_WIDTH/2-2));e.finishRound();assert.equal(e.mapEvents.length,0);assert.equal(e.traps.length,0);
});
