'use strict';

var DemoApp = angular.module('DemoApp', [
  'ngRoute'
]);

DemoApp.config([
  '$routeProvider',
  function(
    $routeProvider
  ) {

      $routeProvider.when('/', {
        templateUrl: 'src/homepage/homepage.html',
        controller: 'HomepageCtrl'
      });
      $routeProvider.when('/list', {
        templateUrl: 'src/list/list.html',
        controller: 'ListCtrl'
      });
      $routeProvider.otherwise({redirectTo: '/'});
  }
]);
