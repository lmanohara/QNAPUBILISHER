searchModule.directive('resultDirective',
    function () {
        return {
            restrict: 'A',
            templateUrl: 'scripts/search/result-view.html',
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