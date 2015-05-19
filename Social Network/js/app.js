'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', '....');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    })
}]);