 (function(){
 	var app = angular.module("angular-learning");

 	app.controller('productListingController', ["$scope","productService","$location",
 	 function($scope,productService,$location){

 	 	/**
 	 	*	Getting API url
 	 	*/
 	 	var location = $location.$$path.split("collection")[1].split("/")[1];

 		productService.getDate(location).then(function(pData){
 			$scope.data = pData;
 			// console.log(data);
 			// $scope.$apply(); 
 		},function(error){
 			console.log(error);
 		});

 	}]);

 	 
 }());