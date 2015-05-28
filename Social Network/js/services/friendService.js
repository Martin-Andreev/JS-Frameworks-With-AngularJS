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

    friendService.getOwnFriendsDetailed = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me/friends/',
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

    friendService.getFriendFriendsDetailed = function (username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/' + username + '/friends/',
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

    friendService.sendFriendRequest = function (username) {
        return $http({
            method: 'POST',
            url: baseServiceUrl + '/me/requests/' + username + '/',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.getFriendRequests = function () {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/me/requests/',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.approveFriendRequest = function (id) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/requests/' + id + '?status=approved',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.rejectFriendRequest = function (id) {
        return $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/requests/' + id + '?status=rejected',
            headers: authenticationService.getHeaders()
        })
    };

    friendService.searchUsers = function (term) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/search?searchTerm=' + term,
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