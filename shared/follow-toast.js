// Wall-clock lifetime stays two seconds even when the race is paused or accelerated.
export class FollowToast {
 constructor(){this.seen=0;this.serverTime=-Infinity;this.current=null;this.pending=null;}
 update(state,now){
  if(state.time<this.serverTime){this.seen=0;this.current=null;this.pending=null;}this.serverTime=state.time;
  for(const event of state.notices){if(event.id<=this.seen)continue;this.seen=event.id;if(event.type!=='follow'||state.time-event.created>2)continue;const player=state.cars.find(c=>c.id===event.player);const entry={id:event.id,player:player||{id:event.player,name:event.text.split(' · ')[0]}};if(!this.current)this.current={...entry,until:now+2000};else this.pending=entry;}
  if(this.current&&now>=this.current.until){this.current=this.pending?{...this.pending,until:now+2000}:null;this.pending=null;}
  return this.current;
 }
}
