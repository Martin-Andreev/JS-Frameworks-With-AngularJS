app.factory('userData', ['$resourse', 'baseServiceUrl', function ($resourse) {
    var resourse = $resourse(baseServiceUrl, paramDefaults, actions);
    function registerUser(user){

    }

    function loginUser(user){

    }

    function logoutUser(){

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);