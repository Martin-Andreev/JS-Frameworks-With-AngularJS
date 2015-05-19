app.directive('login', function () {
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/home',
        replace: true
    }
});