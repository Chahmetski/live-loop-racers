import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
function allowed(url){try{const u=new URL(url);return u.protocol==='https:'&&['tiktokcdn.com','tiktokcdn-us.com','tiktokcdn-eu.com','byteimg.com','ibytedtos.com','muscdn.com'].some(h=>u.hostname===h||u.hostname.endsWith('.'+h));}catch{return false;}}
export class Avatars {
 constructor(dir,onReady){this.dir=path.join(dir,'avatars');fs.mkdirSync(this.dir,{recursive:true});this.onReady=onReady;this.active=0;this.queue=[];this.pending=new Set();this.waiters=new Map();this.prune();}
 request(player,url){
  if(/^\/assets\/avatar-\d+\.svg$/.test(url)){player.avatar=url;return;}
  if(!allowed(url))return;
  const key=crypto.createHash('sha256').update(url).digest('hex').slice(0,32),file=path.join(this.dir,key+'.png');
  if(fs.existsSync(file)){player.avatar='/avatars/'+key+'.png';return;}
  if(!this.waiters.has(key))this.waiters.set(key,new Set());this.waiters.get(key).add(player);
  if(this.pending.has(key))return;
  if(this.queue.length>=100){this.waiters.delete(key);return;}
  this.pending.add(key);this.queue.push({player,url,key,file});this.pump();
 }
 pump(){while(this.active<3&&this.queue.length){const job=this.queue.shift();this.active++;
  this.fetch(job).catch(()=>{}).finally(()=>{this.active--;this.pending.delete(job.key);this.waiters.delete(job.key);this.pump();});}}
 async fetch(job){let url=job.url,response;
  for(let i=0;i<4;i++){if(!allowed(url))return;response=await fetch(url,{signal:AbortSignal.timeout(8000),redirect:'manual'});if(response.status>=300&&response.status<400){url=new URL(response.headers.get('location'),url).href;continue;}break;}
  if(!response.ok||!(response.headers.get('content-type')||'').startsWith('image/'))return;
  if(Number(response.headers.get('content-length'))>2*1024*1024)return;
  const chunks=[];let bytes=0;for await(const c of response.body){bytes+=c.length;if(bytes>2*1024*1024){await response.body.cancel().catch(()=>{});return;}chunks.push(c);}
  const image=await sharp(Buffer.concat(chunks),{limitInputPixels:16000000}).rotate().resize(256,256,{fit:'cover'}).png().toBuffer();
  fs.writeFileSync(job.file,image);for(const player of this.waiters.get(job.key)||[job.player])if(player.avatarSource===job.url){player.avatar='/avatars/'+job.key+'.png';this.onReady(player);}this.prune();
 }
 prune(){const files=fs.readdirSync(this.dir).filter(f=>f.endsWith('.png')).map(f=>({file:path.join(this.dir,f),...fs.statSync(path.join(this.dir,f))})).sort((a,b)=>b.mtimeMs-a.mtimeMs);let size=0;
  for(let i=0;i<files.length;i++){size+=files[i].size;if(i>=1500||size>120*1024*1024)fs.unlinkSync(files[i].file);}}
}
