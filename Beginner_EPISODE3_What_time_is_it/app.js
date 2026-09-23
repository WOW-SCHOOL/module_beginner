const BASE_W=1600,BASE_H=900;
function fit(){const s=Math.min(innerWidth/BASE_W,innerHeight/BASE_H);document.getElementById('fit').style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();

const app=document.getElementById('app');
const STORAGE_KEY='wow_beginner_episode3_time_v1';
const SECTIONS=['clock','match','dialog','builder','scene','pron','planner','challenge'];
const LABELS={
  clock:'Clock Setter',
  match:'Time Match',
  dialog:'Rob\'s Story',
  builder:'Sentence Builder',
  scene:'What time\'s the show?',
  pron:'Time Listening',
  planner:'Daily Planner',
  challenge:'Clock Challenge'
};

const data={
  clock:[
    {q:'Set the clock. It\'s three o\'clock.',audio:'It\'s three o\'clock.',minutes:180},
    {q:'Set the clock. It\'s half past seven.',audio:'It\'s half past seven.',minutes:450},
    {q:'Set the clock. It\'s a quarter past three.',audio:'It\'s a quarter past three.',minutes:195},
    {q:'Set the clock. It\'s a quarter to eight.',audio:'It\'s a quarter to eight.',minutes:465},
    {q:'Set the clock. It\'s five past two.',audio:'It\'s five past two.',minutes:125},
    {q:'Set the clock. It\'s twenty past three.',audio:'It\'s twenty past three.',minutes:200},
    {q:'Set the clock. It\'s twenty to nine.',audio:'It\'s twenty to nine.',minutes:520},
    {q:'Set the clock. It\'s half past ten.',audio:'It\'s half past ten.',minutes:630}
  ],
  match:[
    {en:'What time is it?',ru:'Который час?'},
    {en:'It\'s eleven o\'clock.',ru:'Сейчас одиннадцать часов.'},
    {en:'It\'s a quarter to eight.',ru:'Без четверти восемь.'},
    {en:'It\'s half past ten.',ru:'Половина одиннадцатого.'},
    {en:'What time\'s your train?',ru:'Во сколько твой поезд?'},
    {en:'At seven forty-seven.',ru:'В семь сорок семь.'},
    {en:'You\'re an hour late.',ru:'Ты опоздал / опоздала на час.'},
    {en:'Sorry, I\'m late.',ru:'Извини / Извините, я опоздал / опоздала.'}
  ],
  dialog:[
    {script:['Rob: I\'m tired. What time is it?','Alan: It\'s eleven o\'clock.','Rob: I need to go. I have a meeting in Oxford tomorrow morning.','Alan: One more drink?','Rob: Oh, OK!'],q:'What time is it?',a:'Eleven o\'clock',o:['Eleven o\'clock','Half past ten','Quarter to eight']},
    {script:['Rob: I\'m tired. What time is it?','Alan: It\'s eleven o\'clock.','Rob: I need to go. I have a meeting in Oxford tomorrow morning.'],q:'Where is Rob\'s meeting?',a:'In Oxford',o:['In Oxford','In London','In Bristol']},
    {script:['Rob: Excuse me. What time is it?','Woman: It\'s a quarter to eight. What time\'s your train?','Rob: At seven forty-seven.','Woman: You need to hurry! You only have two minutes.','Rob: Thanks. Oh no!'],q:'What time is Rob\'s train?',a:'7:47',o:['7:47','7:15','8:00']},
    {script:['Rob: Excuse me. What time is it?','Woman: It\'s a quarter to eight.','Woman: You need to hurry! You only have two minutes.'],q:'How many minutes does Rob have?',a:'Two minutes',o:['Two minutes','Ten minutes','An hour']},
    {script:['Rob: Hello. I\'m Rob Walker. I\'m sorry I\'m late.','Man: You\'re an hour late. It\'s half past ten.','Rob: I know. I\'m really sorry.'],q:'Is Rob late or early?',a:'Late',o:['Late','Early','On time']},
    {script:['Rob: Hello. I\'m Rob Walker. I\'m sorry I\'m late.','Man: You\'re an hour late. It\'s half past ten.'],q:'What time is the meeting scene?',a:'Half past ten',o:['Half past ten','Quarter past ten','Ten o\'clock']}
  ],
  builder:[
    {cue:'Собери: Который час?',tokens:['What','time','is','it?'],audio:'What time is it?'},
    {cue:'Собери: Сейчас одиннадцать часов.',tokens:["It\'s",'eleven',"o\'clock."],audio:"It\'s eleven o\'clock."},
    {cue:'Собери: Мой поезд в семь сорок семь.',tokens:['My','train','is','at','seven','forty-seven.'],audio:'My train is at seven forty-seven.'},
    {cue:'Собери: Сейчас четверть восьмого.',tokens:["It\'s",'a','quarter','to','eight.'],audio:"It\'s a quarter to eight."},
    {cue:'Собери: Извини, я опоздал.',tokens:['Sorry,',"I\'m",'late.'],audio:'Sorry, I\'m late.'},
    {cue:'Собери: Завтрак в восемь часов.',tokens:['Breakfast','is','at','eight',"o\'clock."],audio:'Breakfast is at eight o\'clock.'},
    {cue:'Собери: Сейчас половина восьмого.',tokens:["It\'s",'half','past','seven.'],audio:"It\'s half past seven."},
    {cue:'Собери: Шоу начинается в восемь часов.',tokens:['The','show','is','at','eight',"o\'clock."],audio:'The show is at eight o\'clock.'}
  ],
  scene:{
    text:`<b>Amy is late.</b> She meets Jenny before a show. Amy asks, “What time\'s the show?” Jenny says, “It\'s at eight o\'clock.” Amy asks, “What time is it now?” Jenny says, “It\'s only twenty to eight.”<br><br>After the show, Amy says, “What a great show!” Then she says, “It\'s late and I\'m tired.” Jenny knows a good Italian restaurant. Amy is hungry, and they decide to go there together.`,
    audio:[
      'Amy is late. She meets Jenny before a show.',
      'Amy asks, What time\'s the show? Jenny says, It\'s at eight o\'clock.',
      'Amy asks, What time is it now? Jenny says, It\'s only twenty to eight.',
      'After the show, Amy says, What a great show!',
      'Then she says, It\'s late and I\'m tired.',
      'Jenny knows a good Italian restaurant. Amy is hungry, and they decide to go there together.'
    ],
    qs:[
      {q:'Who is late?',a:'Amy',o:['Amy','Jenny','Rob']},
      {q:'What time is the show?',a:'At eight o\'clock',o:['At eight o\'clock','At seven o\'clock','At quarter to eight']},
      {q:'What time is it now before the show?',a:'Twenty to eight',o:['Twenty to eight','Quarter past eight','Half past seven']},
      {q:'How does Amy feel after the show?',a:'Tired',o:['Tired','Angry','Cold']},
      {q:'What else is Amy after the show?',a:'Hungry',o:['Hungry','Thirsty','Hot']},
      {q:'Where do Amy and Jenny go?',a:'To an Italian restaurant',o:['To an Italian restaurant','To the station','Home']}
    ]
  },
  pron:[
    {q:'Listen. Which time do you hear?',audio:'It\'s twenty to nine.',a:'It\'s twenty to nine.',o:["It\'s twenty to nine.","It\'s twenty past nine.","It\'s quarter to nine."]},
    {q:'Listen. Which time do you hear?',audio:'It\'s quarter past seven.',a:'It\'s quarter past seven.',o:["It\'s quarter to seven.","It\'s quarter past seven.","It\'s half past seven."]},
    {q:'Listen. Which time do you hear?',audio:'It\'s five past two.',a:'It\'s five past two.',o:["It\'s five to two.","It\'s five past two.","It\'s ten past two."]},
    {q:'Listen. Which time do you hear?',audio:'It\'s twelve o\'clock.',a:'It\'s twelve o\'clock.',o:["It\'s twelve o\'clock.","It\'s two o\'clock.","It\'s half past twelve."]},
    {q:'Listen. Which time do you hear?',audio:'It\'s half past eight.',a:'It\'s half past eight.',o:["It\'s eight o\'clock.","It\'s half past eight.","It\'s a quarter past eight."]},
    {q:'Listen. Which time do you hear?',audio:'It\'s quarter past eleven.',a:'It\'s quarter past eleven.',o:["It\'s quarter to eleven.","It\'s quarter past eleven.","It\'s half past eleven."]},
    {q:'Listen. Which phrase do you hear?',audio:'What time is it?',a:'What time is it?',o:['What time is it?','What time\'s your train?','What time\'s breakfast?']},
    {q:'Listen. Which phrase do you hear?',audio:'Sorry, I\'m late.',a:'Sorry, I\'m late.',o:['Sorry, I\'m late.','Sorry, I\'m tired.','Sorry, I\'m hungry.']}
  ],
  planner:[
    {event:'get up',time:'7:30'},
    {event:'breakfast',time:'8:00'},
    {event:'train',time:'7:47'},
    {event:'meeting',time:'10:30'},
    {event:'lunch',time:'1:00'},
    {event:'English class',time:'6:15'}
  ],
  challenge:[
    {audio:'It\'s eleven o\'clock.',support:'It\'s eleven o\'clock.',minutes:330},
    {audio:'It\'s a quarter to eight.',support:'It\'s a quarter to eight.',minutes:465},
    {audio:'It\'s half past ten.',support:'It\'s half past ten.',minutes:630},
    {audio:'It\'s quarter past seven.',support:'It\'s a quarter past seven.',minutes:435},
    {audio:'It\'s twenty to nine.',support:'It\'s twenty to nine.',minutes:520},
    {audio:'It\'s five past two.',support:'It\'s five past two.',minutes:125}
  ]
};

const MAX={
  clock:data.clock.length,
  match:data.match.length,
  dialog:data.dialog.length,
  builder:data.builder.length,
  scene:data.scene.qs.length,
  pron:data.pron.length,
  planner:data.planner.length,
  challenge:data.challenge.length
};

const fresh=()=>({
  screen:0,
  idx:{clock:0,dialog:0,builder:0,scene:0,pron:0,challenge:0},
  answers:{clock:{},match:{},dialog:{},builder:{},scene:{},pron:{},planner:{},challenge:{}},
  mistakes:{},
  builderChosen:[],
  matchSelected:null,
  plannerSelected:null,
  plannerPlaced:{},
  clockHands:{clock:{},challenge:{}},
  supportOpen:false,
  flash:{match:null,planner:null}
});

let state=fresh();
try{
  const s=JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(s&&s.answers){
    state={...fresh(),...s,idx:{...fresh().idx,...(s.idx||{})},answers:{...fresh().answers,...s.answers},clockHands:{clock:{},challenge:{},...(s.clockHands||{})}};
  }
}catch(e){}
state.screen=0;

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function solved(sec,i){return !!state.answers[sec]?.[i]?.solved}
function score(sec){return Object.values(state.answers[sec]||{}).filter(x=>x.firstCorrect).length}
function orderedOptions(sec,idx,opts){const offset=((idx+sec.length)%opts.length);return opts.slice(offset).concat(opts.slice(0,offset))}
function recordAttempt(sec,i,isCorrect){let a=state.answers[sec][i];if(!a){a={attempts:0,firstCorrect:null,solved:false};state.answers[sec][i]=a}a.attempts++;if(a.firstCorrect===null)a.firstCorrect=isCorrect;if(isCorrect)a.solved=true;state.mistakes[`${sec}:${i}`]=isCorrect?null:true;save()}

function header(){return `<div class="noise"></div><div class="header"><div class="brandHeader"><div class="brandCopy"><div class="brandName">WOW SCHOOL</div><div class="brandMeta">online english school · wow-school.ru</div><div class="brandModule">Beginner · Episode 3 · Practical English · What time is it?</div></div></div><div class="unitBadge"><span>English File Beginner</span><strong>Episode 3</strong></div></div>`}
function shell(inner){return `${header()}<section class="shell"><div class="content">${inner}</div></section>`}
function progress(n){return `<div class="progressBox"><strong>Блок ${n}/8</strong><div class="track"><i style="width:${n/8*100}%"></i></div></div>`}
function title(n,t,sub){return `<div class="titlebar"><div class="titlewrap"><h1><span class="n">${n}.</span> ${t}</h1><p><b>Beginner · Practical English</b> · ${sub}</p></div>${progress(n)}</div>`}
function miniProgress(sec,idx,total){return `<div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${i<idx?'done':i===idx?'current':''}"></i>`).join('')}</div><div class="counter">Задание ${Math.min(idx+1,total)} из ${total}</div></div>`}
function feedback(kind,text){return `<div class="feedbackBox ${kind}">${text}</div>`}

let playToken=0,currentAudio=null;
const ttsAudio=document.createElement('audio');ttsAudio.preload='auto';ttsAudio.setAttribute('playsinline','');ttsAudio.setAttribute('webkit-playsinline','');ttsAudio.referrerPolicy='no-referrer';ttsAudio.style.display='none';document.body.appendChild(ttsAudio);
function providerUrls(text){const q=encodeURIComponent(text.replace(/\s+/g,' ').trim());return [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`,`https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${q}`,`https://translate.google.co.uk/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${q}`]}
function splitTTS(text,max=180){const clean=text.replace(/\s+/g,' ').trim();if(clean.length<=max)return [clean];const out=[];let rest=clean;while(rest.length){if(rest.length<=max){out.push(rest);break}let cut=-1;for(const mark of ['. ','? ','! ',', ','; ']){const i=rest.lastIndexOf(mark,max);if(i>Math.floor(max*.48)){cut=i+mark.length-1;break}}if(cut<0){cut=rest.lastIndexOf(' ',max);if(cut<Math.floor(max*.48))cut=max}out.push(rest.slice(0,cut).trim());rest=rest.slice(cut).trim()}return out.filter(Boolean)}
function stopAudio(){playToken++;try{ttsAudio.pause();ttsAudio.removeAttribute('src');ttsAudio.load()}catch(e){}currentAudio=null}
function playUrl(url,token){return new Promise((resolve,reject)=>{if(token!==playToken)return reject(new Error('cancelled'));const a=ttsAudio;currentAudio=a;let finished=false;const cleanup=()=>{a.onended=a.onerror=a.onabort=null;clearTimeout(timer)};const timer=setTimeout(()=>{if(finished)return;finished=true;cleanup();reject(new Error('timeout'))},18000);a.onended=()=>{if(finished)return;finished=true;cleanup();resolve()};a.onerror=()=>{if(finished)return;finished=true;cleanup();reject(new Error('audio error'))};a.onabort=()=>{if(finished)return;finished=true;cleanup();reject(new Error('aborted'))};a.src=url;a.currentTime=0;a.load();const p=a.play();if(p&&p.catch)p.catch(e=>{if(finished)return;finished=true;cleanup();reject(e)})})}
async function playChunk(text,token){let err=null;for(const url of providerUrls(text)){try{await playUrl(url,token);return}catch(e){err=e}}throw err||new Error('audio unavailable')}
async function playSequence(texts,btn,idle='▶ Прослушать'){stopAudio();const token=++playToken;btn?.classList.add('busy');if(btn)btn.textContent='■ Стоп';try{for(const t of texts){if(token!==playToken)return;await playChunk(t,token)}if(token===playToken){btn?.classList.remove('busy');if(btn)btn.textContent=idle}}catch(e){if(token===playToken){btn?.classList.remove('busy');btn?.classList.add('error');if(btn)btn.textContent='Аудио недоступно';setTimeout(()=>{btn?.classList.remove('error');if(btn)btn.textContent=idle},2200)}}}
function playText(text,btn,idle='▶ Прослушать'){return playSequence(splitTTS(text),btn,idle)}
function playScript(lines,btn,label='Диалог'){return playSequence(lines.flatMap(x=>splitTTS(x,110)),btn,`▶ ${label}`)}
function audioBtn(id,label='Прослушать'){return `<button class="audioBtn" id="${id}">▶ ${label}</button><span class="audioMeta">British English · синтез речи</span>`}

function slotFallback(icon,titleTxt,caption){return `<div class="slotFallback"><div><div class="slotIcon">${icon}</div><strong>${esc(titleTxt)}</strong><span>${esc(caption)}</span><small>изображение добавим отдельным этапом</small></div></div>`}
function visualSlot(file,icon,badge,caption,alt){return `<div class="visualSlot"><img src="assets/images/${file}" alt="${esc(alt)}" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="visualBadge">${esc(badge)}</div>${slotFallback(icon,badge,caption)}</div>`}
function heroSlot(){return `<div class="heroSlot"><img class="heroImage" src="assets/images/preview-episode3-time.jpg" alt="Beginner Episode 3 preview" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')"><div class="slotFallback"><div><div class="slotIcon">🕒</div><strong>Episode 3 · What time is it?</strong><span>clock setter · phrase match · short dialogue · sentence builder · short reading · time listening · daily planner · clock challenge</span><small>WOW SCHOOL</small></div></div></div>`}
function readingSlot(){return `<div class="readingSlot"><img src="assets/images/block5-scene.jpg" alt="What time is the show visual" onload="this.parentElement.classList.add('loaded')" onerror="this.style.display='none';this.parentElement.classList.remove('loaded')">${slotFallback('🎭','What time\'s the show?','Portrait or lifestyle image')}</div>`}

function commonQuestionScreen(sec,blockNum,heading,sub,visualHTML,item,total,audioText,afterLast,audioLabel='Прослушать'){
  const idx=state.idx[sec]||0,done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(blockNum,heading,sub)}<div class="blockBody"><div class="visualCard">${visualHTML}</div><div class="questionCard"><div class="kicker">${LABELS[sec]}</div><div class="prompt" style="white-space:pre-line">${esc(item.q)}</div><div class="subprompt">Выбери правильный вариант. Ошибку можно исправить.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Ответ не выбран')}</div>${miniProgress(sec,idx,total)}</div></div></div><div class="footerActions"><div class="leftActions">${audioText?audioBtn('audio',audioLabel):''}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===total-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Попробуй ещё раз.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  if(audioText){document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent=`▶ ${audioLabel}`}else playText(audioText,this,`▶ ${audioLabel}`)}}
  document.getElementById('next').onclick=()=>{if(idx<total-1){state.idx[sec]=idx+1;save();render()}else afterLast()};
}

function start(){
  app.innerHTML=shell(`<div class="hero"><div><div class="heroKicker">Beginner · English File · Practical English</div><h1><span>Episode 3: What time is it?</span></h1><p>8 интерактивных блоков с акцентом на время: ученик двигает стрелки часов, соединяет English ↔ Russian, читает короткие диалоги, собирает фразы, работает с расписанием и тренирует понимание времени на слух.</p><div class="heroBtns"><button class="btn primary" id="start">Начать →</button><button class="btn secondary" id="reset">Сбросить прогресс</button></div></div><div class="heroVisual">${heroSlot()}</div></div>`);
  document.getElementById('start').onclick=()=>{state.screen=1;save();render()};
  document.getElementById('reset').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=fresh();render()};
}

function shuffleTokens(arr,seed){const out=arr.map((t,i)=>({t,i}));for(let i=out.length-1;i>0;i--){const j=(seed*7+i*3)%(i+1);[out[i],out[j]]=[out[j],out[i]]}return out}
function angleDelta(a,b){let d=Math.abs(((a-b+540)%360)-180);return d}
function targetAngles(minutes){const mins=((minutes%60)+60)%60;const hour=Math.floor(minutes/60)%12;return {m:mins*6,h:hour*30+mins*0.5}}
function getClockPose(sec,idx){if(!state.clockHands[sec])state.clockHands[sec]={};if(!state.clockHands[sec][idx])state.clockHands[sec][idx]={h:0,m:0};return state.clockHands[sec][idx]}
function setClockPose(sec,idx,h,m){if(!state.clockHands[sec])state.clockHands[sec]={};state.clockHands[sec][idx]={h,m};save()}
function clockHTML(sec,idx){const pose=getClockPose(sec,idx);const nums=Array.from({length:12},(_,i)=>{const n=i+1;const ang=(n*30-90)*Math.PI/180;const x=50+40*Math.cos(ang);const y=50+40*Math.sin(ang);return `<span class="clockNum" style="left:${x}%;top:${y}%">${n}</span>`}).join('');return `<div class="analogClock" data-clock="${sec}:${idx}">${nums}<div class="hand minuteHand" data-hand="minute" style="transform:translateX(-50%) rotate(${pose.m}deg)"><i></i></div><div class="hand hourHand" data-hand="hour" style="transform:translateX(-50%) rotate(${pose.h}deg)"><i></i></div><div class="clockCenter"></div></div>`}
function guessTimeFromPose(pose){const m=(Math.round((((pose.m%360)+360)%360)/30)*5)%60;let h=Math.floor((((pose.h%360)+360)%360)/30)%12;h=h===0?12:h;return {h,m}}
function formatDigital(obj){return `${obj.h}:${String(obj.m).padStart(2,'0')}`}
function bindClock(sec,idx){
  const wrap=document.querySelector(`[data-clock='${sec}:${idx}']`);if(!wrap)return;
  const readout=document.getElementById(`${sec}Readout`);
  const pose=getClockPose(sec,idx);
  const update=()=>{wrap.querySelector('.minuteHand').style.transform=`translateX(-50%) rotate(${pose.m}deg)`;wrap.querySelector('.hourHand').style.transform=`translateX(-50%) rotate(${pose.h}deg)`;if(readout)readout.textContent=formatDigital(guessTimeFromPose(pose));};
  function pointerToAngle(ev){const r=wrap.getBoundingClientRect();const cx=r.left+r.width/2,cy=r.top+r.height/2;const x=ev.clientX-cx,y=ev.clientY-cy;let ang=Math.atan2(y,x)*180/Math.PI+90;if(ang<0)ang+=360;return ang}
  wrap.querySelectorAll('[data-hand]').forEach(hand=>{
    hand.onpointerdown=(ev)=>{
      ev.preventDefault();
      const type=hand.dataset.hand;
      const move=(e)=>{const ang=pointerToAngle(e);if(type==='minute'){pose.m=Math.round(ang/30)*30}else{pose.h=ang}update();};
      const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);save();};
      document.addEventListener('pointermove',move);
      document.addEventListener('pointerup',up);
    };
  });
  update();
}
function checkClock(sec,idx,targetMins){const pose=getClockPose(sec,idx);const t=targetAngles(targetMins);return angleDelta(pose.m,t.m)<=12 && angleDelta(pose.h,t.h)<=18}

function clockBlock(){
  const sec='clock',idx=state.idx[sec]||0,item=data.clock[idx],done=solved(sec,idx);
  app.innerHTML=shell(`${title(1,'Clock Setter','move the hands · read + listen + set the time')}<div class="blockBody"><div class="visualCard">${visualSlot('block1-clock-setter.jpg','🕒','Clock Setter','Move the clock hands to show the time','Interactive clock')}</div><div class="questionCard clockQuestion"><div class="kicker">CLOCK SETTER</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Перемещай минутную и часовую стрелки мышкой или пальцем. Затем нажми «Проверить».</div><div class="clockWrap">${clockHTML(sec,idx)}<div class="clockSide"><div class="clockReadoutLabel">Твоё время</div><div class="clockReadout" id="clockReadout">0:00</div><div class="clockTip">Сначала удобно поставить минутную стрелку, потом часовую.</div></div></div><div class="builderActions"><button class="smallBtn" id="resetClock">Сбросить</button><button class="smallBtn primary" id="checkClock" ${done?'disabled':''}>Проверить</button></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно! Время выставлено правильно.'):feedback('neutral','Выставь время на часах и нажми «Проверить».')}</div>${miniProgress(sec,idx,data.clock.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('audio','Фраза')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.clock.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  bindClock(sec,idx);document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Фраза'}else playText(item.audio,this,'▶ Фраза')};
  document.getElementById('resetClock').onclick=()=>{setClockPose(sec,idx,0,0);clockBlock()};
  document.getElementById('checkClock').onclick=()=>{const ok=checkClock(sec,idx,item.minutes);recordAttempt(sec,idx,ok);if(ok){document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false;document.getElementById('checkClock').disabled=true}else document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Проверь обе стрелки и попробуй ещё раз.')};
  document.getElementById('next').onclick=()=>{if(idx<data.clock.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=2;save();render()}};
}

const matchRightOrder=[5,0,6,1,7,2,4,3];
function pairMatch(){
  const sec='match',total=data.match.length,doneCount=Object.values(state.answers.match||{}).filter(x=>x.solved).length;
  const msg=state.flash.match|| (doneCount===total?feedback('good','Все пары найдены!'):feedback('neutral','Нажми на English слева и на соответствующий перевод справа.'));
  app.innerHTML=shell(`${title(2,'Time Match','English left · Russian right · connect the pair')}<div class="blockBody"><div class="visualCard">${visualSlot('block2-time-match.jpg','🔗','Time Match','Connect English phrases to Russian translations','Pair matching scene')}</div><div class="questionCard matchQuestion"><div class="kicker">TIME MATCH</div><div class="prompt">Find all 8 pairs.</div><div class="subprompt">English — слева, Russian — справа. После правильной пары появляется соединение.</div><div class="matchArea" id="matchArea"><svg class="matchSvg" id="matchSvg"></svg><div class="matchCol left">${data.match.map((p,i)=>`<button class="matchBtn ${state.matchSelected?.side==='left'&&state.matchSelected.index===i?'selected':''} ${solved(sec,i)?'done':''}" id="matchL${i}" data-side="left" data-index="${i}" ${solved(sec,i)?'disabled':''}>${esc(p.en)}</button>`).join('')}</div><div class="matchCol right">${matchRightOrder.map(i=>`<button class="matchBtn ${state.matchSelected?.side==='right'&&state.matchSelected.index===i?'selected':''} ${solved(sec,i)?'done':''}" id="matchR${i}" data-side="right" data-index="${i}" ${solved(sec,i)?'disabled':''}>${esc(data.match[i].ru)}</button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${msg}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${solved(sec,i)?'done':i===doneCount?'current':''}"></i>`).join('')}</div><div class="counter">Найдено пар ${doneCount} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('allPairs','Все фразы')}</div><button class="nextBtn" id="next" ${doneCount===total?'':'disabled'}>Следующий блок →</button></div>`);
  document.getElementById('allPairs').onclick=function(){playSequence(data.match.flatMap(x=>[x.en,x.ru]),this,'▶ Все фразы')};
  document.querySelectorAll('.matchBtn').forEach(btn=>btn.onclick=()=>handleMatch(btn.dataset.side,+btn.dataset.index));
  drawMatchLines();
  document.getElementById('next').onclick=()=>{state.flash.match=null;state.screen=3;save();render()};
}
function handleMatch(side,index){
  state.flash.match=null;
  if(solved('match',index))return;
  if(!state.matchSelected){state.matchSelected={side,index};save();pairMatch();return}
  if(state.matchSelected.side===side){state.matchSelected={side,index};save();pairMatch();return}
  const left=side==='left'?index:state.matchSelected.index;
  const right=side==='right'?index:state.matchSelected.index;
  if(left===right){recordAttempt('match',left,true);state.flash.match=feedback('good','Отлично! Пара соединена.')}else{recordAttempt('match',left,false);state.flash.match=feedback('bad','Это не пара. Попробуй ещё раз.')}
  state.matchSelected=null;save();pairMatch();
}
function drawMatchLines(){
  const area=document.getElementById('matchArea');const svg=document.getElementById('matchSvg');if(!area||!svg)return;const ar=area.getBoundingClientRect();svg.innerHTML='';svg.setAttribute('viewBox',`0 0 ${ar.width} ${ar.height}`);svg.setAttribute('preserveAspectRatio','none');
  data.match.forEach((_,i)=>{if(!solved('match',i))return;const l=document.getElementById(`matchL${i}`),r=document.getElementById(`matchR${i}`);if(!l||!r)return;const lr=l.getBoundingClientRect(),rr=r.getBoundingClientRect();const x1=lr.right-ar.left,y1=lr.top-ar.top+lr.height/2,x2=rr.left-ar.left,y2=rr.top-ar.top+rr.height/2;const p=document.createElementNS('http://www.w3.org/2000/svg','path');const c=(x1+x2)/2;p.setAttribute('d',`M ${x1} ${y1} C ${c} ${y1}, ${c} ${y2}, ${x2} ${y2}`);p.setAttribute('class','matchPath');svg.appendChild(p);});
}

function dialogBlock(){
  const sec='dialog',idx=state.idx[sec]||0,item=data.dialog[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(3,'Rob\'s Story','short practical dialogue + optional transcript support')}<div class="blockBody"><div class="visualCard">${visualSlot('block3-dialog.jpg','🚆','Rob\'s Story','Rob, the train, and the meeting in Oxford','Practical English dialogue scene')}</div><div class="questionCard interviewQuestion"><div class="kicker">Rob Walker</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Сначала попробуй по аудио. Если нужно, открой текст.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><button class="supportBtn" id="support">Показать текст</button><div class="transcriptBox" id="transcript">${item.script.map(x=>`<div>${esc(x)}</div>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прослушай короткий фрагмент')}</div>${miniProgress(sec,idx,data.dialog.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('clip','Диалог')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.dialog.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('clip').onclick=function(){playScript(item.script,this,'Диалог')};
  document.getElementById('support').onclick=()=>{document.getElementById('transcript').classList.toggle('show');document.getElementById('support').textContent=document.getElementById('transcript').classList.contains('show')?'Скрыть текст':'Показать текст'};
  document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз или открой текст.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.dialog.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=4;save();render()}};
}

function builderBlock(){
  const sec='builder',idx=state.idx[sec]||0,item=data.builder[idx],done=solved(sec,idx);if(!Array.isArray(state.builderChosen))state.builderChosen=[];
  const shuffled=shuffleTokens(item.tokens,idx+sec.length),chosen=state.builderChosen;
  app.innerHTML=shell(`${title(4,'Sentence Builder','Russian cue · word order · British-English audio')}<div class="blockBody"><div class="visualCard">${visualSlot('block4-builder.jpg','🧩','Sentence Builder','Build the English sentence in the correct order','Learners assembling sentence cards')}</div><div class="questionCard builderQuestion"><div class="kicker">Sentence Builder</div><div class="prompt">Build the sentence.</div><div class="builderWrap"><div class="builderCue">${esc(item.cue)}</div><div class="builderResult">${chosen.map((x,i)=>`<button class="token answerToken" data-remove="${i}">${esc(x.t)}</button>`).join('')||'<span style="color:#8aa0c2;font-weight:800">Нажимай слова в правильном порядке.</span>'}</div><div class="tokenBank">${shuffled.map(x=>`<button class="token ${chosen.some(c=>c.i===x.i)?'used':''}" data-token="${x.i}">${esc(x.t)}</button>`).join('')}</div><div class="builderActions"><button class="smallBtn" id="clear">Сбросить</button><button class="smallBtn primary" id="check" ${done?'disabled':''}>Проверить</button></div></div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Собери предложение')}</div>${miniProgress(sec,idx,data.builder.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('model','Модель')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.builder.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('model').onclick=function(){playText(item.audio,this,'▶ Модель')};
  document.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const ti=+b.dataset.token;if(chosen.some(c=>c.i===ti))return;chosen.push({i:ti,t:item.tokens[ti]});save();builderBlock()});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.remove,1);save();builderBlock()});
  document.getElementById('clear').onclick=()=>{state.builderChosen=[];save();builderBlock()};
  document.getElementById('check').onclick=()=>{const answer=chosen.map(x=>x.t).join(' '),target=item.tokens.join(' '),ok=answer===target;recordAttempt(sec,idx,ok);if(ok){state.builderChosen=[];save();document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false}else document.getElementById('fb').innerHTML=feedback('bad','Порядок пока неверный. Попробуй ещё раз.')};
  document.getElementById('next').onclick=()=>{state.builderChosen=[];if(idx<data.builder.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=5;save();render()}};
}

function sceneBlock(){
  const sec='scene',idx=state.idx[sec]||0,item=data.scene.qs[idx],done=solved(sec,idx),options=orderedOptions(sec,idx,item.o);
  app.innerHTML=shell(`${title(5,'What time\'s the show?','visible text + optional audio support')}<div class="blockBody"><div class="visualCard"><div class="readingVisual portrait"><div class="readingArtFrame">${readingSlot()}</div><div class="readText">${data.scene.text}</div></div></div><div class="questionCard sceneQuestion"><div class="kicker">Reading comprehension</div><div class="prompt">${esc(item.q)}</div><div class="subprompt">Ответь только по тексту. Аудио — дополнительная поддержка.</div><div class="answers">${options.map(o=>`<button class="answer" data-value="${esc(o)}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div><div class="statusWrap"><div id="fb">${done?feedback('good','Верно!'):feedback('neutral','Прочитай текст')}</div>${miniProgress(sec,idx,data.scene.qs.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('readAudio','Послушать текст')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.scene.qs.length-1?'Следующий блок →':'Следующее задание →'}</button></div>`);
  document.getElementById('readAudio').onclick=function(){playSequence(data.scene.audio,this,'▶ Послушать текст')};
  document.querySelectorAll('[data-value]').forEach(b=>b.onclick=()=>{if(solved(sec,idx))return;const ok=b.dataset.value===item.a;recordAttempt(sec,idx,ok);if(ok){b.classList.add('correct');document.getElementById('fb').innerHTML=feedback('good','Верно!');document.querySelectorAll('[data-value]').forEach(x=>x.disabled=true);document.getElementById('next').disabled=false}else{b.classList.add('wrongFlash');document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Вернись к тексту.');setTimeout(()=>b.classList.remove('wrongFlash'),450)}});
  document.getElementById('next').onclick=()=>{if(idx<data.scene.qs.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=6;save();render()}};
}

function pron(){const sec='pron',idx=state.idx[sec]||0,item=data.pron[idx];commonQuestionScreen(sec,6,'Time Listening','short focused listening: telling the time + key phrases',visualSlot('block6-time-listening.jpg','🎧','Time Listening','Short audio only · no long listening','Listening to time expressions'),item,data.pron.length,item.audio,()=>{state.screen=7;save();render()},'Аудио')}

function plannerBlock(){
  const sec='planner',total=data.planner.length,doneCount=Object.keys(state.plannerPlaced||{}).length;const msg=state.flash.planner || (doneCount===total?feedback('good','План дня готов!'):feedback('neutral','Выбери событие, затем нажми подходящее время.'));
  const remaining=data.planner.map((x,i)=>({...x,i})).filter(x=>state.plannerPlaced[x.i]===undefined);
  const slots=data.planner.map((x,i)=>`<button class="planSlot ${state.plannerPlaced[i]!==undefined?'filled':''}" data-slot="${i}"><span class="slotTime">${esc(x.time)}</span>${state.plannerPlaced[i]!==undefined?`<span class="slotEvent">${esc(data.planner[state.plannerPlaced[i]].event)}</span>`:'<span class="slotPlaceholder">choose event</span>'}</button>`).join('');
  app.innerHTML=shell(`${title(7,'Daily Planner','put the activities into the correct time slots')}<div class="blockBody"><div class="visualCard">${visualSlot('block7-daily-planner.jpg','📅','Daily Planner','A simple day with times and everyday activities','Daily planner table')}</div><div class="questionCard plannerQuestion"><div class="kicker">Daily Planner</div><div class="prompt">Complete the schedule.</div><div class="subprompt">Сначала выбери событие внизу, затем нажми время сверху.</div><div class="plannerWrap"><div class="plannerGrid">${slots}</div><div class="plannerBank">${remaining.map(x=>`<button class="sortChip ${state.plannerSelected===x.i?'selected':''}" data-chip="${x.i}">${esc(x.event)}</button>`).join('')}</div></div><div class="statusWrap"><div id="fb">${msg}</div><div class="internalProgress"><div class="miniDots">${Array.from({length:total},(_,i)=>`<i class="miniDot ${state.plannerPlaced[i]!==undefined?'done':i===doneCount?'current':''}"></i>`).join('')}</div><div class="counter">Заполнено ${doneCount} из ${total}</div></div></div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('eventsAudio','Все события')}</div><button class="nextBtn" id="next" ${doneCount===total?'':'disabled'}>Следующий блок →</button></div>`);
  document.getElementById('eventsAudio').onclick=function(){playSequence(data.planner.flatMap(x=>[x.event,`at ${x.time}`]),this,'▶ Все события')};
  document.querySelectorAll('[data-chip]').forEach(el=>el.onclick=()=>{state.plannerSelected=+el.dataset.chip;state.flash.planner=null;save();plannerBlock()});
  document.querySelectorAll('[data-slot]').forEach(el=>el.onclick=()=>{const slot=+el.dataset.slot;if(state.plannerSelected===null||state.plannerSelected===undefined)return;const chosen=state.plannerSelected;if(chosen===slot){recordAttempt(sec,slot,true);state.plannerPlaced[slot]=chosen;state.flash.planner=feedback('good','Верно!');}else{recordAttempt(sec,chosen,false);state.flash.planner=feedback('bad','Это не то время. Попробуй ещё раз.');}state.plannerSelected=null;save();plannerBlock()});
  document.getElementById('next').onclick=()=>{state.flash.planner=null;state.screen=8;save();render()};
}

function challengeBlock(){
  const sec='challenge',idx=state.idx[sec]||0,item=data.challenge[idx],done=solved(sec,idx);
  app.innerHTML=shell(`${title(8,'Clock Challenge','listen + set the time on the clock')}<div class="blockBody"><div class="visualCard">${visualSlot('block8-clock-challenge.jpg','⏱️','Clock Challenge','Set the time from audio with optional help','Final clock challenge')}</div><div class="questionCard challengeQuestion"><div class="kicker">CLOCK CHALLENGE</div><div class="prompt">Listen and set the clock.</div><div class="subprompt">Сначала прослушай фразу, затем выставь время на часах. Если нужно, открой текст-подсказку.</div><div class="clockWrap">${clockHTML(sec,idx)}<div class="clockSide"><div class="clockReadoutLabel">Твоё время</div><div class="clockReadout" id="challengeReadout">0:00</div><button class="supportBtn" id="supportText">${state.supportOpen?'Скрыть подсказку':'Показать подсказку'}</button><div class="transcriptBox ${state.supportOpen?'show':''}" id="challengeSupport"><div>${esc(item.support)}</div></div></div></div><div class="builderActions"><button class="smallBtn" id="resetClock">Сбросить</button><button class="smallBtn primary" id="checkClock" ${done?'disabled':''}>Проверить</button></div><div class="statusWrap"><div id="fb">${done?feedback('good','Отлично! Ты справился / справилась с финальным блоком.'):feedback('neutral','Нажми «Фраза», выстави время и проверь себя.')}</div>${miniProgress(sec,idx,data.challenge.length)}</div></div></div><div class="footerActions"><div class="leftActions">${audioBtn('audio','Фраза')}</div><button class="nextBtn" id="next" ${done?'':'disabled'}>${idx===data.challenge.length-1?'Результаты →':'Следующее задание →'}</button></div>`);
  bindClock(sec,idx);
  document.getElementById('audio').onclick=function(){if(this.classList.contains('busy')){stopAudio();this.classList.remove('busy');this.textContent='▶ Фраза'}else playText(item.audio,this,'▶ Фраза')};
  document.getElementById('supportText').onclick=()=>{state.supportOpen=!state.supportOpen;save();challengeBlock()};
  document.getElementById('resetClock').onclick=()=>{setClockPose(sec,idx,0,0);challengeBlock()};
  document.getElementById('checkClock').onclick=()=>{const ok=checkClock(sec,idx,item.minutes);recordAttempt(sec,idx,ok);if(ok){document.getElementById('fb').innerHTML=feedback('good','Верно!');document.getElementById('next').disabled=false;document.getElementById('checkClock').disabled=true}else document.getElementById('fb').innerHTML=feedback('bad','Пока нет. Прослушай ещё раз и проверь обе стрелки.')};
  document.getElementById('next').onclick=()=>{state.supportOpen=false;if(idx<data.challenge.length-1){state.idx[sec]=idx+1;save();render()}else{state.screen=9;save();render()}};
}

function results(){
  const totalMax=SECTIONS.reduce((n,k)=>n+MAX[k],0),total=SECTIONS.reduce((n,k)=>n+score(k),0),pct=Math.round(total/totalMax*100),sorted=[...SECTIONS].sort((a,b)=>score(b)/MAX[b]-score(a)/MAX[a]),best=sorted[0],weak=sorted.at(-1);
  app.innerHTML=shell(`<div class="titlebar"><div class="titlewrap"><h1>Your <span class="n">Results</span></h1><p>Beginner · Episode 3 · What time is it?</p></div><div class="progressBox"><strong>Готово</strong><div class="track"><i style="width:100%"></i></div></div></div><div class="results"><div class="ring" style="--pct:${pct}"><strong>${pct}%</strong><span>с первого раза</span></div><div><div class="resultList">${SECTIONS.map(k=>{const p=Math.round(score(k)/MAX[k]*100);return `<div class="resrow"><label>${LABELS[k]}</label><div class="resbar"><i style="width:${p}%"></i></div><b>${score(k)}/${MAX[k]}</b></div>`}).join('')}</div><div class="coach"><div><strong>Сильнее всего</strong><p>${LABELS[best]} — лучший результат с первой попытки.</p></div><div><strong>Что повторить</strong><p>${LABELS[weak]} — этот блок стоит пройти ещё раз.</p></div></div><div class="coach"><div><strong>Финальный блок</strong><p>Clock Challenge проверяет, умеет ли ученик услышать фразу о времени и сразу выставить её на интерактивных часах.</p></div></div><div class="heroBtns" style="margin-top:16px"><button class="btn primary" id="retry">Пройти ещё раз</button><button class="btn secondary" id="home">На главную</button></div></div></div>`);
  document.getElementById('retry').onclick=()=>{state=fresh();state.screen=1;save();render()};document.getElementById('home').onclick=()=>{state.screen=0;save();render()};
}

function render(){stopAudio();({0:start,1:clockBlock,2:pairMatch,3:dialogBlock,4:builderBlock,5:sceneBlock,6:pron,7:plannerBlock,8:challengeBlock,9:results}[state.screen]||start)()}
render();
