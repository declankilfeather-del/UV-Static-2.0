/* 
   BLACKCOSMOS ENGINE CORE 
   Location: /active/sw.js
*/

// These now point correctly to the sub-folder
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js'); 

// The 'UVServiceWorker' class is inside the bundle we just imported
const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
