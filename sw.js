const CACHE = "carreras-v2";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/image-slot.js",
  "/app.jsx",
  "/psicologia.jsx",
  "/contabilidad.jsx",
  "/business.jsx",
  "/cambridge.jsx",
  "/speaking.jsx",
  "/literature.jsx",
  "/calculo.jsx",
  "/derecho.jsx",
  "/historia.jsx",
  "/ecologia.jsx",
  "/computerlab.jsx",
  "/manifest.json",
  "/assets/business-1.jpeg",
  "/assets/business-2.jpeg",
  "/assets/business-3.jpeg",
  "/assets/business-4.jpeg",
  "/assets/ecologia-periodico.png",
  "/assets/literature-infografia.jpeg",
  "/assets/computerlab-tabla.png",
  "/.image-slots.state.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
