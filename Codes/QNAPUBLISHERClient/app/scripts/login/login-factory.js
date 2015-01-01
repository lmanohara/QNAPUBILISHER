loginModule.factory('loginFactory', ['$route',
    function ($route) {
        var login = {};


        return {
            init: function () {

                return login;
            }
        };

    }]);