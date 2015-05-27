'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource', 'naif.base64', 'ngStorage']);

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
        .when('/logout', {
            templateUrl: 'templates/home.html',
            controller: 'AuthenticationController'
        })
        .when('/profile/edit-profile', {
            templateUrl: 'templates/edit-profile.html',
            controller: 'MainController'
        })
        .when('/profile/change-password', {
            templateUrl: 'templates/change-password.html',
            controller: 'MainController'
        })
        .when('/users/:username/', {
            templateUrl: 'templates/user-wall.html',
            controller: 'MainController'
        })
        .when('/friends/requests/', {
            templateUrl: 'templates/friend-requests.html',
            controller: 'MainController'
        })
        .when('/users/:username/friends', {
            templateUrl: 'templates/user-all-friends.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.run(function ($rootScope, $location, authenticationService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authenticationService.isLoggedIn()) {
            $location.path("/");
        }
    });
});