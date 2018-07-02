'use strict';

// angular.js main app initialization
var app = angular.module('1M5',['ngRoute']);

// routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    $routeProvider.
            when('/',{templateUrl: 'templates/home.html', controller: 'mainController' }).
            when('/home',{templateUrl: 'templates/home.html', controller: 'mainController' }).
            when('/contracts',{templateUrl: 'templates/contracts.html', controller: 'mainController' }).
            when('/did',{templateUrl: 'templates/did.html', controller: 'mainController' }).
            when('/sensors',{templateUrl: 'templates/sensors.html', controller: 'mainController' }).
            when('/content',{templateUrl: 'templates/content.html', controller: 'mainController' }).
            when('/prana',{templateUrl: 'templates/prana.html', controller: 'mainController' }).
            when('/aten',{templateUrl: 'templates/aten.html', controller: 'mainController' }).
            when('/keyring',{templateUrl: 'templates/keyring.html', controller: 'mainController' }).
            when('/infovault',{templateUrl: 'templates/infovault.html',controller: 'mainController'}).
            when('/ssauthn',{templateUrl: 'templates/ssauthn.html',controller: 'mainController'}).
            when('/repbac',{templateUrl: 'templates/repbac.html',controller: 'mainController'}).
            when('/consensus',{templateUrl: 'templates/consensus.html',controller: 'mainController'}).
            when('/dex',{templateUrl: 'templates/dex.html',controller: 'mainController'}).
            when('/os',{templateUrl: 'templates/os.html',controller: 'mainController'}).
            when('/hardware',{templateUrl: 'templates/hardware.html',controller: 'mainController'}).
            otherwise({redirectTo: '/'})
    }]);

// controllers
app.controller('mainController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.currentPath = $location.path();
    $scope.selectClass = function (){
        if($location.path() === '/' || $location.path() === '/home') {
            return "homepage";
        } else {
            return "no-sidebar";
        }
    };
    $scope.showLogo = function(){
        return $location.path() === '/' || $location.path() === '/home';
    }
}]);