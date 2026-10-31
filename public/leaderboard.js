// Keep decoded avatars and row elements alive across changes in race order.
export function createAvatarUpdater({ImageClass=Image}={}){
 const decoded=new Map(),requested=new WeakMap();
 return function update(image,url){
  if(requested.get(image)===url)return;
  requested.set(image,url);
  if(image.getAttribute('src')===url)return;
  let ready=decoded.get(url);
  if(!ready){
   ready=new Promise(resolve=>{const preload=new ImageClass();preload.onload=()=>{if(preload.decode)preload.decode().catch(()=>{}).then(()=>resolve(true));else resolve(true);};preload.onerror=()=>resolve(false);preload.src=url;});
   decoded.set(url,ready);if(decoded.size>256)decoded.delete(decoded.keys().next().value);
  }
  ready.then(ok=>{if(ok&&requested.get(image)===url)image.setAttribute('src',url);else if(!ok&&requested.get(image)===url)requested.delete(image);});
 };
}
export function createLeaderboard(container,{avatar,updateAvatar=createAvatarUpdater()}={}){
 const rows=new Map();
 return function update(cars){
  const top=cars.slice(0,10),visible=new Set(top.map(c=>c.id));
  for(const [id,row] of rows)if(!visible.has(id)&&row.root.parentNode===container)row.root.remove();
  for(let index=0;index<top.length;index++){
   const car=top[index];let row=rows.get(car.id);
   if(!row){const root=document.createElement('div');root.className='leader';root.dataset.player=car.id;
    const rank=document.createElement('span');rank.className='rank';const image=document.createElement('img');image.alt='';
    const name=document.createElement('span');name.className='name';const lap=document.createElement('small');root.append(rank,image,name,lap);row={root,rank,image,name,lap};rows.set(car.id,row);}
   const rank=String(car.rank??index+1),lap=(car.laps+1)+' кр.';
   if(row.rank.textContent!==rank)row.rank.textContent=rank;
   if(row.name.textContent!==car.name)row.name.textContent=car.name;
   if(row.lap.textContent!==lap)row.lap.textContent=lap;
   updateAvatar(row.image,avatar(car));
   const current=container.children[index];if(current!==row.root)container.insertBefore(row.root,current||null);
  }
  // A small reserve keeps drivers near tenth place from reloading on every pass.
  if(rows.size>32)for(const [id] of rows){if(!visible.has(id))rows.delete(id);if(rows.size<=32)break;}
 };
}
