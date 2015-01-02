landingViewModule.factory('landingViewFactory', ['$route', 'landingViewService',
    function ($route, landingViewService) {
        var landingView = {};
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
            'user': 'lahiru manohara'
        };

        var questions = [question];

        return {
            init: function () {

                landingView.questions = questions;
                return landingView;
            }
        };

    }]);