const g={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Rust:"#dea584",Go:"#00ADD8",Java:"#b07219","C++":"#f34b7d",C:"#555555","C#":"#239120",Ruby:"#701516",PHP:"#4F5D95",Swift:"#fa7343",Kotlin:"#A97BFF",Scala:"#c22d40",Racket:"#3c5caa",Scheme:"#1e4aec",OCaml:"#3be133",Haskell:"#5e5086",Shell:"#89e051",HTML:"#e34c26",CSS:"#563d7c",Astro:"#ff5a03",Lean:"#000000","TLA+":"#a7a7a7"},m=[],h="gh-repos-rpeters4",v="https://api.github.com/users/rpeters4/repos?per_page=100&sort=updated";function x(e){const n=Date.now(),c=new Date(e).getTime(),s=n-c,o=Math.floor(s/6e4),t=Math.floor(s/36e5),a=Math.floor(s/864e5),l=Math.floor(a/7),d=Math.floor(a/30),r=Math.floor(a/365);return o<1?"just now":o<60?`${o}m ago`:t<24?`${t}h ago`:a<7?`${a}d ago`:l<5?`${l}w ago`:d<12?`${d}mo ago`:`${r}y ago`}function b(e){const n=e.language?`<span class="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-mono font-medium">
           <span class="w-2 h-2 rounded-full flex-shrink-0" style="background-color: ${g[e.language]||"#8b8b8b"}"></span>
           ${e.language}
         </span>`:"",c=e.stargazers_count>0?`<span class="inline-flex items-center gap-1 text-xs text-[var(--color-text-secondary)] font-mono">
           <svg class="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </svg>
           ${e.stargazers_count}
         </span>`:"";return`
      <a href="${e.html_url}" target="_blank" rel="noopener noreferrer"
         class="card flex flex-col justify-between group h-[200px]" data-lang="${e.language||""}"
         aria-label="View ${e.name} on GitHub">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-mono text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-500)] transition-colors truncate">
              ${e.name}
            </h3>
            <svg class="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-500)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          ${e.description?`<p class="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">${e.description}</p>`:'<p class="text-sm text-[var(--color-text-tertiary)] italic mb-4">No description</p>'}
        </div>
        <div class="flex items-center justify-between pt-3.5 border-t border-[var(--color-border)]/40">
          <div class="flex items-center gap-3">
            ${n}
            ${c}
          </div>
          <span class="text-[10px] font-mono text-[var(--color-text-tertiary)]">${x(e.pushed_at)}</span>
        </div>
      </a>
    `}function y(e,n,c){const s=document.getElementById("projects-filters");if(!s)return;s.innerHTML="",s.classList.remove("hidden"),s.classList.add("flex");const o=document.createElement("button");o.type="button",o.textContent="All",o.className=`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${n===null?"bg-[var(--color-accent-500)] text-white shadow-sm":"bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:scale-[1.03]"}`,o.addEventListener("click",()=>c(null)),s.appendChild(o),e.forEach(t=>{const a=document.createElement("button");a.type="button",a.className=`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${n===t?"bg-[var(--color-accent-500)] text-white shadow-sm":"bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:scale-[1.03]"}`;const l=document.createElement("span");l.className="w-1.5 h-1.5 rounded-full",l.style.backgroundColor=g[t]||"#8b8b8b",a.appendChild(l),a.appendChild(document.createTextNode(t)),a.addEventListener("click",()=>c(t)),s.appendChild(a)})}async function p(){const e=document.getElementById("projects-loading"),n=document.getElementById("projects-cards"),c=document.getElementById("projects-error");try{let o=function(){if(!n)return;const r=d?t.filter(i=>i.language===d):t;n.innerHTML=r.map(b).join(""),y(l,d,i=>{d=i,o()})};var s=o;let t;const a=sessionStorage.getItem(h);if(a)t=JSON.parse(a);else{const r=await fetch(v);if(!r.ok)throw new Error(`GitHub API error: ${r.status}`);t=await r.json(),sessionStorage.setItem(h,JSON.stringify(t))}t=t.filter(r=>!r.fork&&!r.archived),t.sort((r,i)=>{const u=m.indexOf(r.name),f=m.indexOf(i.name);return u!==-1&&f!==-1?u-f:u!==-1?-1:f!==-1?1:i.stargazers_count!==r.stargazers_count?i.stargazers_count-r.stargazers_count:new Date(i.pushed_at).getTime()-new Date(r.pushed_at).getTime()});const l=[...new Set(t.map(r=>r.language).filter(Boolean))].sort();let d=null;e?.classList.add("hidden"),n?.classList.remove("hidden"),n?.classList.add("grid"),o()}catch(o){console.warn("GitHub API fetch failed:",o),e?.classList.add("hidden"),c?.classList.remove("hidden")}}p();document.addEventListener("astro:after-swap",p);
