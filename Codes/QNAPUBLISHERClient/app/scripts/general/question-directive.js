var questionModule = angular.module('questionModule', []);
questionModule.directive('questionDirective', ['$location',
    function ($location) {
        return {
            restrict: 'A',
            templateUrl: 'scripts/general/question-partial-view.html',
            scope: {
                answerCount: '@',
                title: '@',
                user: '@',
                question: '=question',
                id: '@'

            },

            controller: function ($scope, $element, $attrs) {
                $scope.titleClick = function (id) {
                    $location.path(app.meta.question.path + id);
                }
            },

            link: function ($scope, $element, $attrs) {

            }

        };
    }]);