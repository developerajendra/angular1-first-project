(function(angular){
	var app = angular.module("angular-learning");
	app.directive("productCarousel",["productService",function(productService){
		return {
			scope : {
				collection:"<",
				showitems:"<"
			},
			restrict:"E",
			templateUrl:"./directives/product-carousel/product-carousel.html",
			controller:function($scope){
				/**
		 	 	*	Getting API url
		 	 	*/ 
		 		productService.getDate($scope.collection).then(function(pData){
		 			$scope.data = pData;

		 			//Product carousel
			 		angular.element(document).ready(function(){
					 	$(".owl-carousel").owlCarousel({
					 		items:$scope.showitems,
					 		nav:$scope.navigation

					 	});
					});
		 		},function(error){
		 			console.log(error);
		 		});

			}
		}
	}]);
}(angular));