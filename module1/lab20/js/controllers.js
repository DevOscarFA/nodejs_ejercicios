angular.module('lab20Controller', ['ContactPeopleService'])

.controller('ContactOdd', function($scope, Data){
    var list = Data.list();
    var new_list = [];
    
    for(var i in list){
        if(i%2){
            new_list.push(list[i]);
        }
    }
    
    $scope.list = new_list;
})
.controller('ContactEven', function($scope, Data){

    var list = Data.list();
    var new_list = [];
    
    for(var i in list){
        if(i%2){
            
        }else{
            new_list.push(list[i]);
        }
    }
    
    $scope.list = new_list;
});