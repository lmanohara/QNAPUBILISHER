landingViewModule.controller('landingViewController', ['$scope', 'landingViewFactory',
    function ($scope, landingViewFactory) {

        $scope.landingView = landingViewFactory.init();
    }]);