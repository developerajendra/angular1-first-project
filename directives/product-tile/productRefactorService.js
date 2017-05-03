(function(){
	"use strict"

	var app = angular.module("angular-learning");

	app.service('productRefactorService', [function(){
		
		this.manageProduct = function(product){
			 var obj = {};
			 obj =  product.map(function(data){
			 	  
			 	console.log(data);

			 	return obj = {
			 		"productId" : data.product_id,
			 		"productName" : data.display_name,
			 		"productDescription" : data.details,
			 		"productImage" : data.assets["grid-eyewear-front"][0]["http_url"]
			 	};
				
			});
			return obj;
		}
	}])

})();