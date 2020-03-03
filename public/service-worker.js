const cacheName = 'v1';

const resourcerstoPrecache = [
    '/',
    'index.html',
    'index.css',
    'service-worker.js',
    '../src/components/CardList.js',
    '../src/components/Card.js',
    '../src/components/Scroll.js',
    '../src/components/SearchBox.js',
    '../src/containers/App.css',
    '../src/containers/App.js',
    '../src/containers/SEGA.woff',
    '../index.js',
    'favicon.ico'
];

self.addEventListener('install', (event)=>{
    event.waitUntil(
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