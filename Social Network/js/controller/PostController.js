app.controller('PostController',
    function ($scope, $location, $rootScope, postService, notifyService, $routeParams, $localStorage) {
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

        $scope.isChangeable = function(author) {
            return author.username === $localStorage.currentUser.userName;
        };

        if ($routeParams.username == undefined) {
        } else{
            getUserWallPage();
        }
    });