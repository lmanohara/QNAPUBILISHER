searchModule.factory('searchFactory', ['$route', 'searchService',
    function ($route, searchService) {
        var search = {};
        var question = {
            'answerCount': 4,
            'title': 'How to create angular application?',
            'tags': [{
                id: 1,
                name: 'angular'
            }, {
                id: 2,
                name: 'javascript'
            }],
            'user': 'lahiru manohara'
        };

        var questions = [question];

        return {
            init: function () {

                search.questions = questions;
                return search;
            }
        };

    }]);