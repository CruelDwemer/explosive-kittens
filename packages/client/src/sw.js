const CACHE_NAME = 'cache_v1';

self.addEventListener('install', event => {
  console.log("install", event)
  event.waitUntil(
    (async () => {
      const c = await caches.open(CACHE_NAME);
      console.log("caches", c)
      console.log("caches", await c.keys())
      // активирует Service Worker минуя фазу ожидания активации
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  console.log("activate", event)
  // с помощью self.clients.claim() можно начать перехватывать запросы не ожидая перезагрузки страницы, работает в паре с self.skipWaiting()
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log('fetch event', event)
  event.respondWith(
    (async () => {
      try {
        // Пытаемся получить данные с помощью запроса
        const response = await fetch(event.request);

        // Если запрос прошел успешно, обновляем кэш
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());

        return response;
      } catch (error) {
        // Если запрос упал с ошибкой, находим нужный нам кэш и возвращаем его
        const cachedResponse = await caches.match(event.request);
        // Если закэшированный ресурс есть, то возвращаем его
        if (cachedResponse) {
          return cachedResponse;
        }
        // Если кэша нету, возвращаем страницу fallback.html или какое-то кастомное сообщение об этом, тут уже на ваше усмотрение
        return await caches.match('fallback.html');
      }
    })()
  );
});
