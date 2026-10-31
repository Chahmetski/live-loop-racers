import test from 'node:test';
import assert from 'node:assert/strict';
import {EventEmitter} from 'node:events';
import {create,toBinary} from '@bufbuild/protobuf';
import {Engine} from '../server/engine.js';
import {TikTokAdapter} from '../server/tiktok.js';
import {decodeEvent,METHOD} from '../server/vendor/ttl-live/dist/events.js';
import {WebcastMemberMessageSchema,WebcastGiftMessageSchema} from '../server/vendor/ttl-live/dist/gen/webcast/model/message/messages_pb.js';
function race(){const e=new Engine();e.settings.autoRounds=false;e.handle({type:'follow',user:{id:'leader'}});e.start();e.beginRace();for(let i=0;i<30;i++)e.update(1/30);return e;}
class Source extends EventEmitter{constructor(){super();this.roomId='room';this.discovery={giftList:async()=>new Map()};}async connect(){return {roomId:'room'};}async disconnect(){}}
test('new follower enters at the moving tail with valid checkpoints and no duplicate car',()=>{
 const e=race(),tail=e.cars[0];tail.distance=tail.s=620;tail.speed=35;e.handle({type:'follow',user:{id:'late'}});const c=e.cars.find(c=>c.id==='late');assert.equal(c.distance,612);assert.equal(c.speed,35);assert.ok(c.nextGate>c.distance);assert.ok(c.nextGate-c.distance<=4240/20);assert.ok(!e.queue.has('late'));e.handle({type:'follow',user:{id:'late'}});assert.equal(e.cars.length,2);e.update(1/30);assert.ok(c.distance>612);
});
test('gift from a new non-follower joins and activates on receipt, including streak updates',()=>{
 const e=race();for(const count of [1,2,5])e.handle({type:'gift',user:{id:'donor'},key:'rose',count,streak:true,seriesId:'combo'});const c=e.cars.find(c=>c.id==='donor');assert.ok(c);assert.equal(c.boosts[0].remaining,6);assert.equal(e.players.get('donor').pending.length,0);e.handle({type:'gift',user:{id:'donor'},key:'rose',count:5,streak:true,seriesId:'combo',repeatEnd:true});assert.equal(c.boosts[0].remaining,6);
});
test('protobuf member preserves follower relationship and rejoining saved followers works',async()=>{
 const e=race(),a=new TikTokAdapter(e,{Connection:Source});await a.connect('fixture');
 const event=decodeEvent(METHOD.member,toBinary(WebcastMemberMessageSchema,create(WebcastMemberMessageSchema,{user:{id:123n,nickname:'Existing',followInfo:{followStatus:1n}},action:1})));
 a.connection.emit('member',event);assert.ok(e.followed.has('123'));assert.ok(e.cars.some(c=>c.id==='123'));
 a.connection.emit('member',{user:{userId:'stranger'},action:1});assert.ok(!e.cars.some(c=>c.id==='stranger'));
 e.leave('123');assert.ok(e.followed.has('123'));a.connection.emit('member',{user:{userId:'123'},action:1});assert.ok(e.cars.some(c=>c.id==='123'));await a.disconnect();
});
test('protobuf gift streaks with a group activate immediately and do not double-count the final',async()=>{
 const e=race(),a=new TikTokAdapter(e,{Connection:Source});await a.connect('fixture');
 for(const [count,end] of [[1,0],[3,0],[3,1]])a.connection.emit('gift',decodeEvent(METHOD.gift,toBinary(WebcastGiftMessageSchema,create(WebcastGiftMessageSchema,{user:{id:456n},giftId:1n,gift:{name:'Rose',diamondCount:1,type:1},repeatCount:count,groupId:100n,repeatEnd:end}))));
 assert.ok(Math.abs(e.cars.find(c=>c.id==='456').boosts[0].remaining-3.6)<1e-8);await a.disconnect();
});
test('explicit leave removes participation and effects, keeps follower and rating, and silent viewers stay',async()=>{
 const e=race(),a=new TikTokAdapter(e,{Connection:Source});await a.connect('fixture');e.rating.set('leader',{id:'leader',points:10});e.handle({type:'gift',user:{id:'leader'},key:'icecream'});e.update(1/30);
 a.connection.emit('roomUser',{viewers:0,topViewers:[]});assert.equal(e.cars.length,1);
 a.connection.emit('leave',{user:{userId:'leader'}});assert.equal(e.cars.length,0);assert.equal(e.queue.size,0);assert.ok(e.followed.has('leader'));assert.equal(e.rating.get('leader').points,10);assert.equal(e.traps.length,0);assert.equal(e.phase,'enrollment');e.start();assert.equal(e.cars.length,0);await a.disconnect();
});
test('donor eligibility survives save and lobby preparation',()=>{
 let saved;const e=new Engine(null,{onSave:data=>saved=data});e.handle({type:'gift',user:{id:'donor'},key:'cap'});e.persist();const restored=new Engine(saved);restored.start();restored.beginRace();assert.equal(restored.cars[0].id,'donor');assert.equal(restored.cars[0].capCharges,1);
});
test('anonymous combo increments apply immediately without a group id',()=>{
 const e=race();for(const count of [1,2,4])e.handle({type:'gift',user:{id:'donor'},key:'rose',count,streak:true});const c=e.cars.find(c=>c.id==='donor');assert.equal(c.boosts[0].remaining,4.8);e.handle({type:'gift',user:{id:'donor'},key:'rose',count:4,streak:true,repeatEnd:true});assert.equal(c.boosts[0].remaining,4.8);
});
