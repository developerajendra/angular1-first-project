 (function(){
 	var app = angular.module("angular-learning");

 	app.config(function($stateProvider,$urlRouterProvider){
 		 
 		$stateProvider.state("collection",{
 			url: "/collection",
 			templateUrl:"app/product-listing/product-listing.html",
 			controller:"productListingController",
 			controllerAs:"productListingCtrl"
 		})

 		 $urlRouterProvider.otherwise("collection");
 	});


 }())