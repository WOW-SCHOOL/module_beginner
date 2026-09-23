const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit5b_long_flight_v2';
const SECTIONS=['listen1','vocab','sort','grammar','reading','pron','listen2','error'];
const LABELS={listen1:'Travel Essentials',vocab:'Airport Words',sort:'Travel Sort',grammar:'Sentence Builder',reading:'Reading Mission',pron:'Pronunciation',listen2:'Listening Mission',error:'Error Hunter'};

const showroomScript=[
 {text:'Excuse me. Is this seat free?'},
 {text:'Yes, it is. Are you on the flight to Dubai too?'},
 {text:'Yes. It is a very long flight.'},
 {text:'Do you usually sleep on long flights?'},
 {text:'Not really. I read, watch films, and drink a lot of water.'},
 {text:'Do you have everything? Passport, headphones, and a book?'},
 {text:'Yes, and I have a sandwich too.'},
 {text:'Great. Have a good flight!'}
];

const data={
 listen1:[
  {q:'What does “passport” mean?',audio:'passport',a:'паспорт',o:['паспорт','чемодан','наушники']},
  {q:'What does “boarding pass” mean?',audio:'boarding pass',a:'посадочный талон',o:['посадочный талон','место у окна','выход на посадку']},
  {q:'What does “suitcase” mean?',audio:'suitcase',a:'чемодан',o:['чемодан','билет','ремень безопасности']},
  {q:'What does “gate” mean at an airport?',audio:'gate',a:'выход на посадку',o:['выход на посадку','багаж','самолёт']},
  {q:'What does “headphones” mean?',audio:'headphones',a:'наушники',o:['наушники','паспорт','книга']},
  {q:'What does “window seat” mean?',audio:'window seat',a:'место у окна',o:['место у окна','место у прохода','стойка регистрации']},
  {q:'What does “seat belt” mean?',audio:'seat belt',a:'ремень безопасности',o:['ремень безопасности','посадочный талон','чемодан']},
  {q:'What does “sandwich” mean?',audio:'sandwich',a:'сэндвич',o:['сэндвич','вода','кофе']}
 ],
 vocab:[
  {q:'Listen. Which word do you hear?',audio:'passport',a:'passport',o:['passport','ticket','tablet']},
  {q:'Listen. Which word do you hear?',audio:'boarding pass',a:'boarding pass',o:['boarding pass','window seat','headphones']},
  {q:'Listen. Which word do you hear?',audio:'gate',a:'gate',o:['gate','plate','late']},
  {q:'Listen. Which word do you hear?',audio:'suitcase',a:'suitcase',o:['suitcase','sandwich','newspaper']},
  {q:'Listen. Which word do you hear?',audio:'plane',a:'plane',o:['plane','train','gate']},
  {q:'Which one do you wear on a plane?',audio:'headphones',a:'headphones',o:['headphones','passport','ticket']},
  {q:'Which one is a place in the airport?',audio:'check-in desk',a:'check-in desk',o:['check-in desk','sandwich','seat belt']},
  {q:'Which one is food?',audio:'sandwich',a:'sandwich',o:['sandwich','ticket','aisle seat']},
  {q:'Listen. Which phrase do you hear?',audio:'window seat',a:'window seat',o:['window seat','aisle seat','boarding pass']},
  {q:'Listen. Which phrase do you hear?',audio:'aisle seat',a:'aisle seat',o:['window seat','aisle seat','seat belt']},
  {q:'Listen. Which phrase do you hear?',audio:'seat belt',a:'seat belt',o:['seat belt','check-in desk','headphones']},
  {q:'Listen. Which word do you hear?',audio:'ticket',a:'ticket',o:['ticket','passport','blanket']}
 ],
 sort:[
  {w:'boarding pass',c:'DOCUMENTS'},{w:'headphones',c:'ON THE PLANE'},{w:'gate',c:'AIRPORT PLACES'},
  {w:'passport',c:'DOCUMENTS'},{w:'seat belt',c:'ON THE PLANE'},{w:'security',c:'AIRPORT PLACES'},
  {w:'visa',c:'DOCUMENTS'},{w:'blanket',c:'ON THE PLANE'},{w:'check-in desk',c:'AIRPORT PLACES'},
  {w:'ticket',c:'DOCUMENTS'},{w:'window seat',c:'ON THE PLANE'},{w:'baggage claim',c:'AIRPORT PLACES'}
 ],
 grammar:[
  {cue:'Собери предложение: Я всегда беру паспорт.',tokens:['I','always','take','my','passport.'],audio:'I always take my passport.'},
  {cue:'Собери предложение: Мы ждём у выхода двенадцать.',tokens:['We','wait','at','gate','twelve.'],audio:'We wait at gate twelve.'},
  {cue:'Собери предложение: Она любит место у окна.',tokens:['She','likes','a','window','seat.'],audio:'She likes a window seat.'},
  {cue:'Собери предложение: Они смотрят фильм в самолёте.',tokens:['They','watch','a','film','on','the','plane.'],audio:'They watch a film on the plane.'},
  {cue:'Собери предложение: Я не сплю в самолёте.',tokens:['I','do','not','sleep','on','the','plane.'],audio:'I do not sleep on the plane.'},
  {cue:'Собери предложение: Он пьёт воду в полёте.',tokens:['He','drinks','water','on','the','flight.'],audio:'He drinks water on the flight.'},
  {cue:'Собери предложение: Мы едим сэндвич в аэропорту.',tokens:['We','eat','a','sandwich','at','the','airport.'],audio:'We eat a sandwich at the airport.'},
  {cue:'Собери предложение: У неё есть книга и наушники.',tokens:['She','has','a','book','and','headphones.'],audio:'She has a book and headphones.'}
 ],
 reading:{
  text:`<b>Olivia is on a very long flight from London to Sydney.</b><br><br>She is a little tired, but she is prepared. She has her passport, boarding pass, headphones, and a good book. She has a window seat, and she likes looking out of the window when the plane takes off.<br><br>Olivia does not usually sleep well on planes, so she often watches films or reads. She drinks a lot of water and sometimes tea. For food, she usually has a sandwich or the plane meal.<br><br>At the airport, Olivia always arrives early. She checks in, goes through security, and waits at the gate with a coffee. Long flights are not easy for her, but she likes travelling and visiting new places.`,
  audio:[
   'Olivia is on a very long flight from London to Sydney.',
   'She is a little tired, but she is prepared. She has her passport, boarding pass, headphones, and a good book. She has a window seat, and she likes looking out of the window when the plane takes off.',
   'Olivia does not usually sleep well on planes, so she often watches films or reads. She drinks a lot of water and sometimes tea. For food, she usually has a sandwich or the plane meal.',
   'At the airport, Olivia always arrives early. She checks in, goes through security, and waits at the gate with a coffee. Long flights are not easy for her, but she likes travelling and visiting new places.'
  ],
  qs:[
   {q:'Where is Olivia flying?',a:'Sydney',o:['Sydney','Dubai','Paris']},
   {q:'What seat does she have?',a:'A window seat',o:['An aisle seat','A window seat','A seat near the door']},
   {q:'Does Olivia sleep well on planes?',a:'No',o:['Yes','No','Sometimes']},
   {q:'What does she drink a lot of?',a:'Water',o:['Juice','Water','Milk']},
   {q:'What does Olivia do at the airport before the flight?',a:'She waits at the gate with a coffee',o:['She waits at the gate with a coffee','She goes home','She buys a suitcase']},
   {q:'Does Olivia like travelling?',a:'Yes',o:['Yes','No','We do not know']}
  ]
 },
 pron:[
  {q:'Listen. Which sound is in “flight”?',audio:'flight',a:'/aɪ/',o:['/aɪ/','/eɪ/']},
  {q:'Listen. Which sound is in “night”?',audio:'night',a:'/aɪ/',o:['/aɪ/','/eɪ/']},
  {q:'Listen. Which sound is in “gate”?',audio:'gate',a:'/eɪ/',o:['/aɪ/','/eɪ/']},
  {q:'Listen. Which sound is in “plane”?',audio:'plane',a:'/eɪ/',o:['/aɪ/','/eɪ/']},
  {q:'Listen and choose the phrase.',audio:'long flight',a:'long flight',o:['long flight','late gate','night train']},
  {q:'Listen and choose the phrase.',audio:'window seat',a:'window seat',o:['window seat','boarding pass','check-in desk']},
  {q:'Listen and choose the phrase.',audio:'gate eight',a:'gate eight',o:['gate eight','flight nine','late night']},
  {q:'Which word has the /eɪ/ sound?',audio:'plane',a:'plane',o:['plane','flight','night']},
  {q:'Which word has the /aɪ/ sound?',audio:'time',a:'time',o:['gate','time','seat']},
  {q:'Listen and choose the phrase.',audio:'aisle seat',a:'aisle seat',o:['aisle seat','window seat','seat belt']}
 ],
 listen2:{
  scripts:[
   {id:1,lines:[
    {text:'Are you ready for your flight?'},{text:'Almost. I need my passport and boarding pass.'},
    {text:'Do you have a suitcase?'},{text:'Yes, and I have a small bag too.'},
    {text:'Do you want a window seat or an aisle seat?'},{text:'A window seat, please.'}
   ]},
   {id:2,lines:[
    {text:'Do you sleep on planes?'},{text:'Not much. I usually read or watch a film.'},
    {text:'What do you drink on a long flight?'},{text:'Usually water or tea.'},
    {text:'Do you eat plane food?'},{text:'Sometimes, but I also take a sandwich.'}
   ]}
  ],
  qs:[
   {q:'What does the passenger need?',a:'A passport and a boarding pass',o:['A passport and a boarding pass','A hotel key and a map','A sandwich and a coffee'],script:1},
   {q:'Does the passenger have a suitcase?',a:'Yes',o:['Yes','No','We do not know'],script:1},
   {q:'What seat does the passenger want?',a:'A window seat',o:['A window seat','An aisle seat','A seat near the door'],script:1},
   {q:'Does the second speaker sleep much on planes?',a:'No',o:['Yes','No','Sometimes'],script:2},
   {q:'What does the speaker do on the plane?',a:'Read or watch a film',o:['Read or watch a film','Cook and work','Call friends'],script:2},
   {q:'What does the speaker usually drink?',a:'Water or tea',o:['Water or tea','Coffee or cola','Juice or milk'],script:2},
   {q:'Does the speaker eat plane food?',a:'Sometimes',o:['Always','Never','Sometimes'],script:2},
   {q:'What extra food does the speaker take?',a:'A sandwich',o:['A sandwich','Fruit','Soup'],script:2}
  ]
 },
 error:[
  {tokens:['I','have','a','window','sit.'],err:4,fix:'seat.',options:['seat.','gate.','ticket.'],audio:'I have a window seat.'},
  {tokens:['We','wait','at','the','gete.'],err:4,fix:'gate.',options:['gate.','late.','seat.'],audio:'We wait at the gate.'},
  {tokens:['She','sleep','on','the','plane.'],err:1,fix:'sleeps',options:['sleeps','sleeping','slept'],audio:'She sleeps on the plane.'},
  {tokens:['He','drink','a','lot','of','water.'],err:1,fix:'drinks',options:['drinks','drank','drinked'],audio:'He drinks a lot of water.'},
  {tokens:['My','passport','are','here.'],err:2,fix:'is',options:['is','am','be'],audio:'My passport is here.'},
  {tokens:['They','watchs','films','on','long','flights.'],err:1,fix:'watch',options:['watch','watches','watching'],audio:'They watch films on long flights.'},
  {tokens:['I','do','not','likes','plane','food.'],err:3,fix:'like',options:['like','likes','liked'],audio:'I do not like plane food.'},
  {tokens:['We','go','through','security','and','wait','at','the','ticket.'],err:8,fix:'gate.',options:['gate.','passport.','seat.'],audio:'We go through security and wait at the gate.'}
 ]
};

const MAX={listen1:data.listen1.length,vocab:data.vocab.length,sort:data.sort.length,grammar:data.grammar.length,reading:data.reading.qs.length,pron:data.pron.length,listen2:data.listen2.qs.length,error:data.error.length};
const fresh=()=>({screen:0,idx:{listen1:0,vocab:0,grammar:0,reading:0,pron:0,listen2:0,error:0},answers:{listen1:{},vocab:{},sort:{},grammar:{},reading:{},pron:{},listen2:{},error:{}},mistakes:{},sortPlaced:{},sortSelected:null,builderChosen:[],errorState:{selected:null,message:'Найди слово с ошибкой.',fixed:false}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers},errorState:{...fresh().errorState,...(s.errorState||{})}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 5B · A very long flight</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 5B</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 5B</b> · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
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

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>изображение добавим отдельным этапом</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit5b.jpg" alt="Beginner Unit 5B A very long flight preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">✈️</div><strong>Beginner · Unit 5B</strong><span>A very long flight · airport words · present simple · /aɪ/ and /eɪ/ · travel routines</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Flight reading image" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Reading Mission','Long-flight travel image')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,customAudio=null){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Ошибку можно исправить.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',customAudio||'Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${customAudio||'Прослушать'}`}else playText(audioText,this,`▶ ${customAudio||'Прослушать'}`)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 5B · English File</div><h1><span>A very long flight</span></h1><p>Аэропорт, багаж, посадка и английский для долгого перелёта. Начнём с простых слов и постепенно перейдём к предложениям, чтению и коротким диалогам.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{if(confirm('Сбросить весь прогресс?')){state=fresh();save();render()}};
}

function listen1(){
 const sec='listen1',idx=state.idx[sec]||0,item=data.listen1[idx];
 commonQuestionScreen(sec,1,'Travel Essentials','easy travel words · English → Russian',visualSlot('block1-listening.jpg','🧳','Travel Essentials','Start with simple travel words','Travel essentials: suitcase, passport, headphones and more'),item,data.listen1.length,item.audio,()=>{state.screen=2;save();render()},'Слово');
}

function vocab(){const sec='vocab',idx=state.idx[sec]||0,item=data.vocab[idx];commonQuestionScreen(sec,2,'Airport Words','passport · boarding pass · gate · suitcase · seat belt',visualSlot('block2-vocabulary.jpg','🧳','Airport Words','Listen and choose the correct travel word','Travel and airport objects'),item,data.vocab.length,item.audio,()=>{state.screen=3;save();render()},'Слово')}

function garageSort(){
 const total=data.sort.length;const placed=Object.keys(state.sortPlaced||{}).length;const cats=['DOCUMENTS','AIRPORT PLACES','ON THE PLANE'];
 const remaining=data.sort.map((x,i)=>({...x,i})).filter(x=>!state.sortPlaced[x.i]);
 const chips=remaining.map(x=>`<button class="sortChip ${state.sortSelected===x.i?'selected':''}" draggable="true" data-chip="${x.i}">${esc(x.w)}</button>`).join('');
 const cols=cats.map(c=>`<div class="sortCol" data-col="${c}"><h3>${c}</h3>${data.sort.map((x,i)=>state.sortPlaced[i]===c?`<div class="sortPlaced">${esc(x.w)}</div>`:'').join('')}</div>`).join('');
 app.innerHTML=shell(`${title(3,'Travel Sort','documents · airport places · on the plane')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-sort.jpg','🧩','Travel Sort','Sort the travel words into three easy groups','Airport and travel scene')}</div><div class="questionCard"><div class="kicker">Travel Sort</div><div class="prompt">Sort all 12 words.</div><div class="subprompt">Можно перетаскивать карточки или нажать слово, а затем нужный столбец.</div><div class="sortWrap"><div class="sortBank" id="sortBank">${chips}</div><div class="sortColumns">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Все слова распределены!'):feedback('neutral','Выбери слово или перетащи карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.sortPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
 document.getElementById('allWords').onclick=function(){playSequence(data.sort.map(x=>x.w),this,'▶ Все слова')};
 function place(i,cat){const item=data.sort[i];if(!item||state.sortPlaced[i])return;if(item.c===cat){recordAttempt('sort',i,true);state.sortPlaced[i]=cat;state.sortSelected=null;save();garageSort()}else{recordAttempt('sort',i,false);state.sortSelected=null;save();const fb=document.getElementById('fb');fb.innerHTML=feedback('bad','Не этот столбец. Попробуй ещё раз.')}}
 document.querySelectorAll('[data-chip]').forEach(el=>{el.onclick=()=>{state.sortSelected=+el.dataset.chip;save();garageSort()};el.ondragstart=e=>{e.dataTransfer.setData('text/plain',el.dataset.chip)}});
 document.querySelectorAll('[data-col]').forEach(col=>{col.onclick=()=>{if(state.sortSelected!==null)place(state.sortSelected,col.dataset.col)};col.ondragover=e=>{e.preventDefault();col.classList.add('hot')};col.ondragleave=()=>col.classList.remove('hot');col.ondrop=e=>{e.preventDefault();col.classList.remove('hot');place(+e.dataTransfer.getData('text/plain'),col.dataset.col)}});
 document.getElementById('next').onclick=()=>{state.screen=4;save();render()};
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)% (i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast){
 const idx=state.idx[sec]||0,done=solved(sec,idx);if(!Array.isArray(state.builderChosen))state.builderChosen=[];
 const shuffled=shuffleTokens(item.tokens,idx+sec.length);const chosen=state.builderChosen;
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visual}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt">Build the sentence.</div><div class="builderWrap"><div class="builderCue">${esc(item.cue)}</div><div class="builderResult">${chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в правильном порядке.</span>'}</div><div class="tokenBank">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="builderActions"><button class="smallBtn" id="clear">Сбросить</button><button class="smallBtn primary" id="check" ${done?'disabled':''}>Проверить</button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Собери предложение')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
 document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast)});
 document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast)});
 document.getElementById('clear').onclick=()=>{state.builderChosen=[];save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast)};
 document.getElementById('check').onclick=()=>{const answer=chosen.map(x=>x.t).join(' ');const target=item.tokens.join(' ');const ok=answer===target;recordAttempt(sec,idx,ok);if(ok){state.builderChosen=[];save();document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false}else{document.getElementById('fb').innerHTML=feedback('bad','Порядок пока неверный. Попробуй ещё раз.')}};
 document.getElementById('next').onclick=()=>{state.builderChosen=[];if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];builderBlock(sec,4,'Sentence Builder','present simple + / – · travel routines',visualSlot('block4-grammar.jpg','🧩','Sentence Builder','Put the travel sentence in the correct order','People planning or discussing a flight'),item,data.grammar.length,()=>{state.screen=5;save();render()})}

function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','one long flight · visible text + audio')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай или прослушай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}

function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Pronunciation','/aɪ/ · /eɪ/',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation','Listen carefully: flight /aɪ/, gate /eɪ/','Pronunciation practice'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио')}

function listen2(){
 const sec='listen2',idx=state.idx[sec]||0,item=data.listen2.qs[idx],done=solved(sec,idx),script=data.listen2.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(7,'Listening Mission','short airport and plane dialogues')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-listening.jpg','🎧','Listening Mission','Listen for travel details, seat choice, food and drink','Airport or plane listening scene')}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушивать несколько раз.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen2.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen2.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){playScript(script.lines,this,`Диалог ${script.id}`)};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listen2.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
}

function error(){
 const sec='error';
 const idx=state.idx[sec]||0;
 const item=data.error[idx];
 const total=data.error.length;
 const done=solved(sec,idx);
 if(!state.errorState)state.errorState={selected:null,message:'Найди слово с ошибкой.',fixed:false};
 const es=state.errorState;
 const words=item.tokens.map((t,i)=>done&&i===item.err?item.fix:t);
 const optionsVisible=!done&&es.selected===item.err;
 app.innerHTML=shell(`${title(8,'Error Hunter','find the mistake → fix it → hear the correct model')}<div class="blockBody"><div class="visualCard">${visualSlot('block8-experimental.jpg','🕵️','Error Hunter','Find the wrong word and fix the sentence','Learners checking travel sentences')}</div><div class="questionCard errorQuestion"><div class="kicker">Error Hunter</div><div class="prompt">Fix the sentence.</div><div class="subprompt">Нажми на слово с ошибкой. После этого выбери правильную замену.</div><div class="errorWork"><div class="errorSentence ${done?'solved':''}">${words.map((t,i)=>`<button class="errorWord ${done&&i===item.err?'correct':''} ${es.selected===i&&!done?'selected':''}" data-token="${i}" ${done?'disabled':''}>${esc(t)}</button>`).join('')}</div><div class="replacementArea ${optionsVisible?'show':''}">${done?'<div class="replaceHint doneHint">Готово. Правильное предложение можно прослушать ещё раз.</div>':optionsVisible?`<div class="replaceLabel">На что заменить <b>${esc(item.tokens[item.err])}</b>?</div><div class="fixOptions">${item.options.map(o=>`<button class="fixChoice" data-fix="${esc(o)}">${esc(o)}</button>`).join('')}</div>`:'<div class="replaceHint">Выбери слово с ошибкой — варианты замены появятся здесь.</div>'}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Исправлено! Правильное предложение уже озвучено.'):feedback('neutral',es.message||'Найди слово с ошибкой.')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions"><button class="audioBtn" id="errorModel" ${done?'':'disabled'}>▶ Модель</button><span class="audioMeta">British English · синтез речи</span></div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Результаты →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{if(done)return; const i=+b.dataset.token; if(i!==item.err){recordAttempt(sec,idx,false);es.selected=null;es.message='Это слово верное. Найди другое.';save();error();return;} es.selected=i;es.message='Верно, ошибка найдена. Теперь выбери правильную замену.';save();error();});
 document.querySelectorAll('[data-fix]').forEach(b=>b.onclick=()=>{if(done||es.selected!==item.err)return; const chosen=b.dataset.fix; const ok=chosen===item.fix; recordAttempt(sec,idx,ok); if(ok){es.message='Исправлено!';es.fixed=true;save();error();setTimeout(()=>{const btn=document.getElementById('errorModel');playText(item.audio,btn,'▶ Модель')},120);}else{es.message='Не тот вариант. Попробуй ещё раз.';save();document.getElementById('fb').innerHTML=feedback('bad',es.message);b.classList.add('wrongFlash');setTimeout(()=>b.classList.remove('wrongFlash'),450);}});
 const model=document.getElementById('errorModel'); if(model)model.onclick=function(){if(!done)return;playText(item.audio,this,'▶ Модель')};
 document.getElementById('next').onclick=()=>{state.errorState={selected:null,message:'Найди слово с ошибкой.',fixed:false};if(idx<total-1){state.idx[sec]=idx+1;save();render()}else{state.screen=9;save();render()}};
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 5B · A very long flight</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}

function render(){stopAudio();({0:start,1:listen1,2:vocab,3:garageSort,4:grammar,5:reading,6:pron,7:listen2,8:error,9:results}[state.screen]||start)()}
render();