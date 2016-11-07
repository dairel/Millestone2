describe('BMIService', function() {
	
	it('verifica se esta correto a operação de altura e peso', function () {
		expect(BMIService.Calculoprincipal(89, 1.79)).toBe(27.776910832995224);
	});
	
	it('Verifica um numero invalido', function () {
		expect(BMIService.Calculoprincipal('1', '')).toBe(null);
	});
	
});
