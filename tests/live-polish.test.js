import test from 'node:test';
import assert from 'node:assert/strict';
import {EventEmitter} from 'node:events';
import {Engine} from '../server/engine.js';
import {TikTokAdapter} from '../server/tiktok.js';
import {RaceDirector} from '../shared/presentation.js';
import {gridProgress,gridFrame,cinematicFrame} from '../shared/camera-motion.js';
class Source extends EventEmitter{constructor(){super();this.roomId='fixture';this.discovery={giftList:async()=>new Map()};}async connect(){return {roomId:this.roomId};}async disconnect(){}}
function race(){const e=new Engine(null,{seed:42});e.settings={...e.settings,autoRounds:false,mapEvents:false};e.handle({type:'follow',user:{id:'u'}});e.start();e.beginRace();return e;}
function tick(e,seconds){for(let i=0;i<seconds*30;i++)e.update(1/30);}
test('one real like increases actual race speed, expires, and repeated batches cap at eight seconds',()=>{
 const liked=race(),control=race();liked.handle({type:'like',user:{id:'u'},count:1,eventId:'tap'});
 assert.equal(liked.cars[0].boosts[0].power,.12);assert.equal(liked.cars[0].boosts[0].remaining,2.5);
 liked.handle({type:'like',user:{id:'u'},count:1,eventId:'tap'});assert.equal(liked.cars[0].boosts[0].remaining,2.5);
 tick(liked,2);tick(control,2);assert.ok(liked.cars[0].speed>control.cars[0].speed*1.06);
 tick(liked,1);assert.ok(!liked.cars[0].boosts.some(b=>b.key==='like'&&b.remaining>0));
 for(let i=0;i<100;i++)liked.handle({type:'like',user:{id:'u'},count:100});assert.equal(liked.cars[0].boosts.find(b=>b.key==='like').remaining,8);
});
test('anonymous or zero likes give no boost; prestart likes charge the launch once; exit clears charge',()=>{
 const e=new Engine();e.settings.autoRounds=false;e.handle({type:'follow',user:{id:'u'}});
 e.handle({type:'like',count:100});e.handle({type:'like',user:{id:'u'},count:0});assert.equal(e.players.get('u').likeCharge,undefined);
 e.handle({type:'like',user:{id:'u'},count:1});e.start();e.beginRace();assert.equal(e.cars[0].boosts.find(b=>b.key==='like').remaining,2.5);assert.equal(e.players.get('u').likeCharge,0);
 e.leave('u');e.handle({type:'join',user:{id:'u'}});assert.equal(e.cars[0].boosts.length,0);
});
test('top gifter rankings cannot enroll or resurrect departed racers and viewer counts do not guess identities',async()=>{
 const e=race(),a=new TikTokAdapter(e,{Connection:Source});await a.connect('fixture');const c=a.connection;
 c.emit('leave',{userId:'u'});assert.equal(e.cars.length,0);
 c.emit('roomUser',{viewers:20,topViewers:[{user:{userId:'u'}},{user:{userId:'other',followStatus:1}}]});
 assert.equal(e.cars.length,0);assert.equal(e.connection.viewers,20);assert.equal(e.players.get('u').present,false);
 c.emit('member',{user:{userId:'u'},action:99});assert.equal(e.cars.length,0);
 c.emit('member',{user:{userId:'u'},action:1});assert.equal(e.cars.length,1);
 c.emit('roomUser',{viewers:0,topViewers:[]});tick(e,190);assert.equal(e.cars.length,1);
 c.emit('member',{user:{userId:'u'},action:'LEFT'});assert.equal(e.cars.length,0);await a.disconnect();
 c.emit('leave',{userId:'u'});assert.ok(e.followed.has('u'));
});
test('start flight spans countdown and launch, exits into broadcast, repeats next round, respects manual camera',()=>{
 const e=race(),d=new RaceDirector();e.phase='countdown';e.phaseTime=0;let s=e.snapshot();assert.equal(d.update(s,0).kind,'grid');
 s.phaseTime=s.settings.countdown;const end=gridProgress(s);s.phase='racing';s.raceTime=0;assert.equal(gridProgress(s),end);
 s.raceTime=6.9;assert.equal(d.update(s,6900).kind,'grid');s.raceTime=7;assert.equal(d.update(s,7000).kind,'track');
 s.round++;s.phase='countdown';assert.equal(d.update(s,10000).kind,'grid');s.camera={mode:'selected',id:'u'};assert.equal(d.update(s,10100).kind,'chase');
});
test('large grid flight passes every row and cinematic approach stays distant with a continuous zoom',()=>{
 const cars=Array.from({length:1000},(_,i)=>({distance:-7-Math.floor(i/6)*7}));
 assert.equal(gridFrame(cars,0).s,Math.min(...cars.map(c=>c.distance)));assert.equal(gridFrame(cars,1).s,-7);
 const start=cinematicFrame('gift','diamond',0),near=cinematicFrame('gift','diamond',.6),end=cinematicFrame('gift','diamond',1);
 assert.ok(start.lead>near.lead*2);assert.ok(near.lead>=55);assert.ok(end.lead>near.lead);assert.ok(start.fov>near.fov);
 let prev=start;for(let i=1;i<=600;i++){const next=cinematicFrame('gift','diamond',i/600);assert.ok(Math.abs(next.lead-prev.lead)<1);assert.ok(Math.abs(next.side-prev.side)<.2);prev=next;}
});
test('intro flight uses the smooth rendering clock across network packet boundaries and holds on pause',()=>{
 const a={phase:'countdown',phaseTime:2,time:10,settings:{countdown:3}},b={...a,phaseTime:2.1,time:10.1};
 assert.ok(Math.abs(gridProgress(a,10.05)-gridProgress(b,10.05))<1e-12);
 assert.ok(gridProgress(a,10.06)>gridProgress(a,10.05));
 assert.equal(gridProgress({...a,paused:true},12),gridProgress({...a,paused:true},10));
});
