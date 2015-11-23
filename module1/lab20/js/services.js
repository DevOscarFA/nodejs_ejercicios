angular.module('ContactPeopleService', [])

.service('Data', function($http){
    var _url = 'data.json';
    
    var data;
    
    $http.get(_url).success(function(response){
        console.log(response);

        data = response;
    });
    
    this.list = function(){
        return data;
    };
});