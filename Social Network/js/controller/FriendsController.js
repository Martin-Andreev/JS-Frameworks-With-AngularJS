app.controller('FriendsController',
    function ($scope, $location, $rootScope, friendsService, notifyService) {
        $scope.getOwnFriendsPreview = function () {
            friendsService.getOwnFriendsPreview(
                function (success) {
                    $scope.ownFriendsPreview = success;
                },
                function (error) {
                    notifyService.showError('Unable to show your friends', error)
                }
            )
        }
    }
);

//$scope.getOwnFriendsPreview = function () {
//    friendsService.getOwnFriendsPreview().then(
//        function (success) {
//            $scope.ownFriendsPreview = success;
//        },
//        function (error) {
//            notifyService.showError('Unable to show your friends', error)
//        }
//    )
//}