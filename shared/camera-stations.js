import {TRACK_LENGTH,at,mod,signedGap,zoneStarts,CITY_RETURN} from './track.js';
export const CAMERA_STATIONS=Array.from({length:48},(_,index)=>{
 const s=index*TRACK_LENGTH/48,path=at(s),tunnel=path.t>.565&&path.t<.809;
 return {index,s,zone:path.zone,lane:tunnel?10:path.zone===0?28+(index%2)*6:(path.zone===4?-1:1)*(45+(index%3)*8),height:tunnel?10:path.zone===0?58:32+(index%3)*6,behind:tunnel?75:95,lookAhead:tunnel?50:70};
});
export function stationFor(distance){return CAMERA_STATIONS.reduce((best,s)=>Math.abs(signedGap(s.s,distance+65))<Math.abs(signedGap(best.s,distance+65))?s:best,CAMERA_STATIONS[0]);}
export function zoneStation(zone){const end=zone===4?CITY_RETURN:zoneStarts[zone+1],target=zoneStarts[zone]+Math.min(160,(end-zoneStarts[zone])*.32);return stationFor(target-65);}
