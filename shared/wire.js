// Fixed rows avoid repeating 1000 profile objects and field names ten times a second.
export const CAR_FIELDS=['id','slot','rank','distance','speed','progressSpeed','lane','laneVelocity','laps','level','follow','gas','boost','shield','shieldUntil','bubbleUntil','bubbleCharges','finished','finishSceneTime','finishSpeed','finishTime','frozenUntil','narrowUntil','tetherUntil','tetherId','passBoostUntil','hit','effectAt','trail','iceTrailUntil','floatStarted','floatUntil','capUntil','capCharges','capFlewAt','truckUntil','bikeUntil','hopStarted','hopUntil','icyUntil','spinStarted','spinUntil','flatStarted','flatUntil','orbitOwner','orbitStarted','orbitUntil','orbitPhase','galaxyUntil','crystalUntil','weaponKey','weaponUntil','clearedAt'];
export function packState(state,includeRoster=true){
 const {cars,traps,...rest}=state;
 return {...rest,packed:true,roster:includeRoster?cars.map(c=>({id:c.id,name:c.name,avatar:c.avatar,color:c.color,model:c.model})):undefined,
  cars:cars.map(c=>{const row=[...CAR_FIELDS.map(k=>c[k]??null),c.boosts?.[0]?.key||null];while(row.length>1&&row.at(-1)===null)row.pop();return row;}),traps:traps.map(({hits,...t})=>t)};
}
export function unpackState(state,roster=new Map()){
 if(!state.packed)return state;
 if(state.roster){roster.clear();for(const p of state.roster)roster.set(p.id,p);}
 return {...state,cars:state.cars.map(row=>{const c={...roster.get(row[0])};for(let i=0;i<CAR_FIELDS.length&&i<row.length;i++)if(row[i]!==null)c[CAR_FIELDS[i]]=row[i];c.boostKey=row[CAR_FIELDS.length];return c;})};
}
