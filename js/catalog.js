/* ============ CATALOG (index.html) ============ */
const grid = document.getElementById('grid');
if (grid) {
  const cats = window.OS_CATS, data = window.OS_DATA;
  let activeCat = 'all', activeDiff = 'all', activeLicense = 'all', query = '', favOnly = false, sortMode = 'default';
  let hwActive = false, hwRamMB = null, hwHideIncompatible = false;
  const compare = [];

  /* dynamic counts in header */
  const countEl = document.getElementById('count');
  if (countEl) countEl.textContent = data.length;
  const kickCountEl = document.getElementById('kickCount');
  if (kickCountEl) kickCountEl.textContent = data.length;

  /* accent-insensitive normalize, used for search */
  const norm = (s) => (s || '').toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  /* ============ INDEX DE RECHERCHE ============
     La recherche ne couvrait que nom, description, base et cat\u00e9gorie :
     chercher \u00ab TPM \u00bb, \u00ab Secure Boot \u00bb ou \u00ab chiffrement \u00bb ne remontait rien
     alors que ces termes sont \u00e9crits dans les \u00e9tapes, les erreurs fr\u00e9quentes
     et les FAQ. On indexe donc aussi le contenu des guides.

     Deux champs distincts : une correspondance dans le titre n'a pas le m\u00eame
     sens qu'une correspondance en page 3 d'une FAQ, et l'affichage le signale.
     L'index est construit une fois au chargement \u2014 le recalculer \u00e0 chaque
     frappe sur 170 fiches serait inutilement co\u00fbteux. */
  const searchIndex = new Map();
  data.forEach((os) => {
    const surface = [os.name, os.tag, os.base, os.version, cats[os.cat].label, os.license].join(' ');
    const deep = [
      ...os.steps.map((s) => `${s.t} ${s.d} ${s.code || ''}`),
      ...(os.errors || []).map((e) => `${e.q} ${e.a}`),
      ...(os.faq || []).map((f) => `${f.q} ${f.a}`),
      os.req ? `${os.req.cpu} ${os.req.ram} ${os.req.disk}` : '',
    ].join(' ');
    searchIndex.set(os.id, { surface: norm(surface), deep: norm(deep) });
  });

  /* 'surface' | 'deep' | null */
  function matchKind(os) {
    if (!query) return null;
    const ix = searchIndex.get(os.id);
    if (ix.surface.includes(query)) return 'surface';
    if (ix.deep.includes(query)) return 'deep';
    return null;
  }

  /* ============ \u00c9TAT DANS L'URL ============
     Recherche, filtres, tri et comparateur sont refl\u00e9t\u00e9s dans la barre
     d'adresse : un lien devient partageable et rejouable tel quel.
     Les licences sont raccourcies en codes courts pour rester lisibles. */
  let rawQuery = '';
  let urlReady = false; // pas d'\u00e9criture avant la lecture initiale
  const LICENSE_CODES = { libre: 'Libre / Open-source', proprio: 'Propri\u00e9taire' };
  const licenseToCode = (v) => Object.keys(LICENSE_CODES).find((k) => LICENSE_CODES[k] === v);
  const SORT_MODES = ['default', 'name', 'diff', 'time', 'popular'];
  const DIFFS = ['Facile', 'Interm\u00e9diaire', 'Avanc\u00e9', 'Expert'];

  function buildParams() {
    const p = new URLSearchParams();
    if (rawQuery) p.set('q', rawQuery);
    if (activeCat !== 'all') p.set('cat', activeCat);
    if (activeDiff !== 'all') p.set('diff', activeDiff);
    if (activeLicense !== 'all') p.set('lic', licenseToCode(activeLicense) || activeLicense);
    if (sortMode !== 'default') p.set('sort', sortMode);
    if (favOnly) p.set('fav', '1');
    if (hwActive && hwRamMB) {
      p.set('ram', String(hwRamMB));
      if (hwHideIncompatible) p.set('hide', '1');
    }
    if (compare.length) p.set('cmp', compare.join(','));
    return p;
  }

  function syncURL() {
    if (!urlReady) return;
    const qs = buildParams().toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }

  function shareURL() {
    const qs = buildParams().toString();
    return location.origin + location.pathname + (qs ? '?' + qs : '');
  }

  function applyURL() {
    const p = new URLSearchParams(location.search);

    const q = p.get('q');
    if (q) { rawQuery = q; query = norm(q.trim()); searchEl.value = q; }

    const cat = p.get('cat');
    if (cat && cats[cat]) {
      activeCat = cat;
      filtersEl.querySelectorAll('.chip').forEach((x) => {
        const on = x.dataset.cat === cat;
        x.classList.toggle('on', on);
        x.setAttribute('aria-pressed', String(on));
      });
    }

    const diff = p.get('diff');
    if (DIFFS.includes(diff)) { activeDiff = diff; if (diffSelect) diffSelect.value = diff; }

    const lic = p.get('lic');
    if (lic && LICENSE_CODES[lic]) { activeLicense = LICENSE_CODES[lic]; if (licenseSelect) licenseSelect.value = activeLicense; }

    const sort = p.get('sort');
    if (SORT_MODES.includes(sort)) { sortMode = sort; if (sortSelect) sortSelect.value = sort; }

    if (p.get('fav') === '1' && favChip) { favOnly = true; favChip.classList.add('on'); favChip.setAttribute('aria-pressed', 'true'); }

    const ram = Number(p.get('ram'));
    if (RAM_OPTIONS.some(([v]) => v === ram)) {
      hwActive = true; hwRamMB = ram; hwHideIncompatible = p.get('hide') === '1';
      updateHwChip();
    }

    const cmp = p.get('cmp');
    if (cmp) {
      cmp.split(',').forEach((id) => {
        if (compare.length < 4 && !compare.includes(id) && data.some((o) => o.id === id)) compare.push(id);
      });
      if (compare.length) renderBar();
    }

    urlReady = true;
  }

  /* filters (category chips) */
  const filtersEl = document.getElementById('filters');
  filtersEl.innerHTML = Object.entries(cats).map(([k, v]) =>
    `<button class="chip${k === 'all' ? ' on' : ''}" data-cat="${k}" data-testid="filter-${k}" aria-pressed="${k === 'all'}">${v.label}</button>`).join('');
  filtersEl.querySelectorAll('.chip').forEach((c) => c.addEventListener('click', () => {
    filtersEl.querySelectorAll('.chip').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
    c.classList.add('on'); c.setAttribute('aria-pressed', 'true'); activeCat = c.dataset.cat; render(); syncURL();
  }));

  /* La saisie déclenchait un filtre + un re-rendu complet de la grille à
     CHAQUE frappe. Sur une frappe rapide (ou sur un clavier tactile qui
     envoie les événements en rafale), ça empile des rendus jetés aussitôt
     que le suivant arrive. Un court debounce (durée d'une frappe humaine
     normale, imperceptible) laisse la saisie se stabiliser avant de
     recalculer — un seul rendu par pause au lieu d'un par caractère. */
  const searchEl = document.getElementById('search');
  let searchDebounce = null;
  searchEl.addEventListener('input', (e) => {
    rawQuery = e.target.value;
    query = norm(rawQuery.trim());
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => { render(); syncURL(); }, 90);
  });

  /* difficulty + sort selects */
  const diffSelect = document.getElementById('diffSelect');
  if (diffSelect) diffSelect.addEventListener('change', (e) => { activeDiff = e.target.value; render(); syncURL(); });
  const licenseSelect = document.getElementById('licenseSelect');
  if (licenseSelect) licenseSelect.addEventListener('change', (e) => { activeLicense = e.target.value; render(); syncURL(); });
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', (e) => { sortMode = e.target.value; render(); syncURL(); });

  /* favorites chip */
  const favChip = document.getElementById('favChip');
  if (favChip) favChip.addEventListener('click', () => {
    favOnly = !favOnly;
    favChip.classList.toggle('on', favOnly);
    favChip.setAttribute('aria-pressed', String(favOnly));
    render(); syncURL();
  });

  /* "Expert" existe bien dans data.js (7 systèmes : Arch, Gentoo, NixOS, Qubes,
     BlackArch, Parabola, Hyperbola). Sans lui ici, le tri par difficulté
     produisait NaN et le wizard leur attribuait un score NaN. */
  const diffRank = { 'Facile': 0, 'Intermédiaire': 1, 'Avancé': 2, 'Expert': 3 };

  function hwBadgeHTML(os) {
    if (!hwActive) return '';
    const st = window.HwCheck.status(os, hwRamMB);
    if (st === 'ok') return '<span class="badge badge-hw-ok">✓ Compatible RAM</span>';
    if (st === 'tight') return '<span class="badge badge-hw-tight">≈ RAM limite</span>';
    if (st === 'no') return '<span class="badge badge-hw-no">✕ RAM insuffisante</span>';
    return '';
  }

  function cardHTML(os) {
    const added = compare.includes(os.id);
    const isFav = window.Favorites ? window.Favorites.has(os.id) : false;
    const badges = [
      os.popular ? '<span class="badge badge-pop">★ Populaire</span>' : '',
      os.isNew ? '<span class="badge badge-new">✦ Nouveau</span>' : '',
      hwBadgeHTML(os),
      /* le terme n'apparaît ni dans le nom ni dans la description : on le dit,
         sinon la carte semble arriver dans les résultats sans raison */
      matchKind(os) === 'deep' ? '<span class="badge badge-deep" title="Le terme recherché apparaît dans les étapes, les erreurs fréquentes ou la FAQ de ce guide">≡ Trouvé dans le guide</span>' : '',
    ].join('');
    /* Le titre porte le vrai lien (étiré sur toute la carte via .card-link::after) :
       la carte reste cliquable en entier tout en devenant navigable au clavier,
       ouvrable en nouvel onglet et lisible par un lecteur d'écran. Les deux
       boutons ★ / + passent au-dessus grâce à leur z-index. */
    return `<article class="card rv" style="--c:${os.color}" data-id="${os.id}" data-testid="os-card-${os.id}">
      <button type="button" class="fav ${isFav ? 'added' : ''}" data-fav="${os.id}" aria-pressed="${isFav}"
        aria-label="${isFav ? 'Retirer' : 'Ajouter'} ${os.name} ${isFav ? 'des' : 'aux'} favoris"
        title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${isFav ? '★' : '☆'}</button>
      <button type="button" class="cmp ${added ? 'added' : ''}" data-cmp="${os.id}" aria-pressed="${added}"
        aria-label="${added ? 'Retirer' : 'Ajouter'} ${os.name} ${added ? 'du' : 'au'} comparateur"
        title="${added ? 'Retirer du comparateur' : 'Ajouter au comparateur'}">${added ? '✓' : '+'}</button>
      <div class="card-top">
        <div class="logo">${logoInner(os, { size: 30, lazy: true })}</div>
        <span class="cat">${cats[os.cat].label}</span>
      </div>
      ${badges ? `<div class="badges">${badges}</div>` : ''}
      <h3 class="disp"><a class="card-link" href="os.html?id=${os.id}">${os.name}</a></h3>
      <div class="ver mono">${os.version} · ${os.base !== '—' ? 'base ' + os.base : 'indépendant'}</div>
      <p class="desc">${os.tag}</p>
      <div class="card-foot">
        <span>${os.time} · ${os.diff}</span>
        <span class="go">OUVRIR <span>→</span></span>
      </div>
    </article>`;
  }

  function render() {
    let list = data.filter((os) => {
      const okCat = activeCat === 'all' || os.cat === activeCat;
      const okDiff = activeDiff === 'all' || os.diff === activeDiff;
      const okLicense = activeLicense === 'all' || os.license === activeLicense;
      const okFav = !favOnly || (window.Favorites && window.Favorites.has(os.id));
      const okQ = !query || matchKind(os) !== null;
      const okHw = !hwActive || !hwHideIncompatible || window.HwCheck.status(os, hwRamMB) !== 'no';
      return okCat && okDiff && okLicense && okFav && okQ && okHw;
    });

    /* En tri par défaut, une correspondance sur le nom ou la description passe
       devant une correspondance trouvée au fond d'un guide. */
    if (query && sortMode === 'default') {
      list = [...list].sort((a, b) => (matchKind(a) === 'deep') - (matchKind(b) === 'deep'));
    }

    if (sortMode === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sortMode === 'diff') list = [...list].sort((a, b) => diffRank[a.diff] - diffRank[b.diff]);
    else if (sortMode === 'time') list = [...list].sort((a, b) => (parseInt(a.time) || 0) - (parseInt(b.time) || 0));
    else if (sortMode === 'popular') list = [...list].sort((a, b) => (b.popular === true) - (a.popular === true));

    grid.innerHTML = list.length ? list.map(cardHTML).join('')
      : `<div class="no-result">// aucun système ne correspond à ces critères${favOnly ? ' (essaie de retirer le filtre Favoris)' : ''}${hwActive && hwHideIncompatible ? ' (essaie de retirer le filtre matériel)' : ''}</div>`;
    observeReveals();
  }

  /* render() reconstruit toute la grille : sans ça, activer ★ ou + au clavier
     renverrait le focus sur <body> et ferait perdre sa place dans la liste. */
  function refocus(selector) {
    const el = grid.querySelector(selector);
    if (el) el.focus();
  }

  /* ============ DÉLÉGATION D'ÉVÉNEMENTS ============
     Auparavant, bindCards() reposait un addEventListener sur CHAQUE bouton
     ★ et + après CHAQUE render() — donc à chaque frappe dans la recherche,
     chaque clic de filtre, chaque tri. Sur 170 fiches ça fait des centaines
     de listeners recréés pour rien à chaque rendu. Un seul listener, posé une
     fois sur le conteneur, capte les clics de tous les boutons présents et
     futurs via closest() — le DOM peut être entièrement remplacé sans jamais
     rebrancher quoi que ce soit.
     Pas de handler sur la carte elle-même : c'est .card-link (lien étiré) qui
     gère la navigation, y compris au clavier et au clic milieu. */
  grid.addEventListener('click', (e) => {
    const cmpBtn = e.target.closest('.cmp');
    if (cmpBtn) {
      e.stopPropagation();
      const id = cmpBtn.dataset.cmp;
      toggleCompare(id);
      refocus(`.cmp[data-cmp="${id}"]`);
      return;
    }
    const favBtn = e.target.closest('.fav');
    if (favBtn) {
      e.stopPropagation();
      if (!window.Favorites) return;
      const id = favBtn.dataset.fav;
      window.Favorites.toggle(id);
      render();
      refocus(`.fav[data-fav="${id}"]`);
    }
  });

  /* comparator */
  const bar = document.getElementById('cmpBar'), slots = document.getElementById('cmpSlots');
  function toggleCompare(id) {
    const i = compare.indexOf(id);
    if (i > -1) compare.splice(i, 1);
    else {
      if (compare.length >= 4) { window.Toast.warn('Le comparateur accepte 4 systèmes au maximum — retires-en un pour en ajouter un autre.'); return; }
      compare.push(id);
    }
    render(); renderBar(); syncURL();
  }
  function renderBar() {
    bar.classList.toggle('show', compare.length > 0);
    slots.innerHTML = compare.map((id) => {
      const os = data.find((o) => o.id === id);
      return `<span class="cmp-slot" style="--c:${os.color}"><span class="dot"></span>${os.name}<button type="button" class="x" data-x="${id}" aria-label="Retirer ${os.name} du comparateur" title="Retirer du comparateur">✕</button></span>`;
    }).join('');
    slots.querySelectorAll('.x').forEach((x) => x.addEventListener('click', () => toggleCompare(x.dataset.x)));
  }
  document.getElementById('cmpClear').addEventListener('click', () => { compare.length = 0; render(); renderBar(); syncURL(); });

  const modal = document.getElementById('modal');
  document.getElementById('cmpOpen').addEventListener('click', () => {
    if (compare.length < 2) { window.Toast.warn('Ajoute au moins 2 systèmes pour lancer une comparaison.'); return; }
    const os = compare.map((id) => data.find((o) => o.id === id));
    const rows = [
      ['Version', (o) => o.version],
      ['Catégorie', (o) => cats[o.cat].label],
      ['Base', (o) => o.base === '—' ? 'indépendant' : o.base],
      ['Licence', (o) => o.license || '—'],
      ['Durée', (o) => o.time],
      ['Difficulté', (o) => o.diff],
      ['Étapes', (o) => o.steps.length],
      ['RAM min.', (o) => o.req && o.req.ram ? o.req.ram : '—'],
      ['En bref', (o) => o.tag],
    ];
    document.getElementById('cmpTableWrap').innerHTML =
      `<table class="cmp-table"><thead><tr><th></th>${os.map((o) => `<th style="color:${o.color}">${o.name}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(([k, fn]) => `<tr><td class="k">${k}</td>${os.map((o) => `<td>${fn(o)}</td>`).join('')}</tr>`).join('')}</tbody></table>
      <div class="cmp-actions"><button class="btn" id="cmpShare" data-testid="compare-share">🔗 Copier le lien de cette comparaison</button></div>`;
    document.getElementById('cmpShare').addEventListener('click', async () => {
      const url = shareURL();
      try { await navigator.clipboard.writeText(url); } catch (e) {
        const ta = document.createElement('textarea'); ta.value = url;
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e2) {}
        ta.remove();
      }
      window.Toast.ok('Lien copié — il rouvrira le catalogue avec ces systèmes déjà comparés.');
    });
    modal.classList.add('show'); document.body.classList.add('lock');
  });
  const closeModal = () => { modal.classList.remove('show'); document.body.classList.remove('lock'); };
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  /* ============ WIZARD "Trouve-moi un OS" ============ */
  const wizardModal = document.getElementById('wizardModal');
  const wizardBody = document.getElementById('wizardBody');
  const wizardOpenBtn = document.getElementById('wizardOpen');
  const wizardCloseBtn = document.getElementById('wizardClose');
  const openWizard = () => { wizardModal.classList.add('show'); document.body.classList.add('lock'); renderWizardStep(); };
  const closeWizard = () => { wizardModal.classList.remove('show'); document.body.classList.remove('lock'); };
  if (wizardOpenBtn) wizardOpenBtn.addEventListener('click', openWizard);
  if (wizardCloseBtn) wizardCloseBtn.addEventListener('click', closeWizard);
  wizardModal.addEventListener('click', (e) => { if (e.target === wizardModal) closeWizard(); });

  const wizardQuestions = [
    {
      q: 'Quel est ton usage principal ?',
      key: 'cat',
      opts: [
        ['Bureautique & usage quotidien', 'desktop'],
        ['Gaming', 'gaming'],
        ['Serveur / hébergement', 'server'],
        ['Sécurité & vie privée', 'security'],
        ['Redonner vie à un vieux PC', 'lightweight'],
        ['Bidouille & apprentissage avancé', 'advanced'],
      ],
    },
    {
      q: 'Ton niveau technique ?',
      key: 'diff',
      opts: [
        ['Débutant', 'Facile'],
        ['À l’aise avec l’informatique', 'Intermédiaire'],
        ['Avancé / power user', 'Avancé'],
      ],
    },
    {
      q: 'Tu préfères...',
      key: 'popular',
      opts: [
        ['Une valeur sûre, très utilisée', true],
        ['Explorer quelque chose de plus confidentiel', false],
      ],
    },
  ];
  const wizardAnswers = {};
  let wizardStep = 0;

  function renderWizardStep() {
    if (wizardStep >= wizardQuestions.length) { renderWizardResult(); return; }
    const step = wizardQuestions[wizardStep];
    wizardBody.innerHTML = `
      <div class="wizard-progress mono">Question ${wizardStep + 1} / ${wizardQuestions.length}</div>
      <h4 class="disp wizard-q">${step.q}</h4>
      <div class="wizard-opts">
        ${step.opts.map(([label, val], i) => `<button class="wizard-opt" data-i="${i}">${label}</button>`).join('')}
      </div>
      ${wizardStep > 0 ? '<button class="btn wizard-back" id="wizardBack">← Précédent</button>' : ''}
    `;
    wizardBody.querySelectorAll('.wizard-opt').forEach((btn) => btn.addEventListener('click', () => {
      wizardAnswers[step.key] = step.opts[Number(btn.dataset.i)][1];
      wizardStep++;
      renderWizardStep();
    }));
    const back = document.getElementById('wizardBack');
    if (back) back.addEventListener('click', () => { wizardStep--; renderWizardStep(); });
  }

  function renderWizardResult() {
    let candidates = data.filter((os) => os.cat === wizardAnswers.cat);
    if (!candidates.length) candidates = data.slice();
    const scored = candidates.map((os) => {
      let score = 0;
      if (os.diff === wizardAnswers.diff) score += 3;
      else score -= Math.abs(diffRank[os.diff] - diffRank[wizardAnswers.diff]);
      if (os.popular === wizardAnswers.popular) score += 2;
      return { os, score };
    }).sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 3).map((s) => s.os);

    wizardBody.innerHTML = `
      <div class="wizard-progress mono">Résultat</div>
      <h4 class="disp wizard-q">Nos recommandations pour toi</h4>
      <div class="wizard-results">
        ${top.map((os) => `
          <a class="wizard-result" href="os.html?id=${os.id}" style="--c:${os.color}">
            <div class="logo">${logoInner(os, { size: 26, lazy: false })}</div>
            <div>
              <h5 class="disp">${os.name}</h5>
              <p class="mono">${cats[os.cat].label} · ${os.diff} · ${os.time}</p>
              <p class="wizard-desc">${os.tag}</p>
            </div>
          </a>`).join('')}
      </div>
      <button class="btn wizard-back" id="wizardRestart">↻ Recommencer</button>
    `;
    document.getElementById('wizardRestart').addEventListener('click', () => {
      wizardStep = 0; Object.keys(wizardAnswers).forEach((k) => delete wizardAnswers[k]); renderWizardStep();
    });
  }

  /* ============ VÉRIFIER MON PC (hardware check) ============ */
  const hwModal = document.getElementById('hwModal');
  const hwBody = document.getElementById('hwBody');
  const hwOpenBtn = document.getElementById('hwOpen');
  const hwCloseBtn = document.getElementById('hwClose');
  const hwStatusChip = document.getElementById('hwStatusChip');

  const RAM_OPTIONS = [
    [512, '512 Mo'], [1024, '1 Go'], [2048, '2 Go'], [4096, '4 Go'],
    [8192, '8 Go'], [16384, '16 Go'], [32768, '32 Go ou plus'],
  ];

  function closestRamOption(gb) {
    if (!gb) return 4096;
    const mb = gb * 1024;
    let best = RAM_OPTIONS[0][0], bestDiff = Infinity;
    RAM_OPTIONS.forEach(([v]) => { const d = Math.abs(v - mb); if (d < bestDiff) { bestDiff = d; best = v; } });
    return best;
  }

  function ramLabel(mb) {
    const found = RAM_OPTIONS.find(([v]) => v === mb);
    return found ? found[1] : `${mb} Mo`;
  }

  function updateHwChip() {
    if (!hwStatusChip) return;
    if (!hwActive) { hwStatusChip.style.display = 'none'; return; }
    hwStatusChip.style.display = '';
    hwStatusChip.classList.add('on');
    hwStatusChip.textContent = `🖥️ ${ramLabel(hwRamMB)} · modifier ✕`;
  }
  if (hwStatusChip) hwStatusChip.addEventListener('click', openHwModal);

  function renderHwBody() {
    const det = window.HwCheck.detect();
    const preset = hwRamMB || closestRamOption(det.ramGB);
    hwBody.innerHTML = `
      <div class="hw-detect mono">
        ${det.ramSupported
          ? `RAM détectée par le navigateur : <b>~${det.ramGB} Go</b> (valeur arrondie, plafonnée à 8 Go par certains navigateurs)`
          : `RAM non détectable automatiquement sur ce navigateur (Firefox/Safari masquent cette info par confidentialité) — choisis-la ci-dessous.`}
        ${det.coresSupported ? `<br>Cœurs logiques détectés : <b>${det.cores}</b> (indicatif, non utilisé dans le filtre)` : ''}
      </div>
      <label class="hw-ram-label mono">RAM de ton appareil</label>
      <select class="select mono hw-select" id="hwRamSelect">
        ${RAM_OPTIONS.map(([v, l]) => `<option value="${v}" ${v === preset ? 'selected' : ''}>${l}</option>`).join('')}
      </select>
      <label class="hw-check-row">
        <input type="checkbox" id="hwHideBox" ${hwHideIncompatible ? 'checked' : ''}>
        Masquer les systèmes incompatibles dans le catalogue
      </label>
      <button class="btn solid" id="hwApply" style="margin-top:16px">Appliquer au catalogue →</button>
      ${hwActive ? '<button class="btn wizard-back" id="hwReset">Réinitialiser le filtre</button>' : ''}
      <p class="hw-note">Estimation indicative basée sur la RAM minimale de chaque fiche ; le CPU, le GPU et le stockage ne sont pas pris en compte.</p>
    `;
    document.getElementById('hwApply').addEventListener('click', () => {
      hwRamMB = Number(document.getElementById('hwRamSelect').value);
      hwHideIncompatible = document.getElementById('hwHideBox').checked;
      hwActive = true;
      closeHwModal();
      updateHwChip();
      render(); syncURL();
    });
    const resetBtn = document.getElementById('hwReset');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      hwActive = false; hwRamMB = null; hwHideIncompatible = false;
      closeHwModal();
      updateHwChip();
      render(); syncURL();
    });

    /* si on tourne dans l'appli desktop (Electron), remplace l'estimation
       navigateur par la RAM/CPU/GPU/disque réels dès qu'ils arrivent */
    window.HwCheck.detectDesktop().then((specs) => {
      if (!specs) return;
      const detectDiv = hwBody.querySelector('.hw-detect');
      if (detectDiv) {
        detectDiv.innerHTML = `Détection réelle (appli desktop) — RAM : <b>${specs.ramGB} Go</b> exacts`
          + (specs.cpu ? `<br>CPU : <b>${specs.cpu}</b>${specs.cores ? ` (${specs.cores} cœurs)` : ''}` : '')
          + (specs.gpu ? `<br>GPU : <b>${specs.gpu}</b>` : '')
          + (specs.disks && specs.disks.length ? `<br>Stockage : <b>${specs.disks.map((d) => `${d.name} — ${d.sizeGB} Go`).join(', ')}</b>` : '');
      }
      const sel = document.getElementById('hwRamSelect');
      if (sel && !hwRamMB) sel.value = String(closestRamOption(specs.ramGB));
    });
  }

  function openHwModal() { hwModal.classList.add('show'); document.body.classList.add('lock'); renderHwBody(); }
  function closeHwModal() { hwModal.classList.remove('show'); document.body.classList.remove('lock'); }
  if (hwOpenBtn) hwOpenBtn.addEventListener('click', openHwModal);
  if (hwCloseBtn) hwCloseBtn.addEventListener('click', closeHwModal);
  hwModal.addEventListener('click', (e) => { if (e.target === hwModal) closeHwModal(); });

  /* état éventuellement transmis par l'URL, puis premier rendu */
  applyURL();
  render();
  observeReveals();
  armRevealSafetyNet();

  /* smooth scroll + progress + nav state + hero parallax */
  initScroll({
    nav: document.getElementById('nav'),
    orb: document.getElementById('orb'),
  });
}
