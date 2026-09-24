/* WOW SCHOOL v4 retrofit layer. Unit 5A helpers are rendered natively by app.js. */
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
