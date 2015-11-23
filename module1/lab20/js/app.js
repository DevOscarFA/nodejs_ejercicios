angular.module('lab20', ['ngRoute', 'lab20Controller', 'ContactPeopleService'])

.config(function($routeProvider){

	$routeProvider

	.when('/listRed', {
		templateUrl: 'views/list_red.html',
		controller: 'ContactOdd'
	})
	.when('/listGreen', {
		templateUrl: 'views/list_green.html',
		controller: 'ContactEven'
	})

	.otherwise({
		redirectTo: '/'
	});
});