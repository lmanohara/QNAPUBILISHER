if (app.meta === undefined) {

    app.meta = {};

}

var searchModule = angular.module('searchModule', []).config(function () {

    app.meta.search = {};

    app.meta.search.rootRoute = '/search/q/:q';
    app.meta.search.templateUrl = 'scripts/search/search-view.html';
    app.meta.search.controller = 'searchController';

});