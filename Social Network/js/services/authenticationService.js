'use strict';

app.factory('authenticationService', function ($http, baseServiceUrl, $localStorage) {
    var service = {};

    service.setCredentials = function (serverData) {
        $localStorage.currentUser = serverData;
    };

    service.clearCredentials = function () {
        $localStorage.$reset();
    };

    service.isLoggedIn = function () {
        return $localStorage.currentUser != undefined;
    };

    service.getHeaders = function () {
        return {
            Authorization: "Bearer " + $localStorage.currentUser.access_token
        };
    };

    service.getCurrentUserData = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me',
            headers: this.getHeaders()
        })
    };

    service.login = function (userData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/users/login',
            data: userData
        })
    };

    service.register = function (userData) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/users/register',
            data: userData
        })
    };

    service.logout = function () {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/users/logout',
            headers: this.getHeaders()
        });
    };

    service.editProfile = function (userData) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + '/me',
            data: userData,
            headers: this.getHeaders()
        });
    };

    service.changePassword = function (userData) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/changepassword',
            data: userData,
            headers: this.getHeaders()
        });
    };

    return service;
});