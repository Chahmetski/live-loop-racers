export class Simulator {
 constructor(engine){this.engine=engine;this.sequence=0;this.elapsed=0;this.lastEvent=null;}
 user(i=0){return {id:`test:${i}`,name:['Алиса','Миша Турбо','Котя','Мария','Денис','Саша','Лисёнок','Космокраб','Егор','Лера','Пельмень','Соня'][i%12]+(i>=12?' '+(i+1):''),avatar:`/assets/avatar-${i%12}.svg`};}
 send(type,i=0,extra={}){const e={type,user:this.user(i),eventId:`test:${Date.now()}:${++this.sequence}`,...extra};this.lastEvent=e;return this.engine.handle(e);}
 join(count=12){for(let i=0;i<Math.min(1000,count);i++)this.send('follow',i);}
 gift(key,i=0,count=1){return this.send('gift',i,{key,count});}
 roses(i=0){const seriesId=`test-series:${++this.sequence}`;for(const n of [1,2,5,10])this.send('gift',i,{key:'rose',count:n,streak:true,seriesId,repeatEnd:false});this.send('gift',i,{key:'rose',count:10,streak:true,seriesId,repeatEnd:true});}
 duplicate(){if(this.lastEvent)this.engine.handle(this.lastEvent);}
 burst(){for(let i=0;i<3000;i++)this.send(i%10===0?'chat':'like',i%30,i%10===0?{text:'играть'}:{count:25});this.engine.log('Тест нагрузки: 3000 событий через общий обработчик.');}
 update(dt){if(!this.engine.settings.testMode)return;this.elapsed+=dt;if(this.elapsed<.5)return;this.elapsed=0;
  const id=Math.floor(this.engine.random()*12);this.send('like',id,{count:1+Math.floor(this.engine.random()*15)});
  if(this.engine.random()<.1)this.send('follow',id);
  if(this.engine.random()<.015)this.send('follow',id);
 }
}
