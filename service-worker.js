const CACHE_NAME = 'sfida-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Fase di installazione: salva i file in cache
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Salvataggio file in cache...');
      return cache.addAll(ASSETS);
    })
  );
});

// Gestione delle richieste: se offline, prova a usare la cache
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});