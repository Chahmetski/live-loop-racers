// A fair queue of donors. Repeats increment a card instead of occupying all slots.
export class GiftFeed {
 constructor(){this.reset();}
 reset(){this.seen=0;this.donors=new Map();this.active=[];this.queue=[];this.round=null;this.serverTime=0;}
 update(state,now){
  if(state.time<this.serverTime)this.reset();else if(this.round!==null&&state.round!==this.round){const seen=this.seen;this.reset();this.seen=seen;}
  this.round=state.round;this.serverTime=state.time;
  for(const n of state.notices||[]){
   if(n.id<=this.seen)continue;this.seen=n.id;
   if(n.type!=='gift'||n.restored||state.time-n.created>8)continue;
   let card=this.donors.get(n.player);
   if(!card){
    if(this.donors.size>=67)continue;
    const player=state.cars.find(c=>c.id===n.player)||n;
    card={id:n.player,name:player.name||n.name||'Зритель',avatar:player.avatar||n.avatar,color:player.color,gifts:new Map(),count:0,queued:n.queued,first:now,updated:now};
    this.donors.set(card.id,card);this.queue.push(card.id);
   }
   card.count+=n.count||1;card.updated=now;card.queued=n.queued;card.key=n.key;
   card.gifts.set(n.key,(card.gifts.get(n.key)||0)+(n.count||1));
   if(card.until)card.until=Math.min(card.shown+12000,now+7000);
  }
  this.active=this.active.filter(id=>{const card=this.donors.get(id);if(card.until>now)return true;this.donors.delete(id);return false;});
  while(this.active.length<3&&this.queue.length){const id=this.queue.shift(),card=this.donors.get(id);if(!card)continue;card.shown=now;card.until=now+7000;this.active.push(id);}
  return this.active.map(id=>this.donors.get(id));
 }
}
