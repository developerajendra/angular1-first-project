 (function(){
 	var app = angular.module("angular-learning");

 	app.controller('productListingController', ["$scope","productService",
 	 function($scope,productService){
 		
 		productService.getDate().then(function(data){
 			$scope.data = data;
 			// console.log(data);
 			//$scope.$apply(); 
 		},function(error){
 			console.log(error);
 		});

 	}]);

 	 
 }());