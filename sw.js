const CACHE_NAME = 'cuenca-v1';
const assets = ['./', './index.html', './datos.js'];

// Instalación: Guarda los archivos en el móvil
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

// Estrategia: Carga desde caché pero busca actualizaciones
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
