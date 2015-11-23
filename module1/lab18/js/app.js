angular.module('lab18', ['ngRoute', 'lab18Controllers', 'MathService'])

.config(function($routeProvider){

	$routeProvider

	.when('/operation/sum', {
		templateUrl: 'views/sum.html',
		controller: 'ControllerAdd'
	})

	.when('/operation/res', {
		templateUrl: 'views/res.html',
		controller: 'ControllerSubtract'
	})

	.when('/operation/mul', {
		templateUrl: 'views/mul.html',
		controller: 'ControllerMultiply'
	})

	.when('/operation/div', {
		templateUrl: 'views/div.html',
		controller: 'ControllerDivide'
	})

	.otherwise({

		redirectTo: '/',
		templateUrl: 'otherwise.html'
	});
});