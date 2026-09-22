
const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();
const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_unit3a_keys_v1';
const SECTIONS=['vocab','grammar','sounds','bag','reading','memory','listening'];
const LABELS={vocab:'Small Things',grammar:'Grammar',sounds:'Plural Sounds',bag:'What’s in the bag?',reading:'Reading',memory:'Singular ↔ Plural',listening:'Listening'};

const data={
 vocab:[
  {q:'Which object do you use to call or message someone?',a:'a phone',o:['a phone','a watch','a newspaper','a pencil']},
  {q:'Which object tells the time?',a:'a watch',o:['a camera','a watch','a charger','a notebook']},
  {q:'Which object do you use when it rains?',a:'an umbrella',o:['an ID card','an umbrella','a tablet','a purse']},
  {q:'Which object gives power to your phone?',a:'a charger',o:['a key','a camera','a charger','a credit card']},
  {q:'Which object opens a door?',a:'a key',o:['a key','a photo','a pencil','a wallet']},
  {q:'Which object can you use to take photos?',a:'a camera',o:['a camera','a notebook','a newspaper','a debit card']},
  {q:'Which object can have your name and photo on it?',a:'an ID card',o:['a purse','an ID card','a charger','a tablet']},
  {q:'Which object can you write notes in?',a:'a notebook',o:['a notebook','a wallet','glasses','a phone']},
  {q:'Which object can you use to pay?',a:'a credit card',o:['a photo','a credit card','a key','a pencil']},
  {q:'Which word is plural even when it means one object?',a:'glasses',o:['glasses','a watch','a camera','a newspaper']}
 ],
 grammar:[
  {q:'Choose the correct phrase.',a:'a phone',o:['a phone','an phone','phone a']},
  {q:'Choose the correct phrase.',a:'an umbrella',o:['a umbrella','an umbrella','umbrella an']},
  {q:'Choose the correct phrase.',a:'an ID card',o:['a ID card','an ID card','ID card an']},
  {q:'One key → two ___',a:'keys',o:['keys','keyes','keies']},
  {q:'One watch → two ___',a:'watches',o:['watchs','watches','watchies']},
  {q:'One dictionary → two ___',a:'dictionaries',o:['dictionarys','dictionaries','dictionaryes']},
  {q:'What ___ it? — It’s a camera.',a:'is',o:['is','are','am']},
  {q:'What ___ they? — They’re keys.',a:'are',o:['is','are','am']},
  {q:'Choose the natural answer: “What is it?”',a:'It’s a passport.',o:['It’s a passport.','They’re a passport.','It are a passport.']},
  {q:'Choose the natural answer: “What are they?”',a:'They’re glasses.',o:['It’s glasses.','They’re glasses.','They is glasses.']}
 ],
 sounds:[
  {w:'bags',a:'/z/'},{w:'phones',a:'/z/'},{w:'keys',a:'/z/'},{w:'pens',a:'/z/'},
  {w:'books',a:'/s/'},{w:'coats',a:'/s/'},{w:'passports',a:'/s/'},{w:'tablets',a:'/s/'},
  {w:'watches',a:'/ɪz/'},{w:'glasses',a:'/ɪz/'},{w:'pieces',a:'/ɪz/'},{w:'purses',a:'/ɪz/'}
 ],
 bag:[
  {q:'A: Oh no! Where’s my phone?\nB: ___',a:'It’s in your bag.',o:['It’s in your bag.','They’re in your bag.','It are in your bag.']},
  {q:'A: Where are my glasses?\nB: ___',a:'They’re on the table.',o:['It’s on the table.','They’re on the table.','They is on the table.']},
  {q:'A: What is it?\nB: ___',a:'I think it’s an ID card.',o:['I think it’s an ID card.','I think they’re an ID card.','I think it are ID cards.']},
  {q:'A: What are they?\nB: ___',a:'I think they’re keys.',o:['I think it’s keys.','I think they’re keys.','I think they is a key.']},
  {q:'A: What’s in your bag?\nB: ___',a:'A phone, two pencils, and my keys.',o:['A phone, two pencils, and my keys.','It is bag.','They are my bag.']},
  {q:'Which sentence is correct?',a:'I have two credit cards.',o:['I have two credit cards.','I have a two credit cards.','I has two credit cards.']},
  {q:'Choose the correct question for one object.',a:'What is it?',o:['What is it?','What are they?','What they are?']},
  {q:'Choose the correct question for more than one object.',a:'What are they?',o:['What is it?','What are they?','What they is?']}
 ],
 reading:{
  text:`<b>Emma is at home.</b> She has a small bag. In it, she has a phone, a charger, a notebook, two pencils, and an ID card. Her glasses are on the table. Emma looks in her bag again. “Oh no! Where are my keys?” she says. Her brother Ben looks at the table. “What are they?” he asks. “They’re your keys!” Emma smiles. “Great! Now where’s my phone?” Ben laughs. “It’s in your hand.”`,
  audioChunks:[
   'Emma is at home. She has a small bag.',
   'In it, she has a phone, a charger, a notebook, two pencils, and an ID card.',
   'Her glasses are on the table.',
   'Emma looks in her bag again. Oh no! Where are my keys? she says.',
   'Her brother Ben looks at the table. What are they? he asks.',
   'They’re your keys! Emma smiles.',
   'Great! Now where’s my phone?',
   'Ben laughs. It’s in your hand.'
  ],
  qs:[
   {q:'Where is Emma?',a:'At home',o:['At home','At a hotel','At school']},
   {q:'How many pencils are in her bag?',a:'Two',o:['One','Two','Three']},
   {q:'Where are her glasses?',a:'On the table',o:['In the bag','On the table','In her hand']},
   {q:'What does Emma look for?',a:'Her keys',o:['Her keys','Her camera','Her passport']},
   {q:'Where is Emma’s phone at the end?',a:'In her hand',o:['In her hand','On the table','In the bag']}
  ]
 },
 memory:[
  {id:'phone',a:'a phone',b:'phones'},
  {id:'key',a:'a key',b:'keys'},
  {id:'watch',a:'a watch',b:'watches'},
  {id:'dictionary',a:'a dictionary',b:'dictionaries'},
  {id:'purse',a:'a purse',b:'purses'},
  {id:'id',a:'an ID card',b:'ID cards'}
 ],
 listening:{
  scripts:[
   {id:1,lines:[
    {voice:'Maya',text:'Oh no! Where’s my phone?'},
    {voice:'Leo',text:'Is this your phone?'},
    {voice:'Maya',text:'Yes, it is. Thanks. And where are my glasses?'},
    {voice:'Leo',text:'They’re on the table.'},
    {voice:'Maya',text:'Great. I’ve got them.'}
   ]},
   {id:2,lines:[
    {voice:'Receptionist',text:'Can I see your passport, please?'},
    {voice:'Tom',text:'Sure. Here you are.'},
    {voice:'Receptionist',text:'Thanks. Here’s your key.'},
    {voice:'Tom',text:'Thank you. Where’s my phone charger?'},
    {voice:'Receptionist',text:'Is this your charger?'},
    {voice:'Tom',text:'Yes, it is. Thanks very much.'}
   ]}
  ],
  qs:[
   {q:'What does Maya look for first?',a:'Her phone',o:['Her phone','Her keys','Her passport'],script:1},
   {q:'What does Leo show Maya?',a:'A phone',o:['A phone','A watch','A camera'],script:1},
   {q:'Where are Maya’s glasses?',a:'On the table',o:['On the table','In the bag','In her hand'],script:1},
   {q:'Which plural object does Maya look for?',a:'Glasses',o:['Glasses','Phones','Keys'],script:1},
   {q:'What does the receptionist ask to see?',a:'A passport',o:['A passport','A notebook','A credit card'],script:2},
   {q:'What does the receptionist give Tom?',a:'A key',o:['A key','A phone','A watch'],script:2},
   {q:'What does Tom look for?',a:'His phone charger',o:['His phone charger','His glasses','His camera'],script:2},
   {q:'What does Tom say at the end?',a:'Thanks very much.',o:['Thanks very much.','Where are my keys?','I’m fine, too.'],script:2}
  ]
 }
};

const MAX={vocab:data.vocab.length,grammar:data.grammar.length,sounds:data.sounds.length,bag:data.bag.length,reading:data.reading.qs.length,memory:data.memory.length,listening:data.listening.qs.length};
const fresh=()=>({screen:0,idx:{vocab:0,grammar:0,bag:0,reading:0,listening:0},answers:{vocab:{},grammar:{},sounds:{},bag:{},reading:{},memory:{},listening:{}},selectedSort:null,sortOrder:null,memoryOrder:null,memoryOpen:[],memoryMoves:0});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers}}}catch(e){}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){if(sec==='memory')return Object.values(state.answers.memory||{}).filter(x=>x.solved).length;return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function shuffledIndicesForSort(items){const orig=items.map((_,i)=>i);for(let t=0;t<100;t++){const c=shuffle(orig);let run=1,bad=false;for(let i=1;i<c.length;i++){run=items[c[i]].a===items[c[i-1]].a?run+1:1;if(run>2)bad=true}if(!bad)return c}return shuffle(orig)}
function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">interactive lesson module · Beginner · Unit 3A</div></div></div><div class="unitBadge"><span>Beginner · Unit 3A</span><strong>Where are my keys?</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Beginner · Unit 3A · Блок ${n}/7</strong><div class="track"><i style="width:${n/7*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p>Beginner · Unit 3A · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;save()}

let currentAudio=null,playToken=0;
const ttsAudio=document.createElement('audio');ttsAudio.preload='auto';ttsAudio.setAttribute('playsinline','');ttsAudio.referrerPolicy='no-referrer';ttsAudio.style.display='none';document.body.appendChild(ttsAudio);
function providerUrls(text){const q=encodeURIComponent(text.replace(/\s+/g,' ').trim());return [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`,`https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`]}
function splitTTS(text,max=115){const clean=text.replace(/\s+/g,' ').trim();if(clean.length<=max)return [clean];const out=[];let rest=clean;while(rest.length){if(rest.length<=max){out.push(rest);break}let cut=rest.lastIndexOf(' ',max);if(cut<50)cut=max;out.push(rest.slice(0,cut).trim());rest=rest.slice(cut).trim()}return out.filter(Boolean)}
function stopAudio(){playToken++;try{ttsAudio.pause();ttsAudio.removeAttribute('src');ttsAudio.load()}catch(e){}currentAudio=null}
function playUrl(url,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));const a=ttsAudio;currentAudio=a;let done=false;const clean=()=>{a.onended=a.onerror=a.onabort=null;clearTimeout(timer)};const timer=setTimeout(()=>{if(done)return;done=true;clean();reject(new Error('timeout'))},22000);a.onended=()=>{if(done)return;done=true;clean();resolve()};a.onerror=()=>{if(done)return;done=true;clean();reject(new Error('audio'))};a.onabort=()=>{if(done)return;done=true;clean();reject(new Error('aborted'))};a.src=url;a.currentTime=0;a.load();const p=a.play();if(p&&p.catch)p.catch(e=>{if(done)return;done=true;clean();reject(e)})})}
async function playChunk(text,token){let last;for(const url of providerUrls(text)){if(token!==playToken)throw new Error('cancelled');try{await playUrl(url,token);return}catch(e){last=e}}throw last||new Error('audio')}
async function playSequence(texts,btn,idle='▶ Прослушать'){stopAudio();const token=++playToken;btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const raw of texts){for(const c of splitTTS(raw)){if(token!==playToken)return;await playChunk(c,token)}}if(token===playToken){btn?.classList.remove('busy');btn.textContent=idle}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');btn.textContent=idle},2200)}}}
function playText(t,b){return playSequence([t],b,'▶ Прослушать')}
function playScript(lines,b){return playSequence(lines.map(x=>x.text),b,'▶ Прослушать')}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · короткие аудиофрагменты</span>`}

function photoVisual(src,label,caption=''){return `<div class="photoVisual"><img src="${src}" alt="${esc(label)}"><div class="visualLabel">${esc(label)}</div>${caption?`<div class="photoCaption">${esc(caption)}</div>`:''}</div>`}
function visualVocab(){return photoVisual('assets/images/block1-small-things.png','Small things','phone · keys · glasses · watch · charger · camera')}
function visualGrammar(){return photoVisual('assets/images/block2-grammar-singular-plural.png','Singular · plural · a / an','one watch → watches')}
function visualSounds(){return photoVisual('assets/images/block3-pronunciation.png','Plural endings','listen · notice · sort')}
function visualBag(){return `<div class="bagContextVisual"><div class="visualLabel">What’s in your bag?</div><div class="bagIcon">BAG</div><div class="bagItems"><span>phone</span><span>keys</span><span>glasses</span><span>charger</span><span>notebook</span><span>ID card</span></div><div class="bagContextHint">What is it? · What are they? · It’s… · They’re…</div></div>`}
function visualListening(){return photoVisual('assets/images/block7-listening-hotel.png','Listening mission','short real-life dialogues')}
function heroVisual(){return photoVisual('assets/images/cover-home.png','Beginner · Unit 3A','Where are my keys?')}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast){const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери один правильный вариант. После ошибки можно попробовать ещё раз.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio','Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});if(audioText)document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Прослушать'}else playText(audioText,this)};document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()}}

function start(){app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 3A · Interactive Review</div><h1>Where are my <span>keys?</span></h1><p>7 блоков: <b>small things</b>, singular & plural nouns, <b>a / an</b>, plural endings /z/ · /s/ · /ɪz/, естественные мини-диалоги, reading, memory game и listening.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroVisual()}<div class="tag a">7 blocks</div><div class="tag b">new: memory game</div></div></div>`);document.getElementById('start').onclick=()=>{state.screen=1;save();render()};document.getElementById('reset').onclick=()=>{state=fresh();save();render()}}
function vocab(){const s='vocab',i=state.idx[s]||0,x=data.vocab[i];commonQuestionScreen(s,1,'Small Things','Vocabulary · everyday small objects',visualVocab(),x,data.vocab.length,x.a,()=>{state.screen=2;save();render()})}
function grammar(){const s='grammar',i=state.idx[s]||0,x=data.grammar[i];commonQuestionScreen(s,2,'Singular, Plural & a/an','Grammar · one thing / more than one thing',visualGrammar(),x,data.grammar.length,null,()=>{state.screen=3;save();render()})}
function sounds(){const bins=[['/z/','/z/','bags · phones · keys'],['/s/','/s/','books · coats · passports'],['/ɪz/','/ɪz/','watches · glasses · purses']];if(!Array.isArray(state.sortOrder)||state.sortOrder.length!==data.sounds.length){state.sortOrder=shuffledIndicesForSort(data.sounds);save()}const order=state.sortOrder,done=data.sounds.every((_,i)=>state.answers.sounds[i]?.solved);app.innerHTML=shell(`${title(3,'Pronunciation Lab','Plural endings · /z/ · /s/ · /ɪz/')}<div class="sortLayout"><div class="pronPhotoFrame"><img src="assets/images/block3-pronunciation.png" alt="Pronunciation listening practice"><div class="pronPhotoLabel">Listen · notice · sort</div></div><div class="bins">${bins.map(([k,l,h])=>`<div class="bin" data-bin="${k}"><strong>${l}</strong><small>${h}</small><div class="binwords">${order.map(i=>{const x=data.sounds[i];return state.answers.sounds[i]?.solved&&x.a===k?`<button class="wordChip good" disabled>${esc(x.w)}</button>`:''}).join('')}</div></div>`).join('')}</div><div class="wordBank">${order.map(i=>{const x=data.sounds[i];return !state.answers.sounds[i]?.solved?`<button draggable="true" class="wordChip ${state.selectedSort===i?'selected':''}" data-word="${i}">${esc(x.w)}</button>`:''}).join('')}<span id="sortHint" class="audioMeta">${done?'Все окончания распределены верно':'Нажми слово и затем колонку — или перетащи карточку'}</span></div></div><div class="footerActions"><div class="leftActions">${audioBtn('soundAudio','Примеры')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>Следующий блок →</button></div>`);function place(i,bin){const x=data.sounds[i];let a=state.answers.sounds[i]||{attempts:0,firstCorrect:null,solved:false};a.attempts++;const ok=x.a===bin;if(a.firstCorrect===null)a.firstCorrect=ok;if(ok){a.solved=true;state.selectedSort=null}state.answers.sounds[i]=a;save();if(ok)render();else{const h=document.getElementById('sortHint');h.textContent='Не эта колонка. Послушай примеры ещё раз.';h.style.color='#bd4053'}}document.querySelectorAll('[data-word]').forEach(w=>{const i=+w.dataset.word;w.onclick=()=>{state.selectedSort=i;save();render()};w.ondragstart=e=>{e.dataTransfer.setData('text/plain',String(i));e.dataTransfer.effectAllowed='move'}});document.querySelectorAll('[data-bin]').forEach(b=>{b.onclick=()=>{if(state.selectedSort!==null)place(state.selectedSort,b.dataset.bin)};b.ondragover=e=>{e.preventDefault();b.classList.add('dropTarget')};b.ondragleave=()=>b.classList.remove('dropTarget');b.ondrop=e=>{e.preventDefault();b.classList.remove('dropTarget');const i=+e.dataTransfer.getData('text/plain');if(Number.isInteger(i))place(i,b.dataset.bin)}});document.getElementById('soundAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Примеры'}else playSequence(['bags, phones, keys, pens','books, coats, passports, tablets','watches, glasses, pieces, purses'],this,'▶ Примеры')};document.getElementById('next').onclick=()=>{state.screen=4;save();render()}}
function bag(){const s='bag',i=state.idx[s]||0,x=data.bag[i];commonQuestionScreen(s,4,'What’s in your bag?','Functional English · What is it? / What are they?',visualBag(),x,data.bag.length,null,()=>{state.screen=5;save();render()})}
function reading(){const s='reading',i=state.idx[s]||0,x=data.reading.qs[i],done=solved(s,i),opts=orderedOptions(s,i,x.o);app.innerHTML=shell(`${title(5,'Reading: The Missing Keys','Read a new short story and find the details')}<div class="blockBody"><div class="visualCard"><div class="readingEditorial"><figure class="readingFloatFigure"><img class="readingFloatPhoto" src="assets/images/block5-reading-keys.png" alt="The Missing Keys reading scene"><figcaption><strong>Where are my keys?</strong><span>phone · glasses · keys · a small bag</span></figcaption></figure><div class="readingBodyText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(x.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${opts.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(s,i,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${i===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(s,i))return;const ok=b.dataset.value===x.a;recordAttempt(s,i,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(y=>y.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Перечитай текст.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});document.getElementById('readAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Послушать текст'}else playSequence(data.reading.audioChunks,this,'▶ Послушать текст')};document.getElementById('next').onclick=()=>{if(i<data.reading.qs.length-1){state.idx[s]=i+1;save();render()}else{state.screen=6;save();render()}}}
function memory(){if(!Array.isArray(state.memoryOrder)||state.memoryOrder.length!==data.memory.length*2){state.memoryOrder=shuffle(data.memory.flatMap((p,i)=>[{pair:i,text:p.a},{pair:i,text:p.b}]));state.memoryOpen=[];state.memoryMoves=0;save()}const all=data.memory.every((_,i)=>state.answers.memory[i]?.solved);app.innerHTML=shell(`${title(6,'Memory Match','Match singular and plural forms')}<div class="memoryWrap">${state.memoryOrder.map((c,idx)=>{const matched=state.answers.memory[c.pair]?.solved,open=state.memoryOpen.includes(idx);return `<button class="memoryCard ${matched?'matched':open?'open':'covered'}" data-mem="${idx}" ${matched?'disabled':''}>${esc(c.text)}</button>`}).join('')}</div><div class="memoryMeta"><span>Найдено пар: ${Object.values(state.answers.memory||{}).filter(x=>x.solved).length}/${data.memory.length}</span><span>Ходов: ${state.memoryMoves||0}</span></div><div class="footerActions"><div class="leftActions"><button class="ghostBtn" id="reshuffle">Перемешать</button></div><button class="nextBtn" id="next" ${all?'':'disabled'}>Следующий блок →</button></div>`);document.querySelectorAll('[data-mem]').forEach(b=>b.onclick=()=>{const idx=+b.dataset.mem;if(state.memoryOpen.includes(idx)||state.memoryOpen.length>=2)return;state.memoryOpen.push(idx);save();render();if(state.memoryOpen.length===2){const [a,bidx]=state.memoryOpen;const ca=state.memoryOrder[a],cb=state.memoryOrder[bidx];state.memoryMoves=(state.memoryMoves||0)+1;if(ca.pair===cb.pair){state.answers.memory[ca.pair]={solved:true,firstCorrect:true};state.memoryOpen=[];save();setTimeout(render,250)}else{save();setTimeout(()=>{state.memoryOpen=[];save();render()},650)}}});document.getElementById('reshuffle').onclick=()=>{state.memoryOrder=shuffle(data.memory.flatMap((p,i)=>[{pair:i,text:p.a},{pair:i,text:p.b}]));state.memoryOpen=[];state.answers.memory={};state.memoryMoves=0;save();render()};document.getElementById('next').onclick=()=>{state.screen=7;save();render()}}
function listening(){const s='listening',i=state.idx[s]||0,x=data.listening.qs[i],done=solved(s,i),script=data.listening.scripts.find(d=>d.id===x.script),opts=orderedOptions(s,i,x.o);app.innerHTML=shell(`${title(7,'Listening Mission','Two short dialogues · objects people look for')}<div class="blockBody"><div class="visualCard">${visualListening()}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(x.q)}</div><div class="subprompt">Можно слушать несколько раз. Реплики озвучиваются короткими фрагментами.</div><div class="answers">${opts.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(s,i,data.listening.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${i===data.listening.qs.length-1?'Результат →':'Следующее задание →'}</button></div>`);document.getElementById('listenAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ Диалог ${script.id}`}else playScript(script.lines,this)};document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(s,i))return;const ok=b.dataset.value===x.a;recordAttempt(s,i,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(y=>y.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});document.getElementById('next').onclick=()=>{if(i<data.listening.qs.length-1){state.idx[s]=i+1;save();render()}else{state.screen=8;save();render()}}}
function results(){const keys=SECTIONS,totalMax=keys.reduce((n,k)=>n+MAX[k],0),total=keys.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...keys].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 3A · Where are my keys?</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>общий результат</span></div><div><div class="resultList">${keys.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — здесь результат выше всего.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()}}
function render(){stopAudio();({0:start,1:vocab,2:grammar,3:sounds,4:bag,5:reading,6:memory,7:listening,8:results}[state.screen]||start)()}
render();
