 (function(angular){

 	var app = angular.module("angular-learning");

 	app.directive("productTile",["productModalService",function(productModalService){
 		return {
 			scope : {
 				data : "=",
 				collection:"<"
 			},
 			restrict:"E",
 			templateUrl:"app/directives/product-tile/product-tile.html",
 			controller: function($scope){
				
				/**
				*Product model
				*/   
 				$scope.data = productModalService.manageProduct($scope.data,"050E114C045A07B8");

 				// console.log($scope.data);

 				/**
 				* color index
 				*/
 				$scope.colorIndex = 0;

 				 $scope.changeColor = function(pid){
 				 	$scope.colorIndex = pid || 0;
 				 }
 
 			}
 		}
	}]);

 }(angular));




