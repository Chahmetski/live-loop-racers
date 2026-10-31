import * as THREE from 'three';
import {at} from '/shared/track.js';
import {carSurface} from '/shared/render-effects.js';
import {part,mat} from './models.js';
export function createProjectileView(scene){
 const donuts=new Map(),dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0),direction=new THREE.Vector3(),point=new THREE.Vector3(),meshes={money:new THREE.InstancedMesh(new THREE.ConeGeometry(.17,1.2,10),mat(0x5bff96,{emissive:0x229e53,emissiveIntensity:1,roughness:.3}),6000),diamond:new THREE.InstancedMesh(new THREE.OctahedronGeometry(.36,0),mat(0xaddfff,{emissive:0x477bd2,emissiveIntensity:.8,metalness:.6,roughness:.15}),6000)};
 for(const m of Object.values(meshes)){m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);m.frustumCulled=false;m.count=0;scene.add(m);}
 const doughGeometry=new THREE.TorusGeometry(1.15,.46,16,36),icingGeometry=new THREE.TorusGeometry(1.16,.33,12,36);
 function donutModel(){const g=new THREE.Group(),dough=new THREE.Mesh(doughGeometry,mat(0xe4ae67,{roughness:.65})),icing=new THREE.Mesh(icingGeometry,mat(0xff83b3,{roughness:.26,clearcoat:1}));g.add(dough,icing);icing.position.z=.18;icing.scale.z=.55;
  for(let i=0;i<22;i++){const a=i/22*Math.PI*2;part(g,'rounded',[0xffffff,0x69cff1,0xffe56b,0x927ce9][i%4],[Math.cos(a)*1.14,Math.sin(a)*1.14,.43],[.14,.055,.045],[0,0,a*.6]);}return g;
 }
 return {meshes,donuts,update:(state,t,poses,frustum,cam)=>{
  const ids=new Set((state.projectiles||[]).map(p=>p.id));for(const [id,g] of donuts)if(!ids.has(id)){scene.remove(g);donuts.delete(id);}
  for(const p of state.projectiles||[]){let g=donuts.get(p.id);if(!g){g=donutModel();donuts.set(p.id,g);scene.add(g);}const s=at(p.s,p.lane);g.position.set(s.x,s.y+1.7+Math.abs(Math.sin((t-p.created)*8))*.9,s.z);g.rotation.set(0,s.yaw+Math.PI/2,(t-p.created)*p.speed/1.6,'YXZ');}
  const counts={money:0,diamond:0};
  for(const volley of state.volleys||[]){if(t<volley.created||t>volley.impactAt)continue;const u=Math.max(0,Math.min(1,(t-volley.created)/(volley.impactAt-volley.created))),start=at(volley.sourceS,volley.sourceLane),mesh=meshes[volley.key];if(!mesh)continue;
   for(const id of volley.targets){const p=poses.get(id);if(!p||counts[volley.key]>=6000)continue;const end=carSurface(p,t,poses),height=Math.sin(u*Math.PI)*Math.min(90,4+Math.hypot(end.x-start.x,end.z-start.z)*.13);
    point.set(start.x+(end.x-start.x)*u,start.y+1.8+(end.y-start.y)*u+height,start.z+(end.z-start.z)*u);if(point.distanceToSquared(cam)>380*380||!frustum.containsPoint(point))continue;
    dummy.position.copy(point);direction.set(end.x-start.x,end.y-start.y+Math.cos(u*Math.PI)*16,end.z-start.z).normalize();dummy.quaternion.setFromUnitVectors(up,direction);dummy.scale.setScalar(volley.key==='diamond'?1.2:1);dummy.updateMatrix();mesh.setMatrixAt(counts[volley.key]++,dummy.matrix);
   }
  }
  for(const [key,mesh] of Object.entries(meshes)){mesh.count=counts[key];mesh.visible=mesh.count>0;if(mesh.count)mesh.instanceMatrix.needsUpdate=true;}
 }};
}
