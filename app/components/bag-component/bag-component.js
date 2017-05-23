(function(angular){
	
	var app = angular.module("angular-learning");
	app.component("bagComponent",{
		templateUrl:"app/components/bag-component/bag-component.html",
		bindings:{

		},
		controller:function(){
			console.log("bag component...");
		}
	});

}(angular));