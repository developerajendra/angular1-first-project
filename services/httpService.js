(function(){
	'use strict'
	var app = angular.module("angular-learning");
 
 
 	app.service('httpService', ["$http", function($http){

 		this.getData = function(apiUrl){

	 		return new Promise(function(resolve,reject){
	 			 $http({
			 		method:"GET",
			 		url:"../data/"+apiUrl+".json"
			 	}).then(function(response){
			 		resolve(response.data);
			 	},function(response){
			 		console.log(response);
			 	})
	 		});

 		}

	}]);

 


})();