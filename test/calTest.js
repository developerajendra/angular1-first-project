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