import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {once} from 'node:events';import {WebSocket} from 'ws';
import {createServer} from '../server/index.js';
test('desktop backend serves both windows and routes simulator commands through the real handler',async()=>{const dir=fs.mkdtempSync(path.join(os.tmpdir(),'loop-server-'));const s=await createServer({manualClock:true,dataDir:dir});let ws;
 try{
  const page=await fetch(s.url);assert.equal(page.status,200);assert.ok((await page.text()).includes('admin-toggle'));
  const game=await fetch(s.url+'/game');assert.equal(game.status,200);assert.ok((await game.text()).includes('scene'));assert.ok(game.headers.get('content-security-policy').includes("frame-ancestors 'self'"));
  const panel=await fetch(s.url+'/panel');assert.ok((await panel.text()).includes('test-gifts'));
  assert.equal((await fetch(s.url+'/vendor/three.js')).status,200);
  ws=new WebSocket(s.url.replace('http','ws')+'/ws/panel',{origin:s.url});await once(ws,'open');
  function command(value){return new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(new Error('WS command timeout')),3000);const receive=raw=>{const message=JSON.parse(String(raw));if(message.type==='ack'&&message.action===value.action){clearTimeout(timeout);ws.off('message',receive);resolve(message);}if(message.type==='error'){clearTimeout(timeout);ws.off('message',receive);reject(new Error(message.message));}};ws.on('message',receive);ws.send(JSON.stringify(value));});}
  await command({action:'test',kind:'join',count:30});assert.equal(s.engine.queue.size,30);await command({action:'start'});s.engine.beginRace();
  await command({action:'test',kind:'follow',i:0});assert.equal(s.engine.cars[0].follow,true);
  await command({action:'test',kind:'like',i:0});assert.equal(s.engine.cars[0].gas,.8);
  for(const g of s.engine.gifts)await command({action:'test',kind:'gift',key:g.key,i:0});assert.equal(s.engine.cars[0].level,1);
  const count=s.engine.eventCounter;await command({action:'test',kind:'duplicate'});assert.equal(s.engine.eventCounter,count);
  await command({action:'test',kind:'burst'});assert.equal(s.engine.cars.length,30);assert.ok(s.engine.dedup.size<=20000);
  const phase=s.engine.phase;await command({action:'test',kind:'disconnect'});assert.equal(s.engine.phase,phase);assert.equal(s.engine.connection.status,'offline');
  await command({action:'settings',value:{duration:420,orientation:'landscape'}});assert.equal(s.engine.settings.orientation,'landscape');
  await command({action:'new-session'});assert.equal(s.engine.followed.size,30);
  s.engine.persist();assert.ok(fs.existsSync(path.join(dir,'save.json')));
 }finally{if(ws)ws.close();await s.close();fs.rmSync(dir,{recursive:true,force:true});}
});
