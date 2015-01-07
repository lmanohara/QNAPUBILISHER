landingViewModule.factory('landingViewFactory', ['$route', 'landingViewService',
    function ($route, landingViewService) {
        var landingView = {};
        var question = {
            id: 1,
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

        var questions = [];

        function getQuestionsList() {
            var questionList = landingViewService.getQuestionList();
            questionList.query().$promise.then(function (response) {
                angular.forEach(response, function (object) {
                    this.push(object);
                }, questions);
            }, function (error) {

            });
            console.log(questions);
        }

        return {
            init: function () {
                getQuestionsList();
                landingView.questions = questions;
                return landingView;
            }
        };

    }]);