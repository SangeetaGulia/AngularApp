/**
 * Created by knodus on 24/2/16.
 */

angular.module('CRUDApp').controller('listController',function($scope,listFactory){

    $scope.emp=listFactory;

    var x=listFactory;

    x.then(function(response){
        $scope.emp=response.data;
    })
});

