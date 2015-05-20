app.controller('AuthenticationController',
    function ($scope, $location, $rootScope, authenticationService, notifyService, $localStorage) {
        $scope.login = function (userData) {
            authenticationService.login(
                userData,
                function success(serverData) {
                    notifyService.showInfo("Successfully logged in");
                    authenticationService.setCredentials(serverData);
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError('Unsuccessful login', err);
                }
            );
        };

        $scope.register = function (userData) {
            authenticationService.register(
                userData,
                function success(serverData) {
                    notifyService.showInfo('Successfully registered');
                    authenticationService.setCredentials(serverData);
                },
                function error(err) {
                    notifyService.showError("Unable to register", err);
                }
            );
        };

        $scope.logout = function () {
            authenticationService.logout(
                function success(serverData) {
                    notifyService.showInfo('Successfully logged out');
                    $location.path('#/');
                    authenticationService.clearCredentials(serverData);
                },
                function error(err) {
                    notifyService.showError("Unable to logout", err);
                }
            );
        };

        $scope.editProfile = function (userData) {
            authenticationService.editProfile(
                userData,
                function success(serverData) {
                    notifyService.showInfo('Your profile has been successfully edited');
                    authenticationService.setCredentials(serverData);
                    $location.path('#/');
                },
                function error(err) {
                    notifyService.showError("Unable to edit your profile", err);
                }
            );
        };
    });