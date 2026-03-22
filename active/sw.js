/* 
   BLACKCOSMOS ENGINE CORE 
   Location: /active/uv.sw.js
*/

// These paths must match your folder structure exactly
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js'); // This loads the internal engine from the subfolder

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
