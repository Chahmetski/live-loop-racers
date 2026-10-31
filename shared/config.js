export const GIFTS=[
 {key:'rose',name:'Розочка',aliases:['Rose','Роза','Розочка'],coins:1,mechanic:'jet',description:'Реактивный выхлоп: немедленный толчок и пламя. Серия роз продлевает непрерывное нитро.',boost:.22,duration:1.2,maxDuration:18},
 {key:'icecream',name:'Мороженое',aliases:['Ice Cream Cone','Мороженое'],coins:1,mechanic:'iceTrail',description:'Морозильник: холодный туман и ледяная дорожка позади. Преследователи скользят, хуже поворачивают и тормозят.',duration:6,trapLife:10,slowDuration:3,slow:.60},
 {key:'heart',name:'Сердечко пальцами',aliases:['Finger Heart','Сердечко пальцами'],coins:5,mechanic:'balloons',description:'Воздушный поцелуй: шарики поднимают машину над дорогой. Она перелетает наземные ловушки.',duration:6},
 {key:'doughnut',name:'Пончик',aliases:['Doughnut','Donut','Пончик'],coins:30,mechanic:'rollingDonut',description:'Колесо-пончик: большой пончик катится и подпрыгивает назад. Попадание крутит и замедляет соперника.',duration:8,slowDuration:2.5,slow:.45},
 {key:'cap',name:'Кепка',aliases:['Cap','Кепка'],coins:99,mechanic:'bulldozer',description:'Кепка-бульдозер: козырёк сгребает ловушки и расталкивает машины. Один снаряд сбивает кепку.',duration:10},
 {key:'glasses',name:'Солнечные очки',aliases:['Sunglasses','Солнечные очки'],coins:199,mechanic:'truck',description:'Грузовик-раздавливатель на 12 секунд: ломает препятствия, расталкивает и превращает соперников в блинчики.',duration:12,slowDuration:3,slow:.50,level:2},
 {key:'money',name:'Денежный пистолет',aliases:['Money Gun','Денежный пистолет'],coins:500,mechanic:'greenVolley',description:'Зелёный обстрел всех соперников: замедление на 4 секунды. Отправителю — разгон на 5 секунд и выхлоп из купюр.',boost:.35,duration:5,maxDuration:5,slowDuration:4,slow:.50},
 {key:'galaxy',name:'Галактика',aliases:['Galaxy','Галактика'],coins:1000,mechanic:'orbit',description:'Орбитальный захват: ближайшие соперники кружатся вокруг движущейся машины, затем возвращаются на трассу.',duration:5,radius:55},
 {key:'motorcycle',name:'Мотоцикл',aliases:['Motorcycle','Мотоцикл'],coins:2988,mechanic:'bike',description:'Байкер на 15 секунд: настоящий быстрый мотоцикл, меньше ширина, быстрые повороты и прыжки через препятствия. Аватарка остаётся.',duration:15,boost:.22,maxDuration:15,level:1},
 {key:'diamond',name:'Алмазный пистолет',aliases:['Diamond Gun','Алмазный пистолет'],coins:5000,mechanic:'diamondVolley',description:'Алмазный залп во всех соперников: кристаллы и сильное замедление на 10 секунд. Отправителю — мощное ускорение на 10 секунд и алмазный след.',boost:.70,duration:10,maxDuration:10,slowDuration:10,slow:.20}
].map(g=>({...g,id:null}));
export const DEFAULTS={
 duration:420,enrollment:20,countdown:3,results:8,extraTime:100,maxPlayers:1000,bots:0,
 autoRounds:true,autoRejoin:true,inactiveRounds:5,likeGain:.008,likeDrain:.10,likeBonus:.05,
 followSpeed:.05,followAccel:.10,maxSpeedMultiplier:2.2,trapLimit:80,playerTrapLimit:8,
 immunity:3,effectQueue:8,music:.08,sound:.35,quality:'high',orientation:'portrait',
 testMode:false,timeScale:1,points:[10,7,5,1],account:'',reconnect:true,mapEvents:true,eventInterval:24
};
export function validateSettings(input,base=DEFAULTS) {
 const out={...base};
 const ranges={duration:[5,3600],enrollment:[1,300],countdown:[1,20],results:[1,120],extraTime:[10,300],maxPlayers:[1,1000],bots:[0,1000],inactiveRounds:[1,100],likeGain:[0,.1],likeDrain:[.01,1],likeBonus:[0,.2],followSpeed:[0,.3],followAccel:[0,.5],maxSpeedMultiplier:[1,3],trapLimit:[0,120],playerTrapLimit:[0,15],immunity:[1,10],effectQueue:[1,16],music:[0,1],sound:[0,1],timeScale:[1,20]};
 for(const [k,[min,max]] of Object.entries(ranges)){if(input[k]!==undefined && Number.isFinite(Number(input[k])))out[k]=Math.max(min,Math.min(max,Number(input[k])));}
 for(const k of ['maxPlayers','bots','inactiveRounds','trapLimit','playerTrapLimit','effectQueue'])out[k]=Math.round(out[k]);
 if(Number.isFinite(Number(input.eventInterval)))out.eventInterval=Math.max(14,Math.min(120,Number(input.eventInterval)));
 for(const k of ['autoRounds','autoRejoin','testMode','reconnect','mapEvents'])if(typeof input[k]==='boolean')out[k]=input[k];
 for(const [k,values] of Object.entries({quality:['low','medium','high'],orientation:['portrait','landscape']}))if(values.includes(input[k]))out[k]=input[k];
 if(typeof input.account==='string')out.account=input.account.trim().replace(/^@/,'').slice(0,64);
 if(Array.isArray(input.points)&&input.points.length===4&&input.points.every(x=>Number.isFinite(+x)&&+x>=0&&+x<=1000))out.points=input.points.map(Number);
 return out;
}
export function validateGifts(input){return GIFTS.map(defaultGift=>{const g=input?.find(x=>x.key===defaultGift.key)||{};const out={...defaultGift};for(const [k,v] of Object.entries(g)){if(k==='id')out.id=/^\d{1,20}$/.test(String(v))?String(v):null;else if(typeof defaultGift[k]==='number'&&Number.isFinite(Number(v)))out[k]=Math.max(0,Math.min(k==='coins'?5000:k==='level'?3:k==='base'||k==='boost'?1:k==='slow'?1:120,Number(v)));}if(out.warning!==undefined)out.warning=Math.max(1,out.warning);return out;});}
