(function(){
	"use strict"

	var app = angular.module("angular-learning");

	app.service('productModalService', [function(){
		

		/**
		* ManageProduct() function is used for sending back refactor data 
		*/
		this.manageProduct = function(product,pid){


			 var obj = {};

			 /**
			 * Returning the product list objects 
			 */
			 obj = product && product.length && product.map(function(data){
			 		return obj =  setProductObject(data);
			})


			 /**
			 * Returning the product details objects 
			 */
			 product && product.tiles && product.tiles.length && product.tiles.map(function(dataGroup){

			 	return dataGroup.products.map(function(data){
			 		if(data.product_id == pid){
			 			 obj =  setProductObject(data);
			 		}
			 	});

			 });


			 
			 /**
			 * Set common product Object
			 */

			 function setProductObject(data){
	 			return {
			 		"productId" : data && data.product_id,
			 		"productName" : data && data.display_name,
			 		"productDescription" : data && data.details,
			 		"productImage" : data && data.assets && data.assets.hasOwnProperty("grid-eyewear-front") && data.assets["grid-eyewear-front"][0]["http_url"]
			 	};
			 }


			return obj;
		}
	}])

})();