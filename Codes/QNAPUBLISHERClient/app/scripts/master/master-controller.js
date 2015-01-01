app.controller('masterController', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {
        var keyWord = '';
        $scope.app = {};
        $scope.app.meta = app.meta;

        $scope.route = $route;

        $scope.keyWord = '';

        $scope.search = function () {
            $location.path('/search/q/' + $scope.keyWord);
        }

        $scope.navigate = function (path) {
            $location.path(path);
        }


    }]);