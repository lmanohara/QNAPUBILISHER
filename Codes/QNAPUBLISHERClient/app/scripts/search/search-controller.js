/*
    Search controller responsible for handling search view
*/

searchModule.controller('searchController', ['$scope', '$route', 'searchFactory',
    function ($scope, $route, searchFactory) {
        var query = $route.current.params.q;
        $scope.search = searchFactory.init();
    }]);