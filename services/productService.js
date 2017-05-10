(function(){
	'use strict'
	var app = angular.module("angular-learning");

	app.service('productService', ['httpService',"$q", "$location",
		function(httpService,$q,$location){
			 this.getDate=function(location){
			 	return httpService
			 		.getData(location)
			 		.then(function(data){
					 	return (data.data);
					},function(error){
						console.log(error);
					});
			 }
		
	}]);


})();