angular.module('spi',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/lab1',{
		templateUrl: 'lab1.html'
	})
	.when('/lab/two',{
		templateUrl: 'lab2.html'
	})
	.when('/lab14',{
		templateUrl: 'lab14.html',
		controller: 'studentController'
	})

	.otherwise({
		redirecTo: '/',
		templateUrl: 'lab1.html'
	});

}])
.controller('studentController',function($scope,$http){
	var _url = 'data.json';
	$http.get(_url).success(function(response){
		console.log(response);

		$scope.students = response;
	});
});;