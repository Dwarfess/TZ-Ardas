        var app = angular.module('app',["ngRoute"])
            .config(function($routeProvider){
            $routeProvider.when('/first',
            {
                templateUrl:'views/first.html',
                controller:'myCtrl'
            });
            $routeProvider.when('/second',
            {
                templateUrl:'views/second.html',
                controller:'myCtrl'
            });

            $routeProvider.otherwise({redirectTo: '/first'});
        });