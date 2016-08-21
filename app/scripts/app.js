'use strict';

/**
 * @ngdoc overview
 * @name bucketdudesApp
 * @description
 * # bucketdudesApp
 *
 * Main module of the application.
 */
angular
  .module('bucketdudesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl',
        controllerAs: 'tareas'
      })
      .when('/homework1', {
        templateUrl: 'views/homework1.html',
        controller: 'Homework1Ctrl',
        controllerAs: 'homework1'
      })
      .when('/homeworkindex', {
        templateUrl: 'views/homeworkindex.html',
        controller: 'HomeworkindexCtrl',
        controllerAs: 'homeworkindex'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
