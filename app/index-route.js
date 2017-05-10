 (function(){
 	var app = angular.module("angular-learning");

 	app.config(function($stateProvider,$urlRouterProvider){
 		 
 		$stateProvider.state("collection",{
 			url: "/collection/:pid",
 			templateUrl:"app/product-listing/product-listing.html",
 			controller:"productListingController",
 			controllerAs:"productListingCtrl"
 		}).state("pdp",{
 			url:"/collection/:pid",
 			templateUrl:"app/product-details/product-details.html",
 			controller:"pdpController",
 			controllerAs:"pdpCtrl"
 		})

 		 $urlRouterProvider.otherwise("collection");
 	});


 }())