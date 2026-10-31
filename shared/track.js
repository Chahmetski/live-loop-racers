// One continuous, closed spline. Distances and checkpoints are shared by renderer and simulation.
export const ZONES = [
  {name:'ГОРОД',color:'#f8bd54',ground:0xa5c5c5},
  {name:'ЛЕС',color:'#7befa2',ground:0x7fb685},
  {name:'ПУСТЫНЯ',color:'#ffce7f',ground:0xe8b87b},
  {name:'ОКЕАН',color:'#71dfff',ground:0x318aab},
  {name:'ВУЛКАН',color:'#ff8374',ground:0x5c5263}
];
// Spread 1000 racers over a longer route and six lanes without stretching elevation.
export const MAP_SCALE=1.65;
const controls = [
 [0,6,350],[100,6,348],[175,6,325],[235,7,365],[315,8,315],[365,9,235],
 [405,12,170],[370,20,105],[420,16,20],[355,8,-65],[340,13,-145],[270,9,-220],
 [180,8,-300],[100,7,-330],[20,8,-280],[-70,10,-340],[-160,5,-330],[-240,-3,-265],
 [-290,-16,-190],[-350,-29,-120],[-320,-33,-30],[-365,-30,50],[-330,-22,130],[-310,-6,190],
 [-270,9,250],[-220,14,310],[-165,11,250],[-115,10,300],[-72,8,338],[-30,6,352]
];
for(const p of controls){p[0]*=MAP_SCALE;p[2]*=MAP_SCALE;}
function spline(t) {
 const u=((t%1)+1)%1*controls.length, i=Math.floor(u), f=u-i;
 const a=controls[(i-1+controls.length)%controls.length],b=controls[i],c=controls[(i+1)%controls.length],d=controls[(i+2)%controls.length];
 return b.map((v,k)=>.5*((2*v)+(-a[k]+c[k])*f+(2*a[k]-5*v+4*c[k]-d[k])*f*f+(-a[k]+3*v-3*c[k]+d[k])*f*f*f));
}
export const ROAD_WIDTH=36;
export const LANES=[-12.5,-7.5,-2.5,2.5,7.5,12.5];
export const SAMPLES=2400;
export const points=[];
let length=0, previous=spline(0);
for(let i=0;i<=SAMPLES;i++) {
 const p=i===SAMPLES?spline(0):spline(i/SAMPLES);
 if(i)length+=Math.hypot(...p.map((v,k)=>v-previous[k]));
 points.push({x:p[0],y:p[1],z:p[2],s:length,t:i/SAMPLES,zone:i/SAMPLES>=.945?0:Math.min(4,Math.floor(i/SAMPLES*5))});previous=p;
}
export const TRACK_LENGTH=length;
export const TRACK_BOUNDS=points.reduce((b,p)=>({minX:Math.min(b.minX,p.x),maxX:Math.max(b.maxX,p.x),minZ:Math.min(b.minZ,p.z),maxZ:Math.max(b.maxZ,p.z)}),{minX:Infinity,maxX:-Infinity,minZ:Infinity,maxZ:-Infinity});
export const CHECKPOINTS=20;
export const zoneStarts=[0,1,2,3,4].map(i=>points[i*SAMPLES/5].s);
export const mod=(v,n)=>((v%n)+n)%n;
export function at(distance,lane=0) {
 const s=mod(distance,length);let lo=0,hi=SAMPLES;
 while(hi-lo>1){const m=(lo+hi)>>1;if(points[m].s<=s)lo=m;else hi=m;}
 const a=points[lo],b=points[hi],f=(s-a.s)/(b.s-a.s||1);
 const t=a.t+(b.t-a.t)*f,p=spline(t),u=t*controls.length,i=Math.floor(u)%controls.length,v=u-Math.floor(u);
 const aa=controls[(i-1+controls.length)%controls.length],bb=controls[i],cc=controls[(i+1)%controls.length],dd=controls[(i+2)%controls.length];
 const derivative=bb.map((n,k)=>.5*((-aa[k]+cc[k])+2*(2*aa[k]-5*n+4*cc[k]-dd[k])*v+3*(-aa[k]+3*n-3*cc[k]+dd[k])*v*v));
 const [dx,dy,dz]=derivative,h=Math.hypot(dx,dz)||1;
 return {x:p[0]+dz/h*lane,y:p[1],z:p[2]-dx/h*lane,dx:dx/h,dz:dz/h,pitch:Math.atan2(dy,h),yaw:Math.atan2(dx,dz),zone:a.zone,t,s};
}
export function signedGap(a,b){const gap=a-b,half=length/2;if(gap>=-half&&gap<half)return gap;if(gap>=half&&gap<length+half)return gap-length;if(gap<-half&&gap>=-length-half)return gap+length;return mod(gap+half,length)-half;}
// Uniform arc-length lookup for bulk physics. The renderer retains the analytic spline.
const fastCount=4096,fastStep=TRACK_LENGTH/fastCount,fastSamples=Array.from({length:fastCount+1},(_,i)=>at(i*fastStep));
for(let i=0;i<fastCount;i++){const a=fastSamples[i],b=fastSamples[i+1];a.yawDelta=Math.atan2(Math.sin(b.yaw-a.yaw),Math.cos(b.yaw-a.yaw));}
export function fastAt(distance,lane=0){const s=mod(distance,TRACK_LENGTH),u=s/fastStep,index=Math.min(fastCount-1,Math.floor(u)),f=u-index,a=fastSamples[index],b=fastSamples[index+1],dx=a.dx+(b.dx-a.dx)*f,dz=a.dz+(b.dz-a.dz)*f;return {x:a.x+(b.x-a.x)*f+dz*lane,y:a.y+(b.y-a.y)*f,z:a.z+(b.z-a.z)*f-dx*lane,dx,dz,pitch:a.pitch+(b.pitch-a.pitch)*f,yaw:a.yaw+a.yawDelta*f,zone:a.zone,t:a.t+(b.t-a.t)*f,s};}
export const CITY_RETURN=points.find((p,i)=>i>SAMPLES*.8&&p.zone===0).s;
export function nearestRoad(x,z){let best=Infinity,index=0,nearest=points[0];for(let i=0;i<SAMPLES;i+=8){const p=points[i],d=(p.x-x)**2+(p.z-z)**2;if(d<best){best=d;index=i;nearest=p;}}for(let j=index-8;j<=index+8;j++){const p=points[mod(j,SAMPLES)],d=(p.x-x)**2+(p.z-z)**2;if(d<best){best=d;nearest=p;}}return {clearance:Math.sqrt(best)-ROAD_WIDTH/2,y:nearest.y,s:nearest.s};}
export function roadClearance(x,z){return nearestRoad(x,z).clearance;}
