'use strict';

/**
 * @ngdoc overview
 * @name qnapublisherclientApp
 * @description
 * # qnapublisherclientApp
 *
 * Main module of the application.
 */
angular
  .module('qnapublisherclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    var = [];
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
