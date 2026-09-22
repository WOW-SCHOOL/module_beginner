const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit5a_big_breakfast_v1';
const SECTIONS=['listen1','vocab','sort','grammar','reading','pron','listen2','pair'];
const LABELS={listen1:'Breakfast Basics',vocab:'Food & Drink',sort:'Breakfast Sort',grammar:'Sentence Builder',reading:'Reading Mission',pron:'Pronunciation',listen2:'Listening Mission',pair:'Breakfast Match'};

const showroomScript=[
 {text:'What do you usually have for breakfast?'},
 {text:'I usually have tea and toast.'},
 {text:'Do you have eggs too?'},
 {text:'No, I do not. I have fruit and yoghurt.'},
 {text:'Do you have breakfast at home?'},
 {text:'Yes, we do. We eat at home before work.'},
 {text:'Is it a big breakfast?'},
 {text:'No, it is not very big, but it is healthy.'}
];

const data={
 listen1:[
  {q:'What does the speaker usually drink for breakfast?',a:'Tea',o:['Tea','Coffee','Orange juice']},
  {q:'What does the speaker usually eat with tea?',a:'Toast',o:['Toast','Eggs','Soup']},
  {q:'Does the speaker have eggs?',a:'No',o:['Yes','No','Sometimes']},
  {q:'What fruit product does the speaker have?',a:'Yoghurt',o:['Yoghurt','Cheese','Butter']},
  {q:'Where do they have breakfast?',a:'At home',o:['At home','At work','In a café']},
  {q:'When do they eat breakfast?',a:'Before work',o:['After work','Before work','At lunch time']},
  {q:'Is it a big breakfast?',a:'No',o:['Yes','No','We do not know']},
  {q:'How is the breakfast?',a:'Healthy',o:['Healthy','Traditional and big','Very expensive']}
 ],
 vocab:[
  {q:'Listen. Which word do you hear?',audio:'tea',a:'tea',o:['tea','toast','cheese']},
  {q:'Listen. Which word do you hear?',audio:'cheese',a:'cheese',o:['cheese','juice','coffee']},
  {q:'Listen. Which word do you hear?',audio:'orange juice',a:'orange juice',o:['orange juice','green tea','water']},
  {q:'Listen. Which word do you hear?',audio:'sandwich',a:'sandwich',o:['sandwich','soup','cereal']},
  {q:'Listen. Which word do you hear?',audio:'eggs',a:'eggs',o:['eggs','fish','chips']},
  {q:'Which one is a hot drink?',audio:'coffee',a:'coffee',o:['coffee','fruit','yoghurt']},
  {q:'Which one is healthy?',audio:'fruit',a:'fruit',o:['fruit','beer','wine']},
  {q:'Which one do people often have in the morning?',audio:'toast',a:'toast',o:['toast','pasta','soup']},
  {q:'Listen. Which word do you hear?',audio:'green tea',a:'green tea',o:['green tea','orange juice','beer']},
  {q:'Listen. Which word do you hear?',audio:'soup',a:'soup',o:['soup','toast','sandwich']},
  {q:'Listen. Which word do you hear?',audio:'toast',a:'toast',o:['toast','cheese','eggs']},
  {q:'Listen. Which word do you hear?',audio:'fruit',a:'fruit',o:['fruit','fish','soup']}
 ],
 sort:[
  {w:'tea',c:'DRINKS'},{w:'coffee',c:'DRINKS'},{w:'orange juice',c:'DRINKS'},{w:'water',c:'DRINKS'},
  {w:'eggs',c:'BREAKFAST FOOD'},{w:'toast',c:'BREAKFAST FOOD'},{w:'cereal',c:'BREAKFAST FOOD'},{w:'yoghurt',c:'BREAKFAST FOOD'},
  {w:'soup',c:'OTHER FOOD'},{w:'fish',c:'OTHER FOOD'},{w:'pasta',c:'OTHER FOOD'},{w:'sandwich',c:'OTHER FOOD'}
 ],
 grammar:[
  {cue:'Собери предложение: Я завтракаю дома.',tokens:['I','have','breakfast','at','home.'],audio:'I have breakfast at home.'},
  {cue:'Собери предложение: Мы едим яйца и тосты.',tokens:['We','eat','eggs','and','toast.'],audio:'We eat eggs and toast.'},
  {cue:'Собери предложение: Они пьют кофе утром.',tokens:['They','drink','coffee','in','the','morning.'],audio:'They drink coffee in the morning.'},
  {cue:'Собери предложение: У меня не большой завтрак.',tokens:['I','do','not','have','a','big','breakfast.'],audio:'I do not have a big breakfast.'},
  {cue:'Собери предложение: Мы не едим рыбу на завтрак.',tokens:['We','do','not','eat','fish','for','breakfast.'],audio:'We do not eat fish for breakfast.'},
  {cue:'Собери предложение: Ты любишь зелёный чай.',tokens:['You','like','green','tea.'],audio:'You like green tea.'},
  {cue:'Собери предложение: Они обедают на работе.',tokens:['They','have','lunch','at','work.'],audio:'They have lunch at work.'},
  {cue:'Собери предложение: Мы едим много фруктов.',tokens:['We','eat','a','lot','of','fruit.'],audio:'We eat a lot of fruit.'}
 ],
 reading:{
  text:`<b>Three people talk about breakfast.</b><br><br><b>Anna</b> has breakfast in a café near her office. She has a croissant and coffee. Breakfast is her favourite meal of the day.<br><br><b>Paulo</b> has breakfast at home. He does not have a big breakfast. He has fruit and yoghurt, and sometimes toast. He thinks it is a healthy breakfast.<br><br><b>Sakura</b> really likes breakfast. She has breakfast with her family. They have a traditional Japanese breakfast with rice, fish, and miso soup. Breakfast is an important meal for her family.`,
  audio:[
   'Three people talk about breakfast.',
   'Anna has breakfast in a café near her office. She has a croissant and coffee. Breakfast is her favourite meal of the day.',
   'Paulo has breakfast at home. He does not have a big breakfast. He has fruit and yoghurt, and sometimes toast. He thinks it is a healthy breakfast.',
   'Sakura really likes breakfast. She has breakfast with her family. They have a traditional Japanese breakfast with rice, fish, and miso soup. Breakfast is an important meal for her family.'
  ],
  qs:[
   {q:'Who has breakfast in a café?',a:'Anna',o:['Anna','Paulo','Sakura']},
   {q:'What does Anna drink?',a:'Coffee',o:['Coffee','Green tea','Orange juice']},
   {q:'Where does Paulo have breakfast?',a:'At home',o:['At home','At work','In a restaurant']},
   {q:'Does Paulo have a big breakfast?',a:'No',o:['Yes','No','Sometimes']},
   {q:'Who has breakfast with the family?',a:'Sakura',o:['Sakura','Anna','Paulo']},
   {q:'What do Sakura and her family have?',a:'Rice, fish, and miso soup',o:['Rice, fish, and miso soup','Eggs and toast','Fruit and yoghurt']}
  ]
 },
 pron:[
  {q:'Listen. Which sound is in “juice”?',audio:'juice',a:'/dʒ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen. Which sound is in “jam”?',audio:'jam',a:'/dʒ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen. Which sound is in “egg”?',audio:'egg',a:'/ɡ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen. Which sound is in “green”?',audio:'green',a:'/ɡ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen. Which sound is in “orange juice”?',audio:'orange juice',a:'/dʒ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen. Which sound is in “good”?',audio:'good',a:'/ɡ/',o:['/dʒ/','/ɡ/']},
  {q:'Listen and choose the phrase.',audio:'green tea',a:'green tea',o:['green tea','orange juice','tea and toast']},
  {q:'Listen and choose the phrase.',audio:'orange juice',a:'orange juice',o:['orange juice','green tea','grape juice']},
  {q:'Which word has the /dʒ/ sound?',audio:'juice',a:'juice',o:['juice','egg','green']},
  {q:'Which word has the /ɡ/ sound?',audio:'eggs',a:'eggs',o:['juice','jam','eggs']}
 ],
 listen2:{
  scripts:[
   {id:1,lines:[
    {text:'What is your favourite meal of the day?'},{text:'Breakfast. I have it at home.'},
    {text:'What do you usually have?'},{text:'I usually have fruit, yoghurt, and toast. I drink tea.'},
    {text:'Is it a big breakfast?'},{text:'No, it is not, but it is healthy.'}
   ]},
   {id:2,lines:[
    {text:'Do you have breakfast at home?'},{text:'No, I do not. I have breakfast in a café near work.'},
    {text:'What do you have there?'},{text:'I have a sandwich and a coffee.'},
    {text:'Do you like it?'},{text:'Yes, I do. Breakfast is my favourite meal.'}
   ]}
  ],
  qs:[
   {q:'What is the favourite meal in Dialogue 1?',a:'Breakfast',o:['Breakfast','Lunch','Dinner'],script:1},
   {q:'Where does the speaker have breakfast in Dialogue 1?',a:'At home',o:['At home','At work','In a café'],script:1},
   {q:'What does the speaker drink in Dialogue 1?',a:'Tea',o:['Tea','Coffee','Water'],script:1},
   {q:'How is the breakfast in Dialogue 1?',a:'Healthy',o:['Healthy','Expensive','Traditional'],script:1},
   {q:'Where does the speaker have breakfast in Dialogue 2?',a:'In a café near work',o:['At home','In a café near work','On the bus'],script:2},
   {q:'What does the speaker have in Dialogue 2?',a:'A sandwich and a coffee',o:['A sandwich and a coffee','Eggs and orange juice','Soup and tea'],script:2},
   {q:'Does the speaker like it?',a:'Yes',o:['Yes','No','We do not know'],script:2},
   {q:'What meal is the speaker’s favourite?',a:'Breakfast',o:['Breakfast','Lunch','Dinner'],script:2}
  ]
 },
 pair:[
  {en:'breakfast',ru:'завтрак'},
  {en:'orange juice',ru:'апельсиновый сок'},
  {en:'green tea',ru:'зелёный чай'},
  {en:'toast',ru:'тост'},
  {en:'fruit',ru:'фрукты'},
  {en:'at home',ru:'дома'},
  {en:'at work',ru:'на работе'},
  {en:"I'm not hungry.",ru:'Я не голоден / Я не голодна.'},
  {en:'coffee',ru:'кофе'},
  {en:'eggs',ru:'яйца'},
  {en:'yoghurt',ru:'йогурт'},
  {en:'sandwich',ru:'сэндвич'}
 ]
};

const MAX={listen1:data.listen1.length,vocab:data.vocab.length,sort:data.sort.length,grammar:data.grammar.length,reading:data.reading.qs.length,pron:data.pron.length,listen2:data.listen2.qs.length,pair:data.pair.length};
const fresh=()=>({screen:0,idx:{listen1:0,vocab:0,grammar:0,reading:0,pron:0,listen2:0,pair:0},answers:{listen1:{},vocab:{},sort:{},grammar:{},reading:{},pron:{},listen2:{},pair:{}},mistakes:{},sortPlaced:{},sortSelected:null,builderChosen:[],pairState:{seed:1,left:null,right:null,solved:{},message:'Выбери пару.'}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers},pairState:{...fresh().pairState,...(s.pairState||{})}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 5A · A big breakfast?</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 5A</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 5A</b> · ${sub}</p></div>${progress(n)}</div>`}
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
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit5a.jpg" alt="Beginner Unit 5A A big breakfast preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">🍳</div><strong>Beginner · Unit 5A</strong><span>A big breakfast? · food and drink · present simple · /dʒ/ and /ɡ/ · breakfast habits</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Breakfast reading image" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Reading Mission','Breakfast lifestyle image')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,customAudio=null){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Ошибку можно исправить.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',customAudio||'Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${customAudio||'Прослушать'}`}else playText(audioText,this,`▶ ${customAudio||'Прослушать'}`)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 5A · English File</div><h1><span>A big breakfast?</span></h1><p>8 интерактивных блоков: очень простой breakfast listening, food and drink, Breakfast Sort со столбцами, обязательный sentence builder, reading + audio, pronunciation /dʒ/ and /ɡ/, later listening mission и новый Breakfast Match English ↔ Russian.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{if(confirm('Сбросить весь прогресс?')){state=fresh();save();render()}};
}

function listen1(){
 const sec='listen1',idx=state.idx[sec]||0,item=data.listen1[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(1,'Breakfast Basics','short and simple dialogue · breakfast habits')}<div class="blockBody"><div class="visualCard">${visualSlot('block1-listening.jpg','🎧','Breakfast Basics','A short and easy breakfast dialogue','Breakfast table or café scene')}</div><div class="questionCard"><div class="kicker">Breakfast basics</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог короткий и простой. Его можно слушать несколько раз.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen1.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('dialogue1','Диалог')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen1.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('dialogue1').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Диалог'}else playScript(showroomScript,this,'Диалог')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listen1.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=2;save();render()}};
}

function vocab(){const sec='vocab',idx=state.idx[sec]||0,item=data.vocab[idx];commonQuestionScreen(sec,2,'Food & Drink','tea · cheese · orange juice · eggs · toast · fruit',visualSlot('block2-vocabulary.jpg','🥐','Food & Drink','Listen and choose the correct breakfast word','Breakfast food and drink scene'),item,data.vocab.length,item.audio,()=>{state.screen=3;save();render()},'Слово')}

function garageSort(){
 const total=data.sort.length;const placed=Object.keys(state.sortPlaced||{}).length;const cats=['DRINKS','BREAKFAST FOOD','OTHER FOOD'];
 const remaining=data.sort.map((x,i)=>({...x,i})).filter(x=>!state.sortPlaced[x.i]);
 const chips=remaining.map(x=>`<button class="sortChip ${state.sortSelected===x.i?'selected':''}" draggable="true" data-chip="${x.i}">${esc(x.w)}</button>`).join('');
 const cols=cats.map(c=>`<div class="sortCol" data-col="${c}"><h3>${c}</h3>${data.sort.map((x,i)=>state.sortPlaced[i]===c?`<div class="sortPlaced">${esc(x.w)}</div>`:'').join('')}</div>`).join('');
 app.innerHTML=shell(`${title(3,'Breakfast Sort','drinks · breakfast food · other food')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-sort.jpg','🍽️','Breakfast Sort','Sort the words into three easy groups','Breakfast food on a table')}</div><div class="questionCard"><div class="kicker">Breakfast Sort</div><div class="prompt">Sort all 12 words.</div><div class="subprompt">Можно перетаскивать карточки или нажать слово, а затем нужный столбец.</div><div class="sortWrap"><div class="sortBank" id="sortBank">${chips}</div><div class="sortColumns">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Все слова распределены!'):feedback('neutral','Выбери слово или перетащи карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.sortPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
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
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];builderBlock(sec,4,'Sentence Builder','present simple + / – · I, you, we, they',visualSlot('block4-grammar.jpg','🧩','Sentence Builder','Put the words in the correct order','People having or discussing breakfast'),item,data.grammar.length,()=>{state.screen=5;save();render()})}

function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','three breakfasts · visible text + audio')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай или прослушай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}

function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Pronunciation','/dʒ/ · /ɡ/',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation','Listen carefully: juice /dʒ/, egg /ɡ/, green tea','Pronunciation practice'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио')}

function listen2(){
 const sec='listen2',idx=state.idx[sec]||0,item=data.listen2.qs[idx],done=solved(sec,idx),script=data.listen2.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(7,'Listening Mission','short breakfast dialogues')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-listening.jpg','🎧','Listening Mission','Listen for place, food and favourite meal','Café or breakfast listening scene')}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушивать несколько раз.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listen2.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listen2.qs.length-1?'Новый блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){playScript(script.lines,this,`Диалог ${script.id}`)};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listen2.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
}

function pair(){
 const sec='pair';
 if(!state.pairState)state.pairState={seed:1,left:null,right:null,solved:{},message:'Выбери две карточки.'};
 const ps=state.pairState;
 const total=data.pair.length;
 const solvedMap=ps.solved||{};
 const solvedCount=Object.keys(solvedMap).filter(k=>solvedMap[k]).length;
 const shuffleList=(arr,seed)=>{const out=arr.slice();for(let i=out.length-1;i>0;i--){const j=(seed*11+i*7)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out};
 const cards=shuffleList(data.pair.flatMap((p,i)=>[
  {pair:i,lang:'en',text:p.en},
  {pair:i,lang:'ru',text:p.ru}
 ]),ps.seed*19+5);
 const selected=[];
 if(ps.left!==null)selected.push(`en:${ps.left}`);
 if(ps.right!==null)selected.push(`ru:${ps.right}`);
 const cardsHtml=cards.map((card,idx)=>{
  const done=!!solvedMap[card.pair];
  const active=selected.includes(`${card.lang}:${card.pair}`);
  return `<button class="pairOpenCard ${card.lang} ${done?'done':''} ${active?'active':''}" data-lang="${card.lang}" data-pair="${card.pair}" ${done?'disabled':''}><small>${card.lang==='en'?'ENGLISH':'RUSSIAN'}</small><strong>${esc(card.text)}</strong></button>`;
 }).join('');
 app.innerHTML=shell(`${title(8,'Breakfast Match','English ↔ Russian · open cards')}<div class="pairOnlyCard"><div class="pairOnlyIntro"><div><div class="kicker">BREAKFAST MATCH</div><div class="prompt">Find all ${total} pairs.</div><div class="subprompt">Все карточки открыты. English — голубые, Russian — сиреневые. Выбери английское слово или фразу и его русский перевод.</div></div><div class="pairLegend"><span class="legendEn">English</span><span class="legendRu">Russian</span></div></div><div class="pairOpenGrid">${cardsHtml}</div><div class="pairOnlyStatus"><div id="fb">${solvedCount===total?feedback('good','Отлично! Все пары найдены.'):feedback('neutral',ps.message||'Выбери две карточки.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${solvedMap[i]?'done':i===solvedCount?'current':''}"></i>`).join('')}</div><div class="counter">Найдено пар ${solvedCount} из ${total}</div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('pairAudio','Все фразы')}<button class="smallBtn" id="reshuffle" style="margin-left:14px">Перемешать</button></div><button class="nextBtn" id="next" ${solvedCount===total?'':'disabled'}>Результаты →</button></div>`);
 document.getElementById('pairAudio').onclick=function(){playSequence(data.pair.map(x=>x.en),this,'▶ Все фразы')};
 document.getElementById('reshuffle').onclick=()=>{ps.seed=(ps.seed||1)+1;ps.left=null;ps.right=null;ps.message='Карточки перемешаны.';save();pair()};
 function choose(lang,id){
  if(solvedMap[id])return;
  if(lang==='en'){
   ps.left=(ps.left===id?null:id);
  }else{
   ps.right=(ps.right===id?null:id);
  }
  if(ps.left!==null&&ps.right!==null){
   if(ps.left===ps.right){
    recordAttempt(sec,ps.left,true);
    solvedMap[ps.left]=true;
    ps.message='Верно! Пара найдена.';
   }else{
    recordAttempt(sec,ps.left,false);
    ps.message='Это не пара. Попробуй ещё раз.';
   }
   ps.left=null;
   ps.right=null;
  }else{
   ps.message=lang==='en'?'Теперь выбери перевод на русском.':'Теперь выбери английскую карточку.';
  }
  save();pair();
 }
 document.querySelectorAll('.pairOpenCard').forEach(btn=>btn.onclick=()=>choose(btn.dataset.lang,+btn.dataset.pair));
 document.getElementById('next').onclick=()=>{state.screen=9;save();render()};
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 5A · A big breakfast?</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}

function render(){stopAudio();({0:start,1:listen1,2:vocab,3:garageSort,4:grammar,5:reading,6:pron,7:listen2,8:pair,9:results}[state.screen]||start)()}
render();