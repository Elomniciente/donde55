const cacheName = "cache1"; // Change value to force update

self.addEventListener("install", event => {
	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"images/android-chrome-36x36.png", // Favicon, Android Chrome M39+ with 0.75 screen density
				"images/android-chrome-48x48.png", // Favicon, Android Chrome M39+ with 1.0 screen density
				"images/android-chrome-72x72.png", // Favicon, Android Chrome M39+ with 1.5 screen density
				"images/android-chrome-96x96.png", // Favicon, Android Chrome M39+ with 2.0 screen density
				"images/android-chrome-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
				"images/android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
				"images/android-chrome-256x256.png", // Favicon, Android Chrome M47+ Splash screen with 1.5 screen density
				"images/android-chrome-384x384.png", // Favicon, Android Chrome M47+ Splash screen with 3.0 screen density
				"images/android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
				"images/apple-touch-icon.png", // Favicon, Apple default
				"images/apple-touch-icon-57x57.png", // Apple iPhone, Non-retina with iOS6 or prior
				"images/apple-touch-icon-60x60.png", // Apple iPhone, Non-retina with iOS7
				"images/apple-touch-icon-72x72.png", // Apple iPad, Non-retina with iOS6 or prior
				"images/apple-touch-icon-76x76.png", // Apple iPad, Non-retina with iOS7
				"images/apple-touch-icon-114x114.png", // Apple iPhone, Retina with iOS6 or prior
				"images/apple-touch-icon-120x120.png", // Apple iPhone, Retina with iOS7
				"images/apple-touch-icon-144x144.png", // Apple iPad, Retina with iOS6 or prior
				"images/apple-touch-icon-152x152.png", // Apple iPad, Retina with iOS7
				"images/apple-touch-icon-180x180.png", // Apple iPhone 6 Plus with iOS8
				
				"browserconfig.xml", // IE11 icon configuration file
				
				"images/favicon.ico", // Favicon, IE and fallback for other browsers
				"images/favicon-16x16.png", // Favicon, default
				"images/favicon-32x32.png", // Favicon, Safari on Mac OS
				"logo.png", // Logo				
				
				"index.html", // Main HTML file
				"main.js", // Main Javascript file
				"manifest.json", // Manifest file
				
				"images/maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
				"images/mstile-70x70.png", // Favicon, Windows 8 / IE11
				"images/mstile-144x144.png", // Favicon, Windows 8 / IE10
				"images/mstile-150x150.png", // Favicon, Windows 8 / IE11
				"mstile-310x150.png", // Favicon, Windows 8 / IE11
				"images/mstile-310x310.png", // Favicon, Windows 8 / IE11
				"images/share.jpg", // Social media sharing	
				
				"safari-pinned-tab.svg", // Favicon, Safari pinned tab
				"style.css", // Main CSS file
			]);
		})
	);
});

self.addEventListener("activate", event => {
	// Delete any non-current cache
	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data. 
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});