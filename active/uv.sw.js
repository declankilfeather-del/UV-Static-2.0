/* 
   BlackCosmos: The Engine Brain
   This script must be named uv.sw.js and sit in the /active/ folder.
*/
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
importScripts('/active/uv/uv.sw.js'); // This pulls the actual engine from the subfolder

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
