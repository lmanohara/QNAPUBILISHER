questionsModule.directive('answerDirective',
    function ($location) {
        return {
            restrict: 'A',
            templateUrl: 'scripts/questions/answer-view.html',
            scope: {
                rate: '@',
                title: '@',
                answer: '=answer'

            },

            controller: function ($scope, $element, $attrs) {
                var incrementClick = false;
                var decrementClick = false;
                $scope.incrementRate = function () {
                    if (incrementClick === false) {
                        $scope.answer.rate++;
                        incrementClick = true;
                    } else {
                        $scope.answer.rate--;
                        incrementClick = false;
                    }
                }

                $scope.decrementRate = function () {
                    if (decrementClick === false) {
                        $scope.answer.rate--;
                        decrementClick = true;
                    } else {
                        $scope.answer.rate++;
                        decrementClick = false;
                    }
                }


            },

            link: function ($scope, $element, $attrs) {

            }

        };
    });