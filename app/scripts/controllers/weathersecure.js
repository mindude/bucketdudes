'use strict';

/**
 * @ngdoc function
 * @name bucketdudesApp.controller:WeathersecureCtrl
 * @description
 * # WeathersecureCtrl
 * Controller of the bucketdudesApp
 */
angular.module('bucketdudesApp')
  .controller('WeathersecureCtrl', function ($scope,$http) {
    $scope.getCities = function() {
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
    };

    $scope.valido=function(){
      var url = "https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials ={
        "username":"hola",
        "password":"tucita"
      };

      $http.post(url, credentials)
        .success(function(data){
          console.log(data);
          localStorage.setItem("token", data.token);
        })
        .error(function(error){
          alert(error);
        })
    };
    $scope.invalido=function(){
      var url = "https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials ={
        "username":"foo",
        "password":"tucita"
      };

      $http.post(url, credentials)
        .success(function(data){
          console.log(data);
          localStorage.setItem('token', data.token);
        })
        .error(function(error){
          alert(error);
        })
    };
    $scope.consiguePromedio=function(){
      if(localStorage.getItem('errorMessage') ){
        $scope.avresults = "You are not worthy";
      }
      else{
        $http({
          method: 'PUT',
          url: 'https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/weather-secure',
          headers: { 'Authorization': localStorage.getItem('token') }
        })
          .success(function (data) {
            $scope.avresults = data;
          })
          .error(function (data) {
            console.log(data);
          });
      }

    }
  });
