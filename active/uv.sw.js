"use strict";
/**
 * BlackCosmos: Ultraviolet Service Worker
 * This script intercepts all requests and tunnels them through the proxy.
 */
(() => {
    var h = self.Ultraviolet;
    var C = ["cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection"];
    
    // Core Service Worker Logic
    const g = class extends h.EventEmitter {
        constructor(e = __uv$config) {
            super();
            e.prefix || (e.prefix = "/active/service/");
            this.config = e;
            this.bareClient = new h.BareClient();
        }
        
        async fetch({ request: e }) {
            try {
                // If it's not a proxy request, fetch normally
                if (!e.url.startsWith(location.origin + this.config.prefix)) return await fetch(e);

                let t = new h(this.config);
                let v = await t.cookie.db();
                t.meta.origin = location.origin;
                
                // Nuclear header stripping for "Human" mimicry
                let c = await this.bareClient.fetch(t.sourceUrl(e.url), {
                    headers: e.headers,
                    method: e.method,
                    body: e.body,
                    credentials: e.credentials,
                    redirect: "follow"
                });

                // Remove security headers that cause white screens/blocks
                for (let i of C) {
                    if (c.headers[i]) delete c.headers[i];
                }

                return new Response(c.body, {
                    headers: c.headers,
                    status: c.status,
                    statusText: c.statusText
                });
            } catch (err) {
                return new Response(err.stack, { status: 500 });
            }
        }
    };

    // Initialize UV
    const sw = new g();
    self.addEventListener('fetch', (event) => {
        event.respondWith(sw.fetch(event));
    });
})();

// Load dependencies from the /uv/ subfolder
importScripts('/active/uv/uv.bundle.js');
importScripts('/active/uv/uv.config.js');
