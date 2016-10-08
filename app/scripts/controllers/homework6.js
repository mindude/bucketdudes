'use strict';

/**
 * @ngdoc function
 * @name bucketdudesApp.controller:Homework6Ctrl
 * @description
 * # Homework6Ctrl
 * Controller of the bucketdudesApp
 */
angular.module('bucketdudesApp')
  .controller('Homework6Ctrl', function ($scope, $http) {
    $scope.sendMessage = function(){
      var data = {
        name: $scope.username,
        message: $scope.message
      };


      $http.put('https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/SendMessageToChannel', data)
        .success(function(data){
          $scope.result = "The message has been sent!";
        })
        .error(function(error){
          alert(error);
        })
    }
  });
