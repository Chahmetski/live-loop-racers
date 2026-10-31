import fs from 'node:fs';
import path from 'node:path';
export class Store {
 constructor(dir){this.dir=dir;this.file=path.join(dir,'save.json');fs.mkdirSync(dir,{recursive:true});}
 load(){for(const file of [this.file,this.file+'.bak'])try{const d=JSON.parse(fs.readFileSync(file,'utf8'));if(d.version===1&&d.settings&&Array.isArray(d.rating))return d;}catch{}return null;}
 save(data){const temporary=this.file+'.tmp';fs.writeFileSync(temporary,JSON.stringify({...data,version:1},null,2));if(fs.existsSync(this.file))fs.copyFileSync(this.file,this.file+'.bak');fs.renameSync(temporary,this.file);}
}
