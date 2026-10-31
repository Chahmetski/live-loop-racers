import fs from 'node:fs';
import {Engine} from '../server/engine.js';
import {Simulator} from '../server/simulator.js';
import {GIFTS} from '../shared/config.js';
import {ROAD_WIDTH} from '../shared/track.js';
const e=new Engine(null,{seed:81234});e.settings={...e.settings,bots:30,enrollment:1,countdown:1,results:1,duration:420,extraTime:100,testMode:true};const sim=new Simulator(e);sim.join(30);
let maxHeap=0,maxTraps=0,completed=0,lastRound=0,realStart=performance.now();
const seconds=Number(process.argv[2])||4*3600;
for(let i=0;i<seconds*30;i++){
 e.update(1/30);sim.update(1/30);
 if(i%150===0){const c=e.cars[Math.floor(e.random()*e.cars.length)];if(c){const index=Number(c.id.split(':')[1])||0;sim.gift(GIFTS[Math.floor(e.random()*10)].key,index);}}
 if(e.phase==='results'&&e.round!==lastRound){lastRound=e.round;completed++;}
 if(i%9000===0){global.gc?.();maxHeap=Math.max(maxHeap,process.memoryUsage().heapUsed/1024/1024);maxTraps=Math.max(maxTraps,e.traps.length);}
 if(!e.cars.every(c=>Number.isFinite(c.distance)&&Number.isFinite(c.speed)&&Math.abs(c.lane)<=ROAD_WIDTH/2-2+.001))throw new Error('Invalid vehicle state');
 if(e.traps.length>e.settings.trapLimit||e.dedup.size>20000)throw new Error('Unbounded event memory');
}
global.gc?.();maxHeap=Math.max(maxHeap,process.memoryUsage().heapUsed/1024/1024);
const report={gcEnabled:!!global.gc,simulatedSeconds:seconds,simulatedHours:seconds/3600,completedRounds:completed,wallSeconds:(performance.now()-realStart)/1000,maxHeapMB:maxHeap,finalHeapMB:process.memoryUsage().heapUsed/1024/1024,maxTraps,remainingTraps:e.traps.length,dedupEntries:e.dedup.size,seriesEntries:e.series.size,profiles:e.players.size,cars:e.cars.length};
fs.mkdirSync('verification',{recursive:true});fs.writeFileSync('verification/soak-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
