// Refresh this project's portable app without deleting its Electron runtime.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'release','Live Loop Racers'),target=path.join(out,'resources','app');
if(!fs.existsSync(path.join(out,'Live Loop Racers.exe')))throw Error('Build the portable runtime first with build.bat.');
if(!target.startsWith(root+path.sep)||path.basename(target)!=='app')throw Error('Invalid application output path.');
for(const name of ['desktop','server','shared','public','README_RU.md','LICENSE','THIRD_PARTY_LICENSES.md','package.json','package-lock.json'])fs.cpSync(path.join(root,name),path.join(target,name),{recursive:true});
const p=JSON.parse(fs.readFileSync(path.join(target,'package.json'),'utf8'));delete p.devDependencies;delete p.scripts;fs.writeFileSync(path.join(target,'package.json'),JSON.stringify(p,null,2)+'\n');
fs.mkdirSync(path.join(target,'scripts'),{recursive:true});fs.copyFileSync(path.join(root,'scripts/start-browser.ps1'),path.join(target,'scripts/start-browser.ps1'));
fs.writeFileSync(path.join(out,'browser.bat'),'@echo off\r\npowershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0resources\\app\\scripts\\start-browser.ps1"\r\nif errorlevel 1 pause\r\n');
const lock=JSON.parse(fs.readFileSync(path.join(root,'package-lock.json'),'utf8'));
for(const [name,pkg] of Object.entries(lock.packages)){if(!name.startsWith('node_modules/')||pkg.dev)continue;const from=path.join(root,name);if(fs.existsSync(from))fs.cpSync(from,path.join(target,name),{recursive:true});}
fs.copyFileSync(path.join(root,'README_RU.md'),path.join(out,'ПРОЧТИ МЕНЯ.md'));fs.copyFileSync(path.join(root,'THIRD_PARTY_LICENSES.md'),path.join(out,'ЛИЦЕНЗИИ.md'));
const verify=path.join(target,'verification');fs.mkdirSync(verify,{recursive:true});for(const file of fs.readdirSync(path.join(root,'verification')))if(fs.statSync(path.join(root,'verification',file)).isFile()&&!file.includes('error'))fs.copyFileSync(path.join(root,'verification',file),path.join(verify,file));
console.log('Updated portable application '+p.version+': '+path.join(out,'Live Loop Racers.exe'));
