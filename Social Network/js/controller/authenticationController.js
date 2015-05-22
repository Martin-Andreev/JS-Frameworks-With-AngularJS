app.controller('AuthenticationController',
    function ($scope, $location, $rootScope, authenticationService, notifyService) {
        if ($scope.isLogged) {
            $scope.userData = {};
            authenticationService.getCurrentUserData().then(
                function (userData) {
                    $scope.userData = userData.data;
                    checkForEmptyImages($scope.userData);
                },
                function (error) {
                    notifyService.showError('Unable to get current user data', error.data)
                }
            );
        }

        function checkForEmptyImages(userData) {
            if (userData.coverImageData == null) {
                userData.coverImageData = 'http://mondomedia.com/application/views/channel/templates/default/_/images/default-background-cover.jpg';
            }

            if (userData.profileImageData == null) {
                if (userData.gender == 1) {
                    userData.profileImageData = "http://www.warwickagency.com/wp-content/uploads/2010/07/default_female_avatar.jpg";
                } else {
                    userData.profileImageData = "http://entekhabuni.ir/fa/wp-content/uploads/2013/10/default.png";
                }
            }
        }

        $scope.login = function (userData) {
            authenticationService.login(userData).then(
                function success(serverData) {
                    notifyService.showInfo("Successfully logged in");
                    authenticationService.setCredentials(serverData.data);
                    $location.path("/");
                },
                function error(error) {
                    notifyService.showError('Unsuccessful login', error.data);
                }
            );
        };

        $scope.register = function (userData) {
            authenticationService.register(userData).then(
                function success(serverData) {
                    notifyService.showInfo('Successfully registered');
                    authenticationService.setCredentials(serverData.data);
                    $location.path("/");
                },
                function error(error) {
                    notifyService.showError("Unable to register", error.data);
                }
            );
        };

        $scope.logout = function () {
            authenticationService.logout().then(
                function success(serverData) {
                    notifyService.showInfo('Successfully logged out');
                    $location.path('#/');
                    authenticationService.clearCredentials(serverData.data);
                },
                function error(error) {
                    notifyService.showError("Unable to logout", error.data);
                }
            );
        };

        $scope.editProfile = function (userData) {
            var data = {};
            data.name = userData.name;
            data.email = userData.email;
            data.profileImageData = userData.profileImageData.base64;
            data.coverImageData = userData.coverImageData.base64;
            data.gender = userData.gender;

            if (data.profileImageData == undefined) {
                data.profileImageData = userData.profileImageData;
            }

            if (data.coverImageData == undefined) {
                data.coverImageData = userData.coverImageData;
            }

            authenticationService.editProfile(data).then(
                function success() {
                    notifyService.showInfo('Your profile has been successfully edited');
                    $location.path('#/');
                },
                function error(error) {
                    notifyService.showError("Unable to edit your profile", error.data);
                }
            );
        };

        $scope.changePassword = function (userData) {
            authenticationService.changePassword(userData).then(
                function success() {
                    notifyService.showInfo('Your password has been successfully changed');
                    $location.path('#/');
                },
                function error(error) {
                    notifyService.showError('Unable to change password', error.data);
                }
            )
        }
    });