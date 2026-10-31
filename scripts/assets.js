import fs from 'node:fs';
import path from 'node:path';
const dir='public/assets';fs.mkdirSync(dir,{recursive:true});
const colors=['#ff786e','#63caff','#ffd166','#a99aff','#6be5aa','#ff93d2','#fcaa67','#a3d865','#64ded8','#f19be0','#fa997e','#a6bbfa'];
for(let i=0;i<12;i++){
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><rect width="256" height="256" rx="40" fill="${colors[i]}"/><circle cx="128" cy="130" r="91" fill="${i%3===0?'#ffdfb5':i%3===1?'#fbd0b9':'#e7c9ff'}"/><path d="M42 105 Q32 23 117 25 Q213 6 218 111 L191 68 L155 85 L124 57 L85 84Z" fill="${['#352c4a','#5a3535','#674721','#dd7846'][i%4]}"/><ellipse cx="91" cy="126" rx="${i%2?10:8}" ry="15" fill="#302e43"/><ellipse cx="165" cy="126" rx="9" ry="15" fill="#302e43"/><circle cx="94" cy="121" r="3" fill="white"/><circle cx="168" cy="121" r="3" fill="white"/><ellipse cx="64" cy="151" rx="17" ry="10" fill="#ee9b9a"/><ellipse cx="192" cy="151" rx="17" ry="10" fill="#ee9b9a"/><path d="M92 161 Q127 ${205-i%3*8} 166 162" fill="none" stroke="#673c4e" stroke-width="8" stroke-linecap="round"/>${i%4===0?'<path d="M57 124 H112 M142 124 H199 M113 123 H142" stroke="#3b445e" stroke-width="10"/><rect x="63" y="106" width="48" height="35" rx="10" fill="none" stroke="#3b445e" stroke-width="7"/><rect x="143" y="106" width="48" height="35" rx="10" fill="none" stroke="#3b445e" stroke-width="7"/>':''}</svg>`;
 fs.writeFileSync(path.join(dir,`avatar-${i}.svg`),svg);
}
fs.writeFileSync(path.join(dir,'icon.svg'),`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" rx="52" fill="#151b31"/><path d="M42 153 Q32 90 102 65 Q181 37 212 104 Q242 167 160 190 Q80 214 42 153Z" fill="none" stroke="#77efd0" stroke-width="18"/><rect x="105" y="67" width="58" height="76" rx="16" transform="rotate(35 134 105)" fill="#ff8675"/><circle cx="121" cy="91" r="17" fill="#ffe6c3"/></svg>`);
const rate=44100,tau=Math.PI*2;
function wav(name,seconds,sample,stereo=false){const count=Math.floor(rate*seconds),channels=stereo?2:1,b=Buffer.alloc(44+count*2*channels);b.write('RIFF');b.writeUInt32LE(b.length-8,4);b.write('WAVE',8);b.write('fmt ',12);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(channels,22);b.writeUInt32LE(rate,24);b.writeUInt32LE(rate*2*channels,28);b.writeUInt16LE(2*channels,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(count*2*channels,40);for(let i=0;i<count;i++){const v=sample(i/rate,seconds),a=Array.isArray(v)?v:[v,v];for(let ch=0;ch<channels;ch++)b.writeInt16LE(Math.round(Math.tanh(a[ch])*29000),44+(i*channels+ch)*2);}fs.writeFileSync(path.join(dir,name+'.wav'),b);}
const noise=t=>Math.sin(t*18143+Math.sin(t*34731))*Math.sin(t*29989);
const osc=(f,t)=>Math.sin(tau*f*t),note=n=>440*2**((n-69)/12);
const sweep=(t,s,a,b)=>osc(1,a*t+(b-a)*t*t/(2*s));
const effects={
 engine:[2,t=>osc(55,t)*.30+osc(110,t)*.19+osc(165,t)*.11+osc(440,t)*.04],
 nitro:[.8,(t,s)=>(noise(t)*.19+sweep(t,s,210,1100)*.24)*Math.sin(Math.PI*t/s)**.8],
 collision:[.35,t=>(noise(t)*.60+osc(75,t)*.4)*Math.exp(-t*19)],
 oil:[.6,t=>(noise(t)*.28+sweep(t,.6,410,85)*.17)*Math.exp(-t*4)],
 tires:[.65,t=>(osc(1120+Math.sin(t*53)*320,t)*.13+noise(t)*.24)*Math.sin(Math.PI*t/.65)],
 shield:[1,t=>(osc(523,t)+osc(784,t)+osc(1046,t))*.12*Math.exp(-t*3)*(1-Math.exp(-t*40))],
 wave:[1.1,t=>(sweep(t,1.1,240,45)*.40+noise(t)*.09)*Math.sin(Math.PI*t/1.1)],
 lion:[1.2,t=>(osc(58+Math.sin(t*24)*7,t)*.38+osc(116,t)*.2+noise(t)*.2)*Math.sin(Math.PI*t/1.2)**.7],
 meteor:[1.4,t=>t<.45?sweep(t,.45,1500,120)*.18:(noise(t)*.57+osc(52,t)*.40)*Math.exp(-(t-.45)*6)],
 follow:[.7,t=>osc([659,784,988][Math.min(2,Math.floor(t/.17))],t)*.22*Math.exp(-(t%.17)*9)],
 like:[.17,t=>osc(1100,t)*.14*Math.exp(-t*22)],
 join:[.30,t=>osc(t<.12?523:659,t)*.20*Math.exp(-(t%.12)*9)],
 overtake:[.6,t=>(sweep(t,.6,360,920)*.22+noise(t)*.08)*Math.sin(Math.PI*t/.6)],
 finish:[1.2,t=>(osc([784,988,1175,1568][Math.min(3,Math.floor(t/.17))],t)*.19+osc(392,t)*.08)*Math.exp(-t*1.6)],
 start:[1.6,t=>osc(t<1.05?440:880,t)*.32*(t<1.05?Math.exp(-(t%.35)*15):Math.exp(-(t-1.05)*3))],
 victory:[3.2,t=>{const n=[72,76,79,84,83,79,84,88][Math.min(7,Math.floor(t/.26))];return (osc(note(n),t)*.25+osc(note(n-12),t)*.12)*Math.exp(-(t%.26)*4)*Math.min(1,(3.2-t)*2);}]
};
for(const [name,[seconds,sample]] of Object.entries(effects))wav(name,seconds,sample);
// Original 128 BPM electronic score: four-on-the-floor drums, offbeat bass,
// stereo arpeggios and a changing lead over F minor / Db / Ab / Eb.
const bpm=128,beat=60/bpm,bar=beat*4,duration=bar*16,roots=[41,37,44,39],melody=[0,7,12,10,7,3,7,12,0,7,15,12,10,7,3,7];
wav('music',duration,t=>{const b=t/beat,bn=Math.floor(b),p=t%beat,bi=Math.floor(t/bar),root=roots[Math.floor(bi/2)%4],hat=t%(beat/2),snare=(bn%4===1||bn%4===3)?(noise(t)*.25+osc(185,t)*.12)*Math.exp(-p*28):0;
 const kick=(osc(53,p)+osc(1,120*(1-Math.exp(-p*28))/28))*Math.exp(-p*15)*.46,hh=(noise(t)-noise(t-.00002))*.10*Math.exp(-hat*80)*(bn%2?.70:1),clap=snare+noise(t)*.04*Math.exp(-p*45);
 const bassPhase=(t+beat/2)%beat,duck=.28+.72*(1-Math.exp(-p*14)),f=note(root+(Math.floor(b*2)%4===3?12:0)),bass=(osc(f,t)*.20+osc(f*2,t)*.055+osc(f*3,t)*.035)*Math.exp(-bassPhase*5)*duck;
 const ap=t%(beat/2),step=Math.floor(b*2),leadNote=note(root+24+melody[step%16]),lead=(osc(leadNote,t)*.13+osc(leadNote*2,t)*.04+osc(leadNote*.997,t)*.06)*Math.exp(-ap*9)*duck*(bi%8<2?.65:1);
 const pad=[0,3,7].reduce((v,n)=>v+osc(note(root+24+n),t)*.027,0)*duck,crash=bi%4===0?noise(t)*.08*Math.exp(-(t%bar)*4):0,drums=kick+hh+clap+crash,pan=Math.sin(step*Math.PI*.5)*.38;
 return [drums+bass+pad+lead*(1-pan),drums+bass+pad+lead*(1+pan)];
},true);
try{const sharp=(await import('sharp')).default;await sharp(path.join(dir,'icon.svg')).png().toFile(path.join(dir,'icon.png'));}catch{}
fs.writeFileSync(path.join(dir,'audio-info.json'),JSON.stringify({original:true,title:'Live Loop Rush',bpm:128,musicSeconds:duration,rate,stereo:true,effects:Object.keys(effects)},null,2));
console.log('Созданы оригинальные аватарки, значок, трек 128 BPM и 16 звуковых эффектов.');
