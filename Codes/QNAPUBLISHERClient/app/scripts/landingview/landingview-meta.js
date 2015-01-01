if (app.meta === undefined) {

    app.meta = {};

}

var landingViewModule = angular.module('landingViewModule', []).config(function () {
    
    app.meta.landingView = {};
    
    app.meta.landingView.rootRoute = '/';
    app.meta.landingView.templateUrl = 'scripts/landingview/landingview.html';
    app.meta.landingView.controller = 'landingViewController';

});