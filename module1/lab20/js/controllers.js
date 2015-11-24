angular.module('lab20Controller', ['ContactPeopleService'])

.controller('ContactOdd', function($scope, Data){
    
    $scope.list = Data.list();
    $scope.special_class = 'odd';
})
.controller('ContactEven', function($scope, Data){

    $scope.list = Data.list();
    $scope.special_class = 'even';
});