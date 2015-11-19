
angular.module('changeClass', [])
	.controller('changeClassController', ['$scope', function($scope){

		$scope.changeProperties = function(){
   			$scope.style_class = {
   				"background": "blue",
   				"color": "yellow"
   			}
   		};

   		$scope.changeClassProperties = function(){
   			$scope.special_class = 'angularjs';
   		}

   		$scope.resetCLassProperties = function(){
   			$scope.special_class = '';
			$scope.style_class = '';
   		}

	}]);