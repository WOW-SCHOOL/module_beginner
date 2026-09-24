/* WOW SCHOOL v4 retrofit layer. Educational app logic remains in the original app.js. */
const WOW_V4_HELPERS={

};
const WOW_V4_TRANSCRIPT=null;
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
/* Required QA shortcuts already exist in the original module and are intentionally not duplicated. */

