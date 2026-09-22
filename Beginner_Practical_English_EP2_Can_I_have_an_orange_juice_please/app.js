
const app=document.getElementById('app');
const STORAGE='wow_pe2_orange_juice_v1';
const ORDER=['prices','sounds','menu','rob','jenny','memory','phrases'];
const LABELS={prices:'Prices',sounds:'Pronunciation',menu:'Menu',rob:'Rob',jenny:'Jenny & Amy',memory:'Memory',phrases:'Useful phrases'};

const data={
  prices:[
    {q:'How do you say £12.75?',o:['twelve pounds seventy-five','twelve pounds and seventy-five','twelve seventy-five pounds','one two point seven five'],a:0,tip:'In British English we usually say “twelve pounds seventy-five”.'},
    {q:'Which price is “fifteen euros ninety-nine”?',o:['€15.09','€15.90','€15.99','€50.99'],a:2,tip:'Euros come first, then cents: fifteen euros ninety-nine.'},
    {q:'How do you say €3.20?',o:['three euros and twenty','three euros twenty','three twenty euros','twenty euros three'],a:1,tip:'No “and” here: three euros twenty.'},
    {q:'Which one means “eighty cents”?',o:['$8.00','$0.80','€8.80','£0.08'],a:1,tip:'Eighty cents is 0.80 of a dollar.'},
    {q:'What is the best British English form?',o:['six pounds and seventy-five','six pounds seventy-five','six and seventy-five pounds','six pounds point seventy-five'],a:1,tip:'For prices like £6.75, the usual form is “six pounds seventy-five”.'},
    {q:'Which price is “one pound fifty”?',o:['£1.50','£15.00','£1.05','£0.50'],a:0,tip:'One pound fifty = £1.50.'}
  ],
  sounds:[
    {w:'euro',a:'/ʊə/'},{w:'Europe',a:'/ʊə/'},{w:'European',a:'/ʊə/'},
    {w:'centre',a:'/s/'},{w:'city',a:'/s/'},{w:'cents',a:'/s/'},
    {w:'coffee',a:'/k/'},{w:'Coke',a:'/k/'},{w:'card',a:'/k/'},{w:'can',a:'/k/'}
  ],
  menu:[
    {item:'Cheese sandwich',price:'£4.25'},{item:'Chicken pie',price:'£5.35'},{item:'Tuna sandwich',price:'£4.95'},
    {item:'Orange juice',price:'£2.25'},{item:'Coke',price:'£2.50'},{item:'Coffee',price:'£2.10'},{item:'Mineral water',price:'£1.50'}
  ],
  menuQs:[
    {q:'How much is an orange juice?',o:['£1.50','£2.25','£2.50','£4.25'],a:1},
    {q:'Which item is £5.35?',o:['a Coke','a chicken pie','a tuna sandwich','a coffee'],a:1},
    {q:'How much is a cheese sandwich?',o:['£4.25','£4.95','£5.35','£2.25'],a:0},
    {q:'Which drink costs £1.50?',o:['orange juice','coffee','mineral water','Coke'],a:2},
    {q:'What is more expensive than a Coke?',o:['mineral water','coffee','orange juice','cheese sandwich'],a:3}
  ],
  rob:{
    lines:[
      'Barman: Who’s next?',
      'Rob: Can I have a cheese sandwich, please?',
      'Barman: Anything else?',
      'Rob: And a Coke, please.',
      'Barman: Ice and lemon?',
      'Rob: No, thanks.',
      'Barman: There you go.',
      'Rob: Thanks. How much is it?',
      'Barman: Six pounds seventy-five.',
      'Rob: Here you are.',
      'Barman: Thanks. Here’s your change.'
    ],
    qs:[
      {q:'What does Rob order first?',o:['a cheese sandwich','a pie','an orange juice','a coffee'],a:0},
      {q:'What drink does Rob order?',o:['orange juice','coffee','mineral water','Coke'],a:3},
      {q:'Does Rob want ice and lemon?',o:['Yes, please.','No, thanks.','Only lemon.','Only ice.'],a:1},
      {q:'How much is Rob’s lunch?',o:['£4.25','£5.35','£6.75','£7.20'],a:2},
      {q:'Which phrase does Rob use to pay?',o:['There you go.','Here you are.','Can I help you?','Who’s next?'],a:1}
    ]
  },
  jenny:{
    text:'Assistant: Hi. How can I help you? Jenny: Hi. How much is this tuna salad? Assistant: It’s seven twenty. Jenny: OK, fine. And this mineral water, please. Assistant: That’s nine dollars seventy cents. Jenny: Here you are. Assistant: Thank you. Have a nice day. Amy: Jenny! Jenny: Amy! Hi, how are you? Amy: I’m fine. How are you? Jenny: I’m fine, too. Amy: What’s that? Jenny: Oh, just a salad and some water. Amy: You are good! Look, wait for me. We can have lunch together in the park. Jenny: Sure! Great idea. Amy: Can I have a cheese sandwich, a cappuccino, and a brownie, please?',
    qs:[
      {q:'How much is Jenny’s lunch?',o:['$7.20','$8.40','$9.70','$10.90'],a:2},
      {q:'What does Jenny buy?',o:['a cheese sandwich and water','a tuna salad and mineral water','a brownie and a cappuccino','a tuna sandwich and Coke'],a:1},
      {q:'Who says “We can have lunch together in the park”?',o:['the assistant','Rob','Jenny','Amy'],a:3},
      {q:'What does Amy order?',o:['a tuna salad and water','a cheese sandwich, a cappuccino, and a brownie','an orange juice and a pie','a cheese sandwich and a Coke'],a:1},
      {q:'Which phrase does the assistant say at the end?',o:['Anything else?','How much is it?','Have a nice day.','Who’s next?'],a:2}
    ]
  },
  memory:[
    {a:'Can I have a cheese sandwich, please?',b:'Можно мне сэндвич с сыром, пожалуйста?'},
    {a:'Anything else?',b:'Что-нибудь ещё?'},
    {a:'Ice and lemon?',b:'Лёд и лимон?'},
    {a:'No, thanks.',b:'Нет, спасибо.'},
    {a:'How much is it?',b:'Сколько это стоит?'},
    {a:'Here you are.',b:'Вот, пожалуйста.'},
    {a:'Here’s your change.',b:'Вот ваша сдача.'},
    {a:'Have a nice day.',b:'Хорошего дня.'}
  ],
  phrases:[
    {q:'You want to order an orange juice politely. What do you say?',o:['Orange juice!','Can I have an orange juice, please?','I have orange juice.','How much orange juice?'],a:1},
    {q:'The barman asks if you want more food or drink. What does he say?',o:['Anything else?','How much is it?','Here you are.','Who are you?'],a:0},
    {q:'You want to know the price. What do you ask?',o:['Can I help you?','Do you have lunch?','How much is it?','What time is it?'],a:2},
    {q:'You give money to the assistant. What can you say?',o:['Have a nice day.','Here you are.','Anything else?','Who’s next?'],a:1},
    {q:'The cashier gives back extra money. What does the cashier say?',o:['Here’s your change.','No, thanks.','Here you go lunch.','What is this?'],a:0},
    {q:'The assistant finishes the conversation politely. What is best?',o:['Sit down!','Good evening, Rob.','Have a nice day.','Ice and lemon?'],a:2}
  ]
};

const MAX={prices:data.prices.length,sounds:data.sounds.length,menu:data.menuQs.length,rob:data.rob.qs.length,jenny:data.jenny.qs.length,memory:data.memory.length,phrases:data.phrases.length};
function fresh(){return {screen:0,idx:{prices:0,menu:0,rob:0,jenny:0,phrases:0},answers:{prices:{},sounds:{},menu:{},rob:{},jenny:{},memory:{},phrases:{}},selectedSort:null,sortOrder:null,memoryOrder:null,memoryOpen:[],memoryMoves:0}}
let state=load();
function load(){try{return {...fresh(),...JSON.parse(localStorage.getItem(STORAGE)||'{}')}}catch(e){return fresh()}}
function save(){localStorage.setItem(STORAGE,JSON.stringify(state))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function shuffledIndicesForSort(items){return shuffle(items.map((_,i)=>i))}
function score(sec){if(sec==='memory')return Object.values(state.answers.memory||{}).filter(x=>x.solved).length;return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function allScore(){return ORDER.reduce((n,s)=>n+score(s),0)}
function blockPill(){return `<div class="pill"><span>Beginner · Practical English · EP 2</span><span class="accent">Can I have an orange juice?</span></div>`}
function topBrand(){return `<div class="brandTop"><div class="brandMark"><div class="big">WOW SCHOOL</div><div class="small">online english school · wow-school.ru</div></div>${blockPill()}</div>`}
function shell(inner){return `${topBrand()}<div class="screenCard">${inner}</div>`}
function title(n,title,sub){return `<div class="kicker">INTERACTIVE LESSON MODULE · BEGINNER · PRACTICAL ENGLISH</div><h2 class="screenTitle"><span class="num">${n}.</span>${title}</h2><p class="screenSub">Beginner · Practical English · Episode 2 · ${sub}</p>`}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · короткие аудиофрагменты</span>`}
let utter=[];function stopAudio(){utter.forEach(u=>speechSynthesis.cancel());utter=[]}
function speak(parts,button,base='Прослушать'){stopAudio();button.classList.add('busy');button.textContent='■ Стоп';let i=0;function next(){if(i>=parts.length){button.classList.remove('busy');button.textContent='▶ '+base;return}const u=new SpeechSynthesisUtterance(parts[i]);u.lang='en-GB';u.rate=.95;u.onend=()=>{i++;setTimeout(next,120)};utter=[u];speechSynthesis.speak(u)}next()}
function footerProgress(sec, idx, total){return `<div class="qaFooter"><div><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="${state.answers[sec][i]?.firstCorrect?'done':i===idx?'current':''}"></i>`).join('')}</div></div><div class="miniCount">Задание ${idx+1} из ${total}</div></div>`}
function feedbackFor(sec,idx){const a=state.answers[sec][idx];if(!a)return `<div class="feedback empty">Ответ не выбран</div>`;return a.lastCorrect?`<div class="feedback good">Верно!</div>`:`<div class="feedback bad">Пока нет. Попробуй ещё раз.</div>`}
function rightTop(sec,n){const total=MAX[sec];return `<div class="rightTop"><div></div><div class="blockProgress">Beginner · Practical English · Блок ${n}/7<div class="progressBar"><i style="width:${(n/7)*100}%"></i></div></div></div>`}

function start(){app.innerHTML=shell(`<div class="hero"><div><div class="kicker">INTERACTIVE LESSON MODULE · BEGINNER · PRACTICAL ENGLISH</div><h1>Can I have an <span>orange juice</span>, please?</h1><p>7 блоков: цены и валюты, покупка ланча, полезные фразы, чтение мини-диалогов, произношение /ʊə/ · /s/ · /k/ и memory game.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual heroImageFrame"><img class="heroPreviewImage" src="assets/images/cover-preview.png" alt="Practical English Episode 2 preview"></div></div>`);document.getElementById('start').onclick=()=>{state.screen=1;save();render()};document.getElementById('reset').onclick=()=>{state=fresh();save();render()}}

function simpleQuiz(sec,screenNo,titleTxt,sub,leftHTML,audioParts=null,nextScreen=null){const idx=state.idx[sec], item=(sec==='menu'?data.menuQs[idx]:sec==='rob'?data.rob.qs[idx]:sec==='jenny'?data.jenny.qs[idx]:sec==='phrases'?data.phrases[idx]:data.prices[idx]);const total=MAX[sec];app.innerHTML=shell(`${title(screenNo,titleTxt,sub)}<div class="layout"><div class="leftPanel">${leftHTML}<div class="footerActions"><div class="leftActions">${audioParts?audioBtn(sec+'Audio','Прослушать'):''}</div></div></div><div class="rightPanel">${rightTop(sec,screenNo)}<div class="kmini">${titleTxt}</div><div class="questionTitle">${esc(item.q)}</div><div class="instruction">Выбери один правильный вариант. После ошибки можно попробовать ещё раз.</div><div class="options">${item.o.map((x,i)=>{const ans=state.answers[sec][idx];let cls='option';if(ans&&ans.chosen===i&&ans.lastCorrect)cls+=' good';else if(ans&&ans.chosen===i&&!ans.lastCorrect)cls+=' bad';return `<button class="${cls}" data-opt="${i}">${esc(x)}</button>`}).join('')}</div>${feedbackFor(sec,idx)}${footerProgress(sec,idx,total)}<div style="margin-top:16px;display:flex;justify-content:flex-end"><button class="nextBtn" id="next" ${state.answers[sec][idx]?.firstCorrect? '':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div></div></div>`);document.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>{const chosen=+b.dataset.opt;let a=state.answers[sec][idx]||{attempts:0,firstCorrect:null,lastCorrect:false,chosen:null};a.attempts++;a.chosen=chosen;a.lastCorrect=chosen===item.a;if(a.firstCorrect===null&&a.lastCorrect)a.firstCorrect=true;state.answers[sec][idx]=a;save();render()});if(audioParts){document.getElementById(sec+'Audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Прослушать'}else speak(audioParts,this,'Прослушать')}}document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]++;save();render()}else{state.screen=nextScreen;save();render()}}}

function prices(){const left=`<div class="mediaTextRow"><div class="sceneImageCard compactPhoto"><img src="assets/images/block1-prices.png" alt="Café prices and money"></div><div class="visualGrid stackedCards"><div class="currencyCard"><h4>£ Pounds</h4><ul><li>£6.75 → six pounds seventy-five</li><li>£1.50 → one pound fifty</li><li>60p → sixty pence</li></ul></div><div class="currencyCard"><h4>€ Euros / $ Dollars</h4><ul><li>€15.99 → fifteen euros ninety-nine</li><li>$9.70 → nine dollars seventy cents</li><li>$0.80 → eighty cents</li></ul></div></div></div><div class="priceBoard"><h4>Mini guide</h4><div class="smallMuted">In British English we usually do <b>not</b> say “and” in prices like £6.75 or €3.20.</div><div class="priceList"><div class="priceRow"><span>£12.75</span><span>twelve pounds seventy-five</span></div><div class="priceRow"><span>€3.20</span><span>three euros twenty</span></div><div class="priceRow"><span>$9.49</span><span>nine dollars forty-nine</span></div></div></div>`;simpleQuiz('prices',1,'Understanding Prices','prices in pounds, euros, and dollars',left,['twelve pounds seventy-five','fifteen euros ninety-nine','three euros twenty','eighty cents','six pounds seventy-five'],2)}

function sounds(){const bins=[['/ʊə/','/ʊə/','euro · Europe · European'],['/s/','/s/','centre · city · cents'],['/k/','/k/','coffee · Coke · card']];if(!Array.isArray(state.sortOrder)||state.sortOrder.length!==data.sounds.length){state.sortOrder=shuffledIndicesForSort(data.sounds);save()}const order=state.sortOrder,done=data.sounds.every((_,i)=>state.answers.sounds[i]?.solved);app.innerHTML=shell(`${title(2,'Pronunciation Lab','/ʊə/, /s/, and /k/')}<div class="sortLayout"><div class="pronunciationIntro"><div class="pronunciationIcon">🔊</div><div><strong>Listen · notice · sort</strong><span>В этом блоке декоративная картинка не нужна: здесь главное — звуки, слова и сортировка. Распредели слова по трём колонкам.</span></div></div><div class="bins">${bins.map(([k,l,h])=>`<div class="bin" data-bin="${k}"><strong>${l}</strong><small>${h}</small><div class="binwords">${order.map(i=>{const x=data.sounds[i];return state.answers.sounds[i]?.solved&&x.a===k?`<button class="wordChip good" disabled>${esc(x.w)}</button>`:''}).join('')}</div></div>`).join('')}</div><div class="wordBank">${order.map(i=>{const x=data.sounds[i];return !state.answers.sounds[i]?.solved?`<button draggable="true" class="wordChip ${state.selectedSort===i?'selected':''}" data-word="${i}">${esc(x.w)}</button>`:''}).join('')}<span id="sortHint" class="audioMeta">${done?'Все слова распределены верно':'Нажми слово и затем колонку — или перетащи карточку'}</span></div><div class="footerActions"><div class="leftActions">${audioBtn('soundAudio','Примеры')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>Следующий блок →</button></div></div>`);function place(i,bin){const x=data.sounds[i];let a=state.answers.sounds[i]||{attempts:0,firstCorrect:null,solved:false};a.attempts++;const ok=x.a===bin;if(a.firstCorrect===null)a.firstCorrect=ok;if(ok){a.solved=true;state.selectedSort=null}state.answers.sounds[i]=a;save();if(ok)render();else{const h=document.getElementById('sortHint');h.textContent='Не эта колонка. Послушай примеры ещё раз.';h.style.color='#bd4053'}}document.querySelectorAll('[data-word]').forEach(w=>{const i=+w.dataset.word;w.onclick=()=>{state.selectedSort=i;save();render()};w.ondragstart=e=>{e.dataTransfer.setData('text/plain',String(i));e.dataTransfer.effectAllowed='move'}});document.querySelectorAll('[data-bin]').forEach(b=>{b.onclick=()=>{if(state.selectedSort!==null)place(state.selectedSort,b.dataset.bin)};b.ondragover=e=>{e.preventDefault();b.classList.add('dropTarget')};b.ondragleave=()=>b.classList.remove('dropTarget');b.ondrop=e=>{e.preventDefault();b.classList.remove('dropTarget');const i=+e.dataTransfer.getData('text/plain');if(Number.isInteger(i))place(i,b.dataset.bin)}});document.getElementById('soundAudio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Примеры'}else speak(['euro, Europe, European','centre, city, cents','coffee, Coke, card, can'],this,'Примеры')};document.getElementById('next').onclick=()=>{state.screen=3;save();render()}}

function menu(){const left=`<div class="mediaTextRow menuSceneRow"><div class="sceneImageCard"><img src="assets/images/block3-menu.png" alt="Lunch menu café scene"></div><div class="menuBoard"><h4>Lunch menu</h4><div class="menuList">${data.menu.map(x=>`<div class="menuRow"><span>${esc(x.item)}</span><span>${esc(x.price)}</span></div>`).join('')}</div></div></div>`;simpleQuiz('menu',3,'Lunch Menu Explorer','asking and answering about prices',left,['How much is an orange juice?','A chicken pie is five pounds thirty-five.','How much is a cheese sandwich?'],4)}

function rob(){const left=`<div class="dialogueMediaRow"><div class="sceneImageCard dialoguePhoto"><img src="assets/images/block4-rob.png" alt="Rob ordering lunch at a pub counter"></div><div class="scriptCard compactScript"><h4>Rob buys lunch</h4>${data.rob.lines.map(x=>`<p>${esc(x)}</p>`).join('')}</div></div>`;simpleQuiz('rob',4,'Buying Lunch: Rob','ordering food and drink politely',left,data.rob.lines,5)}

function jenny(){const paras=[
  'Assistant: Hi. How can I help you? Jenny: Hi. How much is this tuna salad? Assistant: It’s seven twenty. Jenny: OK, fine. And this mineral water, please. Assistant: That’s nine dollars seventy cents.',
  'Amy: Jenny! ... We can have lunch together in the park. Jenny: Sure! Great idea.',
  'Amy: Can I have a cheese sandwich, a cappuccino, and a brownie, please?'
];const left=`<div class="dialogueMediaRow"><div class="sceneImageCard dialoguePhoto"><img src="assets/images/block5-jenny.png" alt="Jenny and Amy at a New York deli"></div><div class="scriptCard compactScript"><h4>Jenny & Amy in the deli</h4>${paras.map(x=>`<p>${esc(x)}</p>`).join('')}</div></div>`;simpleQuiz('jenny',5,'Jenny & Amy','a short deli dialogue',left,paras,6)}

function memory(){if(!Array.isArray(state.memoryOrder)||state.memoryOrder.length!==data.memory.length*2){state.memoryOrder=shuffle(data.memory.flatMap((p,i)=>[{pair:i,text:p.a},{pair:i,text:p.b}]));state.memoryOpen=[];state.memoryMoves=0;save()}const all=data.memory.every((_,i)=>state.answers.memory[i]?.solved);app.innerHTML=shell(`${title(6,'Memory Match','English phrase ↔ Russian meaning')}<div class="leftPanel" style="min-height:640px"><div class="smallMuted">Новая механика, которую можно переносить и на следующие модули: <b>найди пару</b> в формате English ↔ Russian, word ↔ picture, question ↔ answer.</div><div class="memoryWrap">${state.memoryOrder.map((c,idx)=>{const matched=state.answers.memory[c.pair]?.solved,open=state.memoryOpen.includes(idx);return `<button class="memoryCard ${matched?'matched':open?'open':'covered'}" data-mem="${idx}" ${matched?'disabled':''}>${esc(c.text)}</button>`}).join('')}</div><div class="memoryMeta"><span>Найдено пар: ${Object.values(state.answers.memory||{}).filter(x=>x.solved).length}/${data.memory.length}</span><span>Ходов: ${state.memoryMoves||0}</span></div><div class="footerActions"><div class="leftActions"><button class="ghostBtn" id="reshuffle">Перемешать</button></div><button class="nextBtn" id="next" ${all?'':'disabled'}>Следующий блок →</button></div></div>`);document.querySelectorAll('[data-mem]').forEach(b=>b.onclick=()=>{const idx=+b.dataset.mem;if(state.memoryOpen.includes(idx)||state.memoryOpen.length>=2)return;state.memoryOpen.push(idx);save();render();if(state.memoryOpen.length===2){const [a,bidx]=state.memoryOpen;const ca=state.memoryOrder[a],cb=state.memoryOrder[bidx];state.memoryMoves=(state.memoryMoves||0)+1;if(ca.pair===cb.pair){state.answers.memory[ca.pair]={solved:true,firstCorrect:true};state.memoryOpen=[];save();setTimeout(render,250)}else{save();setTimeout(()=>{state.memoryOpen=[];save();render()},650)}}});document.getElementById('reshuffle').onclick=()=>{state.memoryOrder=shuffle(data.memory.flatMap((p,i)=>[{pair:i,text:p.a},{pair:i,text:p.b}]));state.memoryOpen=[];state.answers.memory={};state.memoryMoves=0;save();render()};document.getElementById('next').onclick=()=>{state.screen=7;save();render()}}

function phrases(){const left=`<div class="phrasePanel"><h4 style="margin:0 0 10px">Useful phrases</h4><div class="priceList"><div class="priceRow"><span>Can I have …, please?</span><span>order politely</span></div><div class="priceRow"><span>Anything else?</span><span>offer more</span></div><div class="priceRow"><span>How much is it?</span><span>ask the price</span></div><div class="priceRow"><span>Here you are.</span><span>give money / an item</span></div><div class="priceRow"><span>Here’s your change.</span><span>return money</span></div><div class="priceRow"><span>Have a nice day.</span><span>finish politely</span></div></div></div>`;simpleQuiz('phrases',7,'Useful Phrases','natural phrases for cafés, pubs, and delis',left,['Can I have an orange juice, please?','Anything else?','How much is it?','Here you are.','Here\'s your change.','Have a nice day.'],8)}

function results(){app.innerHTML=shell(`${title(8,'Results','Episode 2 completed')}<div class="placeholderVisual"><h3>Great job!</h3><p>You finished Practical English Episode 2. Below you can see your block-by-block results. You can restart the module or practise a specific block again by refreshing the page and using your saved progress.</p><div class="resultGrid">${ORDER.map(s=>`<div class="resultCard"><strong>${esc(LABELS[s])}</strong><div class="n">${score(s)}/${MAX[s]}</div></div>`).join('')}</div><div class="heroBtns"><button class="btn primary" id="restart">Пройти ещё раз</button><button class="btn secondary" id="home">На старт</button></div></div>`);document.getElementById('restart').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()}}

function render(){stopAudio();({0:start,1:prices,2:sounds,3:menu,4:rob,5:jenny,6:memory,7:phrases,8:results}[state.screen]||start)()}
render();
