'use strict';

app.factory('authenticationService', function ($http, baseServiceUrl) {
    var service = {};

    service.setCredentials = function (serverData) {
        sessionStorage['currentUser'] = JSON.stringify(serverData);
    };

    service.isLoggedIn = function() {
        return sessionStorage['currentUser'] != undefined;
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

    return service;
});


//var key = 'user';
//
//function saveUserData(data){
//    //localStorageServiceProvider.set(key, data);
//    localstorage.setItem(key, data);
//}
//
//function getUserData(){
//    //localStorageServiceProvider.get(key);
//    localStorage.getItem(key);
//}
//
//return{
//    saveUser: saveUserData,
//    getUser: getUserData,
//    login: login
//}