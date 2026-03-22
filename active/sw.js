/* 
   BLACKCOSMOS ENGINE CORE 
   Location: /active/sw.js
*/

// Load the actual logic from the sub-folder
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js'); 

// Initialize the Proxy
const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    // This MUST have a capital 'W' or the script fails to evaluate
    event.respondWith(sw.fetch(event));
});
