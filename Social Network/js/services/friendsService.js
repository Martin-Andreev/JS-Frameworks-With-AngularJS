'use strict';

app.factory('friendsService', function ($http, baseServiceUrl, $localStorage, authenticationService) {
   var service = {};

    service.getOwnFriendsPreview = function (success, error) {
        $http({
            method: 'GET',
            url: baseServiceUrl + '/me/friends/preview',
            headers: authenticationService.getHeaders()
        }).success(function (data) {
            success(data)
        }).error(error);
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