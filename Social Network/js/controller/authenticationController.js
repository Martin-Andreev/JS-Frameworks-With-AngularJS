app.controller('AuthenticationController',
    function ($scope, $location, $rootScope, authenticationService, notifyService) {
        $scope.login = function () {
            $scope.login = function (userData) {
                authenticationService.login(
                    userData,
                    function success(serverData) {
                        notifyService.showInfo("Login successful");
                        authenticationService.setCredentials(serverData);
                        $location.path("/");
                    },
                    function error(err) {
                        notifyService.showError('Unsuccessful Login', err);
                    }
                );
            };
        };

        $scope.register = function () {
            $scope.register = function (userData) {
                authenticationService.register(
                    userData,
                    function success(serverData) {
                        notifyService.showInfo('Successfully register');
                        authenticationService.setCredentials(serverData);
                    },
                    function error(err) {
                        notifyService.showError("Unsuccessful Register", err);
                    }
                );
            };
        }
    });

//$scope.register = function (user) {
//    userData.register(user,
//        function (serverData) {
//        },
//        function (serverError) {
//        });
//};