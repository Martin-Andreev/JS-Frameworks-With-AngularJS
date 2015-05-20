app.controller('MainController', ['$scope', 'authenticationService', function ($scope, authenticationService) {
    $scope.isLogged = authenticationService.isLoggedIn();
}]);