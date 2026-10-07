/* =========================================================
   A&F WEKAVERA LTD - OFFLINE APPLICATION SHELL
   Waste2Wealth Solutions
   =========================================================
   Purpose:
   - Keep the factory application itself available offline.
   - Preserve the app's existing localStorage/offline work.
   - Leave Supabase cloud synchronisation to app.js when online.
   - Refresh cached application files when internet is available.
   ========================================================= */

const AF_CACHE_VERSION = "af-wekavera-offline-v1";
const AF_APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./monthly-client-summary.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(AF_CACHE_VERSION).then(async cache => {
      // Cache each file independently. One optional/missing file must not
      // prevent the rest of the application from becoming offline-ready.
      await Promise.allSettled(
        AF_APP_SHELL.map(url =>
          fetch(url, { cache: "reload" })
            .then(response => {
              if (!response || !response.ok) {
                throw new Error("Unable to cache " + url);
              }
              return cache.put(url, response.clone());
            })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key.startsWith("af-wekavera-offline-") && key !== AF_CACHE_VERSION)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(AF_CACHE_VERSION);

  try {
    const response = await fetch(request);
    if (response && response.ok && request.method === "GET") {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const exact = await cache.match(request);
    if (exact) return exact;

    // app.js currently carries a query-string version in index.html.
    // Ignore the query string when looking for its cached offline copy.
    const noQuery = await cache.match(new URL(request.url).pathname, {
      ignoreSearch: true
    });
    if (noQuery) return noQuery;

    if (request.mode === "navigate") {
      const index = await cache.match("./index.html");
      if (index) return index;
    }

    throw error;
  }
}

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Never intercept Supabase/API traffic. app.js already handles cloud
  // synchronisation and offline pending records.
  if (
    url.hostname.endsWith("supabase.co") ||
    url.hostname === "cdn.jsdelivr.net"
  ) {
    return;
  }

  // Only cache this application's own files.
  if (url.origin !== self.location.origin) return;

  event.respondWith(networkFirst(request));
});
