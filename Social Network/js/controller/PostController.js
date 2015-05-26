app.controller('PostController',
    function ($scope, $location, $rootScope, postService, notifyService, $routeParams, $localStorage, $route) {
        function getUserWallPage() {
            postService.getWallPosts($routeParams.username).then(
                function (postsData) {
                    postsData.data.forEach(function (post) {
                        post.author = $scope.checkForEmptyImages(post.author);
                    });

                    $scope.wallPosts = postsData.data;
                },
                function (error) {
                    notifyService.showError('Error while loading posts', error.data)
                }
            )
        }

        $scope.addNewPost = function (postContent) {
            postService.addNewPost(postContent, $routeParams.username).then(
                function () {
                    getUserWallPage();
                    notifyService.showInfo('Successfully added new post')
                },
                function (error) {
                    notifyService.showError('Unable to add new post', error.data.message)
                }
            )
        };

        $scope.deletePost = function (postId) {
            postService.deletePost(postId).then(
                function () {
                    getUserWallPage();
                    notifyService.showInfo('Your post has been successfully removed')
                },
                function (error) {
                    notifyService.showError('Unable to remove this post', error.data)
                }
            )
        };

        $scope.addNewComment = function (commentContent, commentId) {
            postService.addNewComment(commentContent, commentId).then(
                function () {
                    getUserWallPage();
                    notifyService.showInfo('Successfully added new comment')
                },
                function (error) {
                    notifyService.showError('Unable to add new comment', error.data.message)
                }
            )
        };

        $scope.deleteComment = function (commentId, postId) {
            postService.deleteComment(commentId, postId).then(
                function () {
                    getUserWallPage();
                    notifyService.showInfo('Your comment has been successfully removed')
                },
                function (error) {
                    notifyService.showError('Unable to remove this comment', error.data.message)
                }
            )
        };

        $scope.likePost = function (postId) {
            postService.likePost(postId).then(
                function () {
                    getUserWallPage();
                },
                function (error) {
                    notifyService.showError('Unable to like this post', error.data)
                }
            )
        };

        $scope.unlikePost = function (postId) {
            postService.unlikePost(postId).then(
                function () {
                    getUserWallPage();
                },
                function (error) {
                    notifyService.showError('Unable to like this comment', error.data)
                }
            )
        };

        $scope.likeComment = function (commentId, postId) {
            postService.likeComment(commentId, postId).then(
                function () {
                    getUserWallPage();
                },
                function (error) {
                    notifyService.showError('Unable to like this comment', error.data)
                }
            )
        };

        $scope.unlikeComment = function (commentId, postId) {
            postService.unlikeComment(commentId, postId).then(
                function () {
                    getUserWallPage();
                },
                function (error) {
                    notifyService.showError('Unable to unlike this comment', error.data)
                }
            )
        };

        $scope.isChangeable = function(author) {
            return author.username === $localStorage.currentUser.userName;
        };

        if ($routeParams.username == undefined) {
        } else{
            getUserWallPage();
        }
    });