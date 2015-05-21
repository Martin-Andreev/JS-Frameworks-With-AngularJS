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

    service.login = function (userData, success, error) {
        $http.post(baseServiceUrl + '/users/login', userData)
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.register = function (userData, success, error) {
        $http.post(baseServiceUrl + '/users/register', userData)
            .success(function (data) {
                success(data);
            }).error(error);
    };

    service.logout = function (success, error) {
        $http({
            method: 'POST',
            url: baseServiceUrl + '/users/logout',
            headers: this.getHeaders()
        }).success(function (data) {
            success(data)
        }).error(error);
    };

    service.editProfile = function (userData, success, error) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/me',
            data: userData,
            headers: this.getHeaders()
        }).success(function (data) {
            success(data)
        }).error(error);
    };

    service.getCurrentUserData = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me',
            headers: this.getHeaders()
        })
    };

    return service;
});