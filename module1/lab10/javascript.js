
angular.module('changeImage', [])
	.controller('controllerOne', ['$scope', function($scope){

	   $scope.actual_image = 'http://dummyimage.com/200x200/000/fff';

      $scope.revealImage = function(_image){

         $scope.actual_image = _image;
      };
		
	}]);