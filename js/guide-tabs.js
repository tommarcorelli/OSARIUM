/* ============ GUIDE TABS (créer / nettoyer la clé USB) ============ */
document.querySelectorAll('.guide-tabs').forEach((block) => {
  const tabs = block.querySelectorAll('.guide-tab');
  const panels = block.querySelectorAll('.guide-panel');
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('on'));
    panels.forEach((p) => p.classList.remove('on'));
    tab.classList.add('on');
    const panel = block.querySelector(`.guide-panel[data-panel="${tab.dataset.tab}"]`);
    if (panel) panel.classList.add('on');
  }));
});
