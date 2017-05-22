(self => {
  'use strict';

  // Load the sw-toolbox library.
  importScripts('/sw-toolbox.js');
  
  // Ensure that our service worker takes control of the page as soon as possible.
  self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
  self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));


//Remaining other dynamic calls 10 sec == networkFirst **
//self.toolbox.router.default = self.toolbox.networkFirst;
//self.toolbox.options.debug = true;

//networkFirst
//cacheFirst
//networkOnly
//cacheOnly
//Fastest



self.toolbox.router.get('/*(.jpg|.jpeg|.png|.gif|.xml|.svg|.bmp)', self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'image-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});


self.toolbox.router.get('/*(.js)', self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'js-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});


self.toolbox.router.get('/*(.html)', self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'html-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});



self.toolbox.router.get(/index.html$/, self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'index-html-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});

 

self.toolbox.router.get('/*(.css)', self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'css-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});


self.toolbox.router.get('/*(.json)', self.toolbox.cacheFirst, {
	origin: /localhost/,
	"cache": {
		name: 'json-routes',
		maxEntries: 20,
		maxAgeSeconds: 604800,
	},
});


})(self);
