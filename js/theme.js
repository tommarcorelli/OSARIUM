/* ============ THÈME (clair/sombre, partagé) ============
 * Le bloc d'application immédiate est inline dans le <head> de chaque page
 * (voir index.html / os.html) pour éviter le flash. Ce fichier ne gère que
 * le bouton une fois le DOM prêt. */
(function () {
  const KEY = 'osarium_theme';
  function applyIcon() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const light = document.documentElement.classList.contains('theme-light');
    btn.setAttribute('aria-pressed', String(light));
  }
  window.addEventListener('DOMContentLoaded', () => {
    applyIcon();
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const light = document.documentElement.classList.toggle('theme-light');
      try { localStorage.setItem(KEY, light ? 'light' : 'dark'); } catch (e) {}
      applyIcon();
    });
  });
})();
