angular.module('calc',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/add',{
		templateUrl: 'add.html'
	})
	.when('/subtract',{
		templateUrl: 'subtract.html'
	})
	.when('/multiply',{
		templateUrl: 'multiply.html'
	})
	.when('/divide',{
		templateUrl: 'divide.html'
	})
        .otherwise({
		redirecTo: '/',
		templateUrl: 'add.html'
	});

}])
.controller('controllerAdd',function($scope){
        $scope.dataAdd = function (){
            $scope.res = $scope.n1 + $scope.n2;
        };
})
.controller('controllerSubtract',function($scope){
        $scope.dataSubtract = function (){
            $scope.res = $scope.n1 - $scope.n2;
        };
})
.controller('controllerMultiply',function($scope){
        $scope.dataMultiply = function (){
            $scope.res = $scope.n1 * $scope.n2;
        };
})
.controller('controllerDivide',function($scope){
        $scope.dataDivide = function (){
            $scope.res = $scope.n1 / $scope.n2;
        };
});