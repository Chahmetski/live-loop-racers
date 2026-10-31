const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const smooth=u=>{u=clamp(u,0,1);return u*u*(3-2*u);};

// The countdown and launch share a single continuous flight from the back row.
export function gridProgress(state,renderTime=state.time){
 const countdown=state.settings.countdown||3;
 const offset=!state.paused&&Number.isFinite(renderTime)&&Number.isFinite(state.time)?renderTime-state.time:0;
 if(state.phase==='enrollment')return (1-Math.cos(Math.max(0,(state.phaseTime||0)+offset)*Math.PI/16))/2;
 return smooth((state.phase==='countdown'?Math.max(0,state.phaseTime+offset):countdown+Math.max(0,state.raceTime+offset))/(countdown+7));
}
export function gridFrame(cars,progress,aspect=1){
 const distances=cars.map(c=>c.distance),front=Math.max(...distances),back=Math.min(...distances),span=front-back;
 // Small fields fit together; large fields get a close pass along every row.
 const sweep=span>65,center=sweep?back+span*progress:(front+back)/2;
 const portrait=aspect<.8?1.28:1;
 return {s:center,lead:(sweep?38:Math.max(32,span*.7+22))*portrait,side:12-24*progress,
  height:(sweep?25+Math.sin(progress*Math.PI)*7:Math.max(42,span*.65+16))*portrait,head:1.8};
}
export function cinematicFrame(kind,key,progress){
 const approach=smooth(progress/.58),retreat=smooth((progress-.78)/.22),distance=125-70*approach+28*retreat;
 const behind=kind==='gift'&&['heart','money','doughnut'].includes(key);
 return {lead:(behind?-1:1)*distance,side:24-38*smooth(progress),height:35-16*approach+10*retreat,head:2,
  fov:62-10*approach+5*retreat};
}
