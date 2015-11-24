angular.module('lab20', ['ngRoute', 'lab20Controller', 'ContactPeopleService'])

.config(function($routeProvider){

    $routeProvider

    .when('/listRed', {
            templateUrl: 'views/list.html',
            controller: 'ContactOdd'
    })
    .when('/listGreen', {
            templateUrl: 'views/list.html',
            controller: 'ContactEven'
    })

    .otherwise({
            redirectTo: '/'
    });
});