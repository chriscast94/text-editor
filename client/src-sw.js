const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst(
  console.log('pageCache load line 11'),
  {
    cacheName: 'page-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        // 30 Days
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  });

warmStrategyCache(
  console.log('Hitting warmStrategyCache object line 24'),
  {
    urls: ['/index.html', '/'],
    strategy: pageCache,
  });

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  warmStrategyCache,
  console.log("warmStrategyCache is running (line 33)"),
  new offlineFallback({
    statuses: [0, 200]
  }),
  console.log('offlineFallback running line 37'),
);
