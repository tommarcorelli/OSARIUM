/* OSARIUM — service worker (offline-first, statique). */
const CACHE = 'osarium-v5';
const ASSETS = [
  './',
  './index.html',
  './os.html',
  './tool.html',
  './arbre.html',
  './data.js',
  './tools-data.js',
  './manifest.webmanifest',
  './css/base.css',
  './css/effects.css',
  './css/nav.css',
  './css/hero.css',
  './css/sections.css',
  './css/cards.css',
  './css/detail.css',
  './css/tools.css',
  './css/pwa.css',
  './css/arbre.css',
  './js/logo.js',
  './js/favorites.js',
  './js/theme.js',
  './js/reveal.js',
  './js/scroll.js',
  './js/catalog.js',
  './js/guide-tabs.js',
  './js/detail.js',
  './js/tool-detail.js',
  './js/pwa.js',
  './js/arbre.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
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
  e.respondWith(
    caches.match(req).then((cached) => {
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
