self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

// This empty fetch listener is required by mobile browsers to show the "Download App" prompt
self.addEventListener('fetch', (event) => {});