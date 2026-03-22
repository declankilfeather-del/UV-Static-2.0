/* 
   BLACKCOSMOS ENGINE CORE
   Location: /active/uv.sw.js
*/

// 1. Load the actual Ultraviolet logic from the subfolder
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js'); // This loads the ENGINE, not this file

// 2. Initialize the Proxy
const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
