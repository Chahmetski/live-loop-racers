import * as THREE from 'three';
import {part,mat} from './models.js';
export function createGiftRig(length=4.4){
 const root=new THREE.Group(),balloons=new THREE.Group(),mist=new THREE.Group(),cap=new THREE.Group(),galaxy=new THREE.Group(),crystals=new THREE.Group(),money=new THREE.Group(),diamond=new THREE.Group(),jets=new THREE.Group(),cash=new THREE.Group(),diamondTrail=new THREE.Group();
 for(const g of [balloons,mist,cap,galaxy,crystals,money,diamond,jets,cash,diamondTrail]){root.add(g);g.visible=false;}
 for(const side of [-1,1])part(jets,'cone',0xffa047,[side*.6,.7,-length/2-.85],[.5,2.0,.5],[-Math.PI/2,0,0],{emissive:0xff6c21,emissiveIntensity:1.2,transparent:true,opacity:.85,depthWrite:false});
 for(let i=0;i<7;i++){part(cash,'rounded',0x78e4aa,[(i%2?1:-1)*.8,.7+(i%3)*.3,-length/2-1-i*.7],[.75,.06,.4],[.4*i,.8*i,.5],{roughness:.8});part(diamondTrail,'diamond',0x96dfff,[(i%2?1:-1)*.6,.5+(i%3)*.4,-length/2-1-i*.7],[.34,.6,.34],[],{emissive:0x398ccd,emissiveIntensity:.7,metalness:.4});}
 for(let i=0;i<3;i++){const x=(i-1)*1.45,y=5.4+(i%2)*.6,z=-.4+(i%2)*.6;
  part(balloons,'sphere',[0xff7197,0xbf85ff,0xffa4c8][i],[x,y,z],[1.5,1.9,1.5],[],{metalness:.25,roughness:.18,clearcoat:1});
  const a=new THREE.Vector3(x*.5,2.2,z),b=new THREE.Vector3(x,y-.9,z),delta=b.clone().sub(a),string=part(balloons,'cylinder',0xfce5ee,a.clone().add(b).multiplyScalar(.5).toArray(),[.025,delta.length(),.025]);string.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());
 }
 for(let i=0;i<6;i++)part(mist,'sphere',0xb9efff,[(i%2?1:-1)*.8,.55,-length/2-1-i*.75],[2,.55,2.2],[],{transparent:true,opacity:.16,depthWrite:false,emissive:0x388bb4,emissiveIntensity:.20});
 const dome=new THREE.Mesh(new THREE.SphereGeometry(1,24,12,0,Math.PI*2,0,Math.PI/2),mat(0x4089ff,{metalness:.12,roughness:.35}));dome.scale.set(1.8,1.45,1.5);dome.position.y=.3;cap.add(dome);
 part(cap,'sphere',0x3473db,[0,.14,1.4],[4.3,.20,3.3],[],{roughness:.35});part(cap,'rounded',0xffe18a,[0,.85,1.38],[.7,.62,.08],[],{metalness:.2});cap.position.set(0,.45,length/2+.45);
 for(let i=0;i<3;i++)part(galaxy,'torus',[0x8b69ed,0xd095ff,0x73d9ff][i],[0,2,0],[7+i*.6,7+i*.6,7+i*.6],[Math.PI/2+i*.25,.25*i,i*.35],{transparent:true,opacity:.5,depthWrite:false,emissive:0x7154d3,emissiveIntensity:.8});
 for(let i=0;i<9;i++){const angle=i/9*Math.PI*2;part(galaxy,'diamond',0xdbb8ff,[Math.cos(angle)*4.4,2+Math.sin(i)*.65,Math.sin(angle)*4.4],[.35,.65,.35],[],{emissive:0xa07be8,emissiveIntensity:.8});}
 for(let i=0;i<10;i++){const side=i%2?1:-1;part(crystals,'diamond',0x86d5ff,[side*(1.0+(i%3)*.13),.7+(i%4)*.55,(Math.floor(i/2)-2)*.85],[.8,1.45,.9],[.2*i,.6*i,side*.3],{metalness:.55,roughness:.17,transparent:true,opacity:.72,emissive:0x234b8f,emissiveIntensity:.3});}
 for(const [group,color] of [[money,0x6bffc0],[diamond,0xade8ff]])for(const side of [-1,1]){
  part(group,'rounded',0x223047,[side*1.45,1.25,1.35],[.85,.75,1.1],[],{metalness:.65,roughness:.25});part(group,'cylinder',0x536987,[side*1.45,1.60,2.25],[.55,2.1,.55],[-Math.PI/2,0,0],{metalness:.75,roughness:.25});
  part(group,'cylinder',color,[side*1.45,1.6,3.33],[.46,.15,.46],[-Math.PI/2,0,0],{emissive:color,emissiveIntensity:.5});
 }
 root.userData.giftRig=true;
 const capOrigin=cap.position.clone();
 return {root,balloons,mist,cap,galaxy,crystals,money,diamond,jets,cash,diamondTrail,update:(c,t)=>{
  balloons.visible=c.floatUntil>t;balloons.rotation.z=Math.sin(t*2+c.slot)*.08;
  mist.visible=c.iceTrailUntil>t;mist.scale.set(1+Math.sin(t*5)*.12,1,1);
  const flying=c.capFlewAt!=null?t-c.capFlewAt:100;cap.visible=c.capUntil>t&&c.capCharges>0||flying>=0&&flying<1.2;cap.position.copy(capOrigin);cap.rotation.set(0,0,0);if(flying>=0&&flying<1.2){cap.position.y+=flying*5;cap.position.z+=flying*7;cap.rotation.x=flying*5;}
  galaxy.visible=c.galaxyUntil>t;galaxy.rotation.y=t*.8;
  crystals.visible=c.crystalUntil>t;crystals.rotation.y=Math.sin(t*.7)*.04;
  money.visible=c.weaponKey==='money'&&c.weaponUntil>t;diamond.visible=c.weaponKey==='diamond'&&c.weaponUntil>t;
  jets.visible=c.boost>0&&(c.boostKey||c.boosts?.[0]?.key)==='rose';jets.scale.z=.9+Math.sin(t*28)*.16;
  cash.visible=c.weaponKey==='money'&&c.weaponUntil>t;diamondTrail.visible=c.weaponKey==='diamond'&&c.weaponUntil>t;cash.rotation.z=Math.sin(t*7)*.12;diamondTrail.rotation.z=Math.sin(t*4)*.1;
 }};
}
