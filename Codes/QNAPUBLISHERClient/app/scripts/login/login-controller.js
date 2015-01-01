loginModule.controller('loginController', ['$scope', 'loginFactory',
    function ($scope, loginFactory) {

        $scope.login = loginFactory.init();
    }]);