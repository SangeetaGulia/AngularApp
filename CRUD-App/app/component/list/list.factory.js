/**
 * Created by knodus on 24/2/16.
 */


angular.module("CRUDApp").factory('listFactory', function($http){

    return $http.get('http://reactive-app.herokuapp.com/getAll');
});