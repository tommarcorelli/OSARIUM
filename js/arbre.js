/* OSARIUM — Arbre de filiation des OS (exploite le champ `base` de data.js).
   Construit un arbre parent → enfants, avec des "familles" synthétiques
   pour les bases qui ne correspondent à aucune fiche du catalogue
   (Windows NT, BSD générique, RHEL, illumos, Android AOSP, Plan 9…). */
(function(){

  // Familles synthétiques : pas de fiche dédiée dans le catalogue,
  // mais on regroupe leurs descendants sous un même nœud repère.
  const SYNTHETIC = {
    'windows nt':      {label:'Windows NT',      tag:'Noyau propriétaire Microsoft'},
    'bsd':             {label:'BSD',              tag:'Famille Unix historique (Berkeley)'},
    'rhel':            {label:'RHEL',             tag:'Red Hat Enterprise Linux (upstream)'},
    'illumos':         {label:'illumos',          tag:'Fork ouvert de Solaris/OpenSolaris'},
    'android (aosp)':  {label:'Android (AOSP)',   tag:'Android Open Source Project'},
    'android':         {label:'Android (AOSP)',   tag:'Android Open Source Project'},
    'plan 9':          {label:'Plan 9',           tag:'OS de recherche Bell Labs'},
    'dos':             {label:'DOS',              tag:'Famille MS-DOS / compatibles'},
    'amigaos':         {label:'AmigaOS',          tag:'OS historique Commodore Amiga'},
    'beos':            {label:'BeOS',             tag:'OS multimédia des années 90'},
    'chromeos':        {label:'ChromeOS',         tag:'OS Google (non listé séparément ici)'},
    'xen':             {label:'Xen',               tag:'Hyperviseur type 1 open-source'},
    'sel4 / nova':     {label:'seL4 / NOVA',       tag:'Micro-noyaux formellement vérifiés'},
    'windows pe':      {label:'Windows PE',        tag:'Environnement de préinstallation Windows'}
  };

  // Bases génériques : on n'invente pas de faux lien de parenté,
  // ces systèmes restent affichés comme indépendants.
  const GENERIC_INDEPENDENT = new Set(['linux','linux from scratch','linux embarqué']);

  function norm(s){ return (s||'').trim().toLowerCase(); }

  function buildTree(OS_DATA){
    const byId = {};
    OS_DATA.forEach(o => byId[o.id] = o);

    // index nom -> id, avec variante sans " linux" final
    const nameToId = {};
    OS_DATA.forEach(o => {
      nameToId[norm(o.name)] = o.id;
      nameToId[norm(o.name.replace(/\s+linux$/i,''))] = o.id;
    });

    const synthNodes = {}; // key -> {id:'synth:key', label, tag, children:[]}
    const roots = [];
    const childrenOf = {}; // id (real or synth) -> [ids]

    function ensureSynth(key){
      const k = norm(key);
      if(!synthNodes[k]){
        const meta = SYNTHETIC[k] || {label:key, tag:''};
        synthNodes[k] = {id:'synth:'+k, synthetic:true, label:meta.label, tag:meta.tag, children:[]};
        roots.push(synthNodes[k].id);
      }
      return synthNodes[k].id;
    }

    function resolveParent(base){
      if(!base || base === '—') return null;
      const primaryRaw = base.split('/')[0].trim(); // "Debian/Ubuntu" -> "Debian"
      const k = norm(primaryRaw);
      if(GENERIC_INDEPENDENT.has(norm(base))) return null;
      if(nameToId[k]) return nameToId[k];
      if(SYNTHETIC[k]) return ensureSynth(norm(SYNTHETIC[k].label));
      // dernier essai : le texte complet (non coupé) matche une famille connue
      const kFull = norm(base);
      if(SYNTHETIC[kFull]) return ensureSynth(norm(SYNTHETIC[kFull].label));
      // sinon : famille inconnue mais nommée -> on la crée quand même
      // (mieux qu'un système perdu sans contexte)
      return ensureSynth(base);
    }

    OS_DATA.forEach(o => { childrenOf[o.id] = childrenOf[o.id] || []; });

    OS_DATA.forEach(o => {
      const parentId = resolveParent(o.base);
      if(parentId === null){
        roots.push(o.id);
      } else {
        childrenOf[parentId] = childrenOf[parentId] || [];
        childrenOf[parentId].push(o.id);
      }
    });

    function getNode(id){
      if(id.startsWith('synth:')){
        const k = id.slice(6);
        return synthNodes[k];
      }
      return byId[id];
    }

    // dédoublonne les roots (un synth peut avoir été ajouté avant d'avoir des enfants)
    const uniqRoots = [...new Set(roots)];

    return {getNode, childrenOf, roots: uniqRoots, byId, synthNodes};
  }

  window.OSARIUM_TREE = { buildTree };
})();

/* ---------- Rendu DOM + recherche ---------- */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const root = document.getElementById('atreeRoot');
    if(!root || !window.OS_DATA || !window.OSARIUM_TREE) return;

    const tree = window.OSARIUM_TREE.buildTree(window.OS_DATA);

    function countDesc(id){
      let c = 0;
      (tree.childrenOf[id] || []).forEach(ch => { c += 1 + countDesc(ch); });
      return c;
    }

    const familyRoots = tree.roots.filter(r => (tree.childrenOf[r]||[]).length > 0)
      .sort((a,b) => countDesc(b) - countDesc(a));
    const soloRoots = tree.roots.filter(r => (tree.childrenOf[r]||[]).length === 0);

    function esc(s){ return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

    function renderChildren(ids){
      const ul = document.createElement('ul');
      ul.className = 'achildren';
      ids.forEach(id => ul.appendChild(renderNode(id)));
      return ul;
    }

    function renderNode(id){
      const node = tree.getNode(id);
      const kids = tree.childrenOf[id] || [];
      const isSynth = !!node.synthetic;
      const name = isSynth ? node.label : node.name;
      const color = isSynth ? null : node.color;

      if(kids.length === 0){
        const li = document.createElement('li');
        li.dataset.name = name.toLowerCase();
        const a = document.createElement('a');
        a.className = 'leaf';
        a.href = isSynth ? '#' : ('os.html?id=' + encodeURIComponent(node.id));
        if(isSynth) a.removeAttribute('href');
        a.innerHTML = (color ? `<span class="swatch" style="background:${color}"></span>` : '<span class="swatch" style="background:var(--muted-2)"></span>')
          + `<span class="nm">${esc(name)}</span>`
          + (!isSynth && node.diff ? `<span class="badge">${esc(node.diff)}</span>` : '');
        li.appendChild(a);
        return li;
      }

      const li = document.createElement('li');
      li.dataset.name = name.toLowerCase();
      const details = document.createElement('details');
      details.className = 'anode';
      details.dataset.synth = isSynth ? '1' : '0';

      const summary = document.createElement('summary');
      summary.innerHTML = `<span class="car">▸</span>`
        + (color ? `<span class="swatch" style="background:${color}"></span>` : '<span class="swatch" style="background:var(--muted-2)"></span>')
        + `<span class="nm">${esc(name)}${isSynth && node.tag ? `<small>${esc(node.tag)}</small>` : ''}</span>`
        + `<span class="cnt">${countDesc(id)} dérivé${countDesc(id)>1?'s':''}</span>`
        + (!isSynth ? `<a class="go" href="os.html?id=${encodeURIComponent(node.id)}">Voir la fiche →</a>` : '');
      // empêche le lien "voir la fiche" de (dé)plier l'accordéon
      summary.addEventListener('click', function(e){
        if(e.target.closest('.go')) e.stopPropagation();
      });

      details.appendChild(summary);
      details.appendChild(renderChildren(kids));
      li.appendChild(details);
      return li;
    }

    // ----- familles -----
    const fUl = document.createElement('ul');
    fUl.className = 'atree';
    familyRoots.forEach(id => fUl.appendChild(renderNode(id)));
    root.appendChild(fUl);

    // ----- indépendants -----
    const indepWrap = document.getElementById('atreeIndep');
    if(indepWrap && soloRoots.length){
      soloRoots
        .sort((a,b) => tree.getNode(a).name.localeCompare(tree.getNode(b).name))
        .forEach(id => {
          const o = tree.getNode(id);
          const chip = document.createElement('a');
          chip.className = 'aindep-chip';
          chip.href = 'os.html?id=' + encodeURIComponent(o.id);
          chip.dataset.name = o.name.toLowerCase();
          chip.innerHTML = `<span class="swatch" style="background:${o.color||'var(--muted-2)'}"></span>${esc(o.name)}`;
          indepWrap.appendChild(chip);
        });
    }

    // ----- expand/collapse -----
    const expandAllBtn = document.getElementById('arbreExpandAll');
    const collapseAllBtn = document.getElementById('arbreCollapseAll');
    if(expandAllBtn) expandAllBtn.addEventListener('click', () => {
      root.querySelectorAll('details.anode').forEach(d => d.open = true);
    });
    if(collapseAllBtn) collapseAllBtn.addEventListener('click', () => {
      root.querySelectorAll('details.anode').forEach(d => d.open = false);
    });

    // ----- recherche -----
    const input = document.getElementById('arbreSearch');
    const emptyMsg = document.getElementById('arbreEmpty');
    if(input){
      input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        let anyVisible = false;

        // items indépendants
        if(indepWrap){
          indepWrap.querySelectorAll('.aindep-chip').forEach(chip => {
            const match = !q || chip.dataset.name.includes(q);
            chip.classList.toggle('hide', !match);
            if(match) anyVisible = true;
          });
        }

        // arbre : on marque chaque <li> selon si lui-même OU un descendant matche
        function markLi(li){
          const details = li.querySelector(':scope > details.anode');
          const leaf = li.querySelector(':scope > a.leaf');
          const selfMatch = !q || (li.dataset.name && li.dataset.name.includes(q));
          let childMatch = false;
          if(details){
            const childUl = details.querySelector(':scope > ul.achildren');
            if(childUl){
              [...childUl.children].forEach(childLi => {
                if(markLi(childLi)) childMatch = true;
              });
            }
          }
          const visible = selfMatch || childMatch;
          li.classList.toggle('hide', !visible);
          if(visible && q && childMatch && details) details.open = true;
          if(visible) anyVisible = true;
          return visible;
        }
        fUl.querySelectorAll(':scope > li').forEach(markLi);

        if(emptyMsg) emptyMsg.classList.toggle('on', !anyVisible);
      });
    }
  });
})();
