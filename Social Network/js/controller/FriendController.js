app.controller('FriendController',
    function ($scope, friendService, notifyService, $routeParams) {
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

        $scope.getUserPreviewData = function (username) {
            friendService.getUserPreviewData(username).then(
                function (userData) {
                    $scope.userPreviewData = $scope.checkForEmptyImages(userData.data);
                },
                function (error) {
                    notifyService.showError('Unable to show user data', error.data)
                }
            )
        };

        $scope.getOwnFriendsPreview = function () {
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
        };

        $scope.getOwnFriendsDetailed = function () {
            friendService.getOwnFriendsDetailed($routeParams.username).then(
                function (friendsData) {
                    friendsData.data.forEach(function (friend) {
                        $scope.checkForEmptyImages(friend);
                    });

                    $scope.ownFriendsDetailed = friendsData.data;
                },
                function (error) {
                    notifyService.showError('Unable to show friend your friends', error.data)
                }
            )
        };

        $scope.getFriendFriendsPreview = function () {
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
        };

        $scope.getFriendFriendsDetailed = function () {
            friendService.getFriendFriendsDetailed($routeParams.username).then(
                function (friendsData) {
                    friendsData.data.forEach(function (friend) {
                        $scope.checkForEmptyImages(friend);
                    });

                    $scope.friendFriendsDetailed = friendsData.data;
                },
                function (error) {
                    notifyService.showError('Unable to show friend friends', error.data)
                }
            )
        };

        $scope.getFriendRequests = function () {
            friendService.getFriendRequests().then(
                function (friendRequestData) {
                    friendRequestData.data.forEach(function (requestData) {
                        $scope.checkForEmptyImages(requestData.user);
                    });
                    $scope.friendRequests = friendRequestData.data;
                },
                function (error) {
                    notifyService.showError('Unable to show friend requests' + error.data.message)
                });
        };

        $scope.sendFriendRequest = function () {
            friendService.sendFriendRequest($routeParams.username).then(
                function () {
                    notifyService.showInfo('Friend request has been successfully sent');
                    $scope.userFullData.hasPendingRequest = true;
                },
                function (error) {
                    notifyService.showError('Unable to send friend request', error.data)
                }
            )
        };

        $scope.approveFriendRequest = function (id) {
            friendService.approveFriendRequest(id).then(
                function () {
                    $scope.getFriendRequests();
                    $scope.getOwnFriendsPreview();
                    notifyService.showInfo('Friend request from has been approved')
                },
                function (error) {
                    notifyService.showError('Unable to approve friend request' + error.data.message)
                }
            )
        };

        $scope.rejectFriendRequest = function (id) {
            friendService.rejectFriendRequest(id).then(
                function () {
                    $scope.getFriendRequests();
                    notifyService.showInfo('Friend request from has been rejected')
                },
                function (error) {
                    notifyService.showError('Unable to reject friend request' + error.data.message)
                }
            )
        };

        $scope.searchUsersByName = function (term) {
            if (term.trim().length > 0) {
                friendService.searchUsers(term).then(
                    function (serverData) {
                        serverData.data.forEach(function (user) {
                            $scope.checkForEmptyImages(user);
                        });

                        $scope.searchResult = serverData.data;
                    },
                    function (error) {
                        notifyService.showError('Unable to search with the given terms' + error.data.message);
                    });
            }
        };

        //if ($routeParams.username == undefined) {
        //    getOwnFriendsPreview();
        //} else{
        //    getFriendFriendsPreview();
        //}
    });