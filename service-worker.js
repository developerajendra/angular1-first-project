
(function(){
	"use strict";

	var cacheName  = "static_cache";
	var urlsToCache = [
		".",
		"index.html",
		"css/style.css",
		"css/libraries/owl-carousel.css",
		"data/womens-eyeglasses.json",
		"data/womens-sunglasses.json",

		//Main Images
		"images/banner.jpg",
		"images/logo.png",


		"angular.min.js",
		"angular-ui-route.js",
		"js/libraries/owl-carousel.js",
		"./node_modules/bootstrap/dist/css/bootstrap.min.css",
		"css/libraries/owl-carousel.css",
		"./node_modules/jquery/dist/jquery.min.js",
		"./node_modules/jqlite/jqlite.js",
		"https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js",
		"./node_modules/bootstrap/dist/js/bootstrap.min.js",
		"js/libraries/owl-carousel.js",
		"rootModule.js",
		"app/index-route.js",
		"services/httpService.js",
		"services/productService.js",
		"app/homepage/homepage-controller.js",
		"app/product-listing/product-listing-controller.js",
		"services/productModalService.js",
		"directives/product-tile/product-tile.js",
		"directives/product-carousel/product-carousel.js",
		"app/product-details/product-details-controller.js",

		//Angular pages
		"app/homepage/homepage.html",
		"app/product-listing/product-listing.html",
		"app/product-details/product-details.html",
		"directives/product-tile/product-tile.html",
		"directives/product-carousel/product-carousel.html",

		//Product Images
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DE14B045A07AB/_assets/grid-eyewear-front/fa42af542c_leshalles_tokyotort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E214C045A07BE/_assets/grid-eyewear-front/f8c6c401bb_hayes_mauvetort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E0071045A07B3/_assets/grid-eyewear-front/f5be0c8544_valencia_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DD12A030A07A9/_assets/grid-eyewear-front/f468146230_montaigne_blue_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E2121045A07BC/_assets/grid-eyewear-front/e9f823aa15_hayes_blw_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E1071045A07B7/_assets/grid-eyewear-front/db1768151a_stgermain_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E414C045A07C4/_assets/grid-eyewear-front/bdce067e18_fillmore_mauvetort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DE121030A07AA/_assets/grid-eyewear-front/baf17ae721_ledenis_blw_front_thumb.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E4121045A07C2/_assets/grid-eyewear-front/b37e77f5e7_fillmore_blw_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E014C045A07B4/_assets/grid-eyewear-front/b018579c89_valencia_mauvetort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DE127045A07AC/_assets/grid-eyewear-front/ac28546e21_leshalles_bls_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E3127045A07C0/_assets/grid-eyewear-front/a046c3b22c_powell_bls-front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E1121045A07B6/_assets/grid-eyewear-front/8c90d57aee_stgermain_blw_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DE12A045A07AD/_assets/grid-eyewear-front/7b69c7829e_leshalles_blue_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E3071045A07BF/_assets/grid-eyewear-front/7313e04140_powell_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E4071045A07C3/_assets/grid-eyewear-front/72a441c8f4_fillmore_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E2071045A07BD/_assets/grid-eyewear-front/6c66aa18f9_hayes_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E114C045A07B8/_assets/grid-eyewear-front/6c61663e30_stgermain_mauvetort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E012A045A07B5/_assets/grid-eyewear-front/69a915888d_valencia_blue_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DD071030A07A7/_assets/grid-eyewear-front/465b618822_montaigne_dktrt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DF121045A07AE/_assets/grid-eyewear-front/3d9f39e3cc_ledenis_blw_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DD14A030A07A6/_assets/grid-eyewear-front/3cec59b706_montaigne_blktort_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DF071045A07AF/_assets/grid-eyewear-front/3c12c85b2a_ledenis_dkt_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E0121045A07B2/_assets/grid-eyewear-front/374fcd4810_valencia_blw_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050DF127045A07B0/_assets/grid-eyewear-front/1a1236b00f_ledenis_bls_front.jpg",
		// "http://b3648cea6c4b88cb48b9-36b5235193a09bfa58c3a1e7d11a42b4.r84.cf2.rackcdn.com/ano/050E3121045A07C1/_assets/grid-eyewear-front/01c1662204_powell_blw_front.jpg"		
	]


 


	self.addEventListener("install",function(event){
	 	event.waitUntil(caches.open(cacheName)
	 		.then(function(cache){
	 			return cache.addAll(urlsToCache);
	 		})
	 	);
	});


	self.addEventListener("activate",function(){
	 console.log("service worker activating.");
	});


	self.addEventListener("fetch",function(event){
		event.respondWith(caches.match(event.request)
			.then(function(response){
				return response || fetchAndCache(event.request);
			})
		);
	});


	function fetchAndCache(url){
		return fetch(url).then(function(response){
			if(!response.ok){
				 throw Error(response.statusText);
			}
			return caches.open(cacheName)
			.then(function(cache){
				cache.put(url,response.clone());
				return response;
			})
		})
		.catch(function(error){
			console.log(error);
		})
	}

}());









