/* ============ BANDEAU "VUS RÉCEMMENT" (index.html) ============ */
(function () {
  const section = document.getElementById('recentSection');
  const strip = document.getElementById('recentStrip');
  if (!section || !strip || !window.Recent) return;

  const data = window.OS_DATA, cats = window.OS_CATS;

  function render() {
    const ids = window.Recent.get();
    const items = ids.map((id) => data.find((o) => o.id === id)).filter(Boolean);
    if (!items.length) { section.style.display = 'none'; return; }
    section.style.display = '';
    strip.innerHTML = items.map((os) => `
      <a class="recent-item" href="os.html?id=${os.id}" style="--c:${os.color}" data-testid="recent-${os.id}">
        <span class="ri-logo">${logoInner(os, { size: 22, lazy: true })}</span>
        <span class="ri-name">${os.name}</span>
        <span class="ri-cat mono">${cats[os.cat] ? cats[os.cat].label : ''}</span>
      </a>`).join('');
  }

  render();
})();
