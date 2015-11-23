angular.module('lab19', ['ngRoute', 'lab19Controller', 'ContactPeopleService'])

.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/otherwise.html',
		controller: 'ContactPeopleController'
	})

	.otherwise({
		redirectTo: '/'
	});
});