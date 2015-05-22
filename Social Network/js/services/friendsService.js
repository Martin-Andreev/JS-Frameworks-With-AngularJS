'use strict';

app.factory('friendsService', function ($http, baseServiceUrl, $localStorage, authenticationService) {
   var service = {};

    service.getOwnFriendsPreview = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me/friends/preview',
            headers: authenticationService.getHeaders()
        })
    };

    service.getUserFullData = function (username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/' + username + '/',
            headers: authenticationService.getHeaders()
        })
    };

    return service;
});


//service.getOwnFriendsPreview = function () {
//    return $http({
//        method: 'GET',
//        url: baseServiceUrl + '/me/friends/preview',
//        headers: authenticationService.getHeaders()
//    });
//}