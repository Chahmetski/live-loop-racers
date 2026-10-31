const files=['start','engine','nitro','collision','oil','tires','shield','wave','lion','meteor','victory','follow','like','join','overtake','finish','music-race','music-final','music-results'];
const giftNotes={rose:[523,659,784],icecream:[1175,880,698],heart:[392,494,587,784],doughnut:[330,392,440],cap:[440,659],glasses:[988,1319,1568],money:[659,784,988,1319],galaxy:[262,392,523,784],motorcycle:[220,330,440,660],diamond:[784,988,1175,1568]};
export function soundForNotice(n){
 if(n.restored)return null;
 if(n.type==='gift')return giftNotes[n.key]?'gift-'+n.key:null;
 return {start:'start',victory:'victory',follow:'follow',finish:'finish','map-event':'event-chime'}[n.type]||null;
}
// Soft plucked harmonics; gifts never reuse engine, collision or traffic sounds.
function chimeBuffer(context,notes){const step=.095,length=notes.length*step+.42,buffer=context.createBuffer(1,Math.ceil(context.sampleRate*length),context.sampleRate),data=buffer.getChannelData(0);
 for(let n=0;n<notes.length;n++){const offset=Math.floor(n*step*context.sampleRate);for(let i=0;i<Math.floor(.42*context.sampleRate);i++){const t=i/context.sampleRate,envelope=Math.min(1,t/.012)*Math.exp(-t*13)*(1-t/.42),phase=2*Math.PI*notes[n]*t;data[offset+i]+=(Math.sin(phase)+.22*Math.sin(phase*2)+.07*Math.sin(phase*3))*envelope*.20;}}
 return buffer;
}
export class AudioSystem {
 constructor(){this.ready=false;this.buffers=new Map();this.voices=[];this.lastNotice=0;this.round=null;this.lastPlayed=new Map();this.noticePrimed=false;}
 async start(settings){if(this.ready)return;this.context=new AudioContext();await this.context.resume();this.ready=true;this.fxGain=this.context.createGain();this.musicGain=this.context.createGain();this.compressor=this.context.createDynamicsCompressor();this.compressor.threshold.value=-12;this.compressor.ratio.value=4;this.fxGain.connect(this.compressor);this.musicGain.connect(this.compressor);this.compressor.connect(this.context.destination);
  await Promise.all(files.map(async name=>{try{let r=await fetch('/assets/'+name+(name.startsWith('music-')?'.mp3':'.wav'));if(!r.ok&&name==='music-race')r=await fetch('/assets/music.wav');if(r.ok)this.buffers.set(name,await this.context.decodeAudioData(await r.arrayBuffer()));}catch{}}));
  for(const [key,notes] of Object.entries(giftNotes))this.buffers.set('gift-'+key,chimeBuffer(this.context,notes));this.buffers.set('event-chime',chimeBuffer(this.context,[392,523]));
  this.switchMusic('music-race');this.engine=this.play('engine',true,this.fxGain,.16);this.update(settings,null);
 }
 switchMusic(key){if(this.musicKey===key||!this.buffers.has(key))return;const old=this.music,now=this.context.currentTime;this.musicKey=key;this.music=this.play(key,true,this.musicGain,0);this.music.channel.gain.setTargetAtTime(.55,now,.22);if(old){old.channel.gain.setTargetAtTime(0,now,.20);old.stop(now+1);old.onended=()=>{old.channel.disconnect();old.disconnect();};}}
 play(name,loop=false,gain=this.fxGain,volume=1){if(!this.ready||!this.buffers.has(name))return;const source=this.context.createBufferSource(),channel=this.context.createGain();source.buffer=this.buffers.get(name);source.loop=loop;channel.gain.value=volume;source.connect(channel);channel.connect(gain);source.start();source.channel=channel;
  if(!loop){this.voices.push(source);source.onended=()=>{channel.disconnect();source.disconnect();this.voices=this.voices.filter(s=>s!==source);};if(this.voices.length>8){try{this.voices.shift().stop();}catch{}}}return source;
 }
 update(settings,car,state){if(!this.ready)return;const now=this.context.currentTime;if(state?.time<(this.serverTime??0)){this.lastNotice=0;this.noticePrimed=false;this.lastPlayed.clear();}if(state)this.serverTime=state.time;
  this.switchMusic(state?.phase==='overtime'?'music-final':state?.phase==='results'?'music-results':'music-race');this.musicGain.gain.setTargetAtTime((Number(settings.music)||0)*(now<(this.duckUntil||0)?.65:1),now,.25);this.fxGain.gain.setTargetAtTime(Number(settings.sound)||0,now,.15);
  if(this.engine){this.engine.playbackRate.setTargetAtTime(car?Math.min(2.7,.65+car.speed/23):.65,now,.20);this.engine.channel.gain.setTargetAtTime(state?.paused||state?.phase==='results'?.025:.12+(car?.boost||0)*.08,now,.22);}
  if(state&&!this.noticePrimed){this.noticePrimed=true;this.lastNotice=Math.max(0,...state.notices.map(n=>n.id));return;}
  for(const n of state?.notices||[]){if(n.id<=this.lastNotice)continue;this.lastNotice=n.id;if(state.time-n.created>2||state.paused)continue;const sound=soundForNotice(n);
   if(!sound)continue;const key=n.type==='gift'?n.player+':'+sound:sound,throttle=n.type==='gift'?.8:sound==='follow'?1.2:.7;if(now-(this.lastPlayed.get(key)??-10)<throttle||n.type==='gift'&&now-(this.lastGiftSound??-10)<.18)continue;this.lastPlayed.set(key,now);if(n.type==='gift')this.lastGiftSound=now;if(['gift','follow','finish','victory'].includes(n.type))this.duckUntil=now+.6;this.play(sound,false,this.fxGain,n.type==='gift'?.65:sound==='victory'?.50:.32);
  }
  if(this.lastPlayed.size>200)for(const [key,at] of this.lastPlayed)if(now-at>15)this.lastPlayed.delete(key);
 }
}
