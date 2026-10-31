// Portable Windows folder: Electron runtime plus the exact production dependency closure.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'release','Live Loop Racers');
if(process.platform!=='win32')throw new Error('This build packages the installed Windows Electron runtime. Run on Windows x64.');
if(fs.existsSync(out))throw new Error('release/Live Loop Racers already exists. Rename it before rebuilding to preserve previous builds.');
fs.mkdirSync(out,{recursive:true});fs.cpSync(path.join(root,'node_modules/electron/dist'),out,{recursive:true});
fs.renameSync(path.join(out,'electron.exe'),path.join(out,'Live Loop Racers.exe'));
const target=path.join(out,'resources','app');fs.mkdirSync(target,{recursive:true});
for(const name of ['desktop','server','shared','public','README_RU.md','LICENSE','THIRD_PARTY_LICENSES.md','package.json','package-lock.json'])fs.cpSync(path.join(root,name),path.join(target,name),{recursive:true});
const lock=JSON.parse(fs.readFileSync(path.join(root,'package-lock.json'),'utf8'));
for(const [name,pkg] of Object.entries(lock.packages)){if(!name.startsWith('node_modules/')||pkg.dev)continue;const from=path.join(root,name);if(!fs.existsSync(from))continue;fs.cpSync(from,path.join(target,name),{recursive:true});}
const packageJson=JSON.parse(fs.readFileSync(path.join(target,'package.json'),'utf8'));delete packageJson.devDependencies;delete packageJson.scripts;fs.writeFileSync(path.join(target,'package.json'),JSON.stringify(packageJson,null,2));
fs.copyFileSync(path.join(root,'README_RU.md'),path.join(out,'ПРОЧТИ МЕНЯ.md'));fs.copyFileSync(path.join(root,'THIRD_PARTY_LICENSES.md'),path.join(out,'ЛИЦЕНЗИИ.md'));
const verifyTarget=path.join(target,'verification');fs.mkdirSync(verifyTarget,{recursive:true});for(const file of fs.readdirSync(path.join(root,'verification')))if(fs.statSync(path.join(root,'verification',file)).isFile())fs.copyFileSync(path.join(root,'verification',file),path.join(verifyTarget,file));
console.log('Portable build: '+path.join(out,'Live Loop Racers.exe'));
