import fs from 'node:fs';
import path from 'node:path';
import {createServer} from '../server/index.js';
import {TRACK_LENGTH} from '../shared/track.js';
fs.mkdirSync('verification',{recursive:true});
const service=await createServer({port:3211,dataDir:path.resolve('verification/realtime-data')});
const e=service.engine;e.settings={...e.settings,duration:420,timeScale:1,testMode:false,bots:30,autoRounds:false,countdown:3,extraTime:100};e.start();
const started=Date.now();let overtimeAt=null,done=false;const zones=new Map();let maxCars=0;
console.log('REALTIME START '+new Date().toISOString()+' '+service.url+' • 30 cars • 420 seconds • ×1');
const timer=setInterval(()=>{
 for(const c of e.cars){const seen=zones.get(c.id)||new Set();const zone=(awaitZone(c.s));seen.add(zone);zones.set(c.id,seen);}maxCars=Math.max(maxCars,e.cars.length);
 if(e.phase==='overtime'&&!overtimeAt){overtimeAt=Date.now();console.log('OVERTIME after '+((overtimeAt-started)/1000).toFixed(1)+'s; laps='+e.cars.map(c=>c.laps).join(','));}
 if(e.phase==='results'&&!done){done=true;const report={startedAt:new Date(started).toISOString(),finishedAt:new Date().toISOString(),wallSeconds:(Date.now()-started)/1000,duration:e.settings.duration,timeScale:e.settings.timeScale,simulationRaceSeconds:e.raceTime,overtimeAfterWallSeconds:(overtimeAt-started)/1000,maxCars,allCarsVisitedFiveZones:[...zones.values()].every(z=>z.size===5),results:e.results.map(r=>({rank:r.rank,name:r.name,laps:r.laps,finished:r.finished,points:r.points,distance:r.distance})),heapMB:process.memoryUsage().heapUsed/1024/1024,trackLength:TRACK_LENGTH};fs.writeFileSync('verification/realtime-report.json',JSON.stringify(report,null,2));console.log('REALTIME COMPLETE '+JSON.stringify(report));clearInterval(timer);service.close().then(()=>process.exit());}
},1000);
import {at} from '../shared/track.js';function awaitZone(s){return at(s).zone;}
process.on('SIGINT',async()=>{clearInterval(timer);await service.close();process.exit();});
