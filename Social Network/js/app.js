'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'authenticationController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'authenticationController'
        })
        .otherwise({
            redirectTo: '/'
        });

    //localStorageServiceProvider.setStorageType('localStorage');
    //localStorageServiceProvider.setPrefix('socialNetworkApp');
}]);