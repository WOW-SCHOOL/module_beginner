const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const SECTIONS=['vocab','grammar','core','functional','reading','pron','listening'];
const LABELS={vocab:'Souvenir Vocabulary',grammar:'Demonstratives',core:'Price Detective',functional:'Souvenir Shop',reading:'Reading',pron:'Pronunciation & Rhythm',listening:'Listening'};
const STORAGE_KEY='wow_beginner_unit3b_souvenirs_v1';

const data={
 vocab:[
  {q:'You wear this on your head.',a:'a cap',o:['a cap','a mug','a plate','a key ring']},
  {q:'You can wear this around your neck at a football match.',a:'a football scarf',o:['a football scarf','a football shirt','a T-shirt','a cap']},
  {q:'This has the colours or name of a football team.',a:'a football shirt',o:['a football shirt','a plate','a teddy','a key ring']},
  {q:'You put your keys on this.',a:'a key ring',o:['a key ring','a mug','a cap','a plate']},
  {q:'You drink tea or coffee from this.',a:'a mug',o:['a mug','a plate','a cap','a teddy']},
  {q:'You put food on this.',a:'a plate',o:['a plate','a mug','a key ring','a scarf']},
  {q:'This is a soft toy bear.',a:'a teddy',o:['a teddy','a T-shirt','a mug','a plate']},
  {q:'You wear this. It has short sleeves.',a:'a T-shirt',o:['a T-shirt','a key ring','a teddy','a plate']}
 ],
 grammar:[
  {q:'The mug is here, next to me. How much is ___ mug?',a:'this',o:['this','that','these','those']},
  {q:'The cap is over there. How much is ___ cap?',a:'that',o:['this','that','these','those']},
  {q:'The key rings are here in my hand. How much are ___ key rings?',a:'these',o:['this','that','these','those']},
  {q:'The T-shirts are over there. What are ___?',a:'those',o:['this','that','these','those']},
  {q:'Look at ___ plate here. It’s great.',a:'this',o:['this','that','these','those']},
  {q:'Are ___ your football shirts over there?',a:'those',o:['this','that','these','those']},
  {q:'___ are my new mugs here.',a:'These',o:['This','That','These','Those']},
  {q:'Is ___ your phone over there?',a:'that',o:['this','that','these','those']},
  {q:'What are ___ here on the table?',a:'these',o:['this','that','these','those']},
  {q:'Who’s ___ man over there?',a:'that',o:['this','that','these','those']}
 ],
 core:[
  {q:'Listen. How much is the mug?',audio:'The mug is nine pounds.',a:'£9',o:['£9','£19','£90']},
  {q:'Listen. How much is the cap?',audio:'The cap is twelve pounds.',a:'£12',o:['£12','£20','£2']},
  {q:'Listen. How much are the plates?',audio:'The plates are fifteen pounds.',a:'£15',o:['£15','£50','£5']},
  {q:'Listen. How much are the T-shirts?',audio:'The T-shirts are twenty pounds.',a:'£20',o:['£20','£12','£2']},
  {q:'Listen. How much are the key rings?',audio:'The key rings are six pounds.',a:'£6',o:['£6','£16','£60']},
  {q:'Listen. How much is the football shirt?',audio:'The football shirt is twenty-five pounds.',a:'£25',o:['£25','£15','£52']},
  {q:'Listen. How much is the teddy?',audio:'The teddy is eleven pounds.',a:'£11',o:['£11','£17','£21']},
  {q:'Listen. How much is the football scarf?',audio:'The football scarf is eighteen pounds.',a:'£18',o:['£18','£80','£8']},
  {q:'Listen. How much are two caps?',audio:'Two caps are twenty-four pounds.',a:'£24',o:['£24','£14','£42']},
  {q:'Listen. How much is the T-shirt?',audio:'The T-shirt is seven pounds.',a:'£7',o:['£7','£17','£70']}
 ],
 functional:[
  {q:'A: Excuse me. What are those?\nB: ___',a:"They’re T-shirts.",o:["They’re T-shirts.","It’s a mug.","This is my phone."]},
  {q:'A: How much are these key rings?\nB: ___',a:"They’re six pounds.",o:["They’re six pounds.","It’s six pounds.","Those are key rings."]},
  {q:'A: How much is that mug?\nB: ___',a:"It’s fourteen pounds.",o:["It’s fourteen pounds.","They’re fourteen pounds.","This is a mug."]},
  {q:'A: Is that a football shirt?\nB: ___',a:'Yes, it is.',o:['Yes, it is.','Yes, they are.','Yes, this is.']},
  {q:'A: Two caps, please.\nB: ___',a:"That’s twenty-four pounds.",o:["That’s twenty-four pounds.","They’re a cap.","Those is twenty-four pounds."]},
  {q:'A: Thank you very much.\nB: ___',a:"You’re welcome.",o:["You’re welcome.","Excuse me.","How much is it?"]},
  {q:'A: What’s this?\nB: ___',a:"It’s a key ring.",o:["It’s a key ring.","They’re key rings.","Those are key rings."]},
  {q:'A: What are these?\nB: ___',a:"They’re mugs.",o:["They’re mugs.","It’s a mug.","That’s a mug."]}
 ],
 reading:{
  text:`<b>Lucy is in London. She is at a souvenir stall. Tom is at the stall.</b><br><br><b>Lucy:</b> Excuse me. How much is this teddy?<br><b>Tom:</b> It’s twelve pounds.<br><b>Lucy:</b> And this mug?<br><b>Tom:</b> It’s eight pounds.<br><b>Lucy:</b> OK. One teddy and one mug, please.<br><b>Tom:</b> That’s twenty pounds.<br><b>Lucy:</b> Thank you. Are those football shirts thirty pounds?<br><b>Tom:</b> Yes, they are.<br><b>Lucy:</b> Oh, no. Thank you.<br><b>Tom:</b> You’re welcome.`,
  audio:[
   'Lucy is in London. She is at a souvenir stall. Tom is at the stall.',
   'Lucy says, Excuse me. How much is this teddy? Tom says, It is twelve pounds.',
   'Lucy asks, And this mug? Tom says, It is eight pounds.',
   'Lucy says, OK. One teddy and one mug, please. Tom says, That is twenty pounds.',
   'Lucy asks, Are those football shirts thirty pounds? Tom says, Yes, they are.',
   'Lucy says, Oh, no. Thank you. Tom says, You are welcome.'
  ],
  qs:[
   {q:'Where is Lucy?',a:'London',o:['London','Manchester','New York']},
   {q:'How much is the teddy?',a:'£12',o:['£12','£8','£20']},
   {q:'How much is the mug?',a:'£8',o:['£8','£12','£30']},
   {q:'What is Lucy’s shopping?',a:'A teddy and a mug',o:['A teddy and a mug','A football shirt','Two mugs']},
   {q:'How much is Lucy’s shopping?',a:'£20',o:['£20','£30','£12']},
   {q:'Are the football shirts £30?',a:'Yes, they are.',o:['Yes, they are.','No, they aren’t.','The text doesn’t say.']}
  ]
 },
 pron:[
  {q:'Listen. Which word do you hear?',audio:'this',a:'this',o:['this','three','thank']},
  {q:'Listen. Which word do you hear?',audio:'that',a:'that',o:['that','thirty','Thursday']},
  {q:'Listen. Which word do you hear?',audio:'these',a:'these',o:['these','three','thirteen']},
  {q:'Listen. Which word do you hear?',audio:'those',a:'those',o:['those','three','thank']},
  {q:'Listen. Which word do you hear?',audio:'they',a:'they',o:['they','three','Thursday']},
  {q:'Listen. Which word do you hear?',audio:'the',a:'the',o:['the','three','think']},
  {q:'In “How much is this mug?”, which words carry the main information?',a:'How much / mug',o:['How much / mug','is / this','this / is']},
  {q:'In “How much are these key rings?”, which words carry the main information?',a:'How much / key rings',o:['How much / key rings','are / these','these / are']},
  {q:'In “They’re twenty pounds.”, which words carry the main information?',a:'twenty / pounds',o:['twenty / pounds','they’re / pounds','they’re / twenty']},
  {q:'Which phrase contains the voiced /ð/ sound in the demonstrative?',a:'those T-shirts',o:['those T-shirts','three T-shirts','thank you']}
 ],
 listening:{
  scripts:[
   {id:1,lines:[
    {text:'Excuse me. What are these?'},
    {text:'They are key rings.'},
    {text:'How much are they?'},
    {text:'They are seven pounds.'},
    {text:'And that mug?'},
    {text:'It is eleven pounds.'},
    {text:'OK. Two key rings, please.'},
    {text:'That is fourteen pounds.'},
    {text:'Thank you.'},
    {text:'You are welcome.'}
   ]},
   {id:2,lines:[
    {text:'Excuse me. Is this a football scarf?'},
    {text:'Yes, it is.'},
    {text:'How much is it?'},
    {text:'It is nine pounds.'},
    {text:'And those T-shirts?'},
    {text:'They are eighteen pounds.'},
    {text:'OK. One scarf and one T-shirt, please.'},
    {text:'That is twenty-seven pounds.'},
    {text:'Thank you.'}
   ]}
  ],
  qs:[
   {q:'What are the first souvenirs?',a:'Key rings',o:['Key rings','Mugs','Caps'],script:1},
   {q:'How much is one key ring?',a:'£7',o:['£7','£11','£14'],script:1},
   {q:'How much is the mug?',a:'£11',o:['£11','£7','£14'],script:1},
   {q:'How much are two key rings?',a:'£14',o:['£14','£7','£18'],script:1},
   {q:'What is the first item in Dialogue 2?',a:'A football scarf',o:['A football scarf','A cap','A teddy'],script:2},
   {q:'How much is the football scarf?',a:'£9',o:['£9','£18','£27'],script:2},
   {q:'How much is the T-shirt?',a:'£18',o:['£18','£9','£27'],script:2},
   {q:'What does the customer buy?',a:'A scarf and a T-shirt',o:['A scarf and a T-shirt','Two scarves','A mug and a cap'],script:2}
  ]
 }
};

const MAX={vocab:data.vocab.length,grammar:data.grammar.length,core:data.core.length,functional:data.functional.length,reading:data.reading.qs.length,pron:data.pron.length,listening:data.listening.qs.length};
const fresh=()=>({screen:0,idx:{vocab:0,grammar:0,core:0,functional:0,reading:0,pron:0,listening:0},answers:{vocab:{},grammar:{},core:{},functional:{},reading:{},pron:{},listening:{}},mistakes:{}});
let state=fresh();
try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s&&s.answers)state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers}}}catch(e){}
state.screen=0;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Unit 3B · Souvenirs</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Unit 3B</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/7</strong><div class="track"><i style="width:${n/7*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Unit 3B</b> · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}

let currentAudio=null,playToken=0,currentUtterance=null;
const ttsAudio=document.createElement('audio');ttsAudio.preload='auto';ttsAudio.setAttribute('playsinline','');ttsAudio.setAttribute('webkit-playsinline','');ttsAudio.referrerPolicy='no-referrer';ttsAudio.style.display='none';document.body.appendChild(ttsAudio);
function providerUrls(text){const q=encodeURIComponent(text.replace(/\s+/g,' ').trim());return [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`,`https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.google.co.uk/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`]}
function splitTTS(text,max=220){const clean=text.replace(/\s+/g,' ').trim();if(clean.length<=max)return [clean];const out=[];let rest=clean;while(rest.length){if(rest.length<=max){out.push(rest);break}let cut=-1;for(const mark of ['. ','? ','! ',', ','; ']){const i=rest.lastIndexOf(mark,max);if(i>Math.floor(max*.52)){cut=i+mark.length-1;break}}if(cut<0){cut=rest.lastIndexOf(' ',max);if(cut<Math.floor(max*.52))cut=max}out.push(rest.slice(0,cut).trim());rest=rest.slice(cut).trim()}return out.filter(Boolean)}
function stopAudio(){playToken++;try{ttsAudio.pause();ttsAudio.removeAttribute('src');ttsAudio.load()}catch(e){}try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}currentAudio=null;currentUtterance=null}
function playUrl(url,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));const a=ttsAudio;currentAudio=a;let finished=false;const cleanup=()=>{a.onended=a.onerror=a.onstalled=a.onabort=null;clearTimeout(timer)};const timer=setTimeout(()=>{if(finished)return;finished=true;cleanup();reject(new Error('timeout'))},18000);a.onended=()=>{if(finished)return;finished=true;cleanup();resolve()};a.onerror=()=>{if(finished)return;finished=true;cleanup();reject(new Error('audio error'))};a.onstalled=()=>{};a.onabort=()=>{if(finished)return;finished=true;cleanup();reject(new Error('aborted'))};a.referrerPolicy='no-referrer';a.src=url;a.currentTime=0;a.load();const p=a.play();if(p&&typeof p.catch==='function')p.catch(err=>{if(finished)return;finished=true;cleanup();reject(err)})})}
function preferredBritishVoice(){try{const voices=window.speechSynthesis?.getVoices?.()||[];const preferred=['Google UK English Female','Google UK English Male','Microsoft Sonia Online (Natural) - English (United Kingdom)','Microsoft Ryan Online (Natural) - English (United Kingdom)'];for(const n of preferred){const v=voices.find(x=>x.name===n);if(v)return v}return voices.find(x=>/^en-GB$/i.test(x.lang))||voices.find(x=>/^en/i.test(x.lang))||null}catch(e){return null}}
function playBrowserSpeech(text,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));if(!window.speechSynthesis||!window.SpeechSynthesisUtterance)return reject(new Error('speech synthesis unavailable'));try{window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);currentUtterance=u;u.lang='en-GB';u.rate=1;u.pitch=1;const v=preferredBritishVoice();if(v)u.voice=v;let done=false;const timer=setTimeout(()=>{if(done)return;done=true;try{window.speechSynthesis.cancel()}catch(e){}reject(new Error('speech timeout'))},30000);u.onend=()=>{if(done)return;done=true;clearTimeout(timer);resolve()};u.onerror=e=>{if(done)return;done=true;clearTimeout(timer);reject(e.error||new Error('speech error'))};window.speechSynthesis.speak(u)}catch(e){reject(e)}})}
async function playChunk(text,token){let lastErr=null;for(const url of providerUrls(text)){if(token!==playToken)throw new Error('cancelled');try{await playUrl(url,token);return}catch(e){lastErr=e}}throw lastErr||new Error('No audio provider available')}
async function playSequence(texts,btn,idleLabel='▶ Прослушать'){stopAudio();const token=++playToken;btn?.classList.remove('error');btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const text of texts){if(token!==playToken)return;await playChunk(text,token)}if(token===playToken){btn?.classList.remove('busy');if(btn)btn.textContent=idleLabel}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');if(btn)btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');if(btn)btn.textContent=idleLabel},2200)}}}
function playText(text,btn){return playSequence(splitTTS(text),btn,'▶ Прослушать')}
function playScript(lines,btn){return playSequence(lines.flatMap(x=>splitTTS(x.text,120)),btn,'▶ Прослушать')}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function slotFallback(icon,title,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(title)}</strong><span>${esc(caption)}</span><small>изображение добавим отдельным этапом</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-unit3b.jpg" alt="Beginner Unit 3B Souvenirs preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">🛍️</div><strong>Beginner · Unit 3B</strong><span>Souvenirs · this / that / these / those · prices · /ð/ · shop English</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-reading.jpg" alt="Souvenir stall reading scene" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('📖','Reading Mission','A short souvenir-shop conversation in London')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast){
 const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Если ошибёшься, можно попробовать ещё раз.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно! Переходим дальше.'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio','Прослушать'):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 const fb=document.getElementById('fb');
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');fb.innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');fb.innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Прослушать'}else playText(audioText,this)}}
 document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
 app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · Unit 3B · English File</div><h1><span>Souvenirs</span></h1><p>7 интерактивных блоков: souvenir vocabulary, this / that / these / those, prices, shop English, reading, pronunciation & rhythm и listening.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
 document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
 document.getElementById('reset').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=fresh();render()};
}
function vocab(){const sec='vocab',idx=state.idx[sec]||0,item=data.vocab[idx];commonQuestionScreen(sec,1,'Souvenir Vocabulary','8 ключевых слов урока 3B',visualSlot('block1-vocabulary.jpg','🧢','Souvenir Vocabulary','cap · scarf · shirt · key ring · mug · plate · teddy · T-shirt','Souvenir vocabulary'),item,data.vocab.length,null,()=>{state.screen=2;save();render()})}
function grammar(){const sec='grammar',idx=state.idx[sec]||0,item=data.grammar[idx];commonQuestionScreen(sec,2,'This, That, These, Those','near / far · singular / plural',visualSlot('block2-grammar.jpg','↔️','Near or Far?','Choose the correct demonstrative for the position and number','Demonstratives context'),item,data.grammar.length,null,()=>{state.screen=3;save();render()})}
function core(){const sec='core',idx=state.idx[sec]||0,item=data.core[idx];commonQuestionScreen(sec,3,'Price Detective','Слушай короткую цену и выбирай правильный вариант',visualSlot('block3-prices.jpg','£','Price Detective','Listen for pounds and distinguish similar numbers','Price listening'),item,data.core.length,item.audio,()=>{state.screen=4;save();render()})}
function functional(){const sec='functional',idx=state.idx[sec]||0,item=data.functional[idx];commonQuestionScreen(sec,4,'Souvenir Shop Challenge','Покупка сувениров: вопросы, цены и ответы',visualSlot('block4-shop-talk.jpg','💬','Shop Talk','Ask about objects, prices and respond naturally','Souvenir shop conversation'),item,data.functional.length,null,()=>{state.screen=5;save();render()})}
function reading(){
 const sec='reading',idx=state.idx[sec]||0,item=data.reading.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(5,'Reading Mission','Новая короткая ситуация в сувенирном магазине')}<div class="blockBody"><div class="visualCard"><div class="readingVisual"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.reading.text}</div></div></div><div class="questionCard"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,data.reading.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.reading.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Перечитай текст и попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 document.getElementById('readAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Послушать текст'}else playSequence(data.reading.audio,this,'▶ Послушать текст')};
 document.getElementById('next').onclick=()=>{if(idx<data.reading.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}
function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Pronunciation & Rhythm','/ð/ в this / that / these / those + английский ритм',visualSlot('block6-pronunciation.jpg','🗣️','Pronunciation & Rhythm','Voiced /ð/ and the stressed words that carry meaning','Pronunciation practice'),item,data.pron.length,item.audio||null,()=>{state.screen=7;save();render()})}
function listening(){
 const sec='listening',idx=state.idx[sec]||0,item=data.listening.qs[idx],done=solved(sec,idx),script=data.listening.scripts.find(s=>s.id===item.script),options=orderedOptions(sec,idx,item.o);
 app.innerHTML=shell(`${title(7,'Listening Mission','Два новых диалога в сувенирном магазине')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-listening.jpg','🎧','Listen carefully','Souvenirs, prices and this / that / these / those','Souvenir shop listening')}</div><div class="questionCard"><div class="kicker">Dialogue ${script.id}</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Диалог можно прослушать несколько раз.</div><div class="answers">${options.map((o,oi)=>`<button class="answer" data-answer="${oi}" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Сначала прослушай диалог')}</div>${miniProgress(sec,idx,data.listening.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('listenAudio',`Диалог ${script.id}`)}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.listening.qs.length-1?'Результат →':'Следующее задание →'}</button></div>`);
 document.getElementById('listenAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ Диалог ${script.id}`}else playScript(script.lines,this)};
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),500)}});
 document.getElementById('next').onclick=()=>{if(idx<data.listening.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=8;save();render()}};
}
function results(){
 const keys=SECTIONS,totalMax=keys.reduce((n,k)=>n+MAX[k],0),total=keys.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...keys].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
 app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Unit 3B · Souvenirs</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${keys.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
 document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}
function render(){stopAudio();({0:start,1:vocab,2:grammar,3:core,4:functional,5:reading,6:pron,7:listening,8:results}[state.screen]||start)()}
render();
