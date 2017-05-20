(function(){
	'use strict'
	var app = angular.module("angular-learning");
 
 
 	app.service('httpService', ["$http",'$q', function($http,$q){

 		this.getData = function(apiUrl){
	 		
 			return $http({
			 		method:"GET",
			 		url:"app/data/"+apiUrl+".json"
			 	}).then(function(response){
			 		return (response.data);
			 	},function(response){
			 		console.log(response);
			 	});
 			}

	}]);

 


})();