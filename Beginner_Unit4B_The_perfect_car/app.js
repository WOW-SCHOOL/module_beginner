const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit4b_perfect_car_v1';
const SECTIONS=['listen1','vocab','sort','grammar','reading','pron','listen2','drive'];
const LABELS={listen1:'Car Showroom Listening',vocab:'Colours & Adjectives',sort:'Garage Sort',grammar:'Adjective Builder',reading:'Reading Mission',pron:'Pronunciation & Linking',listen2:'Listening Mission',drive:'Test Drive Challenge'};

const showroomScript=[
 {text:'Good morning. Is the car for you?'},
 {text:'Yes. I want a small car for the city.'},
 {text:'What about this blue electric car? It is small, quiet, and easy to park.'},
 {text:'I like the colour, but it is a little slow.'},
 {text:'What about the red sports car?'},
 {text:'It is fast and beautiful, but it is expensive.'},
 {text:'I prefer the red car.'},
 {text:'Mum, the blue car is cheaper!'}
];

const data={
 listen1:[
  {q:'Who wants the car?',a:'The woman',o:['The woman','The son','The sales assistant']},
  {q:'Where does she want to use the car?',a:'In the city',o:['In the city','On a farm','At the airport']},
  {q:'What colour is the electric car?',a:'Blue',o:['Blue','Red','Black']},
  {q:'Which car is easy to park?',a:'The blue electric car',o:['The blue electric car','The red sports car','Both cars']},
  {q:'What is the woman’s problem with the blue car?',a:'It is slow',o:['It is slow','It is dirty','It is old']},
  {q:'Which car is fast?',a:'The red sports car',o:['The red sports car','The blue electric car','Neither car']},
  {q:'Which car is expensive?',a:'The red sports car',o:['The red sports car','The blue electric car','The small car']},
  {q:'Which car does the woman prefer?',a:'The red car',o:['The red car','The blue car','She does not like either car']}
 ],
 vocab:[
  {q:'Listen. Which word do you hear?',audio:'red',a:'red',o:['red','green','grey']},
  {q:'Listen. Which word do you hear?',audio:'yellow',a:'yellow',o:['yellow','white','blue']},
  {q:'Listen. Which word do you hear?',audio:'black',a:'black',o:['black','brown','blue']},
  {q:'What is the opposite of “big”?',audio:'big',a:'small',o:['small','old','dirty']},
  {q:'What is the opposite of “fast”?',audio:'fast',a:'slow',o:['slow','cheap','short']},
  {q:'What is the opposite of “cheap”?',audio:'cheap',a:'expensive',o:['expensive','difficult','beautiful']},
  {q:'What is the opposite of “beautiful”?',audio:'beautiful',a:'ugly',o:['ugly','dirty','slow']},
  {q:'What is the opposite of “clean”?',audio:'clean',a:'dirty',o:['dirty','old','short']},
  {q:'What is the opposite of “easy”?',audio:'easy',a:'difficult',o:['difficult','expensive','small']},
  {q:'Listen. Which word do you hear?',audio:'new',a:'new',o:['new','old','long']},
  {q:'Listen. Which word do you hear?',audio:'short',a:'short',o:['short','small','slow']},
  {q:'Listen. Which word do you hear?',audio:'green',a:'green',o:['green','grey','brown']}
 ],
 sort:[
  {w:'red',c:'COLOURS'},{w:'blue',c:'COLOURS'},{w:'black',c:'COLOURS'},{w:'white',c:'COLOURS'},
  {w:'big',c:'SIZE & SPEED'},{w:'small',c:'SIZE & SPEED'},{w:'fast',c:'SIZE & SPEED'},{w:'slow',c:'SIZE & SPEED'},
  {w:'beautiful',c:'PRICE & OPINION'},{w:'ugly',c:'PRICE & OPINION'},{w:'cheap',c:'PRICE & OPINION'},{w:'expensive',c:'PRICE & OPINION'}
 ],
 grammar:[
  {cue:'Собери предложение: Это быстрая машина.',tokens:["It's",'a','fast','car.'],audio:"It's a fast car."},
  {cue:'Собери предложение: Это дорогая машина.',tokens:["It's",'an','expensive','car.'],audio:"It's an expensive car."},
  {cue:'Собери предложение: Они старые дома.',tokens:["They're",'old','houses.'],audio:"They're old houses."},
  {cue:'Собери предложение: Это новая машина.',tokens:['This','is','a','new','car.'],audio:'This is a new car.'},
  {cue:'Собери предложение: Машина очень медленная.',tokens:['The','car','is','very','slow.'],audio:'The car is very slow.'},
  {cue:'Собери предложение: Это лёгкое упражнение.',tokens:["It's",'an','easy','exercise.'],audio:"It's an easy exercise."},
  {cue:'Собери предложение: Это хорошие машины.',tokens:["They're",'good','cars.'],audio:"They're good cars."},
  {cue:'Собери предложение: Итальянские машины дорогие.',tokens:['Italian','cars','are','expensive.'],audio:'Italian cars are expensive.'}
 ],
 reading:{
  text:`<b>Three people are looking for a car.</b><br><br><b>Maya</b> lives in the city. She wants a small, clean car that is easy to park. She does not need a fast car.<br><br><b>Leo</b> loves weekend trips. He wants a big, comfortable car for two people and a dog. He likes new cars, but they can’t be very expensive.<br><br><b>Nina</b> loves sports cars. In her opinion, a car should be fast and beautiful. She likes red cars and she doesn’t mind if the car is expensive.`,
  audio:[
   'Three people are looking for a car.',
   'Maya lives in the city. She wants a small, clean car that is easy to park. She does not need a fast car.',
   'Leo loves weekend trips. He wants a big, comfortable car for two people and a dog.',
   'He likes new cars, but they cannot be very expensive.',
   'Nina loves sports cars. In her opinion, a car should be fast and beautiful.',
   'She likes red cars and she does not mind if the car is expensive.'
  ],
  qs:[
   {q:'Who wants a small city car?',a:'Maya',o:['Maya','Leo','Nina']},
   {q:'What is important for Maya?',a:'Easy to park',o:['Easy to park','Very fast','Very expensive']},
   {q:'Who needs space for a dog?',a:'Leo',o:['Leo','Maya','Nina']},
   {q:'What kind of car does Leo prefer?',a:'A big car',o:['A big car','A sports car','A very old car']},
   {q:'Who likes red sports cars?',a:'Nina',o:['Nina','Maya','Leo']},
   {q:'Which person accepts an expensive car?',a:'Nina',o:['Nina','Leo','Maya']}
  ]
 },
 pron:[
  {q:'Listen. Which sound is in “fast”?',audio:'fast',a:'/ɑː/',o:['/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “short”?',audio:'short',a:'/ɔː/',o:['/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “park”?',audio:'park',a:'/ɑː/',o:['/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “sport”?',audio:'sport',a:'/ɔː/',o:['/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “father”?',audio:'father',a:'/ɑː/',o:['/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “small”?',audio:'small',a:'/ɔː/',o:['/ɑː/','/ɔː/']},
  {q:'Which phrase links a final consonant to a vowel?',audio:'an old man',a:'an old man',o:['an old man','very fast','small car']},
  {q:'Listen and choose the phrase.',audio:'an orange coat',a:'an orange coat',o:['an orange coat','a red coat','an old coat']},
  {q:'Listen and choose the phrase.',audio:'an expensive watch',a:'an expensive watch',o:['an expensive watch','a cheap watch','an old watch']},
  {q:'Listen and choose the phrase.',audio:'brown eggs',a:'brown eggs',o:['brown eggs','brown bags','green eggs']}
 ],
 listen2:{
  scripts:[
   {id:1,lines:[
    {text:'Do you like this grey car?'},{text:'Yes. It is clean and new, but it is too big for me.'},
    {text:'What about the small white car?'},{text:'I like it. It is cheap and easy to park.'},
    {text:'Is it fast?'},{text:'Not very fast, but it is perfect for the city.'}
   ]},
   {id:2,lines:[
    {text:'Which car do you prefer?'},{text:'The green one. It is beautiful and very quiet.'},
    {text:'But the black car is faster.'},{text:'Yes, and it is much more expensive.'},
    {text:'So, the green car?'},{text:'Yes. In my opinion, it is the better car for me.'}
   ]}
  ],
  qs:[
   {q:'What colour is the first car?',a:'Grey',o:['Grey','White','Green'],script:1},
   {q:'Why does the speaker not want the grey car?',a:'It is too big',o:['It is too big','It is old','It is dirty'],script:1},
   {q:'What colour is the smaller car?',a:'White',o:['White','Black','Blue'],script:1},
   {q:'Why is the white car good for the city?',a:'It is cheap and easy to park',o:['It is cheap and easy to park','It is fast and expensive','It is old and small'],script:1},
   {q:'Which car does the speaker prefer?',a:'The green car',o:['The green car','The black car','The grey car'],script:2},
   {q:'What is the green car like?',a:'Beautiful and quiet',o:['Beautiful and quiet','Old and dirty','Fast and expensive'],script:2},
   {q:'Which car is faster?',a:'The black car',o:['The black car','The green car','The white car'],script:2},
   {q:'Which car is more expensive?',a:'The black car',o:['The black car','The green car','The white car'],script:2}
  ]
 },
 drive:[
  {cue:'Собери: Это маленькая машина.',tokens:["It's",'a','small','car.'],audio:"It's a small car."},
  {cue:'Собери: Это спортивная машина.',tokens:["It's",'a','sports','car.'],audio:"It's a sports car."},
  {cue:'Собери: Машина очень быстрая.',tokens:['The','car','is','very','fast.'],audio:'The car is very fast.'},
  {cue:'Собери: Это дорогие машины.',tokens:["They're",'expensive','cars.'],audio:"They're expensive cars."},
  {cue:'Собери: Я предпочитаю красную машину.',tokens:['I','prefer','the','red','car.'],audio:'I prefer the red car.'},
  {cue:'Собери: Её легко парковать.',tokens:["It's",'easy','to','park.'],audio:"It's easy to park."},
  {cue:'Собери: Это красивая машина.',tokens:["It's",'a','beautiful','car.'],audio:"It's a beautiful car."},
  {cue:'Собери: Я люблю её!',tokens:['I','love','it!'],audio:'I love it!'}
 ]
};

const MAX={listen1:data.listen1.length,vocab:data.vocab.length,sort:data.sort.length,grammar:data.grammar.length,reading:data.reading.qs.length,pron:data.pron.length,listen2:data.listen2.qs.length,drive:data.drive.length};
const fresh=()=>({screen:0,idx:{listen1:0,vocab:0,grammar:0,reading:0,pron:0,listen2:0,drive:0},answers:{listen1:{},vocab:{},sort:{},grammar:{},reading:{},pron:{},listen2:{},drive:{}},mistakes:{},sortPlaced:{},sortSelected:null,builderChosen:[],drive:{step:0,pos:0,dice:1,canRoll:true,chosen:[]}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers},drive:{...fresh().drive,...(s.drive||{})}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 4B · The perfect car</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 4B</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 4B</b> · ${sub}</p></div>${progress(n)}</div>`}
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
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit4b.jpg" alt="Beginner Unit 4B The perfect car preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">🚗</div><strong>Beginner · Unit 4B</strong><span>The perfect car · colours · adjectives · /ɑː/ · /ɔː/ · linking · listening</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Portrait selfie with a car" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📱','Reading Mission','Portrait selfie image · 9:16')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,customAudio=null){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Ошибку можно исправить.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',customAudio||'Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${customAudio||'Прослушать'}`}else playText(audioText,this,`▶ ${customAudio||'Прослушать'}`)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 4B · English File</div><h1><span>The perfect car</span></h1><p>8 интерактивных блоков: два Listening, colours & adjectives, Garage Sort со столбцами, adjective sentence builder, Reading + audio, pronunciation & linking и новый Test Drive Challenge с кубиком.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=fresh();render()};
}

function listen1(){
 const sec='listen1',idx=state.idx[sec]||0,item=data.listen1[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(1,'Car Showroom Listening','dialogue · electric car · sports car · adjectives')}<div class="blockBody"><div class="visualCard">${visualSlot('block1-listening.jpg','🎧','Car Showroom','Compare two very different cars','Car showroom listening scene')}</div><div class="questionCard"><div class="kicker">Listening 1</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Прослушай диалог. Его можно повторять сколько угодно раз.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen1.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('dialogue1','Диалог')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen1.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('dialogue1').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Диалог'}else playScript(showroomScript,this,'Диалог')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listen1.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=2;save();render()}};
}

function vocab(){const sec='vocab',idx=state.idx[sec]||0,item=data.vocab[idx];commonQuestionScreen(sec,2,'Colours & Adjectives','colours · opposites · common adjectives',visualSlot('block2-vocabulary.jpg','🎨','Colours & Adjectives','red · blue · black · small · fast · cheap · beautiful','Cars in different colours and styles'),item,data.vocab.length,item.audio,()=>{state.screen=3;save();render()},'Слово')}

function garageSort(){
 const total=data.sort.length;const placed=Object.keys(state.sortPlaced||{}).length;const cats=['COLOURS','SIZE & SPEED','PRICE & OPINION'];
 const remaining=data.sort.map((x,i)=>({...x,i})).filter(x=>!state.sortPlaced[x.i]);
 const chips=remaining.map(x=>`<button class="sortChip ${state.sortSelected===x.i?'selected':''}" draggable="true" data-chip="${x.i}">${esc(x.w)}</button>`).join('');
 const cols=cats.map(cat=>`<div class="sortCol" data-col="${cat}"><h3>${cat}</h3><div class="sortDrop">${data.sort.map((x,i)=>state.sortPlaced[i]===cat?`<span class="sortChip good">${esc(x.w)}</span>`:'').join('')}</div></div>`).join('');
 app.innerHTML=shell(`${title(3,'Garage Sort','Перенеси слова в правильные столбцы')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-sort.jpg','🧰','Garage Sort','Drag or tap words into three groups','Automotive design / sorting scene')}</div><div class="questionCard"><div class="kicker">Garage Sort</div><div class="prompt">Sort all 12 words.</div><div class="subprompt">Можно перетаскивать карточки или нажать слово, а затем нужный столбец.</div><div class="sortWrap"><div class="sortBank" id="sortBank">${chips}</div><div class="sortColumns">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Все слова распределены!'):feedback('neutral','Выбери слово или перетащи карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.sortPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
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
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];builderBlock(sec,4,'Adjective Sentence Builder','adjective position · singular / plural',visualSlot('block4-grammar.jpg','🧩','Sentence Builder','Put the words in the correct order','Learners discussing cars'),item,data.grammar.length,()=>{state.screen=5;save();render()})}

function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','portrait selfie visual + text beside it + audio')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай или прослушай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}

function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Pronunciation & Linking','/ɑː/ · /ɔː/ · linking',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation & Linking','Listen carefully: car /ɑː/, horse /ɔː/, linked phrases','Pronunciation practice'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио')}

function listen2(){
 const sec='listen2',idx=state.idx[sec]||0,item=data.listen2.qs[idx],done=solved(sec,idx),script=data.listen2.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(7,'Listening Mission','two new dialogues · city cars · preferences')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-listening.jpg','🎧','Listening Mission','Listen for colour, size, price and opinion','Friends comparing cars')}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушивать несколько раз.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen2.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen2.qs.length-1?'Новый блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){playScript(script.lines,this,`Диалог ${script.id}`)};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listen2.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
}

const diceFaces=['⚀','⚁','⚂','⚃','⚄','⚅'];
function drive(){
 const sec='drive',step=state.drive.step||0,doneAll=step>=data.drive.length,item=data.drive[Math.min(step,data.drive.length-1)],chosen=state.drive.chosen||[],shuffled=shuffleTokens(item.tokens,step+19);
 const cells=Array.from({length:16},(_,i)=>`<div class="roadCell ${i===15?'finish':''}">${i===15?'FINISH':i+1}${state.drive.pos===i?'<span class="carToken">🚗</span>':''}</div>`).join('');
 app.innerHTML=shell(`${title(8,'Test Drive Challenge','NEW: кубик + ходилка + sentence building')}<div class="driveLayout"><div class="driveBoard"><div class="road">${cells}</div><div class="diceBar"><div class="dice">${diceFaces[(state.drive.dice||1)-1]}</div><button class="rollBtn" id="roll" ${(!state.drive.canRoll||doneAll)?'disabled':''}>Бросить кубик</button><span style="font-weight:900;color:#627aa3">После броска собери фразу и продолжай маршрут.</span></div></div><div class="driveChallenge"><div class="kicker">TEST DRIVE · CHECKPOINT ${Math.min(step+1,data.drive.length)}/${data.drive.length}</div><div class="prompt">${doneAll?'Маршрут завершён!':esc(item.cue)}</div><div class="builderResult">${doneAll?'<strong style="color:#168c52;font-size:22px">🏁 Отличная поездка!</strong>':chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span style="color:#8aa0c2;font-weight:800">Сначала брось кубик, затем собери фразу.</span>'}</div><div class="driveTokens">${doneAll?'':shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}" ${state.drive.canRoll?'disabled':''}>${esc(x.t)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${doneAll?feedback('good','Все 8 checkpoints пройдены!'):feedback('neutral',state.drive.canRoll?'Брось кубик.':'Теперь собери фразу.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:data.drive.length},(_,i)=>`<i class="miniDot ${i<step?'done':i===step?'current':''}"></i>`).join('')}</div><div class="counter">Checkpoint ${Math.min(step,data.drive.length)} из ${data.drive.length}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${doneAll?'':audioBtn('driveModel','Модель')}</div><button class="nextBtn" id="next" ${doneAll?'':'disabled'}>Результаты →</button></div>`);
 if(doneAll){document.getElementById('next').onclick=()=>{state.screen=9;save();render()};return}
 document.getElementById('roll').onclick=()=>{const d=Math.floor(Math.random()*6)+1;state.drive.dice=d;state.drive.pos=Math.min(15,(state.drive.pos||0)+d);state.drive.canRoll=false;state.drive.chosen=[];save();drive()};
 document.getElementById('driveModel').onclick=function(){playText(item.audio,this,'▶ Модель')};
 document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{if(state.drive.canRoll)return;const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});state.drive.chosen=chosen;save();drive()});
 document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);state.drive.chosen=chosen;save();drive()});
 const result=document.querySelector('.builderResult');result.ondblclick=()=>{state.drive.chosen=[];save();drive()};
 if(!state.drive.canRoll && chosen.length===item.tokens.length){const answer=chosen.map(x=>x.t).join(' '),target=item.tokens.join(' ');const ok=answer===target;recordAttempt(sec,step,ok);if(ok){playText(item.audio,null);setTimeout(()=>{state.drive.step=step+1;state.drive.canRoll=true;state.drive.chosen=[];save();drive()},450)}else{document.getElementById('fb').innerHTML=feedback('bad','Порядок неверный. Нажми выбранное слово, чтобы убрать его, и попробуй снова.')}}
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 4B · The perfect car</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}
function render(){stopAudio();({0:start,1:listen1,2:vocab,3:garageSort,4:grammar,5:reading,6:pron,7:listen2,8:drive,9:results}[state.screen]||start)()}
render();
