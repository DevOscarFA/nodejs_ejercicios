angular.module('spi',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/hello',{
		templateUrl: 'other-wise.html'
	})
	.when('/message/one',{
		templateUrl: 'message-one.html'
	})
	.otherwise({
		redirecTo: '/',
		templateUrl: 'other-wise.html'
	});

}]);