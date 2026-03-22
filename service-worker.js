const CACHE_NAME = 'FlashCard';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  './flipcard.png',      // La tua nuova icona
  './TurningPage.mp3',       // Il suono della pagi
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
