'use strict';

var DemoApp = angular.module('DemoApp', [
  'ngRoute',
  'ngMockE2E'
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


DemoApp.run([
  '$httpBackend',
  function(
    $httpBackend
  ) {

    $httpBackend.whenGET('/api/list').respond(
      200,
      {
        'socials': [{
          'name': 'Facebook',
          'link': 'https://www.facebook.com'
        }, {
          'name': 'Twitter',
          'link': 'https://www.twitter.com'
        }, {
          'name': 'Google+',
          'link': 'https://plus.google.com/'
        }]
      }
    );

    $httpBackend.whenGET(/.*/).passThrough();
  }
]);