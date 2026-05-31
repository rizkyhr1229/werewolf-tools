const CACHE_NAME = 'ww-mod-v1';
const ASSETS = [
  'ww.html',
  'manifest.json'
];

// Memasang berkas ke sw.js memori lokal perangkat
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Mengambil berkas dari memori lokal (Offline Mode)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
