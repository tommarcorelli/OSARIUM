/* ============ DETAIL PAGE (os.html) ============ */
(function () {
  const data = window.OS_DATA, cats = window.OS_CATS;
  const id = new URLSearchParams(location.search).get('id');
  const idx = data.findIndex((o) => o.id === id);
  const os = data[idx];
  const app = document.getElementById('app');

  if (!os) {
    app.innerHTML = `<div class="detail-hero"><h1 class="disp">404</h1><p class="tagline">Système introuvable. <a href="index.html" style="color:var(--amber)">Retour au menu →</a></p></div>`;
    return;
  }

  if (window.Recent) window.Recent.record(os.id);

  document.title = `${os.name} — Guide d'installation — OSARIUM`;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.setAttribute('name', 'description'); document.head.appendChild(metaDesc); }
  metaDesc.setAttribute('content', `${os.tag} Guide d'installation ${os.name} étape par étape (${os.time}, niveau ${os.diff}).`);
  document.documentElement.style.setProperty('--c', os.color);
  document.getElementById('crumb').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(data.length).padStart(2, '0');

  const prev = data[(idx - 1 + data.length) % data.length];
  const next = data[(idx + 1) % data.length];

  app.innerHTML = `
    <section class="detail-hero" style="--c:${os.color}">
      <div class="glowbg"></div>
      <div class="row">
        <div class="biglogo">${logoInner(os, { size: 56, lazy: false })}</div>
        <div>
          <div class="eyebrow"><span class="n">${String(idx + 1).padStart(2, '0')}</span> ${cats[os.cat].label}</div>
          <h1 class="disp">${os.name}</h1>
        </div>
        <div class="detail-actions">
          <button class="icon-btn" id="favBtn" data-testid="favorite-toggle" title="Ajouter aux favoris"></button>
          <button class="icon-btn" id="shareBtn" data-testid="share-button" title="Copier le lien">⇱</button>
        </div>
      </div>
      <p class="tagline">${os.tag}</p>
      <div class="detail-meta">
        <span class="pill mono">VERSION · <b>${os.version}</b></span>
        <span class="pill mono">DURÉE · <b>${os.time}</b></span>
        <span class="pill mono">NIVEAU · <b>${os.diff}</b></span>
        <span class="pill mono">BASE · <b>${os.base === '—' ? 'indépendant' : os.base}</b></span>
        <span class="pill mono">ÉTAPES · <b>${os.steps.length}</b></span>
        ${os.license ? `<span class="pill mono">LICENCE · <b>${os.license}</b></span>` : ''}
        ${os.site ? `<a class="pill mono pill-link" href="https://${os.site}" target="_blank" rel="noopener">SITE OFFICIEL · <b>${os.site} ↗</b></a>` : ''}
      </div>
    </section>
    ${os.req ? `
    <section class="req-block">
      <div class="req-title mono">CONFIG MINIMALE</div>
      <div class="req-grid">
        ${os.req.cpu ? `<div class="req-item"><span class="req-k">Processeur</span><span class="req-v">${os.req.cpu}</span></div>` : ''}
        ${os.req.ram ? `<div class="req-item"><span class="req-k">Mémoire</span><span class="req-v">${os.req.ram}</span></div>` : ''}
        ${os.req.disk ? `<div class="req-item"><span class="req-k">Stockage</span><span class="req-v">${os.req.disk}</span></div>` : ''}
      </div>
    </section>` : ''}
    <div class="steps">
      <section class="ckl-panel" data-testid="install-progress">
        <div class="ckl-head">
          <div>
            <div class="ckl-title mono">Progression de l'installation</div>
            <p class="ckl-sub">Coche les étapes au fur et à mesure : la progression est conservée sur cet appareil, tu peux fermer la page et revenir.</p>
          </div>
          <div class="ckl-count mono" id="cklCount"></div>
        </div>
        <div class="ckl-bar"><span id="cklFill"></span></div>
        <div class="ckl-foot">
          <span class="ckl-done-msg mono" id="cklDoneMsg">✓ Toutes les étapes sont faites — bonne installation.</span>
          <button class="ckl-reset" id="cklReset" type="button">Réinitialiser la progression</button>
        </div>
      </section>
      ${os.steps.map((s, i) => `
        <div class="step rv" style="--c:${os.color}" data-step="${i}">
          <div class="num disp">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <h4 class="disp">${s.t}</h4>
            <p>${s.d}</p>
            ${s.code ? `<div class="code"><span>${s.code.replace(/</g, '&lt;')}</span><button class="copy" data-code="${encodeURIComponent(s.code)}">Copier</button></div>` : ''}
            <label class="ckl-check">
              <input type="checkbox" data-step-check="${i}" data-testid="step-check-${i}">
              <span class="ckl-check-label">Étape terminée</span>
            </label>
          </div>
        </div>`).join('')}
    </div>
    ${os.errors && os.errors.length ? `
    <section class="err-block">
      <div class="sec-head" style="padding:0 clamp(20px,5vw,64px);max-width:1000px;margin:0 auto 24px;">
        <div class="eyebrow"><span class="n">⚠</span> Erreurs fréquentes</div>
      </div>
      <div class="err-list">
        ${os.errors.map((er, i) => `
          <div class="err-item">
            <button class="err-q" data-i="${i}"><span>${er.q}</span><span class="err-plus">+</span></button>
            <div class="err-a"><p>${er.a}</p></div>
          </div>`).join('')}
      </div>
    </section>` : ''}
    ${os.faq && os.faq.length ? `
    <section class="faq-block">
      <div class="sec-head" style="padding:0 clamp(20px,5vw,64px);max-width:1000px;margin:0 auto 24px;">
        <div class="eyebrow"><span class="n">FAQ</span> Questions fréquentes</div>
      </div>
      <div class="faq-list">
        ${os.faq.map((f, i) => `
          <div class="faq-item">
            <button class="faq-q" data-i="${i}"><span>${f.q}</span><span class="faq-plus">+</span></button>
            <div class="faq-a"><p>${f.a}</p></div>
          </div>`).join('')}
      </div>
    </section>` : ''}
    ${os.alt && os.alt.length ? (() => {
      const alts = os.alt.map((aid) => data.find((o) => o.id === aid)).filter(Boolean);
      if (!alts.length) return '';
      return `
    <section class="alt-block">
      <div class="sec-head" style="padding:0 clamp(20px,5vw,64px);max-width:1000px;margin:0 auto 24px;">
        <div class="eyebrow"><span class="n">≈</span> Systèmes similaires</div>
      </div>
      <div class="alt-grid">
        ${alts.map((a) => `
          <a class="alt-card" href="os.html?id=${a.id}" style="--c:${a.color}">
            <div class="logo">${logoInner(a, { size: 26, lazy: true })}</div>
            <div>
              <h5 class="disp">${a.name}</h5>
              <p class="mono">${cats[a.cat].label} · ${a.diff}</p>
            </div>
          </a>`).join('')}
      </div>
    </section>`;
    })() : ''}
    <nav class="pager">
      <a class="prev" href="os.html?id=${prev.id}"><span class="lbl">← Précédent</span>${prev.name}</a>
      <a class="next" href="os.html?id=${next.id}"><span class="lbl">Suivant →</span>${next.name}</a>
    </nav>`;

  /* ============ checklist de progression ============ */
  (function initChecklist() {
    if (!window.StepProgress) return;
    const total = os.steps.length;
    const fill = document.getElementById('cklFill');
    const countEl = document.getElementById('cklCount');
    const panel = app.querySelector('.ckl-panel');
    const boxes = Array.from(app.querySelectorAll('[data-step-check]'));

    function sync() {
      const done = window.StepProgress.get(os.id).filter((i) => i < total);
      boxes.forEach((box) => {
        const i = Number(box.dataset.stepCheck);
        const isDone = done.includes(i);
        box.checked = isDone;
        box.closest('.step').classList.toggle('step-done', isDone);
      });
      const pct = total ? Math.round((done.length / total) * 100) : 0;
      fill.style.width = pct + '%';
      countEl.textContent = `${done.length} / ${total} étapes`;
      panel.classList.toggle('ckl-complete', done.length === total && total > 0);
      panel.classList.toggle('ckl-started', done.length > 0);
    }

    boxes.forEach((box) => box.addEventListener('change', () => {
      window.StepProgress.toggle(os.id, Number(box.dataset.stepCheck));
      sync();
    }));

    document.getElementById('cklReset').addEventListener('click', () => {
      window.StepProgress.reset(os.id);
      sync();
    });

    sync();
  })();

  /* FAQ accordion */
  app.querySelectorAll('.faq-q').forEach((btn) => btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  }));

  /* Erreurs fréquentes accordion */
  app.querySelectorAll('.err-q').forEach((btn) => btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  }));

  /* favoris + partage */
  const favBtn = document.getElementById('favBtn');
  const syncFavBtn = () => {
    const isFav = window.Favorites && window.Favorites.has(os.id);
    favBtn.textContent = isFav ? '★' : '☆';
    favBtn.classList.toggle('active', !!isFav);
    favBtn.title = isFav ? 'Retirer des favoris' : 'Ajouter aux favoris';
  };
  syncFavBtn();
  favBtn.addEventListener('click', () => {
    if (!window.Favorites) return;
    window.Favorites.toggle(os.id);
    syncFavBtn();
  });

  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', async () => {
    const url = location.href;
    try {
      if (navigator.share) { await navigator.share({ title: `${os.name} — OSARIUM`, url }); return; }
      await navigator.clipboard.writeText(url);
    } catch (e) {
      try {
        const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      } catch (e2) {}
    }
    shareBtn.textContent = '✓'; setTimeout(() => { shareBtn.textContent = '⇱'; }, 1600);
  });

  /* copy buttons */
  app.querySelectorAll('.copy').forEach((btn) => btn.addEventListener('click', async () => {
    const code = decodeURIComponent(btn.dataset.code);
    try { await navigator.clipboard.writeText(code); } catch (e) {
      const ta = document.createElement('textarea'); ta.value = code; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    btn.textContent = 'Copié ✓'; btn.classList.add('done');
    setTimeout(() => { btn.textContent = 'Copier'; btn.classList.remove('done'); }, 1600);
  }));

  observeReveals();
  armRevealSafetyNet();

  /* smooth scroll + progress (no nav/orb on this page) */
  initScroll();
})();
