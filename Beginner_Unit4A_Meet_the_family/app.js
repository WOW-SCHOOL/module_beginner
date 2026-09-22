
const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const SECTIONS=['vocab','pron','grammar','match','reading','listening','review'];
const LABELS={vocab:'Family Vocabulary',pron:'Sounds & Pronunciation',grammar:'Possessive Grammar',match:'Family Match',reading:'Reading Mission',listening:'Listening Mission',review:'Family Snapshot Review'};
const STORAGE_KEY='wow_beginner_unit4a_meet_the_family_v1';

const data={
  vocab:[
    {q:'This is an adult male person.',a:'a man',o:['a man','a woman','a boy','a girl']},
    {q:'This is an adult female person.',a:'a woman',o:['a woman','a girl','a wife','a sister']},
    {q:'This is a young male child.',a:'a boy',o:['a boy','a girl','a man','a brother']},
    {q:'This is a young female child.',a:'a girl',o:['a girl','a woman','a sister','a mother']},
    {q:'Your father and mother are your ___.',a:'parents',o:['parents','children','friends','wives']},
    {q:'Your mother’s husband is your ___.',a:'father',o:['father','brother','husband','son']},
    {q:'Your father’s wife is your ___.',a:'mother',o:['mother','sister','daughter','wife']},
    {q:'Your parents’ son is your ___.',a:'brother',o:['brother','husband','father','boy']},
    {q:'Your parents’ daughter is your ___.',a:'sister',o:['sister','wife','girl','mother']},
    {q:'If a man is married, the woman is his ___.',a:'wife',o:['wife','mother','daughter','sister']}
  ],
  pron:[
    {q:'Listen. Which word do you hear?',audio:'husband',a:'husband',o:['husband','brother','parents']},
    {q:'Listen. Which word do you hear?',audio:'man',a:'man',o:['man','mum','son']},
    {q:'Listen. Which word do you hear?',audio:'mother',a:'mother',o:['mother','father','girl']},
    {q:'Which word has the /æ/ sound like in “cat”?',a:'man',o:['man','mother','woman']},
    {q:'Which word has the /ʌ/ sound like in “up”?',a:'husband',o:['husband','sister','children']},
    {q:'Which word ends with the schwa /ə/ sound?',a:'sister',o:['sister','boy','girl']},
    {q:'In the sentence “This is my mother.”, which word is the family word?',a:'mother',o:['this','my','mother']},
    {q:'Which pair contains two family words?',a:'brother / sister',o:['brother / sister','man / thanks','girl / red']}
  ],
  grammar:[
    {q:'I’m Leo. This is ___ sister, Anna.',a:'my',o:['my','his','their','our']},
    {q:'Maria is my friend. ___ husband is Ben.',a:'her',o:['her','his','their','our']},
    {q:'Ben and Maria have two children. ___ children are Emma and Archie.',a:'their',o:['their','our','his','its']},
    {q:'We have a dog. ___ name is Coco.',a:'its',o:['its','his','her','their']},
    {q:'Sarah is the babysitter. This is ___ bag.',a:'her',o:['her','his','our','its']},
    {q:'Tom and I are friends. Mrs Hill is ___ teacher.',a:'our',o:['our','their','my','her']},
    {q:'Paul is Jane’s brother. Jane is ___ sister.',a:'his',o:['his','her','their','my']},
    {q:'This is Emma’s teddy. It is ___ teddy.',a:'Emma’s',o:['Emma’s','Emmas','Emma','its']},
    {q:'Jerry is Susan’s ___.',a:'husband',o:['husband','wife','sister','daughter']},
    {q:'Nicole is Jane’s ___.',a:'sister',o:['sister','wife','mother','daughter']}
  ],
  match:[
    {left:'father', right:'папа / отец'},
    {left:'mother', right:'мама / мать'},
    {left:'brother', right:'брат'},
    {left:'sister', right:'сестра'},
    {left:'husband', right:'муж'},
    {left:'wife', right:'жена'},
    {left:'parents', right:'родители'},
    {left:'children', right:'дети'}
  ],
  reading:{
    text:`<b>Sarah is the Taylor family’s babysitter.</b> Today she is at the Taylors’ house. Maria Taylor is Emma and Archie’s mother, and Ben Taylor is their father. Emma is seven and Archie is four. Coco is the family’s dog.<br><br>Maria says, “Sarah, these are the children’s snacks, and Ben’s number is on the table.” Sarah smiles and says, “Thanks. Your children are great.” Emma says, “This is my teddy. Its name is Bunny.” Sarah says, “Hello, Bunny!”`,
    audio:[
      'Sarah is the Taylor family’s babysitter.',
      'Today she is at the Taylors’ house. Maria Taylor is Emma and Archie’s mother, and Ben Taylor is their father.',
      'Emma is seven and Archie is four. Coco is the family’s dog.',
      'Maria says, Sarah, these are the children’s snacks, and Ben’s number is on the table.',
      'Sarah smiles and says, Thanks. Your children are great.',
      'Emma says, This is my teddy. Its name is Bunny. Sarah says, Hello, Bunny.'
    ],
    qs:[
      {q:'Who is Sarah?',a:'The babysitter',o:['The babysitter','The mother','The sister']},
      {q:'Who are Emma and Archie?',a:'Maria and Ben’s children',o:['Maria and Ben’s children','Sarah’s friends','The neighbours']},
      {q:'How old is Archie?',a:'Four',o:['Four','Seven','Ten']},
      {q:'Whose number is on the table?',a:'Ben’s',o:['Ben’s','Sarah’s','Emma’s']},
      {q:'What is Bunny?',a:'Emma’s teddy',o:['Emma’s teddy','The family dog','A snack']},
      {q:'Who is Coco?',a:'The family’s dog',o:['The family’s dog','The father','The babysitter']}
    ]
  },
  listening:{
    scripts:[
      {id:1,lines:[
        {text:'What a lovely card!'},{text:'Yes, it is from my family.'},{text:'Can I see?'},{text:'Sure.'},
        {text:'Who is Paul? Is he your brother?'},{text:'Yes, he is my brother, and Hayley is his girlfriend.'},
        {text:'How old is Paul?'},{text:'He is thirty.'},
        {text:'What about Susan? Is she your sister?'},{text:'No, Susan is my brother Jerry’s wife. And Sally is their daughter.'}
      ]},
      {id:2,lines:[
        {text:'So who is Nicole?'},{text:'She is my sister.'},{text:'Is John her husband?'},{text:'No, he is her boyfriend. They are not married.'},
        {text:'And how old is Nicole?'},{text:'She is twenty-six.'},{text:'And who is Max?'},{text:'He is my dog!'}
      ]}
    ],
    qs:[
      {q:'Who is Paul?',a:'Jane’s brother',o:['Jane’s brother','Jane’s husband','Jane’s son'],script:1},
      {q:'Who is Hayley?',a:'Paul’s girlfriend',o:['Paul’s girlfriend','Jane’s sister','Jerry’s wife'],script:1},
      {q:'How old is Paul?',a:'30',o:['30','26','29'],script:1},
      {q:'Who is Susan?',a:'Jerry’s wife',o:['Jerry’s wife','Jane’s sister','Paul’s girlfriend'],script:1},
      {q:'Who is Sally?',a:'Jerry and Susan’s daughter',o:['Jerry and Susan’s daughter','Jane’s dog','Nicole’s sister'],script:1},
      {q:'Who is Nicole?',a:'Jane’s sister',o:['Jane’s sister','Jane’s mother','Jane’s wife'],script:2},
      {q:'Who is John?',a:'Nicole’s boyfriend',o:['Nicole’s boyfriend','Nicole’s husband','Paul’s friend'],script:2},
      {q:'Who is Max?',a:'Jane’s dog',o:['Jane’s dog','Jane’s brother','Jane’s son'],script:2}
    ]
  },
  review:[
    {q:'Henri is Alice’s ___.',a:'father',o:['father','brother','husband','son']},
    {q:'Cécile is Alice’s ___.',a:'mother',o:['mother','sister','wife','daughter']},
    {q:'Pauline is Alice’s ___.',a:'sister',o:['sister','mother','wife','daughter']},
    {q:'Olivier is Alice’s ___.',a:'brother',o:['brother','father','husband','son']},
    {q:'Toto is the family’s ___.',a:'dog',o:['dog','father','boy','friend']},
    {q:'“This is ___ family.”',a:'my',o:['my','his','their','its']},
    {q:'Pauline is Henri and Cécile’s ___.',a:'daughter',o:['daughter','wife','mother','sister']},
    {q:'Olivier is Pauline’s ___.',a:'brother',o:['brother','father','husband','son']}
  ]
};

const MAX={vocab:data.vocab.length,pron:data.pron.length,grammar:data.grammar.length,match:data.match.length,reading:data.reading.qs.length,listening:data.listening.qs.length,review:data.review.length};
const fresh=()=>({screen:0,idx:{vocab:0,pron:0,grammar:0,match:0,reading:0,listening:0,review:0},answers:{vocab:{},pron:{},grammar:{},match:{},reading:{},listening:{},review:{}},mistakes:{},matchSelection:null,matchRightOrder:[]});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 4A · Meet the family</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 4A</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/7</strong><div class="track"><i style="width:${n/7*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 4A</b> · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}

let currentAudio=null,playToken=0,currentUtterance=null;
const ttsAudio=document.createElement('audio');ttsAudio.preload='auto';ttsAudio.setAttribute('playsinline','');ttsAudio.setAttribute('webkit-playsinline','');ttsAudio.referrerPolicy='no-referrer';ttsAudio.style.display='none';document.body.appendChild(ttsAudio);
function providerUrls(text){const q=encodeURIComponent(text.replace(/\s+/g,' ').trim());return [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`,`https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.google.co.uk/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`]}
function splitTTS(text,max=220){const clean=text.replace(/\s+/g,' ').trim();if(clean.length<=max)return [clean];const out=[];let rest=clean;while(rest.length){if(rest.length<=max){out.push(rest);break}let cut=-1;for(const mark of ['. ','? ','! ',', ','; ']){const i=rest.lastIndexOf(mark,max);if(i>Math.floor(max*.52)){cut=i+mark.length-1;break}}if(cut<0){cut=rest.lastIndexOf(' ',max);if(cut<Math.floor(max*.52))cut=max}out.push(rest.slice(0,cut).trim());rest=rest.slice(cut).trim()}return out.filter(Boolean)}
function stopAudio(){playToken++;try{ttsAudio.pause();ttsAudio.removeAttribute('src');ttsAudio.load()}catch(e){}try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}currentAudio=null;currentUtterance=null}
function playUrl(url,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));const a=ttsAudio;currentAudio=a;let finished=false;const cleanup=()=>{a.onended=a.onerror=a.onstalled=a.onabort=null;clearTimeout(timer)};const timer=setTimeout(()=>{if(finished)return;finished=true;cleanup();reject(new Error('timeout'))},18000);a.onended=()=>{if(finished)return;finished=true;cleanup();resolve()};a.onerror=()=>{if(finished)return;finished=true;cleanup();reject(new Error('audio error'))};a.onabort=()=>{if(finished)return;finished=true;cleanup();reject(new Error('aborted'))};a.referrerPolicy='no-referrer';a.src=url;a.currentTime=0;a.load();const p=a.play();if(p&&typeof p.catch==='function')p.catch(err=>{if(finished)return;finished=true;cleanup();reject(err)})})}
async function playChunk(text,token){let lastErr=null;for(const url of providerUrls(text)){if(token!==playToken)throw new Error('cancelled');try{await playUrl(url,token);return}catch(e){lastErr=e}}throw lastErr||new Error('No audio provider available')}
async function playSequence(texts,btn,idleLabel='▶ Прослушать'){stopAudio();const token=++playToken;btn?.classList.remove('error');btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const text of texts){if(token!==playToken)return;await playChunk(text,token)}if(token===playToken){btn?.classList.remove('busy');if(btn)btn.textContent=idleLabel}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');if(btn)btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');if(btn)btn.textContent=idleLabel},2200)}}}
function playText(text,btn){return playSequence(splitTTS(text),btn,'▶ Прослушать')}
function playScript(lines,btn,label='Диалог'){return playSequence(lines.flatMap(x=>splitTTS(x.text,120)),btn,`▶ ${label}`)}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>изображение добавим отдельным этапом</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit4a.jpg" alt="Beginner Unit 4A Meet the family preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">👨‍👩‍👧‍👦</div><strong>Beginner · Unit 4A</strong><span>Meet the family · vocabulary · possessive adjectives · pronunciation · listening · reading</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Babysitter and family reading scene" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Reading Mission','A babysitter, two children, and family details')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,subprompt='Выбери правильный вариант. Если ошибёшься, можно попробовать ещё раз.'){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">${subprompt}</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно! Переходим дальше.'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio','Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 const fb=document.getElementById('fb');
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');fb.innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');fb.innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Прослушать'}else playText(audioText,this)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 4A · English File</div><h1><span>Meet the family</span></h1><p>7 интерактивных блоков: family vocabulary, sounds & pronunciation, possessive adjectives and possessive ’s, a new family match activity, reading, listening, and a final family snapshot review.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=fresh();render()};
}
function vocab(){const sec='vocab',idx=state.idx[sec]||0,item=data.vocab[idx];commonQuestionScreen(sec,1,'Family Vocabulary','people · family members · core words',visualSlot('block1-vocabulary.jpg','👨‍👩‍👧‍👦','Family Vocabulary','man · woman · boy · girl · parents · father · mother · brother · sister · wife','Family vocabulary context'),item,data.vocab.length,null,()=>{state.screen=2;save();render()})}
function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,2,'Sounds & Pronunciation','/ʌ/ · /æ/ · /ə/ and family words',visualSlot('block2-pronunciation.jpg','🗣️','Sounds & Pronunciation','Listen carefully and notice the key family sounds','Pronunciation practice'),item,data.pron.length,item.audio||null,()=>{state.screen=3;save();render()},'Слушай внимательно или выбирай слово / звук по правилу.')}
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];commonQuestionScreen(sec,3,'Possessive Grammar','my / your / his / her / its / our / their + possessive ’s',visualSlot('block3-grammar.jpg','🧩','Possessive Grammar','Talk about family members and who things belong to','Possessive adjectives context'),item,data.grammar.length,null,()=>{state.screen=4;save();render()})}
let matchSecond=null,matchBusy=false;
function match(){
 const total=data.match.length;
 const solvedCount=data.match.filter((_,i)=>solved('match',i)).length;
 const validDeck=Array.isArray(state.matchRightOrder)&&state.matchRightOrder.length===total*2&&state.matchRightOrder.every(x=>typeof x==='string'&&/^[er]\d+$/.test(x));
 if(!validDeck){
   state.matchRightOrder=data.match.flatMap((_,i)=>[`e${i}`,`r${i}`]).sort(()=>Math.random()-.5);
   state.matchSelection=null;matchSecond=null;matchBusy=false;save();
 }
 const first=state.matchSelection;
 const cardHTML=state.matchRightOrder.map(code=>{
   const side=code[0],i=Number(code.slice(1)),done=solved('match',i),revealed=done||code===first||code===matchSecond;
   const wrong=matchBusy&&!done&&(code===first||code===matchSecond);
   const value=side==='e'?data.match[i].left:data.match[i].right;
   return `<button class="memoryCard ${done?'solved':''} ${revealed?'revealed':''} ${wrong?'wrong':''}" data-card="${code}" ${done||matchBusy?'disabled':''} aria-label="${revealed?esc(value):'Закрытая карточка'}"><span class="memoryInner"><span class="memoryBack"><span class="memoryIcon">👨‍👩‍👧‍👦</span><small>MEET THE FAMILY</small></span><span class="memoryFront ${side==='e'?'en':'ru'}"><small>${side==='e'?'ENGLISH':'РУССКИЙ'}</small><strong>${esc(value)}</strong></span></span></button>`;
 }).join('');
 app.innerHTML=shell(`${title(4,'Family Memory','Найди английское слово и его русский перевод')}<div class="blockBody"><div class="visualCard">${visualSlot('block4-match.jpg','🧠','Family Memory','Flip two cards and find all English–Russian family pairs','Family matching scene')}</div><div class="questionCard memoryQuestion"><div class="kicker">MEMORY MATCH</div><div class="prompt">Find all 8 pairs.</div><div class="matchIntro">Открой две карточки. Если английское слово и русский перевод совпадают, пара останется открытой.</div><div class="memoryBoard">${cardHTML}</div><div class="statusWrap"><div id="fb">${solvedCount===total?feedback('good','Все 8 пар найдены! Отлично 🎉'):first?feedback('neutral','Теперь открой вторую карточку.'):feedback('neutral','Открой первую карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${solved('match',i)?'done':i===solvedCount?'current':''}"></i>`).join('')}</div><div class="counter">Найдено пар ${solvedCount} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions"></div><button class="nextBtn" id="next" ${solvedCount===total?'':'disabled'}>Следующий блок →</button></div>`);
 document.querySelectorAll('[data-card]').forEach(b=>b.onclick=()=>{
   if(matchBusy)return;
   const code=b.dataset.card,side=code[0],i=Number(code.slice(1));
   if(solved('match',i))return;
   if(!state.matchSelection){state.matchSelection=code;save();match();return;}
   if(state.matchSelection===code){state.matchSelection=null;save();match();return;}
   const firstCode=state.matchSelection,firstSide=firstCode[0],firstIdx=Number(firstCode.slice(1));
   matchSecond=code;matchBusy=true;
   const ok=firstIdx===i&&firstSide!==side;
   if(ok){
     recordAttempt('match',i,true);
     state.matchSelection=null;matchSecond=null;matchBusy=false;save();match();
   }else{
     recordAttempt('match',firstIdx,false);save();match();
     setTimeout(()=>{state.matchSelection=null;matchSecond=null;matchBusy=false;save();match()},700);
   }
 });
 document.getElementById('next').onclick=()=>{state.screen=5;save();render()};
}
function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','Более гибкий макет: текст рядом с изображением')}<div class="blockBody"><div class="visualCard"><div class="readingVisual"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прочитай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Перечитай текст и попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 document.getElementById('readAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Послушать текст'}else playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}
function listening(){
 const sec='listening',idx=state.idx[sec]||0,item=data.listening.qs[idx],done=solved(sec,idx),script=data.listening.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(6,'Listening Mission','Birthday card, family members, boyfriend / girlfriend')}<div class="blockBody"><div class="visualCard">${visualSlot('block6-listening.jpg','🎧','Listening Mission','Two women talk about a birthday card and the family on it','Listening scene')}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушать несколько раз.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listening.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listening.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ Диалог ${script.id}`}else playScript(script.lines,this,`Диалог ${script.id}`)};
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listening.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=7;save();render()}};
}
function review(){const sec='review',idx=state.idx[sec]||0,item=data.review[idx];commonQuestionScreen(sec,7,'Family Snapshot Review','Финальное закрепление по семейной фотографии / посту',visualSlot('block7-review.jpg','📸','Family Snapshot Review','A final family photo context with names and relationships','Family snapshot review'),item,data.review.length,null,()=>{state.screen=8;save();render()},'Финальное повторение слов и possessive forms.')}
function results(){
 const keys=SECTIONS,totalMax=keys.reduce((n,k)=>n+MAX[k],0),total=keys.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...keys].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 4A · Meet the family</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${keys.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}
function render(){stopAudio();({0:start,1:vocab,2:pron,3:grammar,4:match,5:reading,6:listening,7:review,8:results}[state.screen]||start)()}
render();
