/* ============ TOOL DETAIL PAGE (tool.html) ============ */
(function () {
  const data = window.TOOLS_DATA;
  const id = new URLSearchParams(location.search).get('id');
  const idx = data.findIndex((t) => t.id === id);
  const tool = data[idx];
  const app = document.getElementById('app');

  if (!tool) {
    app.innerHTML = `<div class="detail-hero"><h1 class="disp">404</h1><p class="tagline">Outil introuvable. <a href="index.html#prep" style="color:var(--amber)">Retour au menu →</a></p></div>`;
    return;
  }

  document.title = `${tool.name} — Guide — OSARIUM`;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.setAttribute('name', 'description'); document.head.appendChild(metaDesc); }
  metaDesc.setAttribute('content', `${tool.tag} Guide d'utilisation de ${tool.name} étape par étape.`);
  document.documentElement.style.setProperty('--c', tool.color);
  document.getElementById('crumb').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(data.length).padStart(2, '0');

  const prev = data[(idx - 1 + data.length) % data.length];
  const next = data[(idx + 1) % data.length];
  const letter = tool.name.replace(/^[^A-Za-z]+/, '').charAt(0).toUpperCase();

  app.innerHTML = `
    <section class="detail-hero" style="--c:${tool.color}">
      <div class="glowbg"></div>
      <div class="row">
        <div class="biglogo"><span class="mg">${letter}</span></div>
        <div>
          <div class="eyebrow"><span class="n">${String(idx + 1).padStart(2, '0')}</span> ${tool.category}</div>
          <h1 class="disp">${tool.name}</h1>
        </div>
        <div class="detail-actions">
          <button class="icon-btn" id="shareBtn" data-testid="share-button" title="Copier le lien">⇱</button>
        </div>
      </div>
      <p class="tagline">${tool.tag}</p>
      <div class="detail-meta">
        <span class="pill mono">DURÉE · <b>${tool.time}</b></span>
        <span class="pill mono">PLATEFORMES · <b>${tool.platforms.join(' · ')}</b></span>
        ${tool.site ? `<a class="pill mono pill-link" href="https://${tool.site}" target="_blank" rel="noopener">SITE OFFICIEL · <b>${tool.site} ↗</b></a>` : ''}
      </div>
      <p class="ideal-for"><b>Idéal pour :</b> ${tool.idealFor}</p>
    </section>

    <div class="proscons">
      <div class="proscons-col pros">
        <h4 class="disp">Avantages</h4>
        <ul>${tool.pros.map((p) => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="proscons-col cons">
        <h4 class="disp">Limites</h4>
        <ul>${tool.cons.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="steps">
      ${tool.steps.map((s, i) => `
        <div class="step rv" style="--c:${tool.color}">
          <div class="num disp">${String(i + 1).padStart(2, '0')}</div>
          <div>
            <h4 class="disp">${s.t}</h4>
            <p>${s.d}</p>
            ${s.code ? `<div class="code"><span>${s.code.replace(/</g, '&lt;')}</span><button class="copy" data-code="${encodeURIComponent(s.code)}">Copier</button></div>` : ''}
          </div>
        </div>`).join('')}
    </div>
    <nav class="pager">
      <a class="prev" href="tool.html?id=${prev.id}"><span class="lbl">← Précédent</span>${prev.name}</a>
      <a class="next" href="tool.html?id=${next.id}"><span class="lbl">Suivant →</span>${next.name}</a>
    </nav>`;

  /* partage */
  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', async () => {
    const url = location.href;
    try {
      if (navigator.share) { await navigator.share({ title: `${tool.name} — OSARIUM`, url }); return; }
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
  initScroll();
})();
