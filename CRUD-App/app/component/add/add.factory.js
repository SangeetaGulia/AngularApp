/**
 * Created by knodus on 24/2/16.
 */

angular.module('CRUDApp').factory('addFactory',function($http){

        alert("In add factory");
        return $http.post("http:/reactive-app.herokuapp.com/create",emp);

    }


);