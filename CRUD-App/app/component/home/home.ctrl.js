/**
 * Created by knodus on 24/2/16.
 */

angular.module('CRUDApp').controller('homeController',function($scope,$state,$location){

    $scope.redirectAdd=function() {
        $location.path('/add');
    }

    $scope.redirectList=function(){
        $location.path('/list');
    }

});