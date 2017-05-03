 (function(angular){

 	var app = angular.module("angular-learning");

 	app.directive("productTile",["productRefactorService",function(productRefactorService){
 		return {
 			scope : {
 				data : "="
 			},
 			restrict:"E",
 			templateUrl:"./directives/product-tile/product-tile.html",
 			controller: function($scope){
				   
 				  $scope.data = productRefactorService.manageProduct($scope.data);
 
 			}
 		}
	}]);

 }(angular));




