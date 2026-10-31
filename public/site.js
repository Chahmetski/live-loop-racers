const $=id=>document.getElementById(id);
let socket,state,initialized=false,pendingConnect=false,retryTimer,toastTimer;
const phases={enrollment:'Набор',countdown:'Старт',racing:'Гонка',overtime:'Последний круг',results:'Итоги'};
const overlay=new URLSearchParams(location.search).get('overlay')==='1';document.body.classList.toggle('overlay',overlay);
function admin(open){$('admin').hidden=!open;$('left-tools').classList.toggle('tools-hidden',!open);$('admin-toggle').setAttribute('aria-expanded',String(open));if(open&&!initialized)$('account').focus();}
function toast(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3000);}
function error(text){$('error').textContent=text;$('error').hidden=!text;}
function send(action,extra={}){if(socket?.readyState!==WebSocket.OPEN){error('Нет связи с игрой. Дождись переподключения или снова запусти run.bat.');return false;}socket.send(JSON.stringify({action,...extra}));return true;}
function updateObs(){const portrait=document.body.dataset.format==='portrait';$('obs-url').value=location.origin+'/?overlay=1';$('obs-size').textContent='Размер источника: '+(portrait?'1080 × 1920.':'1920 × 1080.');}
function render(s){state=s;document.body.dataset.format=s.settings.orientation;updateObs();
 if(!initialized){$('account').value=s.settings.account||'';initialized=true;}
 $('format').value=s.settings.orientation;$('quality').value=s.settings.quality;$('auto-rounds').checked=s.settings.autoRounds;
 $('connection').dataset.status=s.connection.status;$('connection').textContent=s.connection.message+(s.connection.status==='connected'&&Number.isFinite(s.connection.viewers)?' · Зрителей: '+s.connection.viewers:'');
 $('connect-live').disabled=pendingConnect||s.connection.status==='connecting';$('connect-live').textContent=s.connection.status==='connecting'?'Подключаем…':'⚡ Подключить LIVE';
 $('race-phase').textContent=phases[s.phase]||s.phase;$('racers').textContent=s.cars.length;
 const limits={enrollment:s.settings.enrollment,countdown:s.settings.countdown,racing:s.settings.duration,overtime:s.settings.extraTime,results:s.settings.results};const seconds=Math.max(0,Math.ceil((limits[s.phase]||0)-(s.phase==='racing'?s.raceTime:s.phaseTime)));$('race-timer').textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
 $('pause-race').textContent=s.paused?'▶ Продолжить':'Ⅱ Пауза';
}
function connect(){socket=new WebSocket(location.origin.replace(/^http/,'ws')+'/ws/panel');socket.onopen=()=>{$('local-status').textContent='● Игра работает';error('');};socket.onmessage=event=>{const message=JSON.parse(event.data);if(message.type==='state')render(message.data);if(message.type==='error'){pendingConnect=false;$('connect-live').disabled=false;error(message.message);}if(message.type==='ack'){if(message.action==='connect'){pendingConnect=false;toast('LIVE подключён');}if(message.action==='clear-simulated')toast('Тестовые участники убраны. Можно проводить эфир.');if(message.action==='settings')toast('Настройки сохранены');}};socket.onclose=()=>{pendingConnect=false;$('local-status').textContent='● Переподключаемся к игре…';$('connection').dataset.status='error';$('connection').textContent='Нет связи с локальной игрой. Повторяем подключение…';$('connect-live').disabled=true;clearTimeout(retryTimer);retryTimer=setTimeout(connect,1200);};socket.onerror=()=>{};}
$('admin-toggle').onclick=()=>admin($('admin').hidden);$('admin-close').onclick=()=>admin(false);
$('connect-form').onsubmit=event=>{event.preventDefault();error('');const account=$('account').value.trim().replace(/^@/,'');if(!/^[\w.]{2,64}$/.test(account)){error('Введи ник TikTok без ссылки, например yourname.');return;}if(send('connect',{account})){pendingConnect=true;$('connect-live').disabled=true;}};
$('disconnect-live').onclick=()=>{pendingConnect=false;send('disconnect');};$('start-race').onclick=()=>send('start');$('pause-race').onclick=()=>send('pause');$('clear-test').onclick=()=>send('clear-simulated');
$('auto-rounds').onchange=event=>send('settings',{value:{autoRounds:event.target.checked}});$('format').onchange=event=>send('settings',{value:{orientation:event.target.value}});$('quality').onchange=event=>send('settings',{value:{quality:event.target.value}});
$('demo').onclick=()=>send('test',{kind:'join',count:12});$('test-rose').onclick=()=>{if(!state?.cars.length){toast('Сначала нажми «＋ 12 машин» и «Начать гонку».');return;}send('test',{kind:'gift',key:'rose',i:0});};
$('sound').onclick=()=>{const button=$('game-frame').contentDocument?.getElementById('audio-start');if(button){button.click();toast('Звук включён');}};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Нажми F11 для полного экрана');}};
$('copy-obs').onclick=async()=>{try{await navigator.clipboard.writeText($('obs-url').value);toast('Адрес для OBS скопирован');}catch{$('obs-url').focus();$('obs-url').select();toast('Выделил адрес. Нажми Ctrl+C, чтобы скопировать.');}};

document.addEventListener('keydown',event=>{if(event.key==='Escape'){admin(false);}if(event.key.toLowerCase()==='a'&&!event.ctrlKey&&!event.altKey&&!event.metaKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)){admin($('admin').hidden);event.preventDefault();}});
addEventListener('message',event=>{if(event.origin!==location.origin||![ $('game-frame').contentWindow,$('tools-frame').contentWindow ].includes(event.source)||event.data?.type!=='game-key')return;if(event.data.key?.toLowerCase()==='a')admin($('admin').hidden);if(event.data.key==='Escape'){admin(false);}});
admin(!overlay&&matchMedia('(min-width:1100px)').matches);updateObs();connect();
