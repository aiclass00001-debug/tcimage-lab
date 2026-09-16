const projects=[
{id:'axiom',title:'AXIOM',subtitle:'Battle Tops — Interactive Physics Arena',year:'2026',status:'● LIVE',url:'https://axiom-arena.netlify.app/',thumb:'assets/axiom.png',tags:['Three.js','Physics','Web Game','Realtime'],desc:'以瀏覽器即時 3D、碰撞物理與電影化鏡頭打造的陀螺競技實驗。從遊戲節奏、視覺回饋到互動介面，定位為可玩的 Creative Tech Demo。',pipeline:['Concept','AI Assist','Three.js','Physics','Camera FX','Netlify'],fallback:'linear-gradient(135deg,#04131d,#0e526d 48%,#12d5f2 100%)'},
{id:'kiri',title:'SUPERSPAT × KIRI',subtitle:'Gaussian Splatting Gesture Viewer',year:'2026',status:'● LIVE',url:'https://supersplat-kiri-bridge.netlify.app/',thumb:'assets/kiri.png',tags:['Gaussian Splat','Gesture','WebXR','Quest 3'],desc:'把 SuperSplat Viewer、手勢控制與 WebXR 串成可探索的 Gaussian Splatting 空間，研究瀏覽器端 Spatial Interaction。',pipeline:['Scan','Gaussian Splat','SuperSplat','Gesture Adapter','WebXR','Quest 3'],fallback:'linear-gradient(135deg,#061d20,#087e89 48%,#59e9ff 100%)'},
{id:'accel',title:'ACCELERATED CITY',subtitle:'Interactive Exhibition Experience',year:'2026',status:'● LIVE',url:'https://accel-city-exhibition.vercel.app/',thumb:'assets/accelerated-city.png',tags:['Exhibition','AI','Interactive','Web'],desc:'把都市、科技與未來敘事轉成線上展覽介面，結合展場導覽邏輯與 Web-based visual storytelling。',pipeline:['Curatorial Idea','Visual System','Interactive Story','Web Build','Exhibition','Vercel'],fallback:'linear-gradient(135deg,#160a23,#5f2a8e 48%,#d55dff 100%)'},
{id:'dmaxr',title:'DMAXR',subtitle:'WebXR 360° Spatial Video Gallery',year:'2026',status:'● LIVE',url:'https://dmaxr.netlify.app/',thumb:'assets/dmaxr.png',tags:['WebXR','360 Video','Quest 3','Spatial'],desc:'面向 Quest 3 Browser 的 360° Spatial Video Gallery，研究 WebXR 沉浸式媒體瀏覽與空間內容展示。',pipeline:['360 Media','WebXR','Gallery UX','Quest 3','Performance','Netlify'],fallback:'linear-gradient(135deg,#070c22,#23307a 52%,#5d8dff 100%)'},
{id:'vrm',title:'DMA VRM',subtitle:'Web Avatar / XR Platform',year:'2026',status:'● LIVE',url:'https://dmavrm.netlify.app/',thumb:'assets/dma-vrm.png',tags:['VRM','Three.js','Avatar','XR'],desc:'以 VRM、Three.js 與 WebXR 為核心的 Avatar 平台實驗，探索即時角色、互動與跨裝置 Web 體驗。',pipeline:['VRoid','VRM','Three.js','Avatar Runtime','Interaction','XR'],fallback:'linear-gradient(135deg,#17091f,#712385 52%,#ff66b4 100%)'},
{id:'fieldbook',title:'VR MISSION',subtitle:'Immersive Learning Fieldbook',year:'2026',status:'● LIVE',url:'https://vr-mission-fieldbook.vercel.app/',thumb:'assets/vr-mission.png',tags:['VR','Education','Mission Design','Fieldbook'],desc:'用任務導向介面整理 VR 教學活動、實作流程與反思記錄，讓沉浸式課程更容易被執行與追蹤。',pipeline:['Learning Goal','Mission Design','Fieldbook','VR Workflow','Reflection','Vercel'],fallback:'linear-gradient(135deg,#101711,#3d5d31 48%,#d6b645 100%)'},
{id:'viewer',title:'3D MODEL VIEWER',subtitle:'FBX / GLTF / GLB Web Viewer',year:'2026',status:'● LIVE',url:'https://3d-model-viewer-tc.vercel.app/',thumb:'assets/3d-viewer.png',tags:['3D Viewer','FBX','GLTF','GLB'],desc:'輕量級瀏覽器 3D 模型檢視工具，支援常見即時格式，適合快速審查與教學展示。',pipeline:['Model','Texture','WebGL','Viewer UI','Review','Vercel'],fallback:'linear-gradient(135deg,#09111a,#1a4058 52%,#87b8d4 100%)'},
{id:'aiclass',title:'AI CLASS 1151',subtitle:'AI Era Career Visual Report',year:'2026',status:'● LIVE',url:'https://aiclass1151.netlify.app/',thumb:'assets/ai-class-1151.png',tags:['AI Education','Career','Visual Report','Teaching'],desc:'把 AI 時代職涯、產業觀察與「操作門檻歸零、專業經驗開始複利」轉成可閱讀的視覺教學網站。',pipeline:['Industry Insight','Teaching Notes','Visual Story','Web Report','Classroom','Netlify'],fallback:'linear-gradient(135deg,#111019,#4f2c73 50%,#f07bc9 100%)'},
{id:'trading',title:'SHUN TRADING',subtitle:'Market Intelligence Dashboard',year:'2026',status:'● LIVE',url:'https://shuntrading.vercel.app/',thumb:'assets/shun-trading.png',tags:['Dashboard','Market Data','Trading','UI'],desc:'高資訊密度的市場儀表板原型，把行情觀察、技術訊號、Watchlist 與策略資訊整合成單一介面。',pipeline:['Market Notes','Data Layer','Dashboard UI','Signal Display','Watchlist','Vercel'],fallback:'linear-gradient(135deg,#161207,#6c4b0c 47%,#e4b72c 100%)'},
{id:'aiyoutube',title:'AI YOUTUBE',subtitle:'AI Trend Curation & Teaching Portal',year:'2026',status:'● LIVE',url:'https://aiclass1151.netlify.app/ai_youtube',thumb:'assets/ai-youtube.png',tags:['AI','YouTube','Teaching','Curation'],desc:'把 AI 相關 YouTube 內容整理成可瀏覽、可教學、可延伸成課堂討論的視覺入口，作為 AI 趨勢與案例蒐集的教學型內容平台。',pipeline:['Source Curation','YouTube','Topic Clustering','Teaching Notes','Web Portal','Netlify'],fallback:'linear-gradient(135deg,#0b1320,#174c68 48%,#27d7ff 100%)'},
{id:'aiqwen',title:'AI 2026',subtitle:'操作歸零 · 經驗複利',year:'2026',status:'● LIVE',url:'https://aiclass1151.netlify.app/ai_youtube_qwen',thumb:'assets/ai-youtube-qwen.png',tags:['AI Education','Career','Qwen','Visual Report'],desc:'以「操作歸零、經驗複利」為主軸的 2026 AI 產業與教育視覺報告，聚焦 AI 如何壓縮操作成本，同時放大判斷、方向與專業經驗的價值。',pipeline:['Industry Insight','AI Workflow','Career Analysis','Visual Story','Teaching','Netlify'],fallback:'linear-gradient(135deg,#171021,#5e2f82 50%,#b968ff 100%)'},
{id:'vrvp',title:'VR / XR × VP',subtitle:'From Virtual Worlds to Virtual Production',year:'2026',status:'● LIVE',url:'https://aiclass1151.netlify.app/vrclass_vp_youtube',thumb:'assets/vrclass-vp-youtube.png',tags:['VR / XR','UE5','Virtual Production','Teaching'],desc:'整合大三 VR / MR / WebXR 與研究所 Virtual Production 教學，把 Real-time 3D 串成從互動體驗到鏡頭合成、LED Volume 與 ICVFX 的完整課程地圖。',pipeline:['3D / Scan','UE5 / Three.js','Tracking','VR / MR / WebXR','Camera / LED','Experience / Film'],fallback:'linear-gradient(135deg,#06121d,#0b4d78 48%,#38b8ff 100%)'}
];
const byId=id=>projects.find(p=>p.id===id);
const featureIds=['axiom','kiri','accel','dmaxr','vrm'];
let featuredIndex=0;
const heroBg=document.querySelector('#heroBg'),heroCopy=document.querySelector('#heroCopy'),heroProgress=document.querySelector('#heroProgress');
function heroCopyHTML(p){return `<div class="hero-eyebrow">TCIMAGE/LAB · FEATURED WORK</div><h1 class="hero-title">${p.title}</h1><div class="hero-subtitle">${p.subtitle}</div><div class="hero-meta"><span class="live">${p.status}</span><span>${p.year}</span><span>${p.tags.slice(0,3).join(' · ')}</span></div><p class="hero-desc">${p.desc}</p><div class="hero-actions"><a class="primary-btn" href="${p.url}" target="_blank" rel="noopener">▶ PLAY PROJECT</a><button class="secondary-btn" data-project="${p.id}">ⓘ MORE INFO</button></div>`}
function applyHero(p,animate=true){if(animate){heroBg.classList.add('turn-out');heroCopy.classList.add('changing');setTimeout(()=>{heroBg.style.setProperty('--image',`url("${p.thumb}")`);heroBg.style.setProperty('--fallback',p.fallback);heroCopy.innerHTML=heroCopyHTML(p);heroBg.classList.remove('turn-out');heroBg.classList.add('turn-in');heroCopy.classList.remove('changing');setTimeout(()=>heroBg.classList.remove('turn-in'),620)},260)}else{heroBg.style.setProperty('--image',`url("${p.thumb}")`);heroBg.style.setProperty('--fallback',p.fallback);heroCopy.innerHTML=heroCopyHTML(p)}heroProgress.innerHTML=featureIds.map((_,i)=>`<i class="${i===featuredIndex?'active':''}"></i>`).join('')}
function showHero(i){featuredIndex=(i+featureIds.length)%featureIds.length;applyHero(byId(featureIds[featuredIndex]),true);syncSelected(featureIds[featuredIndex],false)}
document.querySelector('#heroPrev').onclick=()=>showHero(featuredIndex-1);document.querySelector('#heroNext').onclick=()=>showHero(featuredIndex+1);
applyHero(byId(featureIds[0]),false);

const selectedTrack=document.querySelector('#selectedTrack'),selectionDetail=document.querySelector('#selectionDetail'),selectedCounter=document.querySelector('#selectedCounter');
let selectedId=featureIds[0],selectedPage=0;
function selectionCard(p){return `<article class="select-card ${p.id===selectedId?'active':''}" data-select="${p.id}" style="--fallback:${p.fallback}"><img src="${p.thumb}" alt="${p.title}" referrerpolicy="no-referrer" onerror="this.style.display='none'"><div class="select-label"><b>${p.title}</b><span>${p.subtitle}</span></div></article>`}
function renderSelection(){selectedTrack.innerHTML=featureIds.map(id=>selectionCard(byId(id))).join('');renderSelectionDetail();selectedCounter.textContent=`${String(featureIds.indexOf(selectedId)+1).padStart(2,'0')} / ${String(featureIds.length).padStart(2,'0')}`}
function renderSelectionDetail(){const p=byId(selectedId);selectionDetail.classList.add('changing');setTimeout(()=>{selectionDetail.innerHTML=`<div><h3>${p.title}</h3><div class="detail-meta">${p.status} · ${p.year} · ${p.tags.slice(0,3).join(' · ')}</div></div><div><p>${p.desc}</p></div><div class="detail-actions"><a class="mini-btn primary" href="${p.url}" target="_blank" rel="noopener">▶ OPEN</a><button class="mini-btn" data-project="${p.id}">MORE INFO</button></div>`;selectionDetail.classList.remove('changing')},150)}
function syncSelected(id,updateHero=true){if(!featureIds.includes(id))return;selectedId=id;const cards=[...document.querySelectorAll('.select-card')];cards.forEach(c=>{const active=c.dataset.select===id;c.classList.toggle('active',active);if(active){c.classList.remove('flipping');void c.offsetWidth;c.classList.add('flipping')}});selectedCounter.textContent=`${String(featureIds.indexOf(id)+1).padStart(2,'0')} / ${String(featureIds.length).padStart(2,'0')}`;renderSelectionDetail();if(updateHero){featuredIndex=featureIds.indexOf(id);applyHero(byId(id),true)}}
selectedTrack.addEventListener('click',e=>{const c=e.target.closest('[data-select]');if(c)syncSelected(c.dataset.select,true)});document.querySelector('#selectedPrev').onclick=()=>syncSelected(featureIds[(featureIds.indexOf(selectedId)-1+featureIds.length)%featureIds.length],true);document.querySelector('#selectedNext').onclick=()=>syncSelected(featureIds[(featureIds.indexOf(selectedId)+1)%featureIds.length],true);renderSelection();

const sections=[
{id:'spatial',title:'XR / Spatial Computing',sub:'WebXR · Quest 3 · Spatial Media · Virtual Production',ids:['kiri','dmaxr','vrm','vrvp','fieldbook','viewer','axiom','accel']},
{id:'ai',title:'AI × Creative Systems',sub:'AI collaboration · visual systems · realtime experiments',ids:['aiyoutube','aiqwen','accel','aiclass','trading','axiom','kiri','viewer']},
{id:'courses',title:'AI / XR Course Portals',sub:'visual teaching sites · curated sources · course maps',ids:['aiyoutube','aiqwen','vrvp','aiclass','fieldbook','dmaxr']},
{id:'interactive',title:'Interactive / Web 3D',sub:'Three.js · WebGL · realtime interaction',ids:['axiom','viewer','kiri','dmaxr','vrm','trading','accel','fieldbook']},
{id:'teaching',title:'Teaching / Research',sub:'course tools · research translation · prototypes',ids:['vrvp','aiqwen','aiyoutube','aiclass','fieldbook','accel','viewer','dmaxr','vrm','kiri']}
];
const rows=document.querySelector('#rows');
function cardHTML(p){return `<article class="card" data-project-card="${p.id}" tabindex="0"><div class="card-poster" style="--fallback:${p.fallback}"><img src="${p.thumb}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'"><div class="card-title"><b>${p.title}</b><span>${p.subtitle}</span></div></div></article>`}
sections.forEach(s=>{const items=s.ids.map(byId);const sec=document.createElement('section');sec.className='project-section';sec.id=s.id;sec.innerHTML=`<div class="row-head"><div class="row-head-left"><h2>${s.title}</h2><span class="row-sub">${s.sub}</span></div><span class="row-page">01 / 01</span></div><div class="rail"><div class="row-progress"></div><button class="rail-arrow prev" aria-label="Previous">‹</button><div class="cards-viewport"><div class="cards-track">${items.map(cardHTML).join('')}</div></div><button class="rail-arrow next" aria-label="Next">›</button></div>`;rows.appendChild(sec)});

function setupRails(){document.querySelectorAll('.project-section').forEach(sec=>{const view=sec.querySelector('.cards-viewport'),track=sec.querySelector('.cards-track'),cards=[...sec.querySelectorAll('.card')],prev=sec.querySelector('.prev'),next=sec.querySelector('.next'),prog=sec.querySelector('.row-progress'),counter=sec.querySelector('.row-page');let page=0,pages=1,visible=6,step=0;
function calc(){const w=innerWidth;visible=w<=680?2:w<=1000?4:6;const cardW=cards[0].getBoundingClientRect().width;const gap=parseFloat(getComputedStyle(track).gap)||7;step=(cardW+gap)*visible;pages=Math.max(1,Math.ceil(cards.length/visible));page=Math.min(page,pages-1);apply(false)}
function apply(anim=true,dir='next'){const max=Math.max(0,track.scrollWidth-view.clientWidth+innerWidth*.022);const x=Math.min(page*step,max);track.style.setProperty('--rail-x',`${-x}px`);track.style.transition=anim?'transform .58s var(--ease)':'none';track.style.transform=`translate3d(${-x}px,0,0)`;if(anim){track.classList.remove('page-turn-next','page-turn-prev');void track.offsetWidth;track.classList.add(dir==='next'?'page-turn-next':'page-turn-prev');setTimeout(()=>track.classList.remove('page-turn-next','page-turn-prev'),580)}prev.disabled=page===0;next.disabled=page>=pages-1;prog.innerHTML=Array.from({length:pages},(_,i)=>`<i class="${i===page?'active':''}"></i>`).join('');counter.textContent=`${String(page+1).padStart(2,'0')} / ${String(pages).padStart(2,'0')}`}
prev.onclick=()=>{if(page>0){page--;apply(true,'prev')}};next.onclick=()=>{if(page<pages-1){page++;apply(true,'next')}};addEventListener('resize',calc);calc()})}
setupRails();

document.addEventListener('click',e=>{const searchItem=e.target.closest('.search-item[data-project]');if(searchItem){e.preventDefault();const id=searchItem.dataset.project;closeSearch();setTimeout(()=>openProject(id),120);return}const card=e.target.closest('[data-project-card]');if(card){const id=card.dataset.projectCard;document.querySelectorAll('.card.selected').forEach(c=>c.classList.remove('selected'));card.classList.add('selected');if(featureIds.includes(id))syncSelected(id,true);else{const p=byId(id);featuredIndex=0;applyHero(p,true);setTimeout(()=>document.querySelector('.hero-shell').scrollIntoView({behavior:'smooth',block:'start'}),120)}}const info=e.target.closest('[data-project]');if(info){e.preventDefault();openProject(info.dataset.project)}if(e.target.matches('[data-close]'))closeModal()});

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeSearch()}if(e.key==='Enter'&&e.target.matches('[data-project-card]'))e.target.click()});

const modal=document.querySelector('#projectModal');
function openProject(id){const p=byId(id);if(!p)return;const vis=document.querySelector('#modalVisual');vis.style.setProperty('--thumb',`url("${p.thumb}")`);vis.style.setProperty('--fallback',p.fallback);document.querySelector('#modalTitle').textContent=p.title;document.querySelector('#modalSubtitle').textContent=p.subtitle;document.querySelector('#modalStatus').textContent=p.status;document.querySelector('#modalYear').textContent=p.year;document.querySelector('#modalDescription').textContent=p.desc;document.querySelector('#modalTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');document.querySelector('#modalPipeline').innerHTML=p.pipeline.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('');document.querySelector('#modalLaunch').href=p.url;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
const topbar=document.querySelector('#topbar');addEventListener('scroll',()=>topbar.classList.toggle('scrolled',scrollY>18));
const searchPanel=document.querySelector('#searchPanel'),searchInput=document.querySelector('#searchInput'),searchResults=document.querySelector('#searchResults');document.querySelector('#searchBtn').onclick=()=>{searchPanel.classList.add('open');searchPanel.setAttribute('aria-hidden','false');setTimeout(()=>searchInput.focus(),40);renderSearch('')};document.querySelector('#searchClose').onclick=closeSearch;function closeSearch(){searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true')}function renderSearch(q){const term=q.trim().toLowerCase(),list=projects.filter(p=>!term||[p.title,p.subtitle,...p.tags].join(' ').toLowerCase().includes(term));searchResults.innerHTML=list.map(p=>`<button type="button" class="search-item" data-project="${p.id}" aria-label="Open ${p.title}"><span class="search-copy"><strong>${p.title}</strong><small>${p.tags.join(' · ')}</small></span><b class="search-open">↗</b></button>`).join('')||'<div class="search-empty">No matching projects.</div>'}searchInput.oninput=e=>renderSearch(e.target.value);

// V4: subtle spatial tilt. Disabled on touch devices for stability/performance.
if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
  const attachTilt = (el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - .5;
      const ny = (e.clientY - r.top) / r.height - .5;
      el.style.setProperty('--ry', `${(nx * 7).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-ny * 5).toFixed(2)}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
    });
  };
  document.querySelectorAll('.card-poster,.select-card').forEach(attachTilt);
}

// V4.1 — Delayed hover preview engine.
// If assets/previews/<project-id>.mp4 exists, it is used first.
// Otherwise we lazily embed the live site as a muted/non-interactive visual preview.
const PREVIEW_DELAY = 850;
const previewTimers = new WeakMap();
const livePreviewCapable = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

function previewHost(el){
  return el.matches('.select-card') ? el : el.querySelector('.card-poster');
}
function ensurePreviewBadge(host){
  if(!host.querySelector('.preview-badge')){
    const b=document.createElement('div'); b.className='preview-badge'; b.textContent='LIVE PREVIEW'; host.appendChild(b);
  }
}
function stopPreview(el){
  const t=previewTimers.get(el); if(t) clearTimeout(t);
  previewTimers.delete(el);
  const host=previewHost(el); if(!host) return;
  el.classList.remove('previewing');
  const shell=host.querySelector('.preview-shell');
  if(shell){ shell.classList.remove('active'); setTimeout(()=>shell.remove(),220); }
}
function startPreview(el,id){
  const p=byId(id); if(!p) return;
  const host=previewHost(el); if(!host || host.querySelector('.preview-shell')) return;
  ensurePreviewBadge(host);
  const shell=document.createElement('div'); shell.className='preview-shell';
  const loading=document.createElement('div'); loading.className='preview-loading'; loading.textContent='Loading preview'; shell.appendChild(loading);
  host.appendChild(shell);
  requestAnimationFrame(()=>shell.classList.add('active'));
  el.classList.add('previewing');

  const video=document.createElement('video');
  video.muted=true; video.loop=true; video.playsInline=true; video.autoplay=true; video.preload='metadata';
  video.src=`assets/previews/${id}.mp4`;
  let resolved=false;
  const useIframe=()=>{
    if(resolved) return; resolved=true;
    const frame=document.createElement('iframe');
    frame.src=p.url; frame.loading='eager'; frame.tabIndex=-1;
    frame.setAttribute('aria-hidden','true');
    frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-pointer-lock');
    frame.addEventListener('load',()=>{loading.remove()},{once:true});
    shell.appendChild(frame);
    setTimeout(()=>loading.remove(),1800);
  };
  video.addEventListener('canplay',()=>{
    if(resolved) return; resolved=true; loading.remove(); shell.appendChild(video); video.play().catch(()=>{});
  },{once:true});
  video.addEventListener('error',useIframe,{once:true});
  setTimeout(()=>{ if(!resolved) useIframe(); },900);
}
function attachPreview(el,id){
  if(!livePreviewCapable) return;
  el.addEventListener('pointerenter',()=>{
    const t=setTimeout(()=>startPreview(el,id),PREVIEW_DELAY); previewTimers.set(el,t);
  });
  el.addEventListener('pointerleave',()=>stopPreview(el));
}

document.querySelectorAll('.card[data-project-card]').forEach(el=>attachPreview(el,el.dataset.projectCard));
document.querySelectorAll('.select-card[data-select]').forEach(el=>attachPreview(el,el.dataset.select));
