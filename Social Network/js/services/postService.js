'use strict';

app.factory('postService', function ($http, baseServiceUrl, $localStorage, authenticationService) {
    var postService = {};

    postService.getWallPosts = function (username) {
        return $http({
            method: 'GET',
            url: baseServiceUrl + '/users/' + username + '/wall?StartPostId&PageSize=5',
            headers: authenticationService.getHeaders()
        })
    };

    return postService;
});