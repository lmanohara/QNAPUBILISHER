if (app.meta === undefined) {

    app.meta = {};

}

var loginModule = angular.module('loginModule', []).config(function () {

    app.meta.login = {};

    app.meta.login.rootRoute = '/login';
    app.meta.login.templateUrl = 'scripts/login/login-view.html';
    app.meta.login.controller = 'loginController';

});