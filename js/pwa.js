/* ============ PWA: enregistrement + bouton d'installation ============
 * Chemins relatifs pour fonctionner quel que soit le sous-dossier d'hébergement.
 * (Sur file:// le service worker ne s'enregistre pas — l'app reste 100% fonctionnelle.) */
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

let deferredPrompt = null;
const mkBtn = () => {
  if (document.getElementById('pwaInstall')) return document.getElementById('pwaInstall');
  const b = document.createElement('button');
  b.id = 'pwaInstall';
  b.className = 'pwa-install';
  b.setAttribute('data-testid', 'pwa-install-button');
  b.innerHTML = '<span class="dot"></span> Installer l\u2019app';
  b.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    b.classList.remove('show');
  });
  document.body.appendChild(b);
  return b;
};

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  mkBtn().classList.add('show');
});

window.addEventListener('appinstalled', () => {
  const b = document.getElementById('pwaInstall');
  if (b) b.classList.remove('show');
});
