var cacheName="ttt-pwa",filesToCache=["/","/index.html","/styles/main.css","/js/main.bundle.js","/js/runtime.bundle.js"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return e.addAll(filesToCache)}))),self.skipWaiting()})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}));