if (app.meta === undefined) {

    app.meta = {};

}

var signupModule = angular.module('signupModule', []).config(function () {

    app.meta.signup = {};

    app.meta.signup.rootRoute = '/signup';
    app.meta.signup.templateUrl = 'scripts/signup/signup-view.html';
    app.meta.signup.controller = 'signupController';

});