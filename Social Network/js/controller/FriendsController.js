app.controller('FriendsController',
    function ($scope, $location, $rootScope, friendsService, notifyService, $routeParams) {
        $scope.getUserFullData = function getUserFullData() {
            friendsService.getUserFullData($routeParams.username).then(
                function (success) {
                    $scope.userFullData = success.data;
                },
                function (error) {
                    notifyService.showError('Unable to show user data', error.data)
                }
            )
        };

        $scope.getOwnFriendsPreview = function () {
            friendsService.getOwnFriendsPreview().then(
                function (success) {
                    $scope.ownFriendsPreview = success.data;
                },
                function (error) {
                    notifyService.showError('Unable to show your friends', error.data)
                }
            )
        };
    }
);