(function(){
	var app = angular.module("angular-learning");

	var HEADER_NAV;

	app.constant("HEADER_NAV",{
		nav : [
			{
				name:"Home",
				id:"#"
			},
			{
				name:"Womens Sunglasses",
				id:"womens-sunglasses"
			},
			{
				name:"Womens-eyeglasses",
				id:"womens-eyeglasses"
			},
			{
				name:"Cart",
				id:"cart"
			}
		]
	})
}());