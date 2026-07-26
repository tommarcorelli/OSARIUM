/* OSARIUM — service worker (offline-first, statique).
   La liste ASSETS doit rester exhaustive : `addAll` échoue en bloc si un seul
   fichier manque, et tout fichier absent d'ici n'est pas disponible hors-ligne
   au premier chargement. À compléter à chaque nouveau css/js ajouté aux pages. */
const CACHE = 'osarium-v6';
const ASSETS = [
  './',
  './index.html',
  './os.html',
  './tool.html',
  './arbre.html',
  './data.js',
  './tools-data.js',
  './manifest.webmanifest',
  './css/arbre.css',
  './css/base.css',
  './css/cards.css',
  './css/detail.css',
  './css/effects.css',
  './css/hero.css',
  './css/hw.css',
  './css/nav.css',
  './css/pcage.css',
  './css/pwa.css',
  './css/sections.css',
  './css/shortcuts.css',
  './css/toast.css',
  './css/tools.css',
  './js/arbre.js',
  './js/catalog.js',
  './js/detail.js',
  './js/favorites.js',
  './js/guide-tabs.js',
  './js/hardware-check.js',
  './js/logo.js',
  './js/pcage.js',
  './js/progress.js',
  './js/pwa.js',
  './js/recent-strip.js',
  './js/recent.js',
  './js/reveal.js',
  './js/scroll.js',
  './js/shortcuts.js',
  './js/theme.js',
  './js/toast.js',
  './js/tool-detail.js',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // stale-while-revalidate: serve from cache instantly if present, refresh in the background
  // (only same-origin responses are re-cached — the external Lenis CDN is fetched but not stored)
  // ignoreSearch sur les navigations : os.html?id=ubuntu doit retomber sur la
  // page os.html mise en cache, sinon toutes les fiches sont KO hors-ligne.
  const matchOpts = req.mode === 'navigate' ? { ignoreSearch: true } : undefined;
  e.respondWith(
    caches.match(req, matchOpts).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200 && new URL(req.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
