landingViewModule.directive('topQuestionDirective',
    function () {
        return {
            restrict: 'A',
            templateUrl: 'scripts/landingview/topquestion-view.html',
            scope: {
                answerCount: '@',
                title: '@',
                user: '@',
                question: '=question',
                id: '@'

            },

            controller: function ($scope, $element, $attrs) {

            },

            link: function ($scope, $element, $attrs) {

            }

        };
    });