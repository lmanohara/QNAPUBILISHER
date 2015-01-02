questionsModule.factory('questionsFactory', ['$route',
    function ($route) {
        var questionsObject = {};

        var question = {
            id : 1,
            'answerCount': 4,
            'title': 'How to create angular application?',
            'tags': [{
                id: 1,
                name: 'angular'
            }, {
                id: 2,
                name: 'javascript'
            }],
            'user': 'lahiru manohara',
            'description': "This is example description"
        };

        var questions = [question];

        return {
            init: function () {
                questionsObject.questions = questions;
                return questionsObject;
            }
        };

    }]);