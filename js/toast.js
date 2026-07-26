/* ============ TOASTS ============
   Remplace les alert() natifs (bloquants et hors charte) par une notification
   discrète en bas d'écran. Annoncée aux lecteurs d'écran via aria-live. */
window.Toast = (function () {
  let host = null;

  function ensureHost() {
    if (host && document.body.contains(host)) return host;
    host = document.createElement('div');
    host.className = 'toast-host';
    host.setAttribute('role', 'status');
    host.setAttribute('aria-live', 'polite');
    document.body.appendChild(host);
    return host;
  }

  function show(msg, kind) {
    const el = document.createElement('div');
    el.className = 'toast' + (kind ? ' toast-' + kind : '');
    el.textContent = msg;
    ensureHost().appendChild(el);
    requestAnimationFrame(() => el.classList.add('in'));
    setTimeout(() => {
      el.classList.remove('in');
      setTimeout(() => el.remove(), 300);
    }, 3200);
  }

  return {
    show,
    info: (m) => show(m),
    warn: (m) => show(m, 'warn'),
    ok: (m) => show(m, 'ok'),
  };
})();
