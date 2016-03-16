/**
 * Created by knodus on 24/2/16.
 */


angular.module('CRUDApp').controller('addController',function($scope){

    $scope.addEmployee=function() {

        alert(" Inside Add function");
        $scope.emp = {
            "name": $scope.emp_name,
            "email": $scope.emp_email,
            "dob": $scope.emp_dob,
            "companyName": $scope.emp_companyname,
            "id": $scope.emp_id
        };

        alert(JSON.stringify($scope.emp));
        //var x=addFactory;

    }
    })