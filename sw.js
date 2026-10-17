self.addEventListener('install', e=>{
  e.waitUntil(caches.open('mathe84-v2-pro').then(c=>c.addAll(['./','./index.html','./manifest.json'])));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{if(k!=='mathe84-v2-pro') return caches.delete(k)}))));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
