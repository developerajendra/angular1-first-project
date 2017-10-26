describe('calculator tests',function(){
	
	describe('add',function(){
		it('1+1 shoule equal 2',function(){
			expect(calculator.add(1,1)).toBe(2);
		});
	});


	describe('sub',function(){
		it('1-1 should equal to 0',function(){
			expect(calculator.sub(10,9)).toBe(1);
		});
	})	
});


describe('App Tests',()=>{
	beforeEach(module('MyApp'));

	describe('reversestring',function(){
		var reverse;

		beforeEach(inject(function($filter){
			reverse = $filter('reverse',{});
		}))

		it('should reverse a string',()=>{
			expect(reverse('rahil')).toBe('lihar');
			expect(reverse('test')).toBe('tset');
		})

	});


	describe("add controller",function(){
		var $controller;

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		it('1 + 1 shoule equal 2',function(){
			var $scope = {};
			var controller = $controller('CalculateController',{$scope});
			$scope.num1 = 1;
			$scope.num2 = 5;

			$scope.add(); 
			expect($scope.sum).toBe(6);
		});
	});


	describe("playerservicetest",function(){
		var data = [{
			"id":1,
			"name":"rajendra prasad",
			"age":28
		},{
			"id":2,
			"name":"sachin",
			"age":22
		}];

		var PlayerLocalApi;

		beforeEach(inject(function( _PlayerLocalApi_ ){
			PlayerLocalApi = _PlayerLocalApi_;
		}));

		it("should return search player data",function(){
			expect(PlayerLocalApi.getPlayers()).toEqual(data);
		});
	});



	describe('playerservicetestwithhttp',()=>{
		var playerApi,httpBackend,$scope,$http;

		beforeEach(inject((_$httpBackend_,_playerApi_,$rootScope,_$http_)=>{
			playerApi = _playerApi_;
			httpBackend = _$httpBackend_;
			$scope = $rootScope.$new();       
			$http = _$http_;

		}));

		 
		it("service test",function(){
			var returnData = {};
			httpBackend.whenGET("https://api.myjson.com/bins/ijeaf").respond(returnData);


			var returnedPromise = playerApi.getPlayers();
			var result;

 
			returnedPromise.then(function(response){
				result = response.data;
			});

			httpBackend.flush();
			$scope.$apply();

			console.log("returnedPromise..",returnData,result);

			expect(result).toEqual(returnData);
		});
	});


});







