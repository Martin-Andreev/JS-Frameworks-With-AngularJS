app.controller('FriendController',
    function ($scope, $location, friendService, notifyService, $routeParams) {
        $scope.getUserFullData = function getUserFullData() {
            friendService.getUserFullData($routeParams.username).then(
                function (userData) {
                    $scope.userFullData = $scope.checkForEmptyImages(userData.data);
                },
                function (error) {
                    notifyService.showError('Unable to show user data', error.data)
                }
            )
        };

        function getOwnFriendsPreview() {
            friendService.getOwnFriendsPreview().then(
                function (friendsData) {
                    friendsData.data.friends.forEach(function (friend) {
                        $scope.checkForEmptyImages(friend);
                    });

                    $scope.ownFriendsPreview = friendsData.data;
                },
                function (error) {
                    notifyService.showError('Unable to show your friends', error.data)
                }
            )
        }

        function getFriendFriendsPreview() {
            friendService.getFriendFriendsPreview($routeParams.username).then(
                function (friendsData) {
                    friendsData.data.friends.forEach(function (friend) {
                        $scope.checkForEmptyImages(friend);
                    });

                    $scope.friendFriendsPreview = friendsData.data;
                },
                function (error) {
                    notifyService.showError('Unable to show friend friends', error.data)
                }
            )
        }

        if ($routeParams.username == undefined) {
            getOwnFriendsPreview();
        } else{
            getFriendFriendsPreview();
        }
    });