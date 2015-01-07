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
        
        var answer = {
            id : 1,
            'rate' : 5,
            'description': "angular is most awesome framework for front end"
        }

        var questions = [question];
        var answers = [answer];

        return {
            init: function () {
                questionsObject.questions = questions;
                questionsObject.answers = answers;
                return questionsObject;
            }
        };

    }]);