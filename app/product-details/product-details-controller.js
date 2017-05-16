(function(){
	var app = angular.module('angular-learning');

	  app.controller('pdpController', ['$scope', 'productService','productModalService','$location',
		function($scope,productService,productModalService,$location){

			  
			 /**
	 	 	 *	Getting collection & current product ID
	 	 	 */
	 	 	 var collection = $location.$$path.split("collection")[1].split("/")[1];
			 var productId = $location.$$path.split("collection")[1].split("/")[2];

			 console.log(collection.productId);

			/**
			*	Getting detail product from product modal
			*/
			productService.getData(collection).then(function(data){
				$scope.data = productModalService.manageProduct(data,"050E4121045A07C2");
			},function(error){

			})
		
	}])
})();