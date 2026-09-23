const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);const el=document.getElementById('fit');if(el)el.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit6a_school_reunion_v1';
const SECTIONS=['jobs','match','grammar','pron','reading','builder','listening','passport'];
const LABELS={jobs:'Jobs',match:'Job Match',grammar:'Present Simple',pron:'Third Person -s',reading:'English at Work',builder:'Sentence Builder',listening:'School Reunion',passport:'Reunion Passport'};

const data={
 jobs:[
  {q:'She helps sick people. What does she do?',a:'She’s a doctor.',o:['She’s a doctor.','She’s a journalist.','She’s a waitress.'],audio:'doctor'},
  {q:'He makes cars in a factory. What does he do?',a:'He’s a factory worker.',o:['He’s a factory worker.','He’s a taxi driver.','He’s a teacher.'],audio:'factory worker'},
  {q:'She writes for a newspaper. What does she do?',a:'She’s a journalist.',o:['She’s a journalist.','She’s a nurse.','She’s a receptionist.'],audio:'journalist'},
  {q:'He works in a hospital and helps patients. What does he do?',a:'He’s a nurse.',o:['He’s a nurse.','He’s a waiter.','He’s a student.'],audio:'nurse'},
  {q:'She welcomes people in a hotel and answers the phone. What does she do?',a:'She’s a receptionist.',o:['She’s a receptionist.','She’s a policewoman.','She’s a shop assistant.'],audio:'receptionist'},
  {q:'He helps customers in a clothes shop. What does he do?',a:'He’s a shop assistant.',o:['He’s a shop assistant.','He’s a teacher.','He’s a taxi driver.'],audio:'shop assistant'},
  {q:'She teaches children at school. What does she do?',a:'She’s a teacher.',o:['She’s a teacher.','She’s a waitress.','She’s a doctor.'],audio:'teacher'},
  {q:'He drives people around the city. What does he do?',a:'He’s a taxi driver.',o:['He’s a taxi driver.','He’s a factory worker.','He’s a journalist.'],audio:'taxi driver'},
  {q:'She serves food in a restaurant. What does she do?',a:'She’s a waitress.',o:['She’s a waitress.','She’s a receptionist.','She’s a nurse.'],audio:'waitress'},
  {q:'He studies English and French at university. What does he do?',a:'He’s a student.',o:['He’s a student.','He’s a waiter.','He’s a policeman.'],audio:'student'}
 ],
 matchRounds:[
  [
   {en:'doctor',ru:'врач'},
   {en:'teacher',ru:'учитель / преподаватель'},
   {en:'receptionist',ru:'администратор / сотрудник ресепшена'},
   {en:'factory worker',ru:'рабочий на фабрике'}
  ],
  [
   {en:'journalist',ru:'журналист'},
   {en:'nurse',ru:'медбрат / медсестра'},
   {en:'shop assistant',ru:'продавец-консультант'},
   {en:'taxi driver',ru:'водитель такси'}
  ]
 ],
 grammar:[
  {q:'Laura ___ for a newspaper.',a:'works',o:['work','works','working'],model:'Laura works for a newspaper.',hint:'С he / she / it в утвердительном предложении обычно добавляем -s.'},
  {q:'My brother ___ French.',a:'teaches',o:['teach','teaches','teachs'],model:'My brother teaches French.',hint:'После -ch добавляем -es: teach → teaches.'},
  {q:'She ___ glasses.',a:'doesn’t wear',o:["don’t wear","doesn’t wear","doesn’t wears"],model:'She doesn’t wear glasses.',hint:'После doesn’t основной глагол идёт без -s.'},
  {q:'___ he work in an office?',a:'Does',o:['Do','Does','Is'],model:'Does he work in an office?',hint:'В вопросе с he / she / it используем Does + глагол без -s.'},
  {q:'Where ___ your wife work?',a:'does',o:['do','does','is'],model:'Where does your wife work?',hint:'Where + does + she/he + verb...'},
  {q:'Andrew ___ two brothers.',a:'has',o:['have','has','haves'],model:'Andrew has two brothers.',hint:'have → has с he / she / it.'},
  {q:'The programme ___ at 9.30.',a:'finishes',o:['finish','finishes','finishs'],model:'The programme finishes at nine thirty.',hint:'После -sh добавляем -es: finish → finishes.'},
  {q:'Maria ___ a new car.',a:'doesn’t need',o:["don’t need","doesn’t need","doesn’t needs"],model:'Maria doesn’t need a new car.',hint:'Doesn’t уже показывает 3-е лицо, поэтому need без -s.'},
  {q:'___ she like cats?',a:'Does',o:['Do','Does','Has'],model:'Does she like cats?',hint:'Does + she + like...'},
  {q:'John ___ to university in Manchester.',a:'goes',o:['go','goes','gos'],model:'John goes to university in Manchester.',hint:'go → goes.'}
 ],
 pron:[
  {q:'Listen: “works”. What is the final sound?',a:'/s/',o:['/s/','/z/','/ɪz/'],audio:'works'},
  {q:'Listen: “likes”. What is the final sound?',a:'/s/',o:['/s/','/z/','/ɪz/'],audio:'likes'},
  {q:'Listen: “lives”. What is the final sound?',a:'/z/',o:['/s/','/z/','/ɪz/'],audio:'lives'},
  {q:'Listen: “reads”. What is the final sound?',a:'/z/',o:['/s/','/z/','/ɪz/'],audio:'reads'},
  {q:'Listen: “goes”. What is the final sound?',a:'/z/',o:['/s/','/z/','/ɪz/'],audio:'goes'},
  {q:'Listen: “has”. What is the final sound?',a:'/z/',o:['/s/','/z/','/ɪz/'],audio:'has'},
  {q:'Listen: “teaches”. What is the final sound?',a:'/ɪz/',o:['/s/','/z/','/ɪz/'],audio:'teaches'},
  {q:'Listen: “finishes”. What is the final sound?',a:'/ɪz/',o:['/s/','/z/','/ɪz/'],audio:'finishes'},
  {q:'Listen: “watches”. What is the final sound?',a:'/ɪz/',o:['/s/','/z/','/ɪz/'],audio:'watches'}
 ],
 reading:{
  html:`<b>English at work</b><br><br><b>Marco</b> is a waiter in a busy restaurant in Madrid. He speaks Spanish at work, but he also uses English every day because many customers are tourists. He helps customers with the menu and explains the special dishes. He likes his job because he meets people from different countries.<br><br><b>Sofia</b> is a receptionist for an international company in Lisbon. She works in an office. She welcomes visitors and answers the phone. English is the language of the company, so she uses it every day. She likes her job because every day is different.`,
  audio:[
   'English at work.',
   'Marco is a waiter in a busy restaurant in Madrid.',
   'He speaks Spanish at work, but he also uses English every day because many customers are tourists.',
   'He helps customers with the menu and explains the special dishes.',
   'He likes his job because he meets people from different countries.',
   'Sofia is a receptionist for an international company in Lisbon.',
   'She works in an office. She welcomes visitors and answers the phone.',
   'English is the language of the company, so she uses it every day.',
   'She likes her job because every day is different.'
  ],
  qs:[
   {q:'What does Marco do?',a:'He’s a waiter.',o:['He’s a waiter.','He’s a journalist.','He’s a receptionist.'],hint:'Ищи первое предложение про Marco.'},
   {q:'Why does Marco use English at work?',a:'Because many customers are tourists.',o:['Because many customers are tourists.','Because he lives in London.','Because his family speaks English.'],hint:'Найди предложение со словом tourists.'},
   {q:'What does Marco help customers with?',a:'The menu.',o:['The menu.','Their passports.','Their cars.'],hint:'Найди: He helps customers with...'},
   {q:'What does Sofia do?',a:'She’s a receptionist.',o:['She’s a receptionist.','She’s a nurse.','She’s a teacher.'],hint:'Смотри начало второго абзаца.'},
   {q:'Where does Sofia work?',a:'In an office.',o:['In an office.','In a hospital.','In a restaurant.'],hint:'Найди: She works...'},
   {q:'Why does Sofia use English every day?',a:'It’s the language of the company.',o:["It’s the language of the company.",'She is from England.','She teaches English.'],hint:'Ищи предложение: English is...'}
  ]
 },
 builder:[
  {cue:'Она работает в офисе.',tokens:['She','works','in','an','office.'],audio:'She works in an office.'},
  {cue:'Он преподаёт французский.',tokens:['He','teaches','French.'],audio:'He teaches French.'},
  {cue:'Она не носит очки.',tokens:['She',"doesn’t",'wear','glasses.'],audio:'She doesn’t wear glasses.'},
  {cue:'Кем он работает?',tokens:['What','does','he','do?'],audio:'What does he do?'},
  {cue:'Где она работает?',tokens:['Where','does','she','work?'],audio:'Where does she work?'},
  {cue:'Он работает в больнице.',tokens:['He','works','in','a','hospital.'],audio:'He works in a hospital.'},
  {cue:'Она работает на большую компанию.',tokens:['She','works','for','a','big','company.'],audio:'She works for a big company.'},
  {cue:'Ему нравится его работа.',tokens:['He','likes','his','job.'],audio:'He likes his job.'}
 ],
 listening:{
  lines:[
   {speaker:'Mia',text:'Hi, Jack! Is that you?'},
   {speaker:'Jack',text:'Mia! What a nice surprise. How are you?'},
   {speaker:'Mia',text:'Great. Do you remember Sophie?'},
   {speaker:'Jack',text:'Yes, of course. What does she do now?'},
   {speaker:'Mia',text:'She works in a hospital. She is a doctor.'},
   {speaker:'Jack',text:'Does she live in London?'},
   {speaker:'Mia',text:'No, she does not. She lives in Bristol.'},
   {speaker:'Jack',text:'And Ben?'},
   {speaker:'Mia',text:'He teaches English in a school.'},
   {speaker:'Jack',text:'Does he like his job?'},
   {speaker:'Mia',text:'Yes, he does. He loves it.'}
  ],
  qs:[
   {q:'Who does Mia ask about first?',a:'Sophie',o:['Sophie','Ben','Laura'],hint:'Прослушай начало разговора.'},
   {q:'What does Sophie do?',a:'She’s a doctor.',o:['She’s a doctor.','She’s a teacher.','She’s a journalist.'],hint:'Она работает in a hospital.'},
   {q:'Where does Sophie live?',a:'In Bristol.',o:['In Bristol.','In London.','In Madrid.'],hint:'Jack спрашивает: Does she live in London?'},
   {q:'What does Ben teach?',a:'English.',o:['English.','French.','Maths.'],hint:'Слушай фразу He teaches...'},
   {q:'Where does Ben work?',a:'In a school.',o:['In a school.','In an office.','In a restaurant.'],hint:'Фраза заканчивается: in a school.'},
   {q:'Does Ben like his job?',a:'Yes, he does.',o:['Yes, he does.','No, he doesn’t.','The dialogue doesn’t say.'],hint:'Последние две реплики.'}
  ]
 },
 passport:[
  {name:'Maya',clue:'She helps sick people.',audio:'Maya helps sick people.',job:'nurse',place:'in a hospital',jobs:['nurse','journalist','teacher','waitress'],places:['in a hospital','in an office','in a school','in a restaurant'],hint:'sick people → hospital'},
  {name:'Leo',clue:'He writes for a newspaper.',audio:'Leo writes for a newspaper.',job:'journalist',place:'in an office',jobs:['journalist','taxi driver','shop assistant','factory worker'],places:['in an office','in the street','in a shop','in a factory'],hint:'newspaper → journalist'},
  {name:'Nina',clue:'She teaches children.',audio:'Nina teaches children.',job:'teacher',place:'in a school',jobs:['teacher','doctor','receptionist','waitress'],places:['in a school','in a hospital','in a hotel','in a restaurant'],hint:'teaches children → school'},
  {name:'Dan',clue:'He serves food to customers.',audio:'Dan serves food to customers.',job:'waiter',place:'in a restaurant',jobs:['waiter','nurse','journalist','taxi driver'],places:['in a restaurant','in a hospital','in an office','in the street'],hint:'serves food → restaurant'},
  {name:'Emma',clue:'She helps customers buy clothes.',audio:'Emma helps customers buy clothes.',job:'shop assistant',place:'in a shop',jobs:['shop assistant','teacher','receptionist','doctor'],places:['in a shop','in a school','in a hotel','in a hospital'],hint:'customers + clothes → shop'},
  {name:'Sam',clue:'He makes cars.',audio:'Sam makes cars.',job:'factory worker',place:'in a factory',jobs:['factory worker','policeman','student','waiter'],places:['in a factory','in the street','at university','in a restaurant'],hint:'makes cars → factory'}
 ]
};

const MAX={jobs:data.jobs.length,match:8,grammar:data.grammar.length,pron:data.pron.length,reading:data.reading.qs.length,builder:data.builder.length,listening:data.listening.qs.length,passport:data.passport.length};
const fresh=()=>({screen:0,idx:{jobs:0,grammar:0,pron:0,reading:0,builder:0,listening:0,passport:0},answers:{jobs:{},match:{},grammar:{},pron:{},reading:{},builder:{},listening:{},passport:{}},mistakes:{},match:{round:0,selected:null,done:{}},builderChosen:[],passportSel:{job:null,place:null}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...(s.answers||{})},match:{...fresh().match,...(s.match||{})},passportSel:{...fresh().passportSel,...(s.passportSel||{})}}}catch(e){}
state.screen=0;
let devMode=false;
const qp=new URLSearchParams(location.search);
if(qp.get('dev')==='1'){devMode=true;const sc=Number(qp.get('screen'));if(Number.isFinite(sc)&&sc>=0&&sc<=9)state.screen=sc;const t=Number(qp.get('task'));if(Number.isFinite(t)&&t>=0)setCurrentTask(t)}

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 6A · A school reunion</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 6A</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>${devMode?devPanel():''}`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p>${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function miniProgressPairs(done,total=8){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<done?'done':i===done&&done<total?'current':''}"></i>`).join('')}</div><div class="counter">Найдено пар ${done} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}

let currentAudio=null,playToken=0,currentUtterance=null;
const ttsAudio=document.createElement('audio');ttsAudio.preload='auto';ttsAudio.setAttribute('playsinline','');ttsAudio.setAttribute('webkit-playsinline','');ttsAudio.referrerPolicy='no-referrer';ttsAudio.style.display='none';document.body.appendChild(ttsAudio);
function providerUrls(text){const q=encodeURIComponent(text.replace(/\s+/g,' ').trim());return [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`,`https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.google.co.uk/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`]}
function splitTTS(text,max=180){const clean=text.replace(/\s+/g,' ').trim();if(clean.length<=max)return [clean];const out=[];let rest=clean;while(rest.length){if(rest.length<=max){out.push(rest);break}let cut=-1;for(const mark of ['. ','? ','! ',', ','; ']){const i=rest.lastIndexOf(mark,max);if(i>Math.floor(max*.48)){cut=i+mark.length-1;break}}if(cut<0){cut=rest.lastIndexOf(' ',max);if(cut<Math.floor(max*.48))cut=max}out.push(rest.slice(0,cut).trim());rest=rest.slice(cut).trim()}return out.filter(Boolean)}
function stopAudio(){playToken++;try{ttsAudio.pause();ttsAudio.removeAttribute('src');ttsAudio.load()}catch(e){}try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}currentAudio=null;currentUtterance=null}
function playUrl(url,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));const a=ttsAudio;currentAudio=a;let finished=false;const cleanup=()=>{a.onended=a.onerror=a.onabort=null;clearTimeout(timer)};const timer=setTimeout(()=>{if(finished)return;finished=true;cleanup();reject(new Error('timeout'))},18000);a.onended=()=>{if(finished)return;finished=true;cleanup();resolve()};a.onerror=()=>{if(finished)return;finished=true;cleanup();reject(new Error('audio error'))};a.onabort=()=>{if(finished)return;finished=true;cleanup();reject(new Error('aborted'))};a.src=url;a.currentTime=0;a.load();const p=a.play();if(p&&p.catch)p.catch(e=>{if(finished)return;finished=true;cleanup();reject(e)})})}
async function playChunk(text,token){let err=null;for(const url of providerUrls(text)){try{await playUrl(url,token);return}catch(e){err=e}}throw err||new Error('audio unavailable')}
async function playSequence(texts,btn,idle='▶ Прослушать'){stopAudio();const token=++playToken;btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const t of texts){if(token!==playToken)return;await playChunk(t,token)}if(token===playToken){btn?.classList.remove('busy');if(btn)btn.textContent=idle}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');if(btn)btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');if(btn)btn.textContent=idle},2200)}}}
function playText(text,btn,idle='▶ Прослушать'){return playSequence(splitTTS(text),btn,idle)}
function playScript(lines,btn,label='Диалог'){return playSequence(lines.flatMap(x=>splitTTS(x.text,110)),btn,`▶ ${label}`)}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}

function slotFallback(icon,titleText,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(titleText)}</strong><span>${esc(caption)}</span><small>WOW SCHOOL</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit6a.jpg" alt="Beginner Unit 6A A school reunion preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('🎓','A school reunion','jobs · places of work · he / she / it · listening · pronunciation')}</div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="English at work" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📱','English at Work','reading · people · jobs · workplaces')}</div>`}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">English File Beginner · Unit 6A</div><h1><span>A school reunion</span></h1><p>Работа и профессии, present simple с <b>he / she / it</b>, произношение окончания <b>-s / -es</b>, чтение, аудирование и разговорные модели.</p><div class="heroBtns"><button class="btn primary" id="startBtn">Начать →</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('startBtn').onclick=()=>{state.screen=1;save();render()};
}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,audioLabel='Слово',helpText=''){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div>${helpText?`<div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="hintPanel"></div>`:''}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',audioLabel):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${audioLabel}`}else playText(audioText,this,`▶ ${audioLabel}`)}}
 if(helpText){document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('hintPanel');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(helpText)}</div>`}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
 bindDevButtons();
}

function jobs(){const sec='jobs',idx=state.idx.jobs||0,item=data.jobs[idx];commonQuestionScreen(sec,1,'Jobs','Профессии · значение · произношение',visualSlot('block1-jobs.jpg','💼','Jobs','doctor · journalist · teacher · receptionist','People at a school reunion talking about jobs'),item,data.jobs.length,item.audio,()=>{state.screen=2;save();render()},'Слово')}

function match(){
 const sec='match',round=state.match.round||0,pairs=data.matchRounds[round],globalStart=round*4,doneKeys=Object.keys(state.match.done||{}).filter(k=>state.match.done[k]).map(Number),roundDone=pairs.every((_,i)=>state.match.done[globalStart+i]),totalDone=doneKeys.length;
 const right=[...pairs].sort((a,b)=>a.ru.localeCompare(b.ru,'ru'));
 app.innerHTML=shell(`${title(2,'Job Match','Соедини английское слово и русский перевод')}<div class="blockBody"><div class="visualCard">${visualSlot('block2-match.jpg','🔗','Job Match','English ↔ Русский','Matching jobs at a reunion')}</div><div class="questionCard matchQuestion"><div class="kicker">JOB MATCH · РАУНД ${round+1}/2</div><div class="prompt">Find all 4 pairs.</div><div class="subprompt">Сначала выбери слово слева, затем его перевод справа.</div><div class="taskScroll"><div class="matchCanvas" id="matchCanvas"><svg class="matchSvg" id="matchSvg"></svg><div class="matchCol"><div class="matchColTitle">English</div>${pairs.map((p,i)=>`<button class="pairBtn ${state.match.done[globalStart+i]?'matched':''} ${state.match.selected===globalStart+i?'selected':''}" data-left="${globalStart+i}">${esc(p.en)}</button>`).join('')}</div><div class="matchCol"><div class="matchColTitle">Русский</div>${right.map(p=>{const gi=globalStart+pairs.findIndex(x=>x.en===p.en);return `<button class="pairBtn ${state.match.done[gi]?'matched':''}" data-right="${gi}">${esc(p.ru)}</button>`}).join('')}</div></div></div><div class="statusWrap"><div id="fb">${roundDone?feedback('good','Все пары этого раунда найдены!'):feedback('neutral','Выбери слово слева.')}</div>${miniProgressPairs(totalDone,8)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${roundDone?'':'disabled'}>${round===1?'Следующий блок →':'Следующий раунд →'}</button></div>`);
 document.getElementById('allWords').onclick=function(){playSequence(pairs.map(p=>p.en),this,'▶ Все слова')};
 document.querySelectorAll('[data-left]').forEach(b=>b.onclick=()=>{const i=+b.dataset.left;if(state.match.done[i])return;state.match.selected=i;save();render()});
 document.querySelectorAll('[data-right]').forEach(b=>b.onclick=()=>{const ri=+b.dataset.right;if(state.match.done[ri])return;const li=state.match.selected;if(li===null||li===undefined){document.getElementById('fb').innerHTML=feedback('neutral','Сначала выбери английское слово слева.');return}const ok=li===ri;recordAttempt(sec,li,ok);if(ok){state.match.done[li]=true;state.match.selected=null;save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Эти слова не пара. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(round===0){state.match.round=1;state.match.selected=null;save();render()}else{state.screen=3;save();render()}};
 requestAnimationFrame(drawMatchLines);bindDevButtons();
}
function drawMatchLines(){const svg=document.getElementById('matchSvg'),canvas=document.getElementById('matchCanvas');if(!svg||!canvas)return;const sr=svg.getBoundingClientRect();if(!sr.width||!sr.height)return;svg.setAttribute('viewBox',`0 0 ${sr.width} ${sr.height}`);let html='';document.querySelectorAll('[data-left].matched').forEach(l=>{const i=+l.dataset.left,r=document.querySelector(`[data-right="${i}"]`);if(!r)return;const a=l.getBoundingClientRect(),b=r.getBoundingClientRect();const x1=a.right-sr.left,y1=a.top+a.height/2-sr.top,x2=b.left-sr.left,y2=b.top+b.height/2-sr.top,c=(x2-x1)*.45;html+=`<path class="matchLine done" d="M ${x1} ${y1} C ${x1+c} ${y1}, ${x2-c} ${y2}, ${x2} ${y2}"/>`});svg.innerHTML=html}

function grammar(){const sec='grammar',idx=state.idx.grammar||0,item=data.grammar[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(3,'Present Simple','he · she · it')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-grammar.jpg','⚙️','Present Simple','works · doesn’t work · Does she work?','Former classmates talking about work')}</div><div class="questionCard"><div class="kicker">PRESENT SIMPLE</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Выбери правильную форму.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="helpRow"><button class="helpBtn" id="ruleBtn">Правило</button>${done?'<button class="helpBtn" id="modelBtn">▶ Модель</button>':''}</div><div id="helpPanel"></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Выбери форму')}</div>${miniProgress(sec,idx,data.grammar.length)}</div></div></div><div class="footerActions"><div class="leftActions"></div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.grammar.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Открой правило или попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('ruleBtn').onclick=()=>{const p=document.getElementById('helpPanel');p.innerHTML=p.innerHTML?'':`<div class="helpPanel"><b>he / she / it</b>: обычно добавляем <b>-s / -es</b>. Отрицание: <b>doesn’t + verb</b>. Вопрос: <b>Does + he/she/it + verb?</b><br><br>${esc(item.hint)}</div>`};
 if(done)document.getElementById('modelBtn').onclick=function(){playText(item.model,this,'▶ Модель')};
 document.getElementById('next').onclick=()=>{if(idx<data.grammar.length-1){state.idx.grammar=idx+1;save();render()}else{state.screen=4;save();render()}};bindDevButtons();
}

function pron(){const sec='pron',idx=state.idx.pron||0,item=data.pron[idx];commonQuestionScreen(sec,4,'Third Person -s','works /s/ · lives /z/ · watches /ɪz/',visualSlot('block4-pronunciation.jpg','🗣️','Third Person -s','Listen · notice the final sound','Pronunciation practice with jobs and work'),item,data.pron.length,item.audio,()=>{state.screen=5;save();render()},'Слово','works /s/ · lives /z/ · watches /ɪz/. После -sh / -ch окончание часто звучит /ɪz/.')}

function reading(){
 const sec='reading',idx=state.idx.reading||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'English at Work','Прочитай · при желании прослушай · ответь')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.html}</div></div></div><div class="questionCard"><div class="kicker">READING</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь по тексту.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="hintPanel"></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Текст всегда доступен слева')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('hintPanel');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(item.hint)}</div>`};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту или открой подсказку.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx.reading=idx+1;save();render()}else{state.screen=6;save();render()}};bindDevButtons();
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function builder(){
 const sec='builder',idx=state.idx.builder||0,item=data.builder[idx],done=solved(sec,idx),chosen=state.builderChosen||[],shuffled=shuffleTokens(item.tokens,idx+31);
 app.innerHTML=shell(`${title(6,'Sentence Builder','Собери предложение')}<div class="blockBody"><div class="visualCard">${visualSlot('block6-sentence-builder.jpg','🧩','Sentence Builder','Build the phrase · then listen','Sentence cards on a study table')}</div><div class="questionCard"><div class="kicker">SENTENCE BUILDER</div><div class="prompt">Build the sentence.</div><div class="builderCueRu">${esc(item.cue)}</div><div class="taskScroll"><div class="builderWrap"><div class="builderResult" id="builderResult">${chosen.length?chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join(''):'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в нужном порядке.</span>'}</div><div class="builderTokens">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}" ${done?'disabled':''}>${esc(x.t)}</button>`).join('')}</div></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Готово! Прослушай правильную фразу.'):feedback('neutral','Собери все слова')}</div>${miniProgress(sec,idx,data.builder.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.builder.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
 document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{if(done)return;const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});state.builderChosen=chosen;save();checkBuilder(item,idx)});
 document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{if(done)return;chosen.splice(+b.dataset.remove,1);state.builderChosen=chosen;save();render()});
 document.getElementById('builderResult').ondblclick=()=>{if(done)return;state.builderChosen=[];save();render()};
 document.getElementById('next').onclick=()=>{if(idx<data.builder.length-1){state.idx.builder=idx+1;state.builderChosen=[];save();render()}else{state.screen=7;state.builderChosen=[];save();render()}};bindDevButtons();
}
function checkBuilder(item,idx){const chosen=state.builderChosen||[];if(chosen.length<item.tokens.length){render();return}const ok=chosen.map(x=>x.t).join(' ')===item.tokens.join(' ');recordAttempt('builder',idx,ok);if(ok){playText(item.audio,null);render()}else{state.builderChosen=[];save();render();setTimeout(()=>{const fb=document.getElementById('fb');if(fb)fb.innerHTML=feedback('bad','Порядок неверный. Попробуй ещё раз.')},20)}}

function transcriptHTML(){return data.listening.lines.map(x=>`<p><b>${esc(x.speaker)}:</b> ${esc(x.text)}</p>`).join('')}
function listening(){
 const sec='listening',idx=state.idx.listening||0,item=data.listening.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o),show=!!state.showTranscript;
 app.innerHTML=shell(`${title(7,'School Reunion','Послушай короткий диалог · текст можно открыть')}<div class="blockBody"><div class="visualCard"><div style="width:100%;height:100%;display:flex;flex-direction:column;gap:10px;min-height:0"><div style="flex:1;min-height:0">${visualSlot('block7-listening.jpg','🎧','School Reunion','Old school friends meet again','Two former classmates at a reunion')}</div><div class="helpRow" style="flex:0 0 auto"><button class="helpBtn" id="transcriptBtn">${show?'Скрыть текст':'Показать текст'}</button></div>${show?`<div class="transcriptPanel" style="flex:0 0 150px">${transcriptHTML()}</div>`:''}</div></div><div class="questionCard"><div class="kicker">LISTENING</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Можно слушать несколько раз. Если сложно — открой текст слева.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="hintPanel"></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listening.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio','Диалог')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listening.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){playScript(data.listening.lines,this,'Диалог')};
 document.getElementById('transcriptBtn').onclick=()=>{state.showTranscript=!show;save();render()};
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('hintPanel');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(item.hint)}</div>`};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listening.qs.length-1){state.idx.listening=idx+1;save();render()}else{state.screen=8;save();render()}};bindDevButtons();
}

function passport(){
 const sec='passport',idx=state.idx.passport||0,item=data.passport[idx],done=solved(sec,idx),sel=state.passportSel||{job:null,place:null};
 app.innerHTML=shell(`${title(8,'Reunion Passport','Собери профиль: профессия + место работы')}<div class="blockBody"><div class="visualCard">${visualSlot('block8-reunion-passport.jpg','🪪','Reunion Passport','Read the clue · complete the work profile','Reunion profile cards and work clues')}</div><div class="questionCard"><div class="passportTop"><div><div class="kicker">PROFILE ${idx+1}/${data.passport.length}</div><div class="prompt">${esc(item.name)}</div><div class="subprompt">${esc(item.clue)}</div></div><div class="passportStamp ${done?'show':''}">MATCHED ✓</div></div><div class="taskScroll"><div class="passportGrid"><div class="passportGroup"><strong>Job</strong><div class="passportChoices">${item.jobs.map(x=>`<button class="passportChoice ${sel.job===x?'sel':''}" data-job="${esc(x)}" ${done?'disabled':''}>${esc(x)}</button>`).join('')}</div></div><div class="passportGroup"><strong>Workplace</strong><div class="passportChoices">${item.places.map(x=>`<button class="passportChoice ${sel.place===x?'sel':''}" data-place="${esc(x)}" ${done?'disabled':''}>${esc(x)}</button>`).join('')}</div></div></div><div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button><button class="helpBtn" id="checkBtn" ${done?'disabled':''}>Проверить профиль</button></div><div id="hintPanel"></div></div><div class="statusWrap"><div id="fb">${done?feedback('good',`${esc(item.name)}: ${esc(item.job)} · ${esc(item.place)}`):feedback('neutral','Выбери профессию и место работы')}</div>${miniProgress(sec,idx,data.passport.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('clueAudio','Фраза')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.passport.length-1?'Результаты →':'Следующий профиль →'}</button></div>`);
 document.getElementById('clueAudio').onclick=function(){playText(item.audio,this,'▶ Фраза')};
 document.querySelectorAll('[data-job]').forEach(b=>b.onclick=()=>{if(done)return;state.passportSel.job=b.dataset.job;save();render()});
 document.querySelectorAll('[data-place]').forEach(b=>b.onclick=()=>{if(done)return;state.passportSel.place=b.dataset.place;save();render()});
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('hintPanel');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(item.hint)}</div>`};
 document.getElementById('checkBtn').onclick=()=>{if(!state.passportSel.job||!state.passportSel.place){document.getElementById('fb').innerHTML=feedback('neutral','Сначала выбери оба варианта.');return}const ok=state.passportSel.job===item.job&&state.passportSel.place===item.place;recordAttempt(sec,idx,ok);if(ok){playText(`${item.name} is a ${item.job}. ${item.name} works ${item.place}.`,null);save();render()}else{document.getElementById('fb').innerHTML=feedback('bad','Профиль пока не совпадает. Проверь оба выбора.')}};
 document.getElementById('next').onclick=()=>{if(idx<data.passport.length-1){state.idx.passport=idx+1;state.passportSel={job:null,place:null};save();render()}else{state.screen=9;state.passportSel={job:null,place:null};save();render()}};bindDevButtons();
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 6A · A school reunion</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};bindDevButtons();
}

function currentTask(){const m={1:['jobs',data.jobs.length],2:['match',2],3:['grammar',data.grammar.length],4:['pron',data.pron.length],5:['reading',data.reading.qs.length],6:['builder',data.builder.length],7:['listening',data.listening.qs.length],8:['passport',data.passport.length]};if(!m[state.screen])return [null,0,0];const [sec,total]=m[state.screen];let idx=0;if(sec==='match')idx=state.match.round||0;else idx=state.idx[sec]||0;return [sec,idx,total]}
function setCurrentTask(i){const m={1:['jobs',data.jobs.length],2:['match',2],3:['grammar',data.grammar.length],4:['pron',data.pron.length],5:['reading',data.reading.qs.length],6:['builder',data.builder.length],7:['listening',data.listening.qs.length],8:['passport',data.passport.length]};if(!m[state.screen])return;const [sec,total]=m[state.screen],idx=Math.max(0,Math.min(total-1,i));if(sec==='match'){state.match.round=idx;state.match.selected=null}else{state.idx[sec]=idx;if(sec==='builder')state.builderChosen=[];if(sec==='passport')state.passportSel={job:null,place:null}}}
function jumpTask(delta){const [sec,idx,total]=currentTask();if(!sec)return;if(idx+delta>=0&&idx+delta<total){setCurrentTask(idx+delta)}else if(delta>0&&state.screen<8){state.screen++;setCurrentTask(0)}else if(delta<0&&state.screen>1){state.screen--;const cur=currentTask();setCurrentTask(cur[2]-1)}save();render()}
function jumpBlock(delta){state.screen=Math.max(1,Math.min(8,state.screen+delta));setCurrentTask(0);save();render()}
function devPanel(){const [sec,idx,total]=currentTask();return `<div class="devPanel"><button id="devPrevBlock">◀ B</button><button id="devPrevTask">◀ T</button><b>${state.screen===9?'Results':state.screen===0?'Start':`B${state.screen} · T${idx+1}/${total}`}</b><button id="devNextTask">T ▶</button><button id="devNextBlock">B ▶</button></div>`}
function bindDevButtons(){if(!devMode)return;document.getElementById('devPrevBlock')?.addEventListener('click',()=>jumpBlock(-1));document.getElementById('devNextBlock')?.addEventListener('click',()=>jumpBlock(1));document.getElementById('devPrevTask')?.addEventListener('click',()=>jumpTask(-1));document.getElementById('devNextTask')?.addEventListener('click',()=>jumpTask(1))}
addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.code==='KeyD'){e.preventDefault();devMode=!devMode;render();return}if(e.altKey&&e.shiftKey&&e.key==='ArrowRight'){e.preventDefault();jumpTask(1);return}if(e.altKey&&e.shiftKey&&e.key==='ArrowLeft'){e.preventDefault();jumpTask(-1);return}if(e.altKey&&e.ctrlKey&&e.key==='ArrowRight'){e.preventDefault();jumpBlock(1);return}if(e.altKey&&e.ctrlKey&&e.key==='ArrowLeft'){e.preventDefault();jumpBlock(-1);return}});

function render(){stopAudio();({0:start,1:jobs,2:match,3:grammar,4:pron,5:reading,6:builder,7:listening,8:passport,9:results}[state.screen]||start)();fit();if(state.screen===2)requestAnimationFrame(drawMatchLines)}
render();
