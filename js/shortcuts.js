/* ============ RACCOURCIS CLAVIER (catalogue) ============
   Actifs uniquement sur index.html (nécessite #grid), désactivés pendant
   une saisie (input/select/textarea) sauf "/" qui sert justement à y aller. */
(function () {
  if (!document.getElementById('grid')) return;

  const search = document.getElementById('search');
  const wizardOpenBtn = document.getElementById('wizardOpen');
  const wizardCloseBtn = document.getElementById('wizardClose');
  const hwOpenBtn = document.getElementById('hwOpen');
  const hwCloseBtn = document.getElementById('hwClose');
  const themeToggle = document.getElementById('themeToggle');
  const favChip = document.getElementById('favChip');
  const cmpModal = document.getElementById('modal');
  const cmpModalClose = document.getElementById('modalClose');
  const wizardModal = document.getElementById('wizardModal');
  const hwModal = document.getElementById('hwModal');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const shortcutsClose = document.getElementById('shortcutsClose');
  const shortcutsOpenBtn = document.getElementById('shortcutsOpen');

  function isOpen(m) { return m && m.classList.contains('show'); }
  function openShortcuts() { shortcutsModal.classList.add('show'); document.body.classList.add('lock'); }
  function closeShortcuts() { shortcutsModal.classList.remove('show'); document.body.classList.remove('lock'); }

  if (shortcutsOpenBtn) shortcutsOpenBtn.addEventListener('click', openShortcuts);
  if (shortcutsClose) shortcutsClose.addEventListener('click', closeShortcuts);
  shortcutsModal.addEventListener('click', (e) => { if (e.target === shortcutsModal) closeShortcuts(); });

  function isTyping() {
    const el = document.activeElement;
    return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
  }

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === 'Escape') {
      if (isOpen(shortcutsModal)) { closeShortcuts(); return; }
      if (isOpen(cmpModal)) { cmpModalClose.click(); return; }
      if (isOpen(wizardModal)) { wizardCloseBtn.click(); return; }
      if (isOpen(hwModal)) { hwCloseBtn.click(); return; }
      if (document.activeElement === search) { search.blur(); }
      return;
    }

    if (e.key === '/') {
      if (isTyping()) return; // laisse taper un "/" normal si un champ a déjà le focus
      e.preventDefault();
      search.focus();
      return;
    }

    if (isTyping() || isOpen(cmpModal) || isOpen(wizardModal) || isOpen(hwModal) || isOpen(shortcutsModal)) return;

    if (e.key === '?') { openShortcuts(); return; }
    if (e.key === 'w' || e.key === 'W') { if (wizardOpenBtn) wizardOpenBtn.click(); return; }
    if (e.key === 'h' || e.key === 'H') { if (hwOpenBtn) hwOpenBtn.click(); return; }
    if (e.key === 'f' || e.key === 'F') { if (favChip) favChip.click(); return; }
    if (e.key === 't' || e.key === 'T') { if (themeToggle) themeToggle.click(); return; }
  });
})();
