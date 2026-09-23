const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);const el=document.getElementById('fit');if(el)el.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_revise_check_5_6_v1';
const SECTIONS=['jobs','match','grammar','pron','reading','builder','listening','passport'];
const LABELS={jobs:'Grammar Mix',match:'Food Match',grammar:'Routine Sort',pron:'Pronunciation',reading:'A Busy Morning',builder:'Sentence Builder',listening:'At Breakfast',passport:'Life Snapshot'};

const data={
 jobs:[
  {q:'I ___ coffee in the morning.',a:'drink',o:['drink','drinks','drinking'],audio:'I drink coffee in the morning.',hint:'С I / you / we / they глагол идёт без -s.'},
  {q:'We ___ breakfast at home.',a:'have',o:['have','has','having'],audio:'We have breakfast at home.',hint:'С we используем have.'},
  {q:'They ___ TV every evening.',a:'watch',o:['watch','watches','watching'],audio:'They watch TV every evening.',hint:'С they глагол без -s.'},
  {q:'She ___ in a hospital.',a:'works',o:['work','works','working'],audio:'She works in a hospital.',hint:'С she обычно добавляем -s.'},
  {q:'He ___ English at school.',a:'teaches',o:['teach','teaches','teachs'],audio:'He teaches English at school.',hint:'teach → teaches.'},
  {q:'I ___ meat.',a:"don’t eat",o:["don’t eat","doesn’t eat","not eat"],audio:"I don’t eat meat.",hint:'С I используем don’t + verb.'},
  {q:'She ___ coffee.',a:"doesn’t drink",o:["don’t drink","doesn’t drink","doesn’t drinks"],audio:"She doesn’t drink coffee.",hint:'После doesn’t глагол без -s.'},
  {q:'___ you live in a flat?',a:'Do',o:['Do','Does','Are'],audio:'Do you live in a flat?',hint:'Вопрос с you: Do + you + verb...?'},
  {q:'___ he work in an office?',a:'Does',o:['Do','Does','Is'],audio:'Does he work in an office?',hint:'Вопрос с he: Does + he + verb...?'},
  {q:'She ___ gets up at seven.',a:'usually',o:['usually','usual','is usually'],audio:'She usually gets up at seven.',hint:'usually ставим перед обычным глаголом.'},
  {q:'I ___ have breakfast before work.',a:'always',o:['always','am always','always am'],audio:'I always have breakfast before work.',hint:'always ставим перед обычным глаголом.'},
  {q:'They ___ go to bed late.',a:'sometimes',o:['sometimes','are sometimes','sometimes are'],audio:'They sometimes go to bed late.',hint:'sometimes часто ставим перед обычным глаголом.'}
 ],
 matchRounds:[
  [
   {en:'water',ru:'вода'},
   {en:'sugar',ru:'сахар'},
   {en:'milk',ru:'молоко'},
   {en:'cheese',ru:'сыр'}
  ],
  [
   {en:'orange juice',ru:'апельсиновый сок'},
   {en:'eggs',ru:'яйца'},
   {en:'toast',ru:'тост'},
   {en:'cereal',ru:'хлопья / сухой завтрак'}
  ]
 ],
 grammar:[
  {q:'get up',a:'Morning',audio:'get up',hint:'Обычно это происходит после сна.'},
  {q:'have breakfast',a:'Morning',audio:'have breakfast',hint:'Первый приём пищи дня.'},
  {q:'go to work',a:'Morning',audio:'go to work',hint:'Часто после завтрака.'},
  {q:'have lunch',a:'Day',audio:'have lunch',hint:'Обычно около середины дня.'},
  {q:'work in an office',a:'Day',audio:'work in an office',hint:'Рабочая активность.'},
  {q:'finish work',a:'Day',audio:'finish work',hint:'Завершение рабочего дня.'},
  {q:'have dinner',a:'Evening',audio:'have dinner',hint:'Вечерний приём пищи.'},
  {q:'watch TV',a:'Evening',audio:'watch TV',hint:'Часто это делают после работы.'},
  {q:'go to bed',a:'Evening',audio:'go to bed',hint:'Последняя часть дня.'}
 ],
 pron:[
  {q:'Listen: “yacht”. What is the first sound?',a:'/j/',o:['/j/','/dʒ/','/w/'],audio:'yacht'},
  {q:'Listen: “jazz”. What is the first sound?',a:'/dʒ/',o:['/j/','/dʒ/','/g/'],audio:'jazz'},
  {q:'Listen: “water”. What is the first sound?',a:'/w/',o:['/w/','/v/','/j/'],audio:'water'},
  {q:'Listen: “vase”. What is the first sound?',a:'/v/',o:['/w/','/v/','/g/'],audio:'vase'},
  {q:'Listen: “girl”. What is the first sound?',a:'/g/',o:['/g/','/dʒ/','/j/'],audio:'girl'},
  {q:'Which syllable is stressed in “potatoes”?',a:'TA',o:['PO','TA','TOES'],audio:'potatoes'},
  {q:'Which syllable is stressed in “policeman”?',a:'LICE',o:['PO','LICE','MAN'],audio:'policeman'},
  {q:'Which syllable is stressed in “always”?',a:'AL',o:['AL','WAYS'],audio:'always'},
  {q:'Which syllable is stressed in “usually”?',a:'U',o:['U','SU','LY'],audio:'usually'},
  {q:'Which syllable is stressed in “cereal”?',a:'CE',o:['CE','RE','AL'],audio:'cereal'}
 ],
 reading:{
  html:`<b>A busy morning</b><br><br><b>Anna</b> is a nurse. She works in a hospital in Bristol. She usually gets up at six o’clock and has a quick breakfast at home. She has toast, fruit, and tea. She never drinks coffee in the morning.<br><br>Anna starts work at seven thirty. She often has lunch at work, and she sometimes finishes late. In the evening, she has dinner at home and usually watches a little TV before bed.<br><br><b>Tom</b> is a journalist. He works from home three days a week. He usually gets up at seven thirty. He has cereal and orange juice for breakfast. He always checks his messages before he starts work.`,
  audio:[
   'A busy morning.',
   'Anna is a nurse. She works in a hospital in Bristol.',
   'She usually gets up at six o’clock and has a quick breakfast at home.',
   'She has toast, fruit, and tea. She never drinks coffee in the morning.',
   'Anna starts work at seven thirty. She often has lunch at work, and she sometimes finishes late.',
   'In the evening, she has dinner at home and usually watches a little TV before bed.',
   'Tom is a journalist. He works from home three days a week.',
   'He usually gets up at seven thirty. He has cereal and orange juice for breakfast.',
   'He always checks his messages before he starts work.'
  ],
  qs:[
   {q:'What does Anna do?',a:'She’s a nurse.',o:['She’s a nurse.','She’s a journalist.','She’s a waitress.'],hint:'Смотри первое предложение про Anna.'},
   {q:'What does Anna have for breakfast?',a:'Toast, fruit, and tea.',o:['Toast, fruit, and tea.','Eggs and coffee.','Cereal and orange juice.'],hint:'Найди предложение после времени подъёма.'},
   {q:'Does Anna drink coffee in the morning?',a:'No, she doesn’t.',o:['No, she doesn’t.','Yes, she does.','The text doesn’t say.'],hint:'Ищи слово never.'},
   {q:'Where does Anna usually have lunch?',a:'At work.',o:['At work.','At home.','In a café.'],hint:'Смотри второй абзац.'},
   {q:'What does Tom do?',a:'He’s a journalist.',o:['He’s a journalist.','He’s a nurse.','He’s a teacher.'],hint:'Смотри начало абзаца про Tom.'},
   {q:'What does Tom have for breakfast?',a:'Cereal and orange juice.',o:['Cereal and orange juice.','Toast and tea.','Eggs and milk.'],hint:'Последнее предложение текста про завтрак Tom.'}
  ]
 },
 builder:[
  {cue:'Я обычно завтракаю дома.',tokens:['I','usually','have','breakfast','at','home.'],audio:'I usually have breakfast at home.'},
  {cue:'Она работает в больнице.',tokens:['She','works','in','a','hospital.'],audio:'She works in a hospital.'},
  {cue:'Мы не пьём кофе вечером.',tokens:['We',"don’t",'drink','coffee','in','the','evening.'],audio:"We don’t drink coffee in the evening."},
  {cue:'Он не работает в офисе.',tokens:['He',"doesn’t",'work','in','an','office.'],audio:"He doesn’t work in an office."},
  {cue:'Ты обычно смотришь телевизор вечером?',tokens:['Do','you','usually','watch','TV','in','the','evening?'],audio:'Do you usually watch TV in the evening?'},
  {cue:'Где она работает?',tokens:['Where','does','she','work?'],audio:'Where does she work?'},
  {cue:'Они иногда поздно ложатся спать.',tokens:['They','sometimes','go','to','bed','late.'],audio:'They sometimes go to bed late.'},
  {cue:'Он всегда пьёт апельсиновый сок.',tokens:['He','always','drinks','orange','juice.'],audio:'He always drinks orange juice.'}
 ],
 listening:{
  lines:[
   {speaker:'Lucy',text:'Hi, Ben. Do you want some breakfast?'},
   {speaker:'Ben',text:'Yes, please. I’m very hungry.'},
   {speaker:'Lucy',text:'Do you have eggs in the morning?'},
   {speaker:'Ben',text:'No, I don’t. I usually have toast and tea.'},
   {speaker:'Lucy',text:'Do you drink coffee?'},
   {speaker:'Ben',text:'Sometimes, but not in the morning.'},
   {speaker:'Lucy',text:'What time do you start work?'},
   {speaker:'Ben',text:'At nine. I work in a hotel.'},
   {speaker:'Lucy',text:'Are you a receptionist?'},
   {speaker:'Ben',text:'Yes, I am.'}
  ],
  qs:[
   {q:'Is Ben hungry?',a:'Yes, he is.',o:['Yes, he is.','No, he isn’t.','The dialogue doesn’t say.'],hint:'Слушай вторую реплику.'},
   {q:'Does Ben have eggs in the morning?',a:'No, he doesn’t.',o:['No, he doesn’t.','Yes, he does.','Sometimes.'],hint:'Lucy спрашивает про eggs.'},
   {q:'What does Ben usually have for breakfast?',a:'Toast and tea.',o:['Toast and tea.','Cereal and milk.','Eggs and coffee.'],hint:'Слушай фразу I usually have...'},
   {q:'Does Ben drink coffee in the morning?',a:'No.',o:['No.','Yes.','Always.'],hint:'Он говорит: Sometimes, but not in the morning.'},
   {q:'What time does Ben start work?',a:'At nine.',o:['At nine.','At seven.','At ten.'],hint:'Вопрос начинается What time...'},
   {q:'Where does Ben work?',a:'In a hotel.',o:['In a hotel.','In a hospital.','In a school.'],hint:'Слушай: I work in...'},
   {q:'What does Ben do?',a:'He’s a receptionist.',o:['He’s a receptionist.','He’s a waiter.','He’s a journalist.'],hint:'Последний вопрос диалога.'}
  ]
 },
 passport:[
  {target:'Anna',clues:['Works in a hospital.','Usually gets up at 6:00.','Has toast and tea for breakfast.'],audio:['She works in a hospital.','She usually gets up at six o’clock.','She has toast and tea for breakfast.'],options:[{name:'Anna',meta:'nurse · early morning'},{name:'Tom',meta:'journalist · works from home'},{name:'Ben',meta:'receptionist · hotel'}]},
  {target:'Tom',clues:['Works from home.','Usually gets up at 7:30.','Has cereal and orange juice.'],audio:['He works from home.','He usually gets up at seven thirty.','He has cereal and orange juice for breakfast.'],options:[{name:'Ben',meta:'receptionist · hotel'},{name:'Tom',meta:'journalist · works from home'},{name:'Anna',meta:'nurse · early morning'}]},
  {target:'Ben',clues:['Works in a hotel.','Starts work at 9:00.','Usually has toast and tea.'],audio:['He works in a hotel.','He starts work at nine o’clock.','He usually has toast and tea for breakfast.'],options:[{name:'Tom',meta:'journalist · works from home'},{name:'Anna',meta:'nurse · early morning'},{name:'Ben',meta:'receptionist · hotel'}]},
  {target:'Maya',clues:['Works in a school.','Always drinks water at lunch.','Sometimes watches TV in the evening.'],audio:['She works in a school.','She always drinks water at lunch.','She sometimes watches TV in the evening.'],options:[{name:'Leo',meta:'waiter · restaurant'},{name:'Maya',meta:'teacher · school'},{name:'Nina',meta:'factory worker · factory'}]},
  {target:'Leo',clues:['Works in a restaurant.','Usually has eggs for breakfast.','Finishes work late.'],audio:['He works in a restaurant.','He usually has eggs for breakfast.','He finishes work late.'],options:[{name:'Maya',meta:'teacher · school'},{name:'Leo',meta:'waiter · restaurant'},{name:'Nina',meta:'factory worker · factory'}]},
  {target:'Nina',clues:['Works in a factory.','Never drinks coffee.','Gets up at 6:30.'],audio:['She works in a factory.','She never drinks coffee.','She gets up at six thirty.'],options:[{name:'Nina',meta:'factory worker · factory'},{name:'Leo',meta:'waiter · restaurant'},{name:'Maya',meta:'teacher · school'}]}
 ]
};

const MAX={jobs:data.jobs.length,match:8,grammar:data.grammar.length,pron:data.pron.length,reading:data.reading.qs.length,builder:data.builder.length,listening:data.listening.qs.length,passport:data.passport.length};
const fresh=()=>({screen:0,idx:{jobs:0,grammar:0,pron:0,reading:0,builder:0,listening:0,passport:0},answers:{jobs:{},match:{},grammar:{},pron:{},reading:{},builder:{},listening:{},passport:{}},mistakes:{},match:{round:0,selected:null,done:{}},builderChosen:[],passportSel:{choice:null,revealed:1},showTranscript:false});
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

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Revise & Check 5&6</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>5&6</strong></div></div>`}
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
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-revise56.jpg" alt="Beginner Revise and Check 5 and 6 preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('✨','Revise & Check 5&6','food · routines · jobs · present simple · listening')}</div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="A busy morning" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('☀️','A Busy Morning','reading · breakfast · work · routine')}</div>`}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">English File Beginner · Revise & Check 5&6</div><h1><span>Ready to review?</span></h1><p>Повтори темы Units 5–6: еду и напитки, повседневные действия, профессии, present simple, наречия частоты, произношение, чтение и короткий диалог.</p><div class="heroChips"><span>🍳 Food & drink</span><span>⚙️ Present simple</span><span>🕘 Daily routine</span><span>🎧 Listening</span><span>💬 Sentence Builder</span></div><div class="heroNote">Если задание кажется сложным, используй подсказку, правило или текст диалога — они открываются по желанию.</div><div class="heroBtns"><button class="btn primary" id="startBtn">Начать →</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('startBtn').onclick=()=>{state.screen=1;save();render()};
}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,audioLabel='Фраза',helpText=''){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard"><div style="width:100%;height:100%;display:flex;flex-direction:column;gap:10px;min-height:0"><div style="flex:1;min-height:0">${visualHTML}</div>${helpText?`<div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="leftHelp"></div>`:''}</div></div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',audioLabel):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${audioLabel}`}else playText(audioText,this,`▶ ${audioLabel}`)}}
 if(helpText){document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('leftHelp');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(helpText)}</div>`}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
 bindDevButtons();
}

function jobs(){const sec='jobs',idx=state.idx.jobs||0,item=data.jobs[idx];commonQuestionScreen(sec,1,'Grammar Mix','present simple · questions · negatives · frequency',visualSlot('block1-grammar.jpg','⚙️','Grammar Mix','I / you / we / they · he / she / it','Young adults revising English grammar'),item,data.jobs.length,item.audio,()=>{state.screen=2;save();render()},'Модель',item.hint)}

function match(){
 const sec='match',round=state.match.round||0,pairs=data.matchRounds[round],globalStart=round*4,doneKeys=Object.keys(state.match.done||{}).filter(k=>state.match.done[k]).map(Number),roundDone=pairs.every((_,i)=>state.match.done[globalStart+i]),totalDone=doneKeys.length;
 const right=[...pairs].sort((a,b)=>a.ru.localeCompare(b.ru,'ru'));
 app.innerHTML=shell(`${title(2,'Food & Drink Match','Соедини английское слово и русский перевод')}<div class="blockBody"><div class="visualCard">${visualSlot('block2-food.jpg','🍳','Food & Drink','breakfast · drinks · simple food','Bright breakfast table with common food and drinks')}</div><div class="questionCard matchQuestion"><div class="kicker">FOOD & DRINK · РАУНД ${round+1}/2</div><div class="prompt">Find all 4 pairs.</div><div class="subprompt">Выбери слово слева, затем подходящий перевод справа.</div><div class="taskScroll"><div class="matchCanvas" id="matchCanvas"><svg class="matchSvg" id="matchSvg"></svg><div class="matchCol"><div class="matchColTitle">English</div>${pairs.map((p,i)=>`<button class="pairBtn ${state.match.done[globalStart+i]?'matched':''} ${state.match.selected===globalStart+i?'selected':''}" data-left="${globalStart+i}">${esc(p.en)}</button>`).join('')}</div><div class="matchCol"><div class="matchColTitle">Русский</div>${right.map(p=>{const gi=globalStart+pairs.findIndex(x=>x.en===p.en);return `<button class="pairBtn ${state.match.done[gi]?'matched':''}" data-right="${gi}">${esc(p.ru)}</button>`}).join('')}</div></div></div><div class="statusWrap"><div id="fb">${roundDone?feedback('good','Все пары этого раунда найдены!'):feedback('neutral','Выбери слово слева.')}</div>${miniProgressPairs(totalDone,8)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${roundDone?'':'disabled'}>${round===1?'Следующий блок →':'Следующий раунд →'}</button></div>`);
 document.getElementById('allWords').onclick=function(){playSequence(pairs.map(p=>p.en),this,'▶ Все слова')};
 document.querySelectorAll('[data-left]').forEach(b=>b.onclick=()=>{const i=+b.dataset.left;if(state.match.done[i])return;state.match.selected=i;save();render()});
 document.querySelectorAll('[data-right]').forEach(b=>b.onclick=()=>{const ri=+b.dataset.right;if(state.match.done[ri])return;const li=state.match.selected;if(li===null||li===undefined){document.getElementById('fb').innerHTML=feedback('neutral','Сначала выбери английское слово слева.');return}const ok=li===ri;recordAttempt(sec,li,ok);if(ok){state.match.done[li]=true;state.match.selected=null;save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Эти слова не пара. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(round===0){state.match.round=1;state.match.selected=null;save();render()}else{state.screen=3;save();render()}};
 bindDevButtons();requestAnimationFrame(drawMatchLines);
}
function drawMatchLines(){const svg=document.getElementById('matchSvg');if(!svg)return;const sr=svg.getBoundingClientRect();if(!sr.width||!sr.height)return;svg.setAttribute('viewBox',`0 0 ${sr.width} ${sr.height}`);let html='';document.querySelectorAll('[data-left].matched').forEach(l=>{const i=+l.dataset.left,r=document.querySelector(`[data-right="${i}"]`);if(!r)return;const a=l.getBoundingClientRect(),b=r.getBoundingClientRect();const x1=a.right-sr.left,y1=a.top+a.height/2-sr.top,x2=b.left-sr.left,y2=b.top+b.height/2-sr.top,c=(x2-x1)*.45;html+=`<path class="matchLine done" d="M ${x1} ${y1} C ${x1+c} ${y1}, ${x2-c} ${y2}, ${x2} ${y2}"/>`});svg.innerHTML=html}

function grammar(){
 const sec='grammar',idx=state.idx.grammar||0,item=data.grammar[idx],done=solved(sec,idx);
 app.innerHTML=shell(`${title(3,'Routine Sort','Разложи действие по части дня')}<div class="blockBody"><div class="visualCard"><div style="width:100%;height:100%;display:flex;flex-direction:column;gap:10px;min-height:0"><div style="flex:1;min-height:0">${visualSlot('block3-routine.jpg','🕘','Daily Routine','morning · day · evening','Young adult planning a daily routine')}</div><div class="helpRow"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="leftHelp"></div></div></div><div class="questionCard"><div class="kicker">ROUTINE SORT</div><div class="prompt">Where does this activity usually belong?</div><div class="sortFocus">${esc(item.q)}</div><div class="taskScroll"><div class="routineBuckets"><button class="routineBucket" data-bucket="Morning" ${done?'disabled':''}><span>🌅</span><b>Morning</b><small>утро</small></button><button class="routineBucket" data-bucket="Day" ${done?'disabled':''}><span>☀️</span><b>Day</b><small>день</small></button><button class="routineBucket" data-bucket="Evening" ${done?'disabled':''}><span>🌙</span><b>Evening</b><small>вечер</small></button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good',`${esc(item.q)} → ${esc(item.a)}`):feedback('neutral','Выбери часть дня')}</div>${miniProgress(sec,idx,data.grammar.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('routineAudio','Фраза')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.grammar.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('routineAudio').onclick=function(){playText(item.audio,this,'▶ Фраза')};
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('leftHelp');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(item.hint)}</div>`};
 document.querySelectorAll('[data-bucket]').forEach(b=>b.onclick=()=>{if(done)return;const ok=b.dataset.bucket===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('bucketCorrect');setTimeout(()=>render(),250)}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Не совсем. Подумай, когда это обычно происходит.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.grammar.length-1){state.idx.grammar=idx+1;save();render()}else{state.screen=4;save();render()}};bindDevButtons();
}

function pron(){const sec='pron',idx=state.idx.pron||0,item=data.pron[idx];commonQuestionScreen(sec,4,'Pronunciation Lab','sounds · word stress',visualSlot('block4-pronunciation.jpg','🗣️','Pronunciation','listen · notice · choose','Two learners practising pronunciation naturally'),item,data.pron.length,item.audio,()=>{state.screen=5;save();render()},'Слово','Сначала послушай. Ориентируйся на первый звук или на сильный слог в слове.')}

function reading(){
 const sec='reading',idx=state.idx.reading||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'A Busy Morning','Прочитай · при желании прослушай · ответь')}<div class="blockBody"><div class="visualCard"><div style="width:100%;height:100%;display:flex;flex-direction:column;gap:8px;min-height:0"><div class="readingVisual portrait" style="flex:1 1 auto;min-height:0"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.html}</div></div><div class="helpRow" style="flex:0 0 auto"><button class="helpBtn" id="hintBtn">Подсказка</button></div><div id="readingHint"></div></div></div><div class="questionCard"><div class="kicker">READING</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь по тексту.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Текст доступен слева')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('readingHint');p.innerHTML=p.innerHTML?'':`<div class="floatingHelper">${esc(item.hint)}</div>`};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту или открой подсказку.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx.reading=idx+1;save();render()}else{state.screen=6;save();render()}};bindDevButtons();
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function builder(){
 const sec='builder',idx=state.idx.builder||0,item=data.builder[idx],done=solved(sec,idx),chosen=state.builderChosen||[],shuffled=shuffleTokens(item.tokens,idx+51);
 app.innerHTML=shell(`${title(6,'Sentence Builder','Собери предложение')}<div class="blockBody"><div class="visualCard">${visualSlot('block6-builder.jpg','🧩','Sentence Builder','build · check · listen','Word cards on a modern study desk')}</div><div class="questionCard"><div class="kicker">SENTENCE BUILDER</div><div class="prompt">Build the sentence.</div><div class="builderCueRu">${esc(item.cue)}</div><div class="taskScroll"><div class="builderWrap"><div class="builderResult" id="builderResult">${chosen.length?chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join(''):'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в нужном порядке.</span>'}</div><div class="builderTokens">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}" ${done?'disabled':''}>${esc(x.t)}</button>`).join('')}</div></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Готово! Прослушай правильную фразу.'):feedback('neutral','Собери все слова')}</div>${miniProgress(sec,idx,data.builder.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.builder.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
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
 app.innerHTML=shell(`${title(7,'At Breakfast','Послушай короткий диалог · текст можно открыть')}<div class="blockBody"><div class="visualCard"><div style="width:100%;height:100%;display:flex;flex-direction:column;gap:10px;min-height:0"><div style="flex:1;min-height:0">${visualSlot('block7-listening.jpg','🎧','At Breakfast','short dialogue · work · breakfast','Two adults talking over breakfast')}</div><div class="helpRow" style="flex:0 0 auto"><button class="helpBtn" id="transcriptBtn">${show?'Скрыть текст':'Показать текст'}</button><button class="helpBtn" id="hintBtn">Подсказка</button></div>${show?`<div class="transcriptPanel" style="flex:0 0 150px">${transcriptHTML()}</div>`:''}<div id="leftHelp"></div></div></div><div class="questionCard"><div class="kicker">LISTENING</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Слушай столько раз, сколько нужно.</div><div class="taskScroll"><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listening.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio','Диалог')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listening.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){playScript(data.listening.lines,this,'Диалог')};
 document.getElementById('transcriptBtn').onclick=()=>{state.showTranscript=!show;save();render()};
 document.getElementById('hintBtn').onclick=()=>{const p=document.getElementById('leftHelp');p.innerHTML=p.innerHTML?'':`<div class="helpPanel">${esc(item.hint)}</div>`};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){save();render()}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listening.qs.length-1){state.idx.listening=idx+1;save();render()}else{state.screen=8;state.passportSel={choice:null,revealed:1};save();render()}};bindDevButtons();
}

function passport(){
 const sec='passport',idx=state.idx.passport||0,item=data.passport[idx],done=solved(sec,idx),choice=state.passportSel.choice,revealed=Math.max(1,Math.min(3,state.passportSel.revealed||1));
 app.innerHTML=shell(`${title(8,'Life Snapshot','Открой подсказки и найди человека')}<div class="blockBody"><div class="visualCard">${visualSlot('block8-snapshot.jpg','🔎','Life Snapshot','job · breakfast · routine','Lifestyle clues arranged on a modern desk')}</div><div class="questionCard"><div class="kicker">LIFE SNAPSHOT · PROFILE ${idx+1}/${data.passport.length}</div><div class="prompt">Who is it?</div><div class="subprompt">Открой дополнительные подсказки, если первой недостаточно.</div><div class="taskScroll"><div class="clueStack">${item.clues.map((c,i)=>`<div class="clueCard ${i<revealed?'revealed':''}"><span>${i+1}</span><b>${i<revealed?esc(c):'••••••••'}</b>${i<revealed?`<button class="clueAudio" data-clue="${i}">▶</button>`:''}</div>`).join('')}</div>${revealed<3&&!done?'<button class="revealBtn" id="revealBtn">Открыть ещё подсказку +</button>':''}<div class="profileOptions">${item.options.map(o=>`<button class="profileOption ${choice===o.name?'selected':''}" data-profile="${esc(o.name)}" ${done?'disabled':''}><b>${esc(o.name)}</b><span>${esc(o.meta)}</span></button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good',`Верно — ${esc(item.target)}!`):feedback('neutral','Выбери профиль')}</div>${miniProgress(sec,idx,data.passport.length)}</div></div></div><div class="footerActions"><div class="leftActions"><button class="helpBtn" id="checkProfile" ${done?'disabled':''}>Проверить</button></div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.passport.length-1?'Результаты →':'Следующий профиль →'}</button></div>`);
 document.querySelectorAll('[data-clue]').forEach(b=>b.onclick=()=>{const i=+b.dataset.clue;playText(item.audio[i],b,'▶')});
 document.getElementById('revealBtn')?.addEventListener('click',()=>{state.passportSel.revealed=Math.min(3,revealed+1);save();render()});
 document.querySelectorAll('[data-profile]').forEach(b=>b.onclick=()=>{if(done)return;state.passportSel.choice=b.dataset.profile;save();render()});
 document.getElementById('checkProfile').onclick=()=>{if(!state.passportSel.choice){document.getElementById('fb').innerHTML=feedback('neutral','Сначала выбери профиль.');return}const ok=state.passportSel.choice===item.target;recordAttempt(sec,idx,ok);if(ok){playText(`It is ${item.target}.`,null);save();render()}else{document.getElementById('fb').innerHTML=feedback('bad','Не совпадает. Открой ещё одну подсказку и попробуй снова.')}};
 document.getElementById('next').onclick=()=>{if(idx<data.passport.length-1){state.idx.passport=idx+1;state.passportSel={choice:null,revealed:1};save();render()}else{state.screen=9;state.passportSel={choice:null,revealed:1};save();render()}};bindDevButtons();
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Revise & Check 5&6</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};bindDevButtons();
}

function currentTask(){const m={1:['jobs',data.jobs.length],2:['match',2],3:['grammar',data.grammar.length],4:['pron',data.pron.length],5:['reading',data.reading.qs.length],6:['builder',data.builder.length],7:['listening',data.listening.qs.length],8:['passport',data.passport.length]};if(!m[state.screen])return [null,0,0];const [sec,total]=m[state.screen];let idx=0;if(sec==='match')idx=state.match.round||0;else idx=state.idx[sec]||0;return [sec,idx,total]}
function setCurrentTask(i){const m={1:['jobs',data.jobs.length],2:['match',2],3:['grammar',data.grammar.length],4:['pron',data.pron.length],5:['reading',data.reading.qs.length],6:['builder',data.builder.length],7:['listening',data.listening.qs.length],8:['passport',data.passport.length]};if(!m[state.screen])return;const [sec,total]=m[state.screen],idx=Math.max(0,Math.min(total-1,i));if(sec==='match'){state.match.round=idx;state.match.selected=null}else{state.idx[sec]=idx;if(sec==='builder')state.builderChosen=[];if(sec==='passport')state.passportSel={choice:null,revealed:1}}}
function jumpTask(delta){const [sec,idx,total]=currentTask();if(!sec)return;if(idx+delta>=0&&idx+delta<total){setCurrentTask(idx+delta)}else if(delta>0&&state.screen<8){state.screen++;setCurrentTask(0)}else if(delta<0&&state.screen>1){state.screen--;const cur=currentTask();setCurrentTask(cur[2]-1)}save();render()}
function jumpBlock(delta){state.screen=Math.max(1,Math.min(8,state.screen+delta));setCurrentTask(0);save();render()}
function devPanel(){const [sec,idx,total]=currentTask();return `<div class="devPanel"><button id="devPrevBlock">◀ B</button><button id="devPrevTask">◀ T</button><b>${state.screen===9?'Results':state.screen===0?'Start':`B${state.screen} · T${idx+1}/${total}`}</b><button id="devNextTask">T ▶</button><button id="devNextBlock">B ▶</button></div>`}
function bindDevButtons(){if(!devMode)return;document.getElementById('devPrevBlock')?.addEventListener('click',()=>jumpBlock(-1));document.getElementById('devNextBlock')?.addEventListener('click',()=>jumpBlock(1));document.getElementById('devPrevTask')?.addEventListener('click',()=>jumpTask(-1));document.getElementById('devNextTask')?.addEventListener('click',()=>jumpTask(1))}
addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.code==='KeyD'){e.preventDefault();devMode=!devMode;render();return}if(e.altKey&&e.shiftKey&&e.key==='ArrowRight'){e.preventDefault();jumpTask(1);return}if(e.altKey&&e.shiftKey&&e.key==='ArrowLeft'){e.preventDefault();jumpTask(-1);return}if(e.altKey&&e.ctrlKey&&e.key==='ArrowRight'){e.preventDefault();jumpBlock(1);return}if(e.altKey&&e.ctrlKey&&e.key==='ArrowLeft'){e.preventDefault();jumpBlock(-1);return}});

function render(){stopAudio();({0:start,1:jobs,2:match,3:grammar,4:pron,5:reading,6:builder,7:listening,8:passport,9:results}[state.screen]||start)();fit();if(state.screen===2)requestAnimationFrame(drawMatchLines)}
render();
