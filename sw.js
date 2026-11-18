/* RedSea PWA Service Worker */
const CACHE_NAME = 'redsea-v1.9.0';
const TILE_CACHE = 'redsea-tiles-v1';
const MAX_TILES = 2000;
const APP_SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
// مكتبات خارجية تُخزَّن عند التثبيت ليعمل التطبيق دون إنترنت من أول زيارة
const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2',
  'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js',
  'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // لا تفشل عملية التثبيت بالكامل إذا تعذر تحميل مورد واحد مؤقتاً.
    await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
    // الموارد الخارجية: طلب no-cors (استجابة opaque) لأن cache.add يرفضها
    await Promise.allSettled(CDN_ASSETS.map(async (url) => {
      const res = await fetch(new Request(url, { mode: 'no-cors' }));
      await cache.put(url, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith('redsea-') && key !== CACHE_NAME && key !== TILE_CACHE)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

// يسمح للصفحة بإجبار SW جديد على استلام التحكم فورًا
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // اترك واجهات الطقس مباشرة للشبكة حتى لا تُعرض بيانات قديمة على أنها توقعات حديثة.
  if (url.hostname.includes('open-meteo.com')) return;

  // صفحات التنقل: الشبكة أولاً، ثم نسخة التطبيق المخزنة عند انقطاع الاتصال.
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put('./index.html', response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        return (await caches.match('./index.html')) ||
          (await caches.match('./')) ||
          new Response('التطبيق غير متاح دون اتصال بعد. افتحه مرة واحدة مع الإنترنت.', {
            status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
      }
    })());
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const isKnownAssetHost = [
    'arcgisonline', 'unpkg.com', 'cdn.tailwindcss.com', 'jsdelivr.net',
    'fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'
  ].some((host) => url.hostname.includes(host));
  const isTile = url.hostname.includes('arcgisonline');

  if (!isSameOrigin && !isKnownAssetHost) return;

  // Cache-first للملفات والمكتبات وطبقات الخرائط التي سبق تحميلها.
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response && (response.ok || response.type === 'opaque')) {
        const cache = await caches.open(isTile ? TILE_CACHE : CACHE_NAME);
        cache.put(request, response.clone()).catch(() => {});
        if (isTile) trimTileCache(cache);
      }
      return response;
    } catch (_) {
      return new Response('', { status: 504, statusText: 'Offline resource unavailable' });
    }
  })());
});

// يمنع نمو ذاكرة الخرائط بلا حدود: يحذف الأقدم عند تجاوز الحد
let trimming = false;
async function trimTileCache(cache) {
  if (trimming) return;
  trimming = true;
  try {
    const keys = await cache.keys();
    if (keys.length > MAX_TILES) {
      await Promise.all(keys.slice(0, keys.length - MAX_TILES).map((k) => cache.delete(k)));
    }
  } finally { trimming = false; }
}