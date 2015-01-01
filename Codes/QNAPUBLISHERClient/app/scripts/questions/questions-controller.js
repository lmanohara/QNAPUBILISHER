questionsModule.controller('questionsController', ['$scope', 'questionsFactory',
    function ($scope, questionsFactory) {

        $scope.landingView = questionsFactory.init();
    }]);