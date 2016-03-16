/**
 * Created by knodus on 24/2/16.
 */
    angular.module('CRUDApp').config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('home');

        $stateProvider
           .state('home',{
                url: '/home',
                templateUrl:'../app/component/home/home.html',
                controller:'homeController'

            })

            .state('add',{
            url: '/add',
            templateUrl:'../app/component/add/add.html',
            controller:'addController'

        })
            $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: '../app/component/list/list.html',
                controller: 'listController'
            })




    });
