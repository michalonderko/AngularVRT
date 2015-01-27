'use strict';

DemoApp.controller('ListCtrl', [
  '$scope',
  '$http',
  function(
    $scope,
    $http
  ) {

    $http.get('/api/list').
      success(function(data, status, headers, config) {
        $scope.socials = data.socials;
      }).
      error(function(data, status, headers, config) {
        $scope.error = "Some http request error";
      });
  }
]);