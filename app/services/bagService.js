(function(angular){
	var app = angular.module("angular-learning");
	app.service("bagService",[function(){
		var bag = [];
		this.setBag = function(item){
			bag.push(item);
		}

		this.getBag = function(){
			return  bag;
		}
	}]);
}(angular));