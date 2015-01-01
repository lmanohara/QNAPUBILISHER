questionsModule.factory('questionsFactory', ['$route',
    function ($route) {
        var questions = {};


        return {
            init: function () {

                return questions;
            }
        };

    }]);