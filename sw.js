var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  'css/style.css',
  'js/main.js'
  'images/hello-icon-128.png',
  ];

/* Start the service worker and chche all of the app's content*/
self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open(cachName).then(function(cache){
      return cache.addAll(filesToCache);
    })
    );
});

/* seve cached contenmt when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
    );
});
