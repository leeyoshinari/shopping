const CACHE_NAME = 'shopping-1';

// 要缓存的文件列表
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon.png',
  '/icon_x192.png',
  '/icon_x72.png',
  '/main.css',
  '/main.js',
  '/crypto-js.js',
  '/img/close.png',
  '/img/tb.png',
  '/img/jd.png',
  '/img/pdd.png',
  '/img/wph.png',
  '/img/wm.png'
];

// 安装事件
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 激活事件
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch事件
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// 接收通知事件
self.addEventListener('push', event => {
  const data = event.data.json();
  const title = data.title || '通知';
  const options = {
    body: data.body || '您有一条新通知',
    icon: '/icon.jpg',
    badge: '/icon.jpg'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 监听通知点击事件
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
