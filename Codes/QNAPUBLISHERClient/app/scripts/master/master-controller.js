app.controller('masterController', ['$scope', '$route', '$location',
    function ($scope, $route, $location) {
        
        $scope.app = {};
        $scope.app.meta = app.meta;

        $scope.route = $route;

        $scope.keyWord = '';

        $scope.search = function () {
            var keyWord = $scope.keyWord;
            
            $location.path('/search/q/' + keyWord.replace(/ /g, '+'));
        }

        $scope.navigate = function (path) {
            $location.path(path);
        }


    }]);