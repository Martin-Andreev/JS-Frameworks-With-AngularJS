'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'AuthenticationController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'AuthenticationController'
        })
        .otherwise({
            redirectTo: '/'
        });

    //localStorageServiceProvider.setStorageType('localStorage');
    //localStorageServiceProvider.setPrefix('socialNetworkApp');
}]);