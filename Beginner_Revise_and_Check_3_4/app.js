const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_revise_check_3_4_v1';
const SECTIONS=['quick','grammar','sort','builder','reading','pron','interviews','error'];
const LABELS={quick:'Quick Review',grammar:'Grammar Check',sort:'Review Sort',builder:'Sentence Builder',reading:'Reading Mission',pron:'Pronunciation Lab',interviews:'Street Interviews',error:'Error Hunter'};

const data={
 quick:[
  {q:'Listen. Which object do you hear?',audio:'a credit card',a:'a credit card',o:['a credit card','a key','a cap']},
  {q:'Listen. Which object do you hear?',audio:'a teddy bear',a:'a teddy bear',o:['a teddy bear','an umbrella','a wallet']},
  {q:'Listen. Which object do you hear?',audio:'an umbrella',a:'an umbrella',o:['an umbrella','a mug','a key']},
  {q:'Listen. Which object do you hear?',audio:'a key',a:'a key',o:['a key','a plate','a phone']},
  {q:'Listen. Which object do you hear?',audio:'a cap',a:'a cap',o:['a cap','a watch','a wallet']},
  {q:'You drink tea or coffee from this.',audio:'a mug',a:'a mug',o:['a mug','a plate','a cap']},
  {q:'You can keep money and cards in this.',audio:'a wallet',a:'a wallet',o:['a wallet','a teddy bear','an umbrella']},
  {q:'This can be a souvenir for a wall or shelf.',audio:'a plate',a:'a plate',o:['a plate','a phone','a key']},
  {q:'You can call or message people with this.',audio:'a phone',a:'a phone',o:['a phone','a cap','a mug']},
  {q:'You wear this on your wrist.',audio:'a watch',a:'a watch',o:['a watch','a wallet','a plate']}
 ],
 grammar:[
  {q:'Choose the correct sentence.',a:'This is a key.',o:['This is a key.','These is a key.','This are a key.']},
  {q:'Choose the correct sentence.',a:'These are my keys.',o:['These are my keys.','This are my keys.','These is my keys.']},
  {q:'Look at one umbrella near you: ___ umbrella is new.',a:'This',o:['This','These','Those']},
  {q:'Look at two bags far from you: ___ bags are expensive.',a:'Those',o:['Those','That','This']},
  {q:'I’m Anna. This is ___ brother.',a:'my',o:['my','his','their']},
  {q:'Maria is my friend. ___ husband is Ben.',a:'Her',o:['Her','His','Their']},
  {q:'Ben and Maria have two children. ___ children are at school.',a:'Their',o:['Their','Our','Its']},
  {q:'This is Emma’s phone. It is ___ phone.',a:'Emma’s',o:['Emma’s','Emma','Emmas']},
  {q:'Choose the natural word order.',a:'a small blue car',o:['a small blue car','a blue small car','small a blue car']},
  {q:'Choose the correct plural.',a:'children',o:['children','childs','childrens']}
 ],
 sort:[
  {w:'credit card',c:'SMALL THINGS'},{w:'umbrella',c:'SMALL THINGS'},{w:'key',c:'SMALL THINGS'},{w:'wallet',c:'SMALL THINGS'},
  {w:'mother',c:'FAMILY'},{w:'husband',c:'FAMILY'},{w:'daughter',c:'FAMILY'},{w:'brother',c:'FAMILY'},
  {w:'blue',c:'COLOURS'},{w:'green',c:'COLOURS'},{w:'red',c:'COLOURS'},{w:'yellow',c:'COLOURS'},
  {w:'small',c:'ADJECTIVES'},{w:'cheap',c:'ADJECTIVES'},{w:'old',c:'ADJECTIVES'},{w:'beautiful',c:'ADJECTIVES'}
 ],
 builder:[
  {cue:'Собери: Это мой новый телефон.',tokens:['This','is','my','new','phone.'],audio:'This is my new phone.'},
  {cue:'Собери: Это мои ключи.',tokens:['These','are','my','keys.'],audio:'These are my keys.'},
  {cue:'Собери: Те футболки дорогие.',tokens:['Those','T-shirts','are','expensive.'],audio:'Those T-shirts are expensive.'},
  {cue:'Собери: Это муж моей сестры.',tokens:["He's",'my',"sister's",'husband.'],audio:"He's my sister's husband."},
  {cue:'Собери: Их машина маленькая и красная.',tokens:['Their','car','is','small','and','red.'],audio:'Their car is small and red.'},
  {cue:'Собери: Это красивый сувенир.',tokens:["It's",'a','beautiful','souvenir.'],audio:"It's a beautiful souvenir."},
  {cue:'Собери: Это старые часы.',tokens:["They're",'old','watches.'],audio:"They're old watches."},
  {cue:'Собери: Это дешёвая синяя машина.',tokens:["It's",'a','cheap','blue','car.'],audio:"It's a cheap blue car."}
 ],
 reading:{
  text:`<b>Hi, I’m Alex.</b> This is a photo from my weekend. The woman next to me is my sister, Nina. Her husband is Tom, and their daughter is Lucy. Lucy is seven.<br><br>My bag is on the chair. In it, I have my phone, a wallet, two keys, and a small red souvenir mug. The mug is for my mother.<br><br>The grey car in the photo is Tom’s car. It’s quite old, but it’s clean and comfortable. Nina’s car is small and blue. In my opinion, her car is perfect for the city because it’s easy to park.`,
  audio:[
   'Hi, I am Alex. This is a photo from my weekend.',
   'The woman next to me is my sister, Nina. Her husband is Tom, and their daughter is Lucy. Lucy is seven.',
   'My bag is on the chair. In it, I have my phone, a wallet, two keys, and a small red souvenir mug.',
   'The mug is for my mother.',
   'The grey car in the photo is Tom’s car. It is quite old, but it is clean and comfortable.',
   'Nina’s car is small and blue. In my opinion, her car is perfect for the city because it is easy to park.'
  ],
  qs:[
   {q:'Who is Nina?',a:'Alex’s sister',o:['Alex’s sister','Alex’s mother','Alex’s wife']},
   {q:'Who is Lucy?',a:'Nina and Tom’s daughter',o:['Nina and Tom’s daughter','Alex’s sister','Tom’s mother']},
   {q:'How many keys are in Alex’s bag?',a:'Two',o:['Two','One','Three']},
   {q:'Who is the mug for?',a:'Alex’s mother',o:['Alex’s mother','Nina','Lucy']},
   {q:'What colour is Tom’s car?',a:'Grey',o:['Grey','Blue','Red']},
   {q:'Why is Nina’s car good for the city?',a:'It is easy to park',o:['It is easy to park','It is very fast','It is very expensive']}
  ]
 },
 pron:[
  {q:'Listen. Which sound is in “computer”?',audio:'computer',a:'/ə/',o:['/ə/','/ʌ/','/æ/']},
  {q:'Listen. Which sound is in “up”?',audio:'up',a:'/ʌ/',o:['/ʌ/','/ɑː/','/ɔː/']},
  {q:'Listen. Which sound is in “horse”?',audio:'horse',a:'/ɔː/',o:['/ɔː/','/ɑː/','/æ/']},
  {q:'Listen. Which sound is in “car”?',audio:'car',a:'/ɑː/',o:['/ɑː/','/ɔː/','/ə/']},
  {q:'Listen. Which sound is in “cat”?',audio:'cat',a:'/æ/',o:['/æ/','/ʌ/','/ə/']},
  {q:'Listen. Which word do you hear?',audio:'woman',a:'woman',o:['woman','women','wallet']},
  {q:'Listen. Which word do you hear?',audio:'family',a:'family',o:['family','father','fifty']},
  {q:'Listen. Which word do you hear?',audio:'orange',a:'orange',o:['orange','old','umbrella']},
  {q:'Listen. Which word do you hear?',audio:'expensive',a:'expensive',o:['expensive','easy','excellent']},
  {q:'Listen. Which word do you hear?',audio:'sister',a:'sister',o:['sister','souvenir','small']}
 ],
 interviews:[
  {script:['What is in your bag?','I have my coat, some water, and my wallet.'],q:'Which three things are in the bag?',a:'A coat, water, and a wallet',o:['A coat, water, and a wallet','A phone, a key, and a cap','A mug, a card, and an umbrella']},
  {script:['What is in your bag?','I keep my purse, my phone, and an umbrella in it.'],q:'What is NOT mentioned?',a:'A key',o:['A key','A phone','An umbrella']},
  {script:['Are you from a big or small family?','A small family. I have my mum, my dad, and one little sister.'],q:'Is the family big or small?',a:'Small',o:['Small','Big','Very big']},
  {script:['Are you from a big or small family?','A small family. I have my mum, my dad, and one little sister.'],q:'How many sisters are mentioned?',a:'One',o:['One','Two','None']},
  {script:['How much is a cup of coffee in your local coffee shop?','It is four dollars.'],q:'How much is the coffee?',a:'Four dollars',o:['Four dollars','Five dollars','Four pounds']},
  {script:['Do you think the coffee is cheap or expensive?','I think it is expensive.'],q:'What is the speaker’s opinion?',a:'It is expensive',o:['It is expensive','It is cheap','It is free']},
  {script:['Can you describe your car?','It is a small automatic car.'],q:'What size is the car?',a:'Small',o:['Small','Big','Long']},
  {script:['Can you describe your car?','It is a small automatic car.'],q:'What kind of car is it?',a:'Automatic',o:['Automatic','Electric','Sports']}
 ],
 error:[
  {tokens:['These','is','my','keys.'],wrong:1,repairs:['are','am','be'],correct:'are',audio:'These are my keys.'},
  {tokens:['This','are','a','souvenir.'],wrong:1,repairs:['is','am','be'],correct:'is',audio:'This is a souvenir.'},
  {tokens:['Those','is','expensive','watches.'],wrong:1,repairs:['are','am','be'],correct:'are',audio:'Those are expensive watches.'},
  {tokens:['She','is','my','brother.'],wrong:3,repairs:['sister.','father.','husband.'],correct:'sister.',audio:'She is my sister.'},
  {tokens:['Maria','is','my','friend.','His','husband','is','Ben.'],wrong:4,repairs:['Her','Their','Our'],correct:'Her',audio:'Maria is my friend. Her husband is Ben.'},
  {tokens:['This','is',"Tom",'car.'],wrong:2,repairs:["Tom's",'Toms','Tom is'],correct:"Tom's",audio:"This is Tom's car."},
  {tokens:["It's",'a','small','blues','car.'],wrong:3,repairs:['blue','black','green'],correct:'blue',audio:"It's a small blue car."},
  {tokens:["They're",'beautiful','car.'],wrong:2,repairs:['cars.','car is.','cars is.'],correct:'cars.',audio:"They're beautiful cars."}
 ]
};

const MAX={quick:data.quick.length,grammar:data.grammar.length,sort:data.sort.length,builder:data.builder.length,reading:data.reading.qs.length,pron:data.pron.length,interviews:data.interviews.length,error:data.error.length};
const fresh=()=>({screen:0,idx:{quick:0,grammar:0,builder:0,reading:0,pron:0,interviews:0,error:0},answers:{quick:{},grammar:{},sort:{},builder:{},reading:{},pron:{},interviews:{},error:{}},mistakes:{},sortPlaced:{},sortSelected:null,builderChosen:[],errorState:{phase:'find',wrongSeen:false}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers},errorState:{...fresh().errorState,...(s.errorState||{})}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Revise & Check 3&4</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>3&4 Review</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Revise & Check 3&4</b> · ${sub}</p></div>${progress(n)}</div>`}
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
function playScript(lines,btn,label='Диалог'){const arr=lines.map(x=>typeof x==='string'?{text:x}:x);return playSequence(arr.flatMap(x=>splitTTS(x.text,110)),btn,`▶ ${label}`)}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>изображение добавим отдельным этапом</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-revise34.jpg" alt="Beginner Revise and Check 3 and 4 preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">✅</div><strong>Revise & Check 3&4</strong><span>grammar · vocabulary · sentence builder · reading · short listening · pronunciation · error hunter</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Portrait selfie review scene" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📱','Reading Mission','Portrait selfie image · 9:16')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,audioLabel='Прослушать'){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Ошибку можно исправить.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',audioLabel):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${audioLabel}`}else playText(audioText,this,`▶ ${audioLabel}`)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · English File · Review 3&4</div><h1><span>Revise & Check 3&4</span></h1><p>8 интерактивных блоков без сложного длинного аудио в начале: vocabulary, grammar, Review Sort, обязательный Sentence Builder, Reading + audio, pronunciation, короткие street interviews и новый Error Hunter.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=fresh();render()};
}

function quick(){const sec='quick',idx=state.idx[sec]||0,item=data.quick[idx];commonQuestionScreen(sec,1,'Quick Review','small things · souvenirs · short audio cues',visualSlot('block1-quick-review.jpg','👜','Quick Review','Small things and souvenirs from Units 3–4','Everyday objects and souvenirs'),item,data.quick.length,item.audio,()=>{state.screen=2;save();render()},'Слово')}
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];commonQuestionScreen(sec,2,'Grammar Check','a / an · plurals · this / that / these / those · possessives · adjectives',visualSlot('block2-grammar.jpg','🧠','Grammar Check','Objects, family and cars in one review','Grammar review scene'),item,data.grammar.length,null,()=>{state.screen=3;save();render()})}

function reviewSort(){
 const total=data.sort.length,placed=Object.keys(state.sortPlaced||{}).length,cats=['SMALL THINGS','FAMILY','COLOURS','ADJECTIVES'];
 const remaining=data.sort.map((x,i)=>({...x,i})).filter(x=>!state.sortPlaced[x.i]);
 const chips=remaining.map(x=>`<button class="sortChip ${state.sortSelected===x.i?'selected':''}" draggable="true" data-chip="${x.i}">${esc(x.w)}</button>`).join('');
 const cols=cats.map(cat=>`<div class="sortCol" data-col="${cat}"><h3>${cat}</h3><div class="sortDrop">${data.sort.map((x,i)=>state.sortPlaced[i]===cat?`<span class="sortChip good">${esc(x.w)}</span>`:'').join('')}</div></div>`).join('');
 app.innerHTML=shell(`${title(3,'Review Sort','Перенеси слова в правильные столбцы')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-sort.jpg','🗂️','Review Sort','Small things · family · colours · adjectives','Sorting review scene')}</div><div class="questionCard"><div class="kicker">Review Sort</div><div class="prompt">Sort all 16 words.</div><div class="subprompt">Можно перетаскивать карточки или нажать слово, затем нужный столбец.</div><div class="sortWrap"><div class="sortBank" id="sortBank">${chips}</div><div class="sortColumns">${cols}</div></div><div class="statusWrap"><div id="fb">${placed===total?feedback('good','Все слова распределены!'):feedback('neutral','Выбери слово или перетащи карточку.')}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.sortPlaced[i]?'done':i===placed?'current':''}"></i>`).join('')}</div><div class="counter">Распределено ${placed} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allWords','Все слова')}</div><button class="nextBtn" id="next" ${placed===total?'':'disabled'}>Следующий блок →</button></div>`);
 document.getElementById('allWords').onclick=function(){playSequence(data.sort.map(x=>x.w),this,'▶ Все слова')};
 function place(i,cat){const item=data.sort[i];if(!item||state.sortPlaced[i])return;if(item.c===cat){recordAttempt('sort',i,true);state.sortPlaced[i]=cat;state.sortSelected=null;save();reviewSort()}else{recordAttempt('sort',i,false);state.sortSelected=null;save();document.getElementById('fb').innerHTML=feedback('bad','Не этот столбец. Попробуй ещё раз.')}}
 document.querySelectorAll('[data-chip]').forEach(el=>{el.onclick=()=>{state.sortSelected=+el.dataset.chip;save();reviewSort()};el.ondragstart=e=>e.dataTransfer.setData('text/plain',el.dataset.chip)});
 document.querySelectorAll('[data-col]').forEach(col=>{col.onclick=()=>{if(state.sortSelected!==null)place(state.sortSelected,col.dataset.col)};col.ondragover=e=>{e.preventDefault();col.classList.add('hot')};col.ondragleave=()=>col.classList.remove('hot');col.ondrop=e=>{e.preventDefault();col.classList.remove('hot');place(+e.dataTransfer.getData('text/plain'),col.dataset.col)}});
 document.getElementById('next').onclick=()=>{state.screen=4;save();render()};
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function builderBlock(){
 const sec='builder',idx=state.idx[sec]||0,item=data.builder[idx],done=solved(sec,idx);if(!Array.isArray(state.builderChosen))state.builderChosen=[];
 const shuffled=shuffleTokens(item.tokens,idx+sec.length),chosen=state.builderChosen;
 app.innerHTML=shell(`${title(4,'Sentence Builder','BASE: Russian cue + word order + British-English audio model')}<div class="blockBody"><div class="visualCard">${visualSlot('block4-builder.jpg','🧩','Sentence Builder','Build the English sentence in the correct order','Learners assembling sentence cards')}</div><div class="questionCard"><div class="kicker">Sentence Builder</div><div class="prompt">Build the sentence.</div><div class="builderWrap"><div class="builderCue">${esc(item.cue)}</div><div class="builderResult">${chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в правильном порядке.</span>'}</div><div class="tokenBank">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="builderActions"><button class="smallBtn" id="clear">Сбросить</button><button class="smallBtn primary" id="check" ${done?'disabled':''}>Проверить</button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Собери предложение')}</div>${miniProgress(sec,idx,data.builder.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.builder.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
 document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});save();builderBlock()});
 document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);save();builderBlock()});
 document.getElementById('clear').onclick=()=>{state.builderChosen=[];save();builderBlock()};
 document.getElementById('check').onclick=()=>{const answer=chosen.map(x=>x.t).join(' '),target=item.tokens.join(' '),ok=answer===target;recordAttempt(sec,idx,ok);if(ok){state.builderChosen=[];save();document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false}else document.getElementById('fb').innerHTML=feedback('bad','Порядок пока неверный. Попробуй ещё раз.')};
 document.getElementById('next').onclick=()=>{state.builderChosen=[];if(idx<data.builder.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=5;save();render()}};
}

function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','portrait selfie visual + visible text + optional audio')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту. Аудио — дополнительная поддержка.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай текст')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('readAudio').onclick=function(){playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}

function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Pronunciation Lab','/ə/ · /ʌ/ · /ɔː/ · /ɑː/ · /æ/ · word recognition',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation Lab','Short focused audio only','Pronunciation practice'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио')}

function interviews(){
 const sec='interviews',idx=state.idx[sec]||0,item=data.interviews[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(7,'Street Interviews','short micro-listening + optional transcript support')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-interviews.jpg','🎤','Street Interviews','Short real-life questions from the Units 3–4 review topics','Street interview scene')}</div><div class="questionCard interviewQuestion"><div class="kicker">Micro listening ${idx+1}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Сначала попробуй на слух. Если сложно — открой текст.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><button class="supportBtn" id="support">Показать текст</button><div class="transcriptBox" id="transcript">${item.script.map(x=>`<div>${esc(x)}</div>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прослушай короткий фрагмент')}</div>${miniProgress(sec,idx,data.interviews.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('clip','Короткий фрагмент')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.interviews.length-1?'Новый блок →':'Следующее задание →'}</button></div>`);
 document.getElementById('clip').onclick=function(){playScript(item.script,this,'Короткий фрагмент')};
 document.getElementById('support').onclick=()=>{document.getElementById('transcript').classList.toggle('show');document.getElementById('support').textContent=document.getElementById('transcript').classList.contains('show')?'Скрыть текст':'Показать текст'};
 document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{if(idx<data.interviews.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
}

function fixedTokens(item){const arr=[...item.tokens];arr[item.wrong]=item.correct;return arr}
function completeError(sec,idx,firstCorrect){
 let a=state.answers[sec][idx];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][idx]=a}
 a.attempts++;if(a.firstCorrect===null)a.firstCorrect=firstCorrect;a.solved=true;state.mistakes[`${sec}:${idx}`]=firstCorrect?null:true;save();
}
function errorHunter(){
 const sec='error',idx=state.idx[sec]||0,item=data.error[idx],done=solved(sec,idx),phase=done?'done':(state.errorState.phase||'find');
 const corrected=fixedTokens(item);
 app.innerHTML=shell(`${title(8,'Error Hunter','NEW: найди ошибку → исправь её → прослушай правильную модель')}<div class="blockBody"><div class="visualCard">${visualSlot('block8-error-hunter.jpg','🔎','Error Hunter','Find one language problem, then repair it','Language detective puzzle scene')}</div><div class="questionCard errorQuestion"><div class="kicker">ERROR HUNTER</div><div class="prompt">Fix the sentence.</div><div class="errorSteps"><span class="errorStep ${phase==='find'?'active':''}">1 · Найди ошибку</span><span class="errorStep ${phase==='repair'?'active':''}">2 · Исправь</span><span class="errorStep ${done?'active':''}">3 · Готово</span></div>${done?`<div class="errorSolved">${corrected.map(t=>`<span>${esc(t)}</span>`).join('')}</div>`:`<div class="errorSentence">${item.tokens.map((t,i)=>`<button class="errorToken ${phase==='repair'&&i===item.wrong?'target':''}" data-word="${i}" ${phase==='repair'?'disabled':''}>${esc(t)}</button>`).join('')}</div>${phase==='repair'?`<div class="repairChoices">${item.repairs.map(r=>`<button class="repairBtn" data-repair="${esc(r)}">${esc(r)}</button>`).join('')}</div>`:''}`}<div class="statusWrap"><div id="fb">${done?feedback('good','Исправлено!'):feedback('neutral',phase==='find'?'Нажми слово, в котором ошибка.':'Теперь выбери правильную замену.')}</div>${miniProgress(sec,idx,data.error.length)}</div></div></div><div class="footerActions"><div class="leftActions">${done?audioBtn('model','Модель'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.error.length-1?'Результаты →':'Следующее задание →'}</button></div>`);
 if(done){document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')}}
 document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>{if(phase!=='find')return;const i=+b.dataset.word;if(i===item.wrong){state.errorState.phase='repair';save();errorHunter()}else{state.errorState.wrongSeen=true;save();b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Это слово правильное. Ищи дальше.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.querySelectorAll('[data-repair]').forEach(b=>b.onclick=()=>{const ok=b.dataset.repair===item.correct;if(ok){completeError(sec,idx,!state.errorState.wrongSeen);state.errorState={phase:'done',wrongSeen:false};save();playText(item.audio,null);errorHunter()}else{state.errorState.wrongSeen=true;save();b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Эта замена не подходит. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
 document.getElementById('next').onclick=()=>{state.errorState={phase:'find',wrongSeen:false};if(idx<data.error.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=9;save();render()}};
}

function results(){
 const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Revise & Check 3&4</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}

function render(){stopAudio();({0:start,1:quick,2:grammar,3:reviewSort,4:builderBlock,5:reading,6:pron,7:interviews,8:errorHunter,9:results}[state.screen]||start)()}
render();
