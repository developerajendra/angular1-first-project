(function(){
	'use strict'
	var app = angular.module("angular-learning");

	app.service('productService', ['httpService',"$q", function(httpService,$q){
		var d=$q.defer();

		 this.getDate=function(){
		 	httpService.getData("productData").then(function(data){
				 d.resolve(data.data);
			},function(error){
				console.log(error);
			});
			 return d.promise;
		 }
		
	}]);


})();