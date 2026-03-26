self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('moh-store').then((cache) => cache.addAll([
      '/',
      'index.html',
      'admin.html',
      'black.jpg',
      'macchiato.jpg',
      'tea.jpg',
      'halib.jpg'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});