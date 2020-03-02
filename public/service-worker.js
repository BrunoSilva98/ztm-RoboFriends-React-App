const cacheName = 'v1';

const resourcerstoPrecache = [
    '/',
    'index.html',
    'index.css'
];

self.addEventListener('install', (event)=>{
    event.waitUtil(
        caches.open(cacheName)
            .then(cache => (cache.addAll(resourcerstoPrecache))),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(cacheResponse => (cacheResponse || fetch(event.request))),
    );
});