(function(angular){
	
	var app = angular.module("angular-learning");
	app.component("bagComponent",{
		templateUrl:"app/components/bag-component/bag-component.html",
		controller:function(bagService){
			console.log("component scope");
			// console.log("bag component...",bagService.getBag());
		}
	});

}(angular));