'use strict';

/**
 * @ngdoc overview
 * @name qnapublisherclientApp
 * @description
 * # qnapublisherclientApp
 *
 * Main module of the application.
 */
var app = angular
    .module('qnapublisherclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'landingViewModule',
    'searchModule',
    'loginModule',
    'signupModule',
    'questionsModule',
    'questionModule'


  ])
    .config(function ($routeProvider) {
        var routes = ['search', 'login', 'signup', 'questions', 'askQuestion', 'question'];

        for (var routeElement in routes) {
            $routeProvider.when(app.meta[routes[routeElement]].rootRoute, {
                templateUrl: app.meta[routes[routeElement]].templateUrl,
                controller: app.meta[routes[routeElement]].controller
            })
        }

//        $routeProvider.when(app.meta.questions.askQuestion.rootRoute, {
//            templateUrl: app.meta.questions.askQuestion.templateUrl,
//            controller: app.meta.questions.askQuestion.controller
//        })

        $routeProvider
            .when('/', {
                templateUrl: app.meta.landingView.templateUrl,
                controller: app.meta.landingView.controller
            })
            .when('/otherwise', {
                templateUrl: app.meta.landingView.templateUrl,
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/otherwise'
            });
    });