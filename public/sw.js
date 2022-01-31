var cacheName = 'boilerplate-webpack5pwa'
var filesToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/js/main.bundle.js',
    '/js/runtime.bundle.js'
]

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache)
        })
    )
    self.skipWaiting()
})

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request)
        })
    )
})
