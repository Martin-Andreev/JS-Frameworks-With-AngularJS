app.directive('login', function () {
    return {
        controller: 'homeController',
        restrict: 'E',
        templateUrl: 'templates/home',
        replace: true
    }
});