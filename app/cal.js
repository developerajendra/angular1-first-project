var calculator = {
	add : function(x,y){
		return x+y; 
	},
	sub:(x,y)=>x-y
}


var MyApp = angular.module('MyApp', []);

//Writing a filter
MyApp.filter('reverse',[function(){
	return function(string){
		return string.split("").reverse().join("");
	}
}]);


//Writing a controller
MyApp.controller('CalculateController', ['$scope', function($scope){
	$scope.add = function(){
		$scope.sum = $scope.num1 + $scope.num2;
	}
}]);

//Writing a service
MyApp.factory('PlayerLocalApi', [function(){
	
	var data = [{
		"id":1,
		"name":"rajendra prasad",
		"age":28
	},{
		"id":2,
		"name":"sachin",
		"age":22
	}];

	var PlayerLocalApi = {};
	PlayerLocalApi.getPlayers = function(){
		return data;
	}

	return PlayerLocalApi;

}]);


 MyApp.factory('playerApi',['$http', function($http){
 	 
 	var dataUrl = "https://api.myjson.com/bins/ijeaf";

 	var PlayerLocalApi = {};

 	PlayerLocalApi.getPlayers = function(){
 		return $http.get(dataUrl);
 	}

 	return PlayerLocalApi;

 }]);


// MyApp.factory('PlayerLocalApi',function(){
// 	var data = [{
// 			"id":1,
// 			"name":"rajendra prasad",
// 			"age":28
// 		},{
// 			"id":2,
// 			"name":"sachin",
// 			"age":22
// 		}];
// 		var PlayerLocalApi = {};

// 		PlayerLocalApi.getPlayers = function(){
// 			return data;
// 		}

// 		return PlayerLocalApi;
// })

