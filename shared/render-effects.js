import {fastAt} from './track.js';
export function liftHeight(c,t){
 if(c.floatUntil>t)return 2.8*Math.min(1,Math.max(0,(t-c.floatStarted)*2.5))*Math.min(1,(c.floatUntil-t)*2.5);
 if(c.hopUntil>t&&t>=c.hopStarted)return Math.sin(Math.PI*(t-c.hopStarted)/(c.hopUntil-c.hopStarted))*2.7;
 return 0;
}
export function carSurface(c,t,poses){
 const surface=fastAt(c.distance,c.lane);surface.y+=liftHeight(c,t);
 const owner=poses.get(c.orbitOwner);
 if(owner&&t>=c.orbitStarted&&t<c.orbitUntil+.9){
  const center=fastAt(owner.distance,owner.lane),angle=(t-c.orbitStarted)*2.3+(c.orbitPhase||0),radius=6.8+(c.slot%3)*.9,blend=Math.min(1,(t-c.orbitStarted)/.45)*Math.min(1,(c.orbitUntil+.9-t)/.9),forward=Math.sin(angle)*radius,side=Math.cos(angle)*radius;
  const x=center.x+center.dx*forward+center.dz*side,z=center.z+center.dz*forward-center.dx*side,y=center.y+liftHeight(owner,t)+2.7+Math.sin(angle*2)*.35;
  surface.x+=(x-surface.x)*blend;surface.y+=(y-surface.y)*blend;surface.z+=(z-surface.z)*blend;surface.yaw+=Math.atan2(Math.sin(center.yaw-angle-surface.yaw),Math.cos(center.yaw-angle-surface.yaw))*blend;surface.pitch*=1-blend;
 }
 return surface;
}
