const CACHE_NAME = 'cache_v1'
const staticUrl = 'https://ya-praktikum.tech/api/v2/resources/'

;(self as ServiceWorkerGlobalScope).addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      await cache.addAll([
        '/public/crocodile.png',
        '/public/crocodile-win.png',
        '/public/loading.png',
      ])
      await self.skipWaiting()
    })()
  )
})
;(self as ServiceWorkerGlobalScope).addEventListener(
  'activate',
  async event => {
    event.waitUntil(self.clients.claim())
    const cacheNames = await caches.keys()
    await Promise.all(
      cacheNames.map(async cacheName => {
        // Удаляем кэши, которые не относятся к текущей версии
        if (cacheName !== CACHE_NAME) {
          await caches.delete(cacheName)
        }
      })
    )
  }
)
;(self as ServiceWorkerGlobalScope).addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(event.request)
        // сохраняем только статику
        if (event.request.url.includes(staticUrl)) {
          const cache = await caches.open(CACHE_NAME)
          await cache.put(event.request, response.clone())
        }
        return response
      } catch (error) {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
          return cachedResponse
        }
        return new Response('Connection error', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' },
        })
      }
    })()
  )
})
