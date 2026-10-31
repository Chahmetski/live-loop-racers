import test from 'node:test';
import assert from 'node:assert/strict';
import {Engine} from '../server/engine.js';
import {Simulator} from '../server/simulator.js';
import {createServer} from '../server/index.js';
import fs from 'node:fs';import os from 'node:os';import path from 'node:path';

test('remove all bots and persistent test participants while preserving real racers and saves',()=>{
 let saved;const e=new Engine(null,{onSave:data=>{saved=data;}}),sim=new Simulator(e);sim.join(30);
 e.handle({type:'follow',user:{id:'123456789',name:'Настоящий зритель'}});e.settings.bots=40;e.start();e.beginRace();
 const real=e.cars.find(c=>c.id==='123456789');real.distance=500;real.s=500;real.speed=30;
 e.settings.testMode=true;e.settings.timeScale=10;
 e.rating.set(real.id,{id:real.id,points:25});e.rating.set('test:0',{id:'test:0',points:99});
 real.orbitOwner='bot:0';real.orbitUntil=e.time+5;e.camera={mode:'selected',id:'test:0'};
 e.applyGift(e.cars.find(c=>c.id==='test:0'),e.gifts.find(g=>g.key==='money'));
 e.removeSimulatedParticipants();
 assert.deepEqual(e.cars.map(c=>c.id),[real.id]);assert.equal(real.distance,500);assert.equal(e.phase,'racing');assert.equal(real.orbitOwner,null);
 assert.equal(e.settings.bots,0);assert.equal(e.settings.testMode,false);assert.equal(e.settings.timeScale,1);assert.equal(e.camera.mode,'auto');assert.equal(e.volleys.length,0);
 assert.deepEqual([...e.followed],[real.id]);assert.equal(e.rating.get(real.id).points,25);assert.equal(e.rating.has('test:0'),false);
 const restored=new Engine(saved);assert.deepEqual([...restored.players.keys()],[real.id]);assert.deepEqual([...restored.queue],[real.id]);
 restored.start();restored.beginRace();assert.deepEqual(restored.cars.map(c=>c.id),[real.id]);
});
test('clearing a paused simulated-only race returns to an empty enrollment and simulator stays disabled',()=>{
 const e=new Engine(),sim=new Simulator(e);sim.join(1000);e.start();e.beginRace();e.paused=true;e.settings.testMode=true;
 e.removeSimulatedParticipants();for(let i=0;i<100;i++){e.update(.1);sim.update(.1);}
 assert.equal(e.phase,'enrollment');assert.equal(e.paused,false);assert.equal(e.cars.length,0);assert.equal(e.players.size,0);assert.equal(e.queue.size,0);assert.equal(e.followed.size,0);
});
test('server removes simulated participants immediately with the button or bots set to zero',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'loop-clear-'));const s=await createServer({manualClock:true,dataDir:dir});
 try{for(const action of [{action:'clear-simulated'},{action:'settings',value:{bots:0}}]){
  s.sim.join(30);s.engine.settings.bots=40;s.engine.start();s.engine.beginRace();assert.equal(s.engine.cars.length,40);
  await s.command(action);assert.equal(s.engine.cars.length,0);assert.equal(s.engine.settings.bots,0);assert.equal(s.engine.settings.testMode,false);
  assert.equal(new Engine(JSON.parse(fs.readFileSync(path.join(dir,'save.json'),'utf8'))).players.size,0);
 }}finally{await s.close();fs.rmSync(dir,{recursive:true,force:true});}
});
