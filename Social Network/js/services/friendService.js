'use strict';

app.factory('friendService', function ($http, baseServiceUrl, $localStorage, authenticationService) {
   var friendService = {};

    friendService.getOwnFriendsPreview = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me/friends/preview',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.getFriendFriendsPreview = function (username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/' + username + '/friends/preview',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.getUserFullData = function (username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/' + username + '/',
            headers: authenticationService.getHeaders()
        })
    };

    return friendService;
});


//service.getOwnFriendsPreview = function () {
//    return $http({
//        method: 'GET',
//        url: baseServiceUrl + '/me/friends/preview',
//        headers: authenticationService.getHeaders()
//    });
//}