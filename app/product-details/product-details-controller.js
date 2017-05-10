(function(){
	var app = angular.module('angular-learning');

	  app.controller('pdpController', ['$scope', 'productService','productModalService','$location',
		function($scope,productService,productModalService,$location){

			console.log("$location",$location);

			/**
			*	Getting detail product from product modal
			*/
			productService.getDate().then(function(data){
				$scope.data = productModalService.manageProduct(data,"050E4121045A07C2");
			},function(error){

			})
		
	}])
})();