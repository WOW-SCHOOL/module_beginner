const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit6b_good_morning_goodnight_v1';
const SECTION_BY_SCREEN={1:'warmup',2:'listen1',3:'sort',4:'grammar',5:'reading',6:'pron',7:'listen2',8:'error'};
const SCREEN_BY_SECTION={warmup:1,listen1:2,sort:3,grammar:4,reading:5,pron:6,listen2:7,error:8};
const SECTIONS=['warmup','listen1','sort','grammar','reading','pron','listen2','error'];
const LABELS={
  warmup:'Morning Warm-up',
  listen1:'Morning Person',
  sort:'Day Sort',
  grammar:'Adverbs Builder',
  reading:'Reading Mission',
  pron:'Pronunciation',
  listen2:'Mini Dialogues',
  error:'Routine Repair'
};

const data={
  warmup:[
    {q:'Listen. Which phrase do you hear?',audio:'get up',a:'get up',o:['get up','go to bed','have lunch']},
    {q:'Listen. Which phrase do you hear?',audio:'have breakfast',a:'have breakfast',o:['have breakfast','have dinner','go shopping']},
    {q:'Listen. Which phrase do you hear?',audio:'have a shower',a:'have a shower',o:['have a shower','watch TV','finish work']},
    {q:'Listen. Which phrase do you hear?',audio:'go to work',a:'go to work',o:['go to work','go home','go to bed']},
    {q:'Listen. Which phrase do you hear?',audio:'have lunch',a:'have lunch',o:['have lunch','have breakfast','go to the gym']},
    {q:'Listen. Which phrase do you hear?',audio:'go shopping',a:'go shopping',o:['go shopping','get up','make dinner']},
    {q:'Listen. Which phrase do you hear?',audio:'watch TV',a:'watch TV',o:['watch TV','go to work','have a shower']},
    {q:'Listen. Which phrase do you hear?',audio:'go to bed',a:'go to bed',o:['go to bed','go to work','have coffee']}
  ],
  listen1:{
    transcript:[
      'I = interviewer, H = Hannah.',
      'I: Hannah works for the BBC. She has a son, Kit, who is three years old.',
      'I: Hannah, what time do you usually get up?',
      'H: I get up at seven. But I also get up in the night, because Kit usually calls me.',
      'I: Do you usually feel tired?',
      'H: Yes, I always feel tired!',
      'I: Do you have a shower or a bath in the morning?',
      'H: I turn on the TV for Kit and then I have a bath in five minutes.',
      'I: Do you always have breakfast?',
      'H: Yes, I need breakfast every day!',
      'I: Where do you have it?',
      'H: I have it in a café on the way to work.',
      'I: What do you have for breakfast?',
      'H: I have a coffee, and sometimes I have some toast with avocado.',
      'I: What time do you go to work?',
      'H: The perfect time to leave the house is at eight, but we usually leave at twenty past eight.',
      'I: Do you usually need to hurry in the morning?',
      'H: Yes, always!',
      'I: Do you like mornings?',
      'H: Yes. I love mornings.',
      'I: Why?',
      'H: Because I love my job, and I am happy to go to work!'
    ],
    qs:[
      {q:'What time does Hannah usually get up?',a:'At 7.00',o:['At 6.00','At 7.00','At 8.20']},
      {q:'Does Hannah feel tired?',a:'Yes, always',o:['No, never','Yes, always','Sometimes']},
      {q:'Does she have a shower or a bath?',a:'A bath',o:['A shower','A bath','Both']},
      {q:'Where does she have breakfast?',a:'In a café',o:['At home','In a café','At work']},
      {q:'What does she have for breakfast?',a:'Coffee and sometimes toast with avocado',o:['Tea and cereal','Coffee and sometimes toast with avocado','Juice and eggs']},
      {q:'What time does she go to work?',a:'At 8.20',o:['At 7.20','At 8.00','At 8.20']},
      {q:'Does she need to hurry?',a:'Yes, always',o:['Yes, always','No, never','Only on Friday']},
      {q:'Why does Hannah like mornings?',a:'Because she loves her job',o:['Because she sleeps a lot','Because she loves her job','Because breakfast is free']}
    ]
  },
  sort:[
    {w:'have lunch',c:'DAYTIME'},{w:'go to bed',c:'EVENING'},{w:'get up',c:'MORNING'},
    {w:'go shopping',c:'DAYTIME'},{w:'watch TV',c:'EVENING'},{w:'have a shower',c:'MORNING'},
    {w:'go to work',c:'MORNING'},{w:'finish work',c:'DAYTIME'},{w:'go to the gym',c:'EVENING'},
    {w:'have breakfast',c:'MORNING'},{w:'make dinner',c:'EVENING'},{w:'have a coffee',c:'DAYTIME'}
  ],
  grammar:[
    {cue:'Собери предложение: Я всегда завтракаю дома.',tokens:['I','always','have','breakfast','at','home.'],audio:'I always have breakfast at home.'},
    {cue:'Собери предложение: Она обычно встаёт в семь.',tokens:['She','usually','gets','up','at','seven.'],audio:'She usually gets up at seven.'},
    {cue:'Собери предложение: Мы иногда ходим в спортзал после работы.',tokens:['We','sometimes','go','to','the','gym','after','work.'],audio:'We sometimes go to the gym after work.'},
    {cue:'Собери предложение: Он никогда не пьёт кофе ночью.',tokens:['He','never','drinks','coffee','at','night.'],audio:'He never drinks coffee at night.'},
    {cue:'Собери предложение: Они обычно обедают в час.',tokens:['They','usually','have','lunch','at','one','o’clock.'],audio:'They usually have lunch at one o’clock.'},
    {cue:'Собери предложение: Я иногда хожу по магазинам после работы.',tokens:['I','sometimes','go','shopping','after','work.'],audio:'I sometimes go shopping after work.'},
    {cue:'Собери предложение: Мой брат всегда ложится спать поздно.',tokens:['My','brother','always','goes','to','bed','late.'],audio:'My brother always goes to bed late.'},
    {cue:'Собери предложение: Эмма обычно принимает душ утром.',tokens:['Emma','usually','has','a','shower','in','the','morning.'],audio:'Emma usually has a shower in the morning.'}
  ],
  reading:{
    text:`<b>Mia is a hotel receptionist.</b><br><br>Mia usually gets up at half past six. She always has coffee for breakfast, but she sometimes has breakfast in a café near work. She goes to work at a quarter past eight. She likes her job, and she always says <i>Good morning</i> to the guests.<br><br>In the afternoon Mia has lunch at one o’clock. She usually finishes work at six. In the evening she sometimes goes shopping, but she usually goes home, makes dinner, and watches TV. She never goes to bed late. She goes to bed at about ten thirty.`,
    audio:[
      'Mia is a hotel receptionist.',
      'Mia usually gets up at half past six.',
      'She always has coffee for breakfast, but she sometimes has breakfast in a café near work.',
      'She goes to work at a quarter past eight.',
      'She likes her job, and she always says good morning to the guests.',
      'In the afternoon Mia has lunch at one o’clock.',
      'She usually finishes work at six.',
      'In the evening she sometimes goes shopping, but she usually goes home, makes dinner, and watches TV.',
      'She never goes to bed late. She goes to bed at about ten thirty.'
    ],
    qs:[
      {q:'What job does Mia do?',a:'She is a hotel receptionist',o:['She is a teacher','She is a hotel receptionist','She is a doctor']},
      {q:'What time does she get up?',a:'At 6.30',o:['At 6.30','At 7.30','At 8.15']},
      {q:'Where does she sometimes have breakfast?',a:'In a café near work',o:['At home','In a café near work','On the bus']},
      {q:'What time does she finish work?',a:'At 6.00',o:['At 5.00','At 6.00','At 7.30']},
      {q:'What does she usually do in the evening?',a:'She goes home, makes dinner, and watches TV',o:['She goes home, makes dinner, and watches TV','She studies at university','She goes to the airport']},
      {q:'Does Mia go to bed late?',a:'No',o:['Yes','No','Sometimes']}
    ]
  },
  pron:[
    {q:'What sound do you hear in “yes”?',audio:'yes',a:'/j/',o:['/j/','/juː/']},
    {q:'What sound do you hear in “use”?',audio:'use',a:'/juː/',o:['/j/','/juː/']},
    {q:'What sound do you hear in “usually”?',audio:'usually',a:'/juː/',o:['/j/','/juː/']},
    {q:'What sound do you hear in “yesterday”?',audio:'yesterday',a:'/j/',o:['/j/','/juː/']},
    {q:'Listen and choose the word.',audio:'music',a:'music',o:['music','morning','dinner']},
    {q:'Listen and choose the word.',audio:'you',a:'you',o:['you','go','do']},
    {q:'Which word has the /juː/ sound?',audio:'university',a:'university',o:['university','yellow','never']},
    {q:'Which word has the /j/ sound?',audio:'yellow',a:'yellow',o:['yellow','music','usually']},
    {q:'Listen and choose the phrase.',audio:'you usually',a:'you usually',o:['you usually','he always','we finish']},
    {q:'Listen and choose the phrase.',audio:'your music',a:'your music',o:['your music','good morning','watch TV']}
  ],
  listen2:{
    scripts:[
      {id:1,lines:[
        {text:'A: What time do you usually get up?'},
        {text:'B: At about seven.'},
        {text:'A: Do you have breakfast at home?'},
        {text:'B: Sometimes. I usually have coffee at home, but I sometimes have breakfast in a café.'},
        {text:'A: How do you go to work?'},
        {text:'B: I go by bus.'}
      ]},
      {id:2,lines:[
        {text:'A: What do you do after work?'},
        {text:'B: I usually go home at six.'},
        {text:'A: Do you go to the gym?'},
        {text:'B: Sometimes, but I usually make dinner and watch TV.'},
        {text:'A: What time do you go to bed?'},
        {text:'B: At about eleven.'}
      ]}
    ],
    qs:[
      {q:'What time does speaker B get up?',a:'At about seven',o:['At about six','At about seven','At about eight thirty'],script:1},
      {q:'Does speaker B always have breakfast at home?',a:'No',o:['Yes','No','Only at the weekend'],script:1},
      {q:'What does speaker B usually have at home?',a:'Coffee',o:['Coffee','Tea','Toast'],script:1},
      {q:'How does speaker B go to work?',a:'By bus',o:['By car','By bus','On foot'],script:1},
      {q:'What time does speaker B usually go home?',a:'At six',o:['At five','At six','At seven'],script:2},
      {q:'Does speaker B always go to the gym?',a:'No, sometimes',o:['Yes, always','No, never','No, sometimes'],script:2},
      {q:'What does speaker B usually do in the evening?',a:'Make dinner and watch TV',o:['Make dinner and watch TV','Go shopping','Read at work'],script:2},
      {q:'What time does speaker B go to bed?',a:'At about eleven',o:['At about ten','At about eleven','At midnight'],script:2}
    ]
  },
  error:[
    {tokens:['She','get','up','at','seven.'],err:1,fix:'gets',options:['gets','getting','got'],audio:'She gets up at seven.',hint:'С he / she нужен глагол с окончанием -s.'},
    {tokens:['He','always','have','coffee','for','breakfast.'],err:2,fix:'has',options:['has','have','having'],audio:'He always has coffee for breakfast.',hint:'После he используем has, а не have.'},
    {tokens:['We','usually','goes','to','work','by','bus.'],err:2,fix:'go',options:['go','goes','going'],audio:'We usually go to work by bus.',hint:'С we используем базовую форму глагола.'},
    {tokens:['I','never','drinks','tea','at','night.'],err:2,fix:'drink',options:['drink','drinks','drank'],audio:'I never drink tea at night.',hint:'С I нужна базовая форма глагола.'},
    {tokens:['My','sister','sometimes','watch','TV','after','dinner.'],err:3,fix:'watches',options:['watches','watch','watched'],audio:'My sister sometimes watches TV after dinner.',hint:'После my sister нужен глагол с -es.'},
    {tokens:['They','usually','has','lunch','at','one.'],err:2,fix:'have',options:['have','has','having'],audio:'They usually have lunch at one.',hint:'С they используем have.'},
    {tokens:['Tom','go','to','bed','late','at','the','weekend.'],err:1,fix:'goes',options:['goes','go','going'],audio:'Tom goes to bed late at the weekend.',hint:'Tom = he, значит нужен глагол с -es.'},
    {tokens:['Emma','sometimes','make','dinner','at','home.'],err:2,fix:'makes',options:['make','makes','making'],audio:'Emma sometimes makes dinner at home.',hint:'Emma = she, значит нужен глагол с -s.'}
  ]
};

const MAX={
  warmup:data.warmup.length,
  listen1:data.listen1.qs.length,
  sort:data.sort.length,
  grammar:data.grammar.length,
  reading:data.reading.qs.length,
  pron:data.pron.length,
  listen2:data.listen2.qs.length,
  error:data.error.length
};

const fresh=()=>({
  screen:0,
  idx:{warmup:0,listen1:0,grammar:0,reading:0,pron:0,listen2:0,error:0},
  answers:{warmup:{},listen1:{},sort:{},grammar:{},reading:{},pron:{},listen2:{},error:{}},
  mistakes:{},sortPlaced:{},sortSelected:null,builderChosen:[],errorState:{selected:null,message:'Найди слово с ошибкой.',fixed:false}
});

let state=fresh();
try{
  const s=JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...(s.answers||{})},errorState:{...fresh().errorState,...(s.errorState||{})}};
}catch(e){}
state.screen=0;
try{const params=new URLSearchParams(location.search);if(params.has('screen')){const s=+params.get('screen');if(!Number.isNaN(s))state.screen=Math.max(0,Math.min(9,s));}const sec=SECTION_BY_SCREEN[state.screen];if(sec&&params.has('idx')&&state.idx[sec]!==undefined){const i=+params.get('idx');if(!Number.isNaN(i))state.idx[sec]=Math.max(0,Math.min(MAX[sec]-1,i));}}catch(e){}
let devMode=false;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function currentSection(){return SECTION_BY_SCREEN[state.screen]||null}
function currentTaskLabel(){
  const sec=currentSection();
  if(!sec)return 'Start';
  if(sec==='sort')return '1 / 1';
  return `${(state.idx[sec]||0)+1} / ${MAX[sec]}`;
}
function changeTask(dir){
  const sec=currentSection(); if(!sec||sec==='sort'||!(sec in state.idx))return;
  const max=MAX[sec]; const cur=state.idx[sec]||0;
  const next=Math.max(0,Math.min(max-1,cur+dir));
  if(next!==cur){state.idx[sec]=next; if(sec==='error')state.errorState={selected:null,message:'Найди слово с ошибкой.',fixed:false}; save(); render();}
}
function changeBlock(dir){
  const next=Math.max(0,Math.min(9,(state.screen||0)+dir));
  if(next!==state.screen){state.screen=next; if(SECTION_BY_SCREEN[next]==='error')state.errorState={selected:null,message:'Найди слово с ошибкой.',fixed:false}; save(); render();}
}
addEventListener('keydown',e=>{
  if(e.ctrlKey&&e.altKey&&e.key.toLowerCase()==='d'){e.preventDefault(); devMode=!devMode; render(); return;}
  if(e.altKey&&e.shiftKey&&e.key==='ArrowRight'){e.preventDefault(); changeTask(1)}
  if(e.altKey&&e.shiftKey&&e.key==='ArrowLeft'){e.preventDefault(); changeTask(-1)}
  if(e.altKey&&e.ctrlKey&&e.key==='ArrowRight'){e.preventDefault(); changeBlock(1)}
  if(e.altKey&&e.ctrlKey&&e.key==='ArrowLeft'){e.preventDefault(); changeBlock(-1)}
});

function header(){
  return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 6B · Good morning, goodnight</div></div></div><div class="unitBadge" id="devToggle" title="Double click for hidden dev mode"><span>English File Beginner</span><strong>Unit 6B</strong></div></div>`
}
function devBar(){
  if(!devMode)return '';
  return `<div class="devBar"><strong>DEV</strong><span>${currentSection()||'home'} · ${currentTaskLabel()}</span><button class="devBtn" id="devPrevBlock">◀ block</button><button class="devBtn" id="devNextBlock">block ▶</button><button class="devBtn" id="devPrevTask">◀ task</button><button class="devBtn" id="devNextTask">task ▶</button></div>`;
}
function shell(inner){return `${header()}${devBar()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 6B</b> · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}
function helperDetails(list=[]){return list.filter(Boolean).map(d=>`<details class="helperDetails"><summary>${esc(d.title)}</summary><div class="helperBody">${d.html}</div></details>`).join('')}
function transcriptHtml(lines){return `<div class="transcriptBox">${lines.map(t=>`<p>${esc(t)}</p>`).join('')}</div>`}
function listHint(items){return `<ul class="hintList">${items.map(t=>`<li>${t}</li>`).join('')}</ul>`}

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

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>изображение можно заменить на финальную версию позже</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit6b.jpg" alt="Beginner Unit 6B Good morning, goodnight preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">🌅</div><strong>Beginner · Unit 6B</strong><span>Good morning, goodnight · adverbs of frequency · a typical day · /j/ and /juː/</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Typical day reading image" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Reading Mission','A typical day')}</div>`}

function bindGlobalUi(){
  const dt=document.getElementById('devToggle');
  if(dt) dt.ondblclick=()=>{devMode=!devMode; render()};
  if(devMode){
    const pb=document.getElementById('devPrevBlock'); if(pb) pb.onclick=()=>changeBlock(-1);
    const nb=document.getElementById('devNextBlock'); if(nb) nb.onclick=()=>changeBlock(1);
    const pt=document.getElementById('devPrevTask'); if(pt) pt.onclick=()=>changeTask(-1);
    const nt=document.getElementById('devNextTask'); if(nt) nt.onclick=()=>changeTask(1);
  }
}

function helperDock(list=[]){
  const html=helperDetails(list);
  return html?`<div class="visualHelpers">${html}</div>`:'';
}
function visualWithHelpers(visualHTML,helpers=[]){return `<div class="visualWithHelpers"><div class="visualMain">${visualHTML}</div>${helperDock(helpers)}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,customAudio=null,helpers=[]){
  const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualHTML,helpers)}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Если понадобится помощь, открой подсказку рядом с изображением.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',customAudio||'Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${customAudio||'Прослушать'}`;return}playText(audioText,this,`▶ ${customAudio||'Прослушать'}`)}}
  document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
  bindGlobalUi();
}

function start(){
  app.innerHTML=shell(`<div class="hero"><div><div class="eyebrow">WOW SCHOOL · Interactive lesson module</div><h1>Good morning, <span>goodnight</span></h1><p class="lede">Здесь вы потренируете английский для обычного дня: как говорить о распорядке, использовать <b>always / usually / sometimes / never</b>, понимать короткие диалоги и увереннее произносить новые слова.</p><p class="studentHelp">💡 В некоторых заданиях есть <b>подсказка</b> или <b>текст аудио</b>. Открывайте их, если нужно немного помочь себе — это часть тренировки.</p><div class="heroFeatures"><span>Daily routine</span><span>Listening + text</span><span>Helpful hints</span><span>Pronunciation</span></div><div class="heroBtns"><button class="btn primary" id="startBtn">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
  document.getElementById('startBtn').onclick=()=>{state.screen=1;save();render()};
  document.getElementById('reset').onclick=()=>{if(confirm('Сбросить весь прогресс?')){state=fresh();save();render()}};
  bindGlobalUi();
}

function warmup(){
  const sec='warmup',idx=state.idx[sec]||0,item=data.warmup[idx];
  const helpers=[{title:'Подсказка',html:listHint(['Это лёгкий разогрев перед темой a typical day.','Слушай короткую фразу и соотнеси её с правильным вариантом.'])}];
  commonQuestionScreen(sec,1,'Morning Warm-up','listen to daily routine phrases and choose',visualSlot('block1-warmup.jpg','🌅','Morning Warm-up','Start with very easy daily routine phrases','Morning routine and breakfast scene'),item,data.warmup.length,item.audio,()=>{state.screen=2;save();render()},'Фраза',helpers);
}

function listen1(){
  const sec='listen1',idx=state.idx[sec]||0,item=data.listen1.qs[idx];
  const helpers=[
    {title:'Открыть текст интервью',html:transcriptHtml(data.listen1.transcript)},
    {title:'Лёгкая подсказка',html:listHint(['Ищи в тексте ключевые слова: seven, bath, café, coffee, twenty past eight.','Если трудно, сначала прослушай интервью, потом открой текст и проверь себя.'])}
  ];
  commonQuestionScreen(sec,2,'Morning Person','listen to a morning routine and answer',visualSlot('block2-listening.jpg','🎧','Morning Person','Listen to Hannah and answer simple questions','Daily routine listening scene'),item,data.listen1.qs.length,data.listen1.transcript.join(' '),()=>{state.screen=3;save();render()},'Интервью',helpers);
}

function daySort(){
  const total=data.sort.length;const placed=Object.keys(state.sortPlaced||{}).length;const cats=['MORNING','DAYTIME','EVENING'];
  const remaining=data.sort.map((x,i)=>({...x,i})).filter(x=>!state.sortPlaced[x.i]);
  const chips=remaining.map(x=>`<button class="sortChip ${state.sortSelected===x.i?'selected':''}" draggable="true" data-chip="${x.i}">${esc(x.w)}</button>`).join('');
  const cols=cats.map(c=>`<div class="sortCol" data-col="${c}"><h3>${c}</h3>${data.sort.map((x,i)=>state.sortPlaced[i]===c?`<div class="sortPlaced">${esc(x.w)}</div>`:'').join('')}</div>`).join('');
  app.innerHTML=shell(`${title(3,'Day Sort','sort daily routine phrases by part of the day')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block3-sort.jpg','🧩','Day Sort','Put each phrase into the right part of the day','Daily routine vocabulary scene'),[{title:'Подсказка',html:listHint(['Morning = утро','Daytime = день / после обеда','Evening = вечер'])}])}</div><div class="questionCard"><div class="kicker">Day Sort</div><div class="prompt">Sort all 12 phrases.</div><div class="subprompt">Можно перетаскивать карточки или нажать слово, а затем нужный столбец. Это помогает запомнить распорядок дня.</div><div class="sortWrap"><div class="sortBank" id="sortBank">${chips}</div><div class="sortColumns">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Все фразы распределены!'):feedback('neutral','Выбери слово или перетащи карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.sortPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все фразы')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
  document.getElementById('allWords').onclick=function(){playSequence(data.sort.map(x=>x.w),this,'▶ Все фразы')};
  function place(i,cat){const item=data.sort[i];if(!item||state.sortPlaced[i])return;if(item.c===cat){recordAttempt('sort',i,true);state.sortPlaced[i]=cat;state.sortSelected=null;save();daySort()}else{recordAttempt('sort',i,false);state.sortSelected=null;save();const fb=document.getElementById('fb');fb.innerHTML=feedback('bad','Не этот столбец. Попробуй ещё раз.')}}
  document.querySelectorAll('[data-chip]').forEach(el=>{el.onclick=()=>{state.sortSelected=+el.dataset.chip;save();daySort()};el.ondragstart=e=>{e.dataTransfer.setData('text/plain',el.dataset.chip)}});
  document.querySelectorAll('[data-col]').forEach(col=>{col.onclick=()=>{if(state.sortSelected!==null)place(state.sortSelected,col.dataset.col)};col.ondragover=e=>{e.preventDefault();col.classList.add('hot')};col.ondragleave=()=>col.classList.remove('hot');col.ondrop=e=>{e.preventDefault();col.classList.remove('hot');place(+e.dataTransfer.getData('text/plain'),col.dataset.col)}});
  document.getElementById('next').onclick=()=>{state.screen=4;save();render()};
  bindGlobalUi();
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)% (i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast,helpers=[]){
  const idx=state.idx[sec]||0,done=solved(sec,idx);if(!Array.isArray(state.builderChosen))state.builderChosen=[];
  const shuffled=shuffleTokens(item.tokens,idx+sec.length);const chosen=state.builderChosen;
  app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visual,helpers)}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt">Build the sentence.</div><div class="builderWrap"><div class="builderCue">${esc(item.cue)}</div><div class="builderResult">${chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в правильном порядке.</span>'}</div><div class="tokenBank">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="builderActions"><button class="smallBtn" id="clear">Сбросить</button><button class="smallBtn primary" id="check" ${done?'disabled':''}>Проверить</button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Собери предложение')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
  document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast,helpers)});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast,helpers)});
  document.getElementById('clear').onclick=()=>{state.builderChosen=[];save();builderBlock(sec,blockNum,heading,sub,visual,item,total,afterLast,helpers)};
  document.getElementById('check').onclick=()=>{const answer=chosen.map(x=>x.t).join(' ');const target=item.tokens.join(' ');const ok=answer===target;recordAttempt(sec,idx,ok);if(ok){state.builderChosen=[];save();document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false}else{document.getElementById('fb').innerHTML=feedback('bad','Порядок пока неверный. Помни: always / usually / sometimes / never стоят перед главным глаголом.')}};
  document.getElementById('next').onclick=()=>{state.builderChosen=[];if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
  bindGlobalUi();
}
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];const helpers=[{title:'Простое правило',html:listHint(['always / usually / sometimes / never обычно стоят перед смысловым глаголом.', 'Пример: I always have breakfast. / She usually gets up early.'])}];builderBlock(sec,4,'Adverbs Builder','put the words in the correct order',visualSlot('block4-grammar.jpg','🧩','Adverbs Builder','Put the words in the correct order','Adverbs of frequency practice'),item,data.grammar.length,()=>{state.screen=5;save();render()},helpers)}

function reading(){
  const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(5,'Reading Mission','read about a typical day and answer')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту. Текст специально оставлен видимым, чтобы облегчить восприятие beginner-уровню.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="helpersStack">${helperDetails([{title:'Подсказка',html:listHint(['Сначала найди в тексте имя Mia.', 'Ищи цифры времени: 6.30, 8.15, 1.00, 6.00, 10.30.'])}])}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай или прослушай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
  document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
  bindGlobalUi();
}

function pron(){
  const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];
  const helpers=[{title:'Что это за звуки?',html:listHint(['/j/ — yes, yellow, yesterday', '/juː/ — you, use, usually, music, university'])}];
  commonQuestionScreen(sec,6,'Pronunciation','listen and practise /j/ and /juː/',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation','Listen carefully: yes / use / usually / you','Pronunciation practice'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио',helpers)
}

function listen2(){
  const sec='listen2',idx=state.idx[sec]||0,item=data.listen2.qs[idx],done=solved(sec,idx),script=data.listen2.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(7,'Mini Dialogues','listen to short everyday dialogues')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block7-listening.jpg','🎧','Mini Dialogues','Listen to short everyday dialogues','Daily routine listening scene'),[{title:'Открыть текст диалога',html:transcriptHtml(script.lines.map(x=>x.text))},{title:'Подсказка',html:listHint(['Сначала слушай вопрос, затем лови ключевые слова в ответе.','Обращай внимание на time words: at seven, at six, at about eleven.'])}])}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушивать несколько раз. Если трудно, открой скрытый текст.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen2.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen2.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('listenAudio').onclick=function(){playScript(script.lines,this,`Диалог ${script.id}`)};
  document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.listen2.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
  bindGlobalUi();
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
  app.innerHTML=shell(`${title(8,'Routine Repair','find one mistake → fix it → listen to the correct sentence')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block8-experimental.jpg','🛠️','Routine Repair','Find the wrong word and repair the sentence','Learners checking daily routine sentences'),[{title:'Подсказка / правило',html:`<p>${esc(item.hint)}</p>`}])}</div><div class="questionCard errorQuestion"><div class="kicker">Routine Repair</div><div class="prompt">Fix the sentence.</div><div class="subprompt">Нажми на слово с ошибкой. Затем выбери правильную замену. Если нужно, открой подсказку рядом с изображением.</div><div class="errorWork"><div class="errorSentence ${done?'solved':''}">${words.map((t,i)=>`<button class="errorWord ${done&&i===item.err?'correct':''} ${es.selected===i&&!done?'selected':''}" data-token="${i}" ${done?'disabled':''}>${esc(t)}</button>`).join('')}</div><div class="replacementArea ${optionsVisible?'show':''}">${done?'<div class="replaceHint doneHint">Готово. Правильное предложение можно прослушать ещё раз.</div>':optionsVisible?`<div class="replaceLabel">На что заменить <b>${esc(item.tokens[item.err])}</b>?</div><div class="fixOptions">${item.options.map(o=>`<button class="fixChoice" data-fix="${esc(o)}">${esc(o)}</button>`).join('')}</div>`:'<div class="replaceHint">Выбери слово с ошибкой — варианты замены появятся здесь.</div>'}</div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Исправлено! Правильное предложение уже озвучено.'):feedback('neutral',es.message||'Найди слово с ошибкой.')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions"><button class="audioBtn" id="errorModel" ${done?'':'disabled'}>▶ Модель</button><span class="audioMeta">British English · синтез речи</span></div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Результаты →':'Следующее задание →'}</button></div>`);
  document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{if(done)return; const i=+b.dataset.token; if(i!==item.err){recordAttempt(sec,idx,false);es.selected=null;es.message='Это слово верное. Найди другое.';save();error();return;} es.selected=i;es.message='Верно, ошибка найдена. Теперь выбери правильную замену.';save();error();});
  document.querySelectorAll('[data-fix]').forEach(b=>b.onclick=()=>{if(done||es.selected!==item.err)return; const chosen=b.dataset.fix; const ok=chosen===item.fix; recordAttempt(sec,idx,ok); if(ok){es.message='Исправлено!';es.fixed=true;save();error();setTimeout(()=>{const btn=document.getElementById('errorModel');playText(item.audio,btn,'▶ Модель')},120);}else{es.message='Не тот вариант. Попробуй ещё раз.';save();document.getElementById('fb').innerHTML=feedback('bad',es.message);b.classList.add('wrongFlash');setTimeout(()=>b.classList.remove('wrongFlash'),450);}});
  const model=document.getElementById('errorModel'); if(model)model.onclick=function(){if(!done)return;playText(item.audio,this,'▶ Модель')};
  document.getElementById('next').onclick=()=>{state.errorState={selected:null,message:'Найди слово с ошибкой.',fixed:false};if(idx<total-1){state.idx[sec]=idx+1;save();render()}else{state.screen=9;save();render()}};
  bindGlobalUi();
}

function results(){
  const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
  app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 6B · Good morning, goodnight</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="coach" style="margin-top:14px"><div><strong>Что нового в модуле</strong><p>Вы потренировали распорядок дня, listening, reading, pronunciation и грамматику.</p></div><div><strong>Совет</strong><p>Если какой-то блок дался сложнее, вернитесь к нему и попробуйте ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
  document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
  bindGlobalUi();
}

function render(){stopAudio();({0:start,1:warmup,2:listen1,3:daySort,4:grammar,5:reading,6:pron,7:listen2,8:error,9:results}[state.screen]||start)()}
render();
