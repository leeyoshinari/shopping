const CACHE_NAME = 'sw-11-4';

// 要缓存的文件列表
const staticFileExtensions = ['/img/', '.css', '.js', '.json', '.svg', '%2Fimg%2F'];
const regex = new RegExp(`(${staticFileExtensions.join('|').replace(/\./g, '\\.')})`, 'i');
const urlsToCache = ['/', '/api/activity'];

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
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch事件
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && regex.test(networkResponse.url) && networkResponse.type === 'basic') {
          const clonedResponse = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
        }
        return networkResponse;
      });
    })
  );
});

// 接收通知事件
self.addEventListener('push', event => {
  const data = event.data.json();
  const title = data.title || '通知';
  const options = {
    body: data.body || '您有一条新通知',
    icon: '/icon.svg',
    badge: '/icon.svg'
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
// "display": "standalone",