(function(){
	var app = angular.module("angular-learning");
	app.config(APP_CONFIG);

	function APP_CONFIG($locationProvider){
		// $locationProvider.html5Mode(true);
	}
}());