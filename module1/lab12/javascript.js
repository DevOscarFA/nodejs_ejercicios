angular.module('mainApp', [])
	.controller('studentController', function($scope){

		$scope.reset = function(){

			$scope.firstname = 'Oscar',
			$scope.lastname = 'Fernandez',
			$scope.email = 'oscar@gmail.com',
			$scope.age = 18;
		};

		$scope.reset();
	});