/* ============ "QUEL OS POUR UN PC DE [ANNÉE] ?" ============
   Widget homepage : l'année choisie est convertie en RAM typique d'un PC
   grand public neuf à cette époque (palier historique, indicatif — un modèle
   haut de gamme de l'année avait souvent plus), puis on réutilise HwCheck
   (déjà en place pour "Vérifier mon PC") pour ne montrer que les systèmes
   compatibles, triés par compatibilité puis popularité. */
(function () {
  const slider = document.getElementById('pcageSlider');
  if (!slider) return;

  const yearInline = document.getElementById('pcageYearInline');
  const meta = document.getElementById('pcageMeta');
  const results = document.getElementById('pcageResults');
  const cats = window.OS_CATS, data = window.OS_DATA;

  /* paliers [année, RAM typique en Mo] — palier en escalier : on retient
     le dernier palier atteint pour l'année choisie */
  const RAM_ERAS = [
    [1995, 32], [1999, 64], [2001, 128], [2003, 256], [2005, 512],
    [2007, 1024], [2009, 2048], [2011, 4096], [2016, 8192], [2022, 16384],
  ];

  function ramForYear(year) {
    let mb = RAM_ERAS[0][1];
    for (const [y, v] of RAM_ERAS) { if (year >= y) mb = v; }
    return mb;
  }

  function ramLabel(mb) {
    return mb >= 1024 ? `${mb / 1024} Go` : `${mb} Mo`;
  }

  /* repère indicatif CPU/stockage par époque — un navigateur ne peut pas
     détecter le modèle ou les composants réels d'une machine (restriction
     volontaire anti-fingerprinting, commune à tous les navigateurs) : ceci
     n'est qu'un rappel historique, pas une détection. */
  const ERA_INFO = [
    [1995, 'mono-cœur ~66-100 MHz (Pentium/486)', 'disque dur 0,5-1 Go'],
    [1999, 'mono-cœur ~300-500 MHz (Pentium II/III)', 'disque dur 4-8 Go'],
    [2001, 'mono-cœur ~1 GHz (Pentium III/4, Athlon)', 'disque dur 20-40 Go'],
    [2003, 'mono-cœur ~2-3 GHz (Pentium 4, Athlon XP)', 'disque dur 40-80 Go'],
    [2006, 'mono/dual-cœur ~2-3 GHz (Athlon 64 X2, Pentium D)', 'disque dur 80-160 Go'],
    [2008, 'dual-cœur ~2 GHz (Core 2 Duo)', 'disque dur 160-320 Go'],
    [2011, 'dual/quad-cœur (Core i3/i5 1re-2e gén.)', 'disque dur mécanique 500 Go'],
    [2015, 'quad-cœur (Core i5/i7)', 'SSD qui se généralise, 128-256 Go'],
    [2020, '6-8 cœurs', 'SSD NVMe 256-512 Go'],
    [2023, '8 cœurs et +', 'SSD NVMe 512 Go-1 To'],
  ];

  function eraInfoForYear(year) {
    let info = ERA_INFO[0];
    for (const e of ERA_INFO) { if (year >= e[0]) info = e; }
    return info;
  }

  function render() {
    const year = Number(slider.value);
    const ramMB = ramForYear(year);
    const [, cpuInfo, diskInfo] = eraInfoForYear(year);
    yearInline.textContent = year;

    const scored = data.map((os) => {
      const status = window.HwCheck.status(os, ramMB);
      const rank = { ok: 2, tight: 1, unknown: 0 }[status] ?? -1;
      return { os, status, rank };
    }).filter((s) => s.rank >= 0);

    scored.sort((a, b) => (b.rank - a.rank) || ((b.os.popular === true) - (a.os.popular === true)));
    const top = scored.slice(0, 4);

    meta.innerHTML = `Vers <b>${year}</b>, un PC grand public neuf embarquait typiquement autour de <b>${ramLabel(ramMB)}</b> de RAM.
      <br>Repère indicatif de l'époque : CPU <b>${cpuInfo}</b> · <b>${diskInfo}</b>.
      <br><span class="pcage-caveat">Un navigateur ne peut pas lire le modèle réel de ta machine (vie privée) — seule la RAM sert au filtre ci-dessous, le CPU/stockage n'est là qu'à titre de repère historique.</span>`;

    results.innerHTML = top.length ? top.map(({ os, status }) => `
      <a class="wizard-result" href="os.html?id=${os.id}" style="--c:${os.color}">
        <div class="logo">${logoInner(os, { size: 26, lazy: true })}</div>
        <div>
          <h5 class="disp">${os.name}</h5>
          <p class="mono">${cats[os.cat].label} · ${os.diff} · RAM min. ${os.req && os.req.ram ? os.req.ram : '—'}</p>
          <p class="wizard-desc">${os.tag}</p>
          <div class="badges" style="margin-top:8px">${
            status === 'ok' ? '<span class="badge badge-hw-ok">✓ Compatible</span>'
              : status === 'tight' ? '<span class="badge badge-hw-tight">≈ RAM limite</span>'
              : ''
          }</div>
        </div>
      </a>`).join('') : '<p class="mono" style="color:var(--muted)">// aucun système du catalogue ne correspond à cette estimation.</p>';
  }

  slider.addEventListener('input', render);
  render();
})();
