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
      .when('/homework2', {
        templateUrl: 'views/homework2.html',
        controller: 'Homework2Ctrl',
        controllerAs: 'homework2'
      })
      .when('/homework3', {
        templateUrl: 'views/homework3.html',
        controller: 'Homework3Ctrl',
        controllerAs: 'homework3'
      })
      .when('/homework4', {
        templateUrl: 'views/homework4.html',
        controller: 'Homework4Ctrl',
        controllerAs: 'homework4'
      })
      .when('/homework4', {
        templateUrl: 'views/homework4.html',
        controller: 'Homework4Ctrl',
        controllerAs: 'homework4'
      })
      .when('/homework5', {
        templateUrl: 'views/homework5.html',
        controller: 'Homework5Ctrl',
        controllerAs: 'homework5'
      })
      .when('/homework6', {
        templateUrl: 'views/homework6.html',
        controller: 'Homework6Ctrl',
        controllerAs: 'homework6'
      })
      .when('/weathersecure', {
        templateUrl: 'views/weathersecure.html',
        controller: 'WeathersecureCtrl',
        controllerAs: 'weathersecure'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
