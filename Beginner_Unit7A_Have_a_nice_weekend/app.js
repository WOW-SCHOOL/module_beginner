const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit7a_have_a_nice_weekend_v1';
const SECTION_BY_SCREEN={1:'warmup',2:'builder',3:'switcher',4:'listen',5:'reading',6:'pron',7:'chat',8:'planner'};
const SECTIONS=['warmup','builder','switcher','listen','reading','pron','chat','planner'];
const LABELS={
  warmup:'Weekend Warm-up',
  builder:'Question Builder',
  switcher:'Be or Do?',
  listen:'Weekend Interview',
  reading:'Weekend Reading',
  pron:'Sound Lab',
  chat:'Weekend Chat',
  planner:'Weekend Planner'
};

const data={
  warmup:[
    {q:'Listen. Which phrase do you hear?',audio:'go out',a:'go out',o:['go out','stay at home','do sport']},
    {q:'Listen. Which phrase do you hear?',audio:'meet friends',a:'meet friends',o:['meet friends','play tennis','walk']},
    {q:'Listen. Which phrase do you hear?',audio:'play computer games',a:'play computer games',o:['play computer games','play the piano','go shopping']},
    {q:'Listen. Which phrase do you hear?',audio:'do sport',a:'do sport',o:['do sport','go to the beach','relax']},
    {q:'Listen. Which phrase do you hear?',audio:'stay at home',a:'stay at home',o:['stay at home','travel','go out']},
    {q:'Listen. Which phrase do you hear?',audio:'play tennis',a:'play tennis',o:['play tennis','swim','walk']},
    {q:'Listen. Which phrase do you hear?',audio:'relax',a:'relax',o:['relax','meet friends','travel']},
    {q:'Listen. Which phrase do you hear?',audio:'go to the beach',a:'go to the beach',o:['go to the beach','stay at home','play computer games']}
  ],
  builder:[
    {cue:'Собери вопрос: Что ты обычно делаешь в субботу?',tokens:['What','do','you','usually','do','on','Saturday?'],audio:'What do you usually do on Saturday?'},
    {cue:'Собери вопрос: Ты выходишь куда-нибудь в пятницу вечером?',tokens:['Do','you','go','out','on','Friday','evening?'],audio:'Do you go out on Friday evening?'},
    {cue:'Собери вопрос: Ты уставший в воскресенье вечером?',tokens:['Are','you','tired','on','Sunday','evening?'],audio:'Are you tired on Sunday evening?'},
    {cue:'Собери вопрос: Где ты встречаешься с друзьями?',tokens:['Where','do','you','meet','your','friends?'],audio:'Where do you meet your friends?'},
    {cue:'Собери вопрос: Во сколько ты встаёшь по выходным?',tokens:['What','time','do','you','get','up','at','weekends?'],audio:'What time do you get up at weekends?'},
    {cue:'Собери вопрос: Твой брат играет в компьютерные игры?',tokens:['Does','your','brother','play','computer','games?'],audio:'Does your brother play computer games?'},
    {cue:'Собери вопрос: Суббота — твой любимый день?',tokens:['Is','Saturday','your','favourite','day?'],audio:'Is Saturday your favourite day?'}
  ],
  switcher:[
    {frame:'___ you tired on Sunday evening?',family:'BE',a:'Are',o:['Is','Are'],hint:'С прилагательным tired нужен глагол be.'},
    {frame:'What ___ you usually do on Saturday?',family:'DO',a:'do',o:['do','does'],hint:'С you в Present Simple используем do.'},
    {frame:'___ your sister at home on Friday evening?',family:'BE',a:'Is',o:['Is','Are'],hint:'Your sister = she, поэтому Is.'},
    {frame:'Where ___ your friends go at weekends?',family:'DO',a:'do',o:['do','does'],hint:'Your friends = they, поэтому do.'},
    {frame:'___ you play tennis on Saturday?',family:'DO',a:'Do',o:['Do','Does'],hint:'С you нужен Do.'},
    {frame:'___ Sunday your favourite day?',family:'BE',a:'Is',o:['Is','Are'],hint:'Sunday — единственное число, поэтому Is.'},
    {frame:'What time ___ your brother get up?',family:'DO',a:'does',o:['do','does'],hint:'Your brother = he, поэтому does.'},
    {frame:'___ your parents busy at the weekend?',family:'BE',a:'Are',o:['Is','Are'],hint:'Your parents = they, поэтому Are.'}
  ],
  listen:{
    scripts:[
      {id:1,title:'Daniel’s weekend',lines:[
        {speaker:'Maya',text:'What do you usually do on Friday evening?'},
        {speaker:'Daniel',text:'I usually meet friends after work. We sometimes go to a café.'},
        {speaker:'Maya',text:'What do you do on Saturday?'},
        {speaker:'Daniel',text:'I get up late, do sport in the morning, and go shopping in the afternoon.'},
        {speaker:'Maya',text:'And Sunday?'},
        {speaker:'Daniel',text:'I stay at home in the morning. I have lunch with my parents, and in the evening I watch a film.'}
      ]},
      {id:2,title:'Sofia’s weekend',lines:[
        {speaker:'Leo',text:'Do you have the same weekend every week?'},
        {speaker:'Sofia',text:'Not really. On Saturday I often go out, but on Sunday I usually relax at home.'},
        {speaker:'Leo',text:'Do you do sport at the weekend?'},
        {speaker:'Sofia',text:'Yes. I usually swim on Sunday morning.'},
        {speaker:'Leo',text:'What is your favourite part of the weekend?'},
        {speaker:'Sofia',text:'Saturday evening, because I meet my friends.'}
      ]}
    ],
    qs:[
      {script:1,q:'What does Daniel usually do on Friday evening?',a:'He meets friends',o:['He meets friends','He stays at home','He plays tennis']},
      {script:1,q:'When does Daniel do sport?',a:'On Saturday morning',o:['On Friday evening','On Saturday morning','On Sunday evening']},
      {script:1,q:'What does Daniel do on Saturday afternoon?',a:'He goes shopping',o:['He goes shopping','He swims','He watches a film']},
      {script:1,q:'Who does Daniel have lunch with on Sunday?',a:'His parents',o:['His parents','His friends','His colleagues']},
      {script:2,q:'Does Sofia have the same weekend every week?',a:'No',o:['Yes','No','Only in summer']},
      {script:2,q:'What does Sofia usually do on Sunday morning?',a:'She swims',o:['She swims','She works','She travels']},
      {script:2,q:'What is Sofia’s favourite part of the weekend?',a:'Saturday evening',o:['Saturday morning','Saturday evening','Sunday afternoon']}
    ]
  },
  reading:{
    text:`<b>Oliver has two very different weekend days.</b><br><br>On Saturday he gets up at about nine. He has coffee and toast, then he goes out. He often meets friends in the city centre. In the afternoon they sometimes play tennis or walk in the park. In the evening Oliver usually eats in a small restaurant and goes home late.<br><br>Sunday is quieter. Oliver stays at home in the morning and reads. At one o’clock he has lunch with his sister. In the afternoon he does housework and sometimes plays computer games. He never goes out on Sunday evening because he wants to relax before Monday.`,
    audio:[
      'Oliver has two very different weekend days.',
      'On Saturday he gets up at about nine.',
      'He has coffee and toast, then he goes out.',
      'He often meets friends in the city centre.',
      'In the afternoon they sometimes play tennis or walk in the park.',
      'In the evening Oliver usually eats in a small restaurant and goes home late.',
      'Sunday is quieter.',
      'Oliver stays at home in the morning and reads.',
      'At one o’clock he has lunch with his sister.',
      'In the afternoon he does housework and sometimes plays computer games.',
      'He never goes out on Sunday evening because he wants to relax before Monday.'
    ],
    qs:[
      {q:'What time does Oliver get up on Saturday?',a:'At about nine',o:['At about seven','At about nine','At eleven']},
      {q:'Where does he often meet friends?',a:'In the city centre',o:['At home','In the city centre','At the beach']},
      {q:'What do Oliver and his friends sometimes do in the afternoon?',a:'Play tennis or walk in the park',o:['Play tennis or walk in the park','Go shopping','Watch TV']},
      {q:'Who does Oliver have lunch with on Sunday?',a:'His sister',o:['His sister','His parents','His friends']},
      {q:'What does he sometimes do on Sunday afternoon?',a:'Play computer games',o:['Play computer games','Swim','Travel']},
      {q:'Why does Oliver stay at home on Sunday evening?',a:'He wants to relax before Monday',o:['He wants to relax before Monday','He works at night','He has a tennis lesson']}
    ]
  },
  pron:[
    {w:'weekend',c:'/w/'},{w:'home',c:'/h/'},{w:'hair',c:'/eə/'},{w:'now',c:'/aʊ/'},
    {w:'watch',c:'/w/'},{w:'hotel',c:'/h/'},{w:'chair',c:'/eə/'},{w:'out',c:'/aʊ/'},
    {w:'work',c:'/w/'},{w:'have',c:'/h/'},{w:'parents',c:'/eə/'},{w:'about',c:'/aʊ/'}
  ],
  chat:[
    {from:'Lucy',message:'Hi! What do you usually do on Friday evening?',a:'I usually meet friends after work.',o:['I usually meet friends after work.','I am meet friends after work.','Usually I meeting friends.']},
    {from:'Lucy',message:'Nice! Do you go out on Saturday?',a:'Yes, I do. I often go to a café.',o:['Yes, I am. I often go to a café.','Yes, I do. I often go to a café.','Yes, I does. I often go to a café.']},
    {from:'Lucy',message:'What do you do on Sunday morning?',a:'I usually stay at home and relax.',o:['I usually stay at home and relax.','I am usually stay at home.','I usually stays at home.']},
    {from:'Lucy',message:'Are you busy on Sunday afternoon?',a:'No, I’m not. I sometimes meet my family.',o:['No, I don’t. I sometimes meet my family.','No, I’m not. I sometimes meet my family.','No, I isn’t. I meet my family.']},
    {from:'Lucy',message:'What time do you usually get up at weekends?',a:'At about nine.',o:['At about nine.','I get up is nine.','Yes, at nine.']},
    {from:'Lucy',message:'Sounds good. Have a nice weekend!',a:'Thanks! You too!',o:['Thanks! You too!','Yes, I have.','I do weekend.']}
  ],
  planner:[
    {audio:'On Saturday morning, Alex does sport.',activity:'do sport',slot:'sat-am'},
    {audio:'On Saturday afternoon, Alex meets friends.',activity:'meet friends',slot:'sat-pm'},
    {audio:'On Saturday evening, Alex goes out.',activity:'go out',slot:'sat-eve'},
    {audio:'On Sunday morning, Alex stays at home and relaxes.',activity:'stay at home + relax',slot:'sun-am'},
    {audio:'On Sunday afternoon, Alex has lunch with his parents.',activity:'have lunch with parents',slot:'sun-pm'},
    {audio:'On Sunday evening, Alex watches a film.',activity:'watch a film',slot:'sun-eve'}
  ]
};

const MAX={warmup:data.warmup.length,builder:data.builder.length,switcher:data.switcher.length,listen:data.listen.qs.length,reading:data.reading.qs.length,pron:data.pron.length,chat:data.chat.length,planner:data.planner.length};
const fresh=()=>({
  screen:0,
  idx:{warmup:0,builder:0,switcher:0,listen:0,reading:0,chat:0,planner:0},
  answers:{warmup:{},builder:{},switcher:{},listen:{},reading:{},pron:{},chat:{},planner:{}},
  mistakes:{},
  builderChosen:[],
  switchFamily:null,
  pronPlaced:{},pronSelected:null,
  chatHistory:[],
  plannerPlaced:{}
});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...(s.answers||{})},plannerPlaced:{...(s.plannerPlaced||{})},pronPlaced:{...(s.pronPlaced||{})}}}catch(e){}
state.screen=0;
try{const p=new URLSearchParams(location.search);if(p.has('screen')){const s=+p.get('screen');if(!Number.isNaN(s))state.screen=Math.max(0,Math.min(9,s));}const sec=SECTION_BY_SCREEN[state.screen];if(sec&&p.has('idx')&&state.idx[sec]!==undefined){const i=+p.get('idx');if(!Number.isNaN(i))state.idx[sec]=Math.max(0,Math.min(MAX[sec]-1,i));}}catch(e){}
let devMode=false;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}
function currentSection(){return SECTION_BY_SCREEN[state.screen]||null}
function currentTaskLabel(){const sec=currentSection();if(!sec)return 'Start';if(sec==='pron')return `${Object.keys(state.pronPlaced||{}).length} / ${MAX.pron}`;return `${(state.idx[sec]||0)+1} / ${MAX[sec]}`}
function changeTask(dir){const sec=currentSection();if(!sec||sec==='pron'||!(sec in state.idx))return;const max=MAX[sec],cur=state.idx[sec]||0,next=Math.max(0,Math.min(max-1,cur+dir));if(next!==cur){state.idx[sec]=next;state.builderChosen=[];state.switchFamily=null;save();render()}}
function changeBlock(dir){const next=Math.max(0,Math.min(9,(state.screen||0)+dir));if(next!==state.screen){state.screen=next;state.builderChosen=[];state.switchFamily=null;save();render()}}
addEventListener('keydown',e=>{if(e.ctrlKey&&e.altKey&&e.key.toLowerCase()==='d'){e.preventDefault();devMode=!devMode;render();return}if(e.altKey&&e.shiftKey&&e.key==='ArrowRight'){e.preventDefault();changeTask(1)}if(e.altKey&&e.shiftKey&&e.key==='ArrowLeft'){e.preventDefault();changeTask(-1)}if(e.altKey&&e.ctrlKey&&e.key==='ArrowRight'){e.preventDefault();changeBlock(1)}if(e.altKey&&e.ctrlKey&&e.key==='ArrowLeft'){e.preventDefault();changeBlock(-1)}});

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 7A · Have a nice weekend!</div></div></div><div class="unitBadge" id="devToggle"><span>English File Beginner</span><strong>Unit 7A</strong></div></div>`}
function devBar(){if(!devMode)return '';return `<div class="devBar"><strong>DEV</strong><span>${currentSection()||'home'} · ${currentTaskLabel()}</span><button class="devBtn" id="devPrevBlock">◀ block</button><button class="devBtn" id="devNextBlock">block ▶</button><button class="devBtn" id="devPrevTask">◀ task</button><button class="devBtn" id="devNextTask">task ▶</button></div>`}
function shell(inner){return `${header()}${devBar()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 7A</b> · ${sub}</p></div>${progress(n)}</div>`}
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
async function playSequence(texts,btn,idle='▶ Прослушать'){if(btn?.classList.contains('busy')){stopAudio();btn.classList.remove('busy');btn.classList.remove('error');btn.textContent=idle;return}stopAudio();const token=++playToken;btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const t of texts){if(token!==playToken)return;await playChunk(t,token)}if(token===playToken){btn?.classList.remove('busy');if(btn)btn.textContent=idle}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');if(btn)btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');if(btn)btn.textContent=idle},2200)}}}
function playText(text,btn,idle='▶ Прослушать'){return playSequence(splitTTS(text),btn,idle)}
function playScript(lines,btn,label='Диалог'){return playSequence(lines.flatMap(x=>splitTTS(x.text,110)),btn,`▶ ${label}`)}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>Визуальная опора к заданию</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit7a.jpg" alt="Beginner Unit 7A Have a nice weekend preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">✨</div><strong>Beginner · Unit 7A</strong><span>Have a nice weekend! · free time · questions · listening · pronunciation</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Weekend reading image" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Weekend Reading','A relaxed weekend story')}</div>`}
function helperDock(list=[]){const html=helperDetails(list);return html?`<div class="visualHelpers">${html}</div>`:''}
function visualWithHelpers(visualHTML,helpers=[]){return `<div class="visualWithHelpers"><div class="visualMain">${visualHTML}</div>${helperDock(helpers)}</div>`}
function bindGlobalUi(){const dt=document.getElementById('devToggle');if(dt)dt.ondblclick=()=>{devMode=!devMode;render()};if(devMode){const pb=document.getElementById('devPrevBlock');if(pb)pb.onclick=()=>changeBlock(-1);const nb=document.getElementById('devNextBlock');if(nb)nb.onclick=()=>changeBlock(1);const pt=document.getElementById('devPrevTask');if(pt)pt.onclick=()=>changeTask(-1);const nt=document.getElementById('devNextTask');if(nt)nt.onclick=()=>changeTask(1)}}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,customAudio=null,helpers=[]){
  const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualHTML,helpers)}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Если нужна опора, открой подсказку рядом с изображением.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',customAudio||'Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  if(audioText){document.getElementById('audio').onclick=function(){playText(audioText,this,`▶ ${customAudio||'Прослушать'}`)}}
  document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};bindGlobalUi();
}

function start(){
  app.innerHTML=shell(`<div class="hero"><div><div class="eyebrow">WOW SCHOOL · Interactive lesson module</div><h1>Have a nice <span>weekend!</span></h1><p class="lede">Здесь вы потренируете английский для разговоров о выходных: вспомните <b>free-time activities</b>, научитесь увереннее строить вопросы с <b>be / do / does</b>, потренируете listening, reading и произношение.</p><p class="studentHelp">💡 Если в каком-то задании будет трудно, откройте <b>подсказку, правило или текст аудио</b> под изображением. Они помогут разобраться и продолжить самостоятельно.</p><div class="heroFeatures"><span>Free time</span><span>Questions: be / do / does</span><span>Listening + transcript</span><span>Pronunciation</span><span>Weekend planner</span></div><div class="heroBtns"><button class="btn primary" id="startBtn">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
  document.getElementById('startBtn').onclick=()=>{state.screen=1;save();render()};document.getElementById('reset').onclick=()=>{if(confirm('Сбросить весь прогресс?')){state=fresh();save();render()}};bindGlobalUi();
}

function warmup(){const sec='warmup',idx=state.idx[sec]||0,item=data.warmup[idx];const helpers=[{title:'Подсказка',html:listHint(['Сначала слушай глагол: go, meet, play, do, stay.','Это короткий разогрев по теме free time.'])}];commonQuestionScreen(sec,1,'Weekend Warm-up','listen to free-time phrases and choose',visualSlot('block1-vocabulary.jpg','🎾','Weekend Warm-up','Free-time activities at the weekend','Weekend free-time lifestyle scene'),item,data.warmup.length,item.audio,()=>{state.screen=2;save();render()},'Фраза',helpers)}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function questionBuilder(){
  const sec='builder',idx=state.idx[sec]||0,item=data.builder[idx],done=solved(sec,idx);if(!Array.isArray(state.builderChosen))state.builderChosen=[];const shuffled=shuffleTokens(item.tokens,idx+19),chosen=state.builderChosen;
  const helpers=[{title:'Простое правило',html:listHint(['С be: Are you tired? / Is Saturday your favourite day?','С обычными глаголами: Do you go out? / Does your brother play?','После do / does глагол идёт в базовой форме: play, go, meet.'])}];
  app.innerHTML=shell(`${title(2,'Question Builder','build weekend questions in the correct order')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block2-question-builder.jpg','🧩','Question Builder','Put the question in the correct order','Friends planning a weekend'),helpers)}</div><div class="questionCard"><div class="kicker">Question Builder</div><div class="prompt">Build the question.</div><div class="builderWrap"><div class="builderCue">${esc(item.cue)}</div><div class="builderResult">${chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span class="builderPlaceholder">Нажимай слова в правильном порядке.</span>'}</div><div class="tokenBank">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="builderActions"><button class="smallBtn" id="clear">Сбросить</button><button class="smallBtn primary" id="check" ${done?'disabled':''}>Проверить</button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Собери вопрос')}</div>${miniProgress(sec,idx,data.builder.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.builder.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
  document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});save();questionBuilder()});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);save();questionBuilder()});
  document.getElementById('clear').onclick=()=>{state.builderChosen=[];save();questionBuilder()};
  document.getElementById('check').onclick=()=>{const ok=chosen.map(x=>x.t).join(' ')===item.tokens.join(' ');recordAttempt(sec,idx,ok);if(ok){state.builderChosen=[];save();document.getElementById('fb').innerHTML=feedback('good','Верно! Теперь послушай модель.');document.getElementById('next').disabled=false}else document.getElementById('fb').innerHTML=feedback('bad','Порядок пока неверный. Открой правило и попробуй ещё раз.')};
  document.getElementById('next').onclick=()=>{state.builderChosen=[];if(idx<data.builder.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=3;save();render()}};bindGlobalUi();
}

function questionSwitch(){
  const sec='switcher',idx=state.idx[sec]||0,item=data.switcher[idx],done=solved(sec,idx),family=state.switchFamily;
  const helpers=[{title:'Как выбрать?',html:listHint(['BE: am / is / are — когда говорим “быть”: tired, busy, at home, favourite day.','DO: do / does — перед обычным глаголом: go, play, meet, get up.'])},{title:'Подсказка',html:`<p>${esc(item.hint)}</p>`}];
  app.innerHTML=shell(`${title(3,'Question Switch','choose BE or DO, then complete the question')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block3-question-switch.jpg','🔀','Question Switch','Choose the correct question engine','Casual weekend interview scene'),helpers)}</div><div class="questionCard"><div class="kicker">Be or Do?</div><div class="prompt switchFrame">${esc(item.frame)}</div><div class="subprompt">Сначала выбери тип вопроса. Затем появится правильная форма.</div><div class="switchRail"><button class="engineBtn ${family==='BE'?'active':''}" data-family="BE" ${done?'disabled':''}>BE</button><div class="switchTrack"><i class="${family==='DO'?'toRight':family==='BE'?'toLeft':''}"></i></div><button class="engineBtn ${family==='DO'?'active':''}" data-family="DO" ${done?'disabled':''}>DO / DOES</button></div><div class="exactChoices">${family?item.o.map(o=>`<button class="answer switchAnswer" data-switch-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join(''):'<div class="switchPrompt">Выбери BE или DO / DOES.</div>'}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала выбери тип вопроса')}</div>${miniProgress(sec,idx,data.switcher.length)}</div></div></div><div class="footerActions"><div class="leftActions"></div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.switcher.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.querySelectorAll('[data-family]').forEach(b=>b.onclick=()=>{if(done)return;const chosen=b.dataset.family;if(chosen!==item.family){recordAttempt(sec,idx,false);state.switchFamily=null;save();questionSwitch();setTimeout(()=>{const fb=document.getElementById('fb');if(fb)fb.innerHTML=feedback('bad','Проверь правило: здесь нужен другой тип вопроса.')},0);return}state.switchFamily=chosen;save();questionSwitch()});
  document.querySelectorAll('[data-switch-value]').forEach(b=>b.onclick=()=>{if(done)return;const ok=b.dataset.switchValue===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-switch-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Форма пока неверная. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{state.switchFamily=null;if(idx<data.switcher.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=4;save();render()}};bindGlobalUi();
}

function listening(){
  const sec='listen',idx=state.idx[sec]||0,item=data.listen.qs[idx],done=solved(sec,idx),script=data.listen.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
  const transcript=script.lines.map(x=>`${x.speaker}: ${x.text}`);
  const helpers=[{title:'Открыть текст диалога',html:transcriptHtml(transcript)},{title:'Лёгкая подсказка',html:listHint(['Слушай ключевые слова: Friday, Saturday, Sunday, morning, afternoon, evening.','Имена видны только в тексте. В аудио звучат только сами реплики.'])}];
  app.innerHTML=shell(`${title(4,'Weekend Interview','listen to short weekend conversations')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block4-listening.jpg','🎧','Weekend Interview','Listen to a short weekend conversation','Two adults chatting about their weekend'),helpers)}</div><div class="questionCard"><div class="kicker">${esc(script.title)}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Прослушай диалог. Если трудно, открой текст под изображением.</div><div class="answers">${options.map(o=>`<button class="answer" data-listen-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('listenAudio').onclick=function(){playScript(script.lines,this,`Диалог ${script.id}`)};
  document.querySelectorAll('[data-listen-value]').forEach(b=>b.onclick=()=>{if(done)return;const ok=b.dataset.listenValue===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-listen-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.listen.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=5;save();render()}};bindGlobalUi();
}

function reading(){
  const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(5,'Weekend Reading','read a short weekend story and find the details')}<div class="blockBody"><div class="visualCard"><div class="readingCardStack"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div>${helperDock([{title:'Подсказка',html:listHint(['Saturday = более активный день.', 'Sunday = более спокойный день. Ищи точные детали рядом с day / time words.'])}])}</div></div><div class="questionCard"><div class="kicker">Reading</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь по тексту. Можно перечитывать его столько раз, сколько нужно.</div><div class="answers">${options.map(o=>`<button class="answer" data-read-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай или прослушай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
  document.querySelectorAll('[data-read-value]').forEach(b=>b.onclick=()=>{if(done)return;const ok=b.dataset.readValue===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-read-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту и проверь деталь.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};bindGlobalUi();
}

function pronunciation(){
  const sec='pron',total=data.pron.length,placed=Object.keys(state.pronPlaced||{}).length,cats=['/w/','/h/','/eə/','/aʊ/'];
  const remaining=data.pron.map((x,i)=>({...x,i})).filter(x=>!state.pronPlaced[x.i]);
  const chips=remaining.map(x=>`<button class="sortChip soundChip ${state.pronSelected===x.i?'selected':''}" draggable="true" data-pron-chip="${x.i}">${esc(x.w)}</button>`).join('');
  const cols=cats.map(c=>`<div class="sortCol soundCol" data-pron-col="${c}"><h3>${c}</h3>${data.pron.map((x,i)=>state.pronPlaced[i]===c?`<button class="soundPlaced" data-say="${esc(x.w)}">${esc(x.w)}</button>`:'').join('')}</div>`).join('');
  const helpers=[{title:'Звуковая подсказка',html:listHint(['/w/ — weekend, watch','/h/ — home, have','/eə/ — hair, chair','/aʊ/ — now, out'])}];
  app.innerHTML=shell(`${title(6,'Sound Lab','sort words by /w/, /h/, /eə/, and /aʊ/')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block6-pronunciation.jpg','🗣️','Sound Lab','Listen, notice, and sort the sounds','Pronunciation practice with headphones'),helpers)}</div><div class="questionCard"><div class="kicker">Pronunciation</div><div class="prompt">Sort all 12 words.</div><div class="subprompt">Можно перетащить слово или нажать слово, а затем нужный звук.</div><div class="sortWrap soundSort"><div class="sortBank">${chips}</div><div class="sortColumns fourCols">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Отлично! Все слова распределены.'):feedback('neutral','Выбери слово и нужный звук')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.pronPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allSounds','Все слова')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
  document.getElementById('allSounds').onclick=function(){playSequence(data.pron.map(x=>x.w),this,'▶ Все слова')};
  function place(i,cat){const item=data.pron[i];if(!item||state.pronPlaced[i])return;if(item.c===cat){recordAttempt(sec,i,true);state.pronPlaced[i]=cat;state.pronSelected=null;save();pronunciation()}else{recordAttempt(sec,i,false);state.pronSelected=null;save();const fb=document.getElementById('fb');if(fb)fb.innerHTML=feedback('bad','Не этот звук. Послушай слово и попробуй ещё раз.')}}
  document.querySelectorAll('[data-pron-chip]').forEach(el=>{el.onclick=()=>{state.pronSelected=+el.dataset.pronChip;save();pronunciation()};el.ondragstart=e=>e.dataTransfer.setData('text/plain',el.dataset.pronChip)});
  document.querySelectorAll('[data-pron-col]').forEach(col=>{col.onclick=()=>{if(state.pronSelected!==null)place(state.pronSelected,col.dataset.pronCol)};col.ondragover=e=>{e.preventDefault();col.classList.add('hot')};col.ondragleave=()=>col.classList.remove('hot');col.ondrop=e=>{e.preventDefault();col.classList.remove('hot');place(+e.dataTransfer.getData('text/plain'),col.dataset.pronCol)}});
  document.querySelectorAll('[data-say]').forEach(b=>b.onclick=function(){playText(this.dataset.say,this,`▶ ${this.dataset.say}`)});
  document.getElementById('next').onclick=()=>{state.screen=7;save();render()};bindGlobalUi();
}

function weekendChat(){
  const sec='chat',idx=state.idx[sec]||0,item=data.chat[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  const history=data.chat.slice(0,idx).flatMap(x=>[{who:'Lucy',text:x.message},{who:'You',text:x.a}]);history.push({who:'Lucy',text:item.message});
  const helpers=[{title:'Подсказка',html:listHint(['Смотри на форму вопроса: Do you…? → Yes, I do / No, I don’t.','Are you…? → Yes, I am / No, I’m not.','В обычном ответе используй базовую форму: I meet / I go / I stay.'])}];
  app.innerHTML=shell(`${title(7,'Weekend Chat','continue a short weekend conversation')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block7-chat.jpg','💬','Weekend Chat','Choose a natural reply and keep the conversation going','Young adult using a phone on the weekend'),helpers)}</div><div class="questionCard chatCard"><div class="kicker">Chat with Lucy</div><div class="chatWindow">${history.slice(-7).map(m=>`<div class="chatBubble ${m.who==='You'?'me':'friend'}"><b>${m.who}</b><span>${esc(m.text)}</span></div>`).join('')}</div><div class="subprompt">Выбери естественный и грамматически правильный ответ.</div><div class="answers compactAnswers">${options.map(o=>`<button class="answer" data-chat-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Отличный ответ!'):feedback('neutral','Выбери ответ')}</div>${miniProgress(sec,idx,data.chat.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('chatAudio','Сообщение')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.chat.length-1?'Следующий блок →':'Следующее сообщение →'}</button></div>`);
  document.getElementById('chatAudio').onclick=function(){playText(item.message,this,'▶ Сообщение')};
  document.querySelectorAll('[data-chat-value]').forEach(b=>b.onclick=()=>{if(done)return;const ok=b.dataset.chatValue===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Отличный ответ!');document.querySelectorAll('[data-chat-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false;playText(item.a,null,'')}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Этот ответ звучит неестественно. Попробуй другой.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.chat.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};bindGlobalUi();
}

function weekendPlanner(){
  const sec='planner',idx=state.idx[sec]||0,item=data.planner[idx],done=solved(sec,idx),slots=[
    ['sat-am','Saturday','morning'],['sat-pm','Saturday','afternoon'],['sat-eve','Saturday','evening'],
    ['sun-am','Sunday','morning'],['sun-pm','Sunday','afternoon'],['sun-eve','Sunday','evening']
  ];
  const helpers=[{title:'Открыть текст аудио',html:`<p>${esc(item.audio)}</p>`},{title:'Подсказка',html:listHint(['Сначала найди день: Saturday или Sunday.','Затем найди часть дня: morning, afternoon или evening.'])}];
  const grid=slots.map(([id,day,time])=>{const placed=state.plannerPlaced[id];return `<button class="plannerSlot ${placed?'filled':''}" data-slot="${id}" ${done?'disabled':''}><small>${day}</small><strong>${time}</strong><span>${placed?esc(placed):'＋'}</span></button>`}).join('');
  app.innerHTML=shell(`${title(8,'Weekend Planner','listen and build Alex’s weekend schedule')}<div class="blockBody"><div class="visualCard">${visualWithHelpers(visualSlot('block8-planner.jpg','🗓️','Weekend Planner','Listen and place each activity in the right weekend slot','Weekend planning scene with calendar and coffee'),helpers)}</div><div class="questionCard plannerCard"><div class="kicker">Build Alex’s weekend</div><div class="prompt">Where does this activity go?</div><div class="plannerCurrent"><span>Current activity</span><strong>${esc(item.activity)}</strong></div><div class="plannerGrid">${grid}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно! Карточка добавлена в план.'):feedback('neutral','Прослушай фразу и выбери день + часть дня')}</div>${miniProgress(sec,idx,data.planner.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('plannerAudio','Подсказка аудио')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.planner.length-1?'Результаты →':'Следующая карточка →'}</button></div>`);
  document.getElementById('plannerAudio').onclick=function(){playText(item.audio,this,'▶ Подсказка аудио')};
  document.querySelectorAll('[data-slot]').forEach(b=>b.onclick=()=>{if(done)return;const slot=b.dataset.slot,ok=slot===item.slot;recordAttempt(sec,idx,ok);if(ok){state.plannerPlaced[slot]=item.activity;save();b.classList.add('slotPop');document.getElementById('fb').innerHTML=feedback('good','Верно! Карточка добавлена в план.');document.querySelectorAll('[data-slot]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Проверь день и часть дня. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.planner.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=9;save();render()}};bindGlobalUi();
}

function results(){
  const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
  app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 7A · Have a nice weekend!</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="coach" style="margin-top:14px"><div><strong>Что вы потренировали</strong><p>Free time, вопросы с be / do / does, listening, reading и произношение.</p></div><div><strong>Совет</strong><p>Если вопрос строится сложно, вернитесь к Question Builder и Be or Do?.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
  document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};bindGlobalUi();
}

function render(){stopAudio();({0:start,1:warmup,2:questionBuilder,3:questionSwitch,4:listening,5:reading,6:pronunciation,7:weekendChat,8:weekendPlanner,9:results}[state.screen]||start)()}
render();
