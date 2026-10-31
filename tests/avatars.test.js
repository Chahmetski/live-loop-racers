import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import sharp from 'sharp';
import {Avatars} from '../server/avatars.js';
test('asynchronous avatar resize, shared cache, local avatars and rejected remote hosts',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'loop-avatar-')),original=globalThis.fetch;let requests=0;
 const image=await sharp({create:{width:640,height:480,channels:3,background:'#f0bb80'}}).png().toBuffer();
 globalThis.fetch=async()=>{requests++;await new Promise(r=>setTimeout(r,5));return new Response(image,{headers:{'Content-Type':'image/png'}});};
 try{const ready=[],a=new Avatars(dir,p=>ready.push(p.id)),url='https://p16.tiktokcdn.com/fixture.png';const p={id:'1',avatarSource:url},q={id:'2',avatarSource:url};a.request(p,url);a.request(q,url);
  while(a.active||a.queue.length)await new Promise(r=>setTimeout(r,10));assert.equal(requests,1);assert.equal(p.avatar,q.avatar);assert.equal(ready.length,2);
  const meta=await sharp(path.join(a.dir,path.basename(p.avatar))).metadata();assert.equal(meta.width,256);assert.equal(meta.height,256);
  const r={id:'3',avatarSource:url};a.request(r,url);assert.equal(r.avatar,p.avatar);assert.equal(requests,1);
  const blocked={};a.request(blocked,'http://127.0.0.1/private');a.request(blocked,'https://other.example/a.png');assert.equal(requests,1);assert.equal(blocked.avatar,undefined);
  a.request(blocked,'/assets/avatar-1.svg');assert.equal(blocked.avatar,'/assets/avatar-1.svg');
 }finally{globalThis.fetch=original;fs.rmSync(dir,{recursive:true,force:true});}
});
