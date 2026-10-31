import * as THREE from 'three';
import {mergeGeometries} from '/vendor/addons/utils/BufferGeometryUtils.js';
import {vehicle} from './models.js';
import {createGiftRig} from './gift-rig.js';
function unifiedBodyMaterial(){
 const material=new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.2,emissive:0xffffff,emissiveIntensity:1});
 material.onBeforeCompile=shader=>{
  const varyings='varying float vPartRoughness; varying float vPartMetalness; varying vec3 vPartEmissive; varying float vPartCoat;\n';
  shader.vertexShader='attribute float paintMask; attribute float partRoughness; attribute float partMetalness; attribute vec3 partEmissive; attribute float partCoat;\n'+varyings+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <color_vertex>','vColor=color;\n#ifdef USE_INSTANCING_COLOR\nvColor=mix(color,color*instanceColor,paintMask);\n#endif\nvPartRoughness=partRoughness;vPartMetalness=partMetalness;vPartEmissive=partEmissive;vPartCoat=partCoat;');
  shader.fragmentShader=varyings+shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor*=vPartRoughness;').replace('#include <metalnessmap_fragment>','#include <metalnessmap_fragment>\nmetalnessFactor*=vPartMetalness;').replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=vPartEmissive;').replace('#include <lights_physical_fragment>',THREE.ShaderChunk.lights_physical_fragment.replace('material.clearcoat = clearcoat;', 'material.clearcoat = clearcoat*vPartCoat;'));
 };material.customProgramCacheKey=()=> 'full-fleet-original-materials-v2';return material;
}
function bakeMaterial(geometry,material,tinted){
 const n=geometry.attributes.position.count,color=new Float32Array(n*3),emissive=new Float32Array(n*3),mask=new Float32Array(n),rough=new Float32Array(n),metal=new Float32Array(n),coat=new Float32Array(n);
 for(let i=0;i<n;i++){color.set(tinted?[1,1,1]:[material.color.r,material.color.g,material.color.b],i*3);emissive.set([material.emissive.r*material.emissiveIntensity,material.emissive.g*material.emissiveIntensity,material.emissive.b*material.emissiveIntensity],i*3);mask[i]=tinted?1:0;rough[i]=material.roughness;metal[i]=material.metalness;coat[i]=material.clearcoat||0;}
 for(const [key,data,size] of [['color',color,3],['partEmissive',emissive,3],['paintMask',mask,1],['partRoughness',rough,1],['partMetalness',metal,1],['partCoat',coat,1]])geometry.setAttribute(key,new THREE.BufferAttribute(data,size));
}

// Exactly the production vehicle geometry: body, spokes, tires, driver and spherical avatar.
// Only the submission is batched; there is no reduced or substitute car model.
export function createFullFleet(scene,capacity=1000){
 const root=new THREE.Group(),templates=new Map(),effectBatches=new Map(),heads=new Map(),faces=[],faceQueue=[],imageCache=new Map(),dummy=new THREE.Object3D(),worldMatrix=new THREE.Matrix4(),combined=new THREE.Matrix4(),paint=new THREE.Color(),bodyMaterial=unifiedBodyMaterial();scene.add(root);
 const faceW=128,faceH=64,pageSize=128,canvas=document.createElement('canvas');canvas.width=faceW;canvas.height=faceH;const ctx=canvas.getContext('2d',{willReadFrequently:true});
 const rankCanvas=document.createElement('canvas');rankCanvas.width=rankCanvas.height=2048;const rx=rankCanvas.getContext('2d');
 for(let rank=1;rank<=1000;rank++){const col=(rank-1)%32,row=Math.floor((rank-1)/32),x=col*64+32,y=row*64+32;rx.fillStyle='#10243d';rx.beginPath();rx.arc(x,y,29,0,Math.PI*2);rx.fill();rx.strokeStyle=rank<=3?'#ffdf84':'#9debdc';rx.lineWidth=3;rx.stroke();rx.fillStyle='#fff';rx.font='900 '+(rank>=1000?18:rank>=100?23:32)+'px Segoe UI';rx.textAlign='center';rx.textBaseline='middle';rx.fillText(rank,x,y);}
 const rankTexture=new THREE.CanvasTexture(rankCanvas);rankTexture.colorSpace=THREE.SRGBColorSpace;
 const rankGeometry=new THREE.CircleGeometry(.54,24),rankTiles=new THREE.InstancedBufferAttribute(new Float32Array(capacity),1);rankGeometry.setAttribute('rankTile',rankTiles);
 const rankMaterial=new THREE.MeshBasicMaterial({map:rankTexture,transparent:true,depthWrite:false});rankMaterial.onBeforeCompile=shader=>{
  shader.vertexShader='attribute float rankTile;\n'+shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvMapUv=(vMapUv+vec2(mod(rankTile,32.0),31.0-floor(rankTile/32.0)))/32.0;');
  shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','vec4 mvPosition=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.); mvPosition.xy+=transformed.xy*vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz)); gl_Position=projectionMatrix*mvPosition;');
 };rankMaterial.customProgramCacheKey=()=> 'full-fleet-rank-v1';
 const ranks=new THREE.InstancedMesh(rankGeometry,rankMaterial,capacity);ranks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);ranks.frustumCulled=false;ranks.count=0;root.add(ranks);let rankCount=0,faceDirty=false,batchCount=0;
 function makePage(index,headGeometry){
  const pixels=new Uint8Array(faceW*faceH*pageSize*4);new Uint32Array(pixels.buffer).fill(0xffb2d9ff);
  const texture=new THREE.DataArrayTexture(pixels,faceW,faceH,pageSize);texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=texture.magFilter=THREE.LinearFilter;texture.needsUpdate=true;
  const geometry=headGeometry.clone(),layers=new THREE.InstancedBufferAttribute(new Float32Array(capacity),1);geometry.setAttribute('avatarLayer',layers);
  const material=new THREE.MeshStandardMaterial({map:texture,roughness:.75});material.onBeforeCompile=shader=>{
   shader.vertexShader='attribute float avatarLayer; varying float vAvatarLayer;\n'+shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvAvatarLayer=avatarLayer;');
   shader.fragmentShader='varying float vAvatarLayer;\n'+shader.fragmentShader.replace('#include <map_pars_fragment>','#ifdef USE_MAP\nuniform highp sampler2DArray map;\n#endif').replace('#include <map_fragment>','#ifdef USE_MAP\ndiffuseColor *= texture(map,vec3(vMapUv,vAvatarLayer));\n#endif');
  };material.customProgramCacheKey=()=> 'full-fleet-face-array-v1';
  const mesh=new THREE.InstancedMesh(geometry,material,capacity);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.count=0;root.add(mesh);const page={texture,pixels,mesh,layers,count:0};heads.set(index,page);return page;
 }
 function writeFace(slot,p,img){const page=heads.get(Math.floor(slot/pageSize));if(!page)return;ctx.fillStyle=p.color||'#82e1ec';ctx.fillRect(0,0,faceW,faceH);
  if(img)ctx.drawImage(img,faceW/4,0,faceW/2,faceH);else{ctx.fillStyle='#ffdbb9';ctx.fillRect(faceW/4,0,faceW/2,faceH);ctx.fillStyle='#263451';ctx.font='900 19px Segoe UI';ctx.textAlign='center';ctx.fillText((p.name||'LL').replace(/^БОТ · /,'').slice(0,2).toUpperCase(),64,36);}
  const pixels=ctx.getImageData(0,0,faceW,faceH).data,offset=(slot%pageSize)*faceW*faceH*4;for(let y=0;y<faceH;y++)page.pixels.set(pixels.subarray(y*faceW*4,(y+1)*faceW*4),offset+(faceH-1-y)*faceW*4);page.texture.addLayerUpdate(slot%pageSize);page.texture.needsUpdate=true;
 }
 function ensureFace(p,headGeometry){const slot=Math.max(0,Math.min(capacity-1,p.slot||0)),pageIndex=Math.floor(slot/pageSize);if(!heads.has(pageIndex))makePage(pageIndex,headGeometry);
  const key=p.id+':'+p.avatar+':'+p.name;if(faces[slot]?.key!==key){const item={key,p:{...p},slot};faces[slot]=item;faceQueue.push(item);}return slot;
 }
 function processFaces(){for(let i=0;i<6&&faceQueue.length;i++){const item=faceQueue.shift();if(faces[item.slot]!==item)continue;writeFace(item.slot,item.p,null);const url=item.p.avatar;if(!url)continue;
   let promise=imageCache.get(url);if(!promise){promise=new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=url;});if(imageCache.size>=160)imageCache.delete(imageCache.keys().next().value);imageCache.set(url,promise);}
   promise.then(img=>{if(img&&faces[item.slot]===item)writeFace(item.slot,item.p,img);});
  }}
 function template(p){const variant=p.level===2?8:p.level===1?9:p.model||0;if(templates.has(variant))return templates.get(variant);
  const example=vehicle({id:'template',name:'LL',color:'#ff786e',model:p.model||0,slot:0},p.level||0);example.update({slot:0,rank:1,speed:0,gas:0,shield:0,level:p.level||0},0,0);example.root.updateMatrixWorld(true);
  const groups=new Map();let sourceTriangles=0,sourceMeshes=0;
  function walk(node,visible=true){visible=visible&&node.visible;if(!visible||node===example.racer.head||node===example.rig.root)return;
   if(node.isMesh){const g=node.geometry.index?node.geometry.toNonIndexed():node.geometry.clone();g.applyMatrix4(node.matrixWorld);sourceTriangles+=g.attributes.position.count/3;sourceMeshes++;
    let material=node.material,tinted=material.color?.getHex()===0xff786e,key=material.uuid;
    if(!material.transparent){bakeMaterial(g,material,tinted);material=bodyMaterial;tinted=true;key='full-opaque';}
    if(!groups.has(key))groups.set(key,{material,tinted,geometries:[]});groups.get(key).geometries.push(g);
   }for(const child of node.children)walk(child,visible);
  }walk(example.root);
  const batches=[];for(const group of groups.values()){const geometry=mergeGeometries(group.geometries,false);group.geometries.forEach(g=>g.dispose());const mesh=new THREE.InstancedMesh(geometry,group.material,capacity);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.castShadow=true;mesh.receiveShadow=true;mesh.count=0;root.add(mesh);batches.push({mesh,tinted:group.tinted});}
  const headGeometry=example.racer.head.geometry,headMatrix=example.racer.head.matrixWorld.clone(),rankMatrix=example.rankPlate.matrixWorld.clone(),rig=createGiftRig(variant===8?7.8:variant===9?3.4:4.4);example.dispose();
  const result={variant,batches,count:0,headGeometry,headMatrix,rankMatrix,rig,sourceTriangles:sourceTriangles+headGeometry.index.count/3,sourceMeshes,fullDetail:true};templates.set(variant,result);return result;
 }
 function effect(mesh,matrix){const key=mesh.geometry.uuid+':'+mesh.material.uuid;let batch=effectBatches.get(key);if(!batch){const instanced=new THREE.InstancedMesh(mesh.geometry,mesh.material,capacity*12);instanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);instanced.frustumCulled=false;instanced.count=0;root.add(instanced);batch={mesh:instanced,count:0};effectBatches.set(key,batch);}if(batch.count>=capacity*12)return;batch.mesh.setMatrixAt(batch.count++,matrix);}
 return {root,templates,heads,reset:()=>{batchCount=0;rankCount=0;for(const t of templates.values())t.count=0;for(const p of heads.values())p.count=0;for(const b of effectBatches.values())b.count=0;},add:(p,surface,t)=>{
  const model=template(p),index=model.count++,flat=p.flatUntil>t;batchCount++;
  dummy.position.set(surface.x,surface.y+.12,surface.z);dummy.rotation.set(-surface.pitch,surface.yaw+(p.spinUntil>t?(t-p.spinStarted)*Math.PI*4:Math.atan2(p.laneVelocity||0,Math.max(8,p.speed))*.55),0,'YXZ');dummy.scale.set(flat?1.3:1,flat?.16:1,flat?1.08:1);dummy.updateMatrix();worldMatrix.copy(dummy.matrix);paint.set(p.color||'#ff786e');
  for(const b of model.batches){b.mesh.setMatrixAt(index,worldMatrix);if(b.tinted)b.mesh.setColorAt(index,paint);}
  const slot=ensureFace(p,model.headGeometry),page=heads.get(Math.floor(slot/pageSize)),hi=page.count++;combined.multiplyMatrices(worldMatrix,model.headMatrix);page.mesh.setMatrixAt(hi,combined);page.layers.setX(hi,slot%pageSize);
  combined.multiplyMatrices(worldMatrix,model.rankMatrix);ranks.setMatrixAt(rankCount,combined);rankTiles.setX(rankCount++,Math.max(0,Math.min(999,(p.rank||1)-1)));
  model.rig.update(p,t);model.rig.root.updateMatrixWorld(true);function walkFx(node,visible=true){visible=visible&&node.visible;if(!visible)return;if(node.isMesh){combined.multiplyMatrices(worldMatrix,node.matrixWorld);effect(node,combined);}for(const child of node.children)walkFx(child,visible);}walkFx(model.rig.root);
 },flush:()=>{
  processFaces();for(const t of templates.values())for(const b of t.batches){b.mesh.count=t.count;b.mesh.visible=t.count>0;if(t.count){b.mesh.instanceMatrix.needsUpdate=true;if(b.mesh.instanceColor)b.mesh.instanceColor.needsUpdate=true;}}
  for(const p of heads.values()){p.mesh.count=p.count;p.mesh.visible=p.count>0;p.mesh.instanceMatrix.needsUpdate=true;p.layers.needsUpdate=true;}
  ranks.count=rankCount;ranks.visible=rankCount>0;ranks.instanceMatrix.needsUpdate=true;rankTiles.needsUpdate=true;
  for(const b of effectBatches.values()){b.mesh.count=b.count;b.mesh.visible=b.count>0;if(b.count)b.mesh.instanceMatrix.needsUpdate=true;}
 },get count(){return batchCount;}};
}
