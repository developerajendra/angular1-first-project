(function(angular){
	var app = angular.module("angular-learning");

	app.directive("appHeader",['HEADER_NAV',function(HEADER_NAV){
		return{
			restrict:"E",
			scope:{

			},
			templateUrl:"app/directives/app-header/app-header.html",
			controller:function($scope){
				$scope.nav = HEADER_NAV && HEADER_NAV.nav
				console.log("nave...",$scope.nav );
			}
		}
	}])
}(angular));