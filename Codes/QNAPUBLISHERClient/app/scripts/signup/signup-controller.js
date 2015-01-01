signupModule.controller('signupController', ['$scope', 'signupFactory',
    function ($scope, signupFactory) {

        $scope.signup = signupFactory.init();
    }]);