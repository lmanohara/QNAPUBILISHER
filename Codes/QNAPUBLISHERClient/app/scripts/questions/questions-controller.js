questionsModule.controller('questionsController', ['$scope', 'questionsFactory',
    function ($scope, questionsFactory) {

        $scope.questionsObj = questionsFactory.init();
    }]);