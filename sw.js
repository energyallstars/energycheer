// Permite instalar la app en el celular. No guarda datos: todo se pide siempre en línea.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
