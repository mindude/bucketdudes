'use strict';

/**
 * @ngdoc function
 * @name bucketdudesApp.controller:Homework5Ctrl
 * @description
 * # Homework5Ctrl
 * Controller of the bucketdudesApp
 */
angular.module('bucketdudesApp')
  .controller('Homework5Ctrl', function ($scope, $http) {
    $scope.getCities = function(){
      console.log($scope.cities);
      var data = {
        city: $scope.cities.split(",")
      };


      $http.put('https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/conseguirClimaDeMultiplesCiudades', data)
        .success(function(data){
        $scope.result = data;
      })
        .error(function(error){
          alert(error);
        })
    }
  });
