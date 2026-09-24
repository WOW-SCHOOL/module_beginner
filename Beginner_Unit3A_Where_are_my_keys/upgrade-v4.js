/* WOW SCHOOL v4 retrofit layer. Educational app logic remains in the original app.js. */
const WOW_V4_HELPERS={
  1:{title:"Лёгкая подсказка",html:"Смотри на предмет и сначала назови его по-английски про себя. Затем сравни варианты."},
  2:{title:"Простое правило",html:"Один предмет: <b>a / an + singular</b>. Несколько предметов: plural form. В вопросе проверь <b>What is it? / What are they?</b>."},
  3:{title:"Лёгкая подсказка",html:"Слушай конец plural form: /s/, /z/ или /ɪz/. Ориентируйся на звук, а не только на написание."},
  4:{title:"Лёгкая подсказка",html:"В вопросах о вещах сначала реши: один предмет или несколько. Это подскажет <b>is / are</b> и <b>it / they</b>."}
};
const WOW_V4_TRANSCRIPT={"screen": 7, "section": "listening", "kind": "scripts", "roles": []};
function wowV4Esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function wowV4HelperDetails(title,html){return `<details class="helperDetails"><summary>${wowV4Esc(title)}</summary><div class="helperBody">${html}</div></details>`}
function wowV4NormalizeLine(line,i,roles){
 let speaker='',text='';
 if(typeof line==='string'){
   const m=line.match(/^([^:]+):\s*(.*)$/);
   if(m&&m[1].length<=32){speaker=m[1].trim();text=m[2].trim()}else text=line;
 }else if(line&&typeof line==='object'){
   speaker=line.speaker||line.voice||line.name||'';text=line.text||line.line||'';
 }
 if(!speaker)speaker=(roles&&roles.length?roles[i%roles.length]:`Speaker ${i%2+1}`);
 return {speaker,text};
}
function wowV4TranscriptLines(){
 const c=WOW_V4_TRANSCRIPT;if(!c)return [];
 try{
   const sec=c.section,src=data[sec],roles=c.roles||[];
   let lines=[];
   if(c.kind==='scripts'){
     const idx=(state.idx&&state.idx[sec])||0,item=src.qs[idx],sid=item&&item.script;
     const script=src.scripts.find(s=>s.id===sid)||src.scripts[0];lines=script?.lines||[];
   }else if(c.kind==='lines')lines=src.lines||[];
   else if(c.kind==='transcript')lines=src.transcript||[];
   else if(c.kind==='array-script'){
     const idx=(state.idx&&state.idx[sec])||0;lines=src[idx]?.script||[];
   }else if(c.kind==='array-lines'){
     const idx=(state.idx&&state.idx[sec])||0;lines=src[idx]?.lines||[];
   }
   return lines.map((x,i)=>wowV4NormalizeLine(x,i,roles)).filter(x=>x.text);
 }catch(_){return []}
}
function wowV4TranscriptHTML(){
 const lines=wowV4TranscriptLines();if(!lines.length)return '';
 return `<div class="transcript">${lines.map(x=>`<div class="transcriptLine"><strong>${wowV4Esc(x.speaker)}</strong><span>${wowV4Esc(x.text)}</span></div>`).join('')}</div>`;
}
function wowV4ApplyHelpers(){
 const screen=state?.screen||0;
 const details=[];
 const h=WOW_V4_HELPERS[screen];if(h)details.push(wowV4HelperDetails(h.title,h.html));
 if(WOW_V4_TRANSCRIPT&&screen===WOW_V4_TRANSCRIPT.screen){
   const t=wowV4TranscriptHTML();if(t)details.push(wowV4HelperDetails('Открыть текст диалога',t));
 }
 if(!details.length)return;
 const body=document.querySelector('.blockBody');
 const visual=body&&Array.from(body.children).find(el=>el.classList?.contains('visualCard'));
 if(body&&visual){
   const column=document.createElement('div');column.className='visualColumn';
   body.insertBefore(column,visual);column.appendChild(visual);
   const wrap=document.createElement('div');wrap.className='visualHelpers';wrap.innerHTML=details.join('');column.appendChild(wrap);return;
 }
 const left=document.querySelector('.layout .leftPanel');
 if(left){
   const wrap=document.createElement('div');wrap.className='visualHelpers';wrap.innerHTML=details.join('');
   const footer=left.querySelector('.footerActions');if(footer)left.insertBefore(wrap,footer);else left.appendChild(wrap);
 }
}
if(typeof render==='function'){
 const wowV4BaseRender=render;
 render=function(){wowV4BaseRender();wowV4ApplyHelpers()};
 wowV4ApplyHelpers();
}

function wowV4Sections(){
  try{if(typeof SECTIONS!=='undefined'&&Array.isArray(SECTIONS))return SECTIONS}catch(_){}
  try{if(typeof ORDER!=='undefined'&&Array.isArray(ORDER))return ORDER}catch(_){}
  return [];
}
function wowV4QaChangeTask(delta){
  const sections=wowV4Sections(),sec=sections[(state.screen||0)-1];
  if(!sec||!state.idx||!(sec in state.idx))return;
  let total=0;try{total=MAX[sec]||0}catch(_){}
  if(!total)return;
  const cur=state.idx[sec]||0,next=Math.max(0,Math.min(total-1,cur+delta));
  if(next===cur)return;
  state.idx[sec]=next;
  if('builderChosen' in state)state.builderChosen=[];
  if('selectedSort' in state)state.selectedSort=null;
  if(typeof save==='function')save();
  if(typeof render==='function')render();
}
function wowV4QaChangeBlock(delta){
  const sections=wowV4Sections(),last=sections.length;if(!last)return;
  const current=state.screen>=1&&state.screen<=last?state.screen:(delta>0?0:last+1);
  const next=Math.max(1,Math.min(last,current+delta));if(next===state.screen)return;
  state.screen=next;
  if('builderChosen' in state)state.builderChosen=[];
  if('selectedSort' in state)state.selectedSort=null;
  if(typeof save==='function')save();
  if(typeof render==='function')render();
}
addEventListener('keydown',e=>{
  if(document.querySelector('.wow-pin-gate'))return;
  if(e.altKey&&e.shiftKey&&!e.ctrlKey&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();wowV4QaChangeTask(e.key==='ArrowRight'?1:-1);return}
  if(e.altKey&&e.ctrlKey&&!e.shiftKey&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();wowV4QaChangeBlock(e.key==='ArrowRight'?1:-1)}
});

