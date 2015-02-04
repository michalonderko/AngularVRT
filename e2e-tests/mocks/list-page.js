'use strict';

var capture = require('../screenshot');

describe('List page', function() {

  beforeEach(function() {

    var httpBackendMock = function() {
      angular.module('httpBackendMock', ['DemoApp', 'ngMockE2E'])
        .run(function($httpBackend) {
          $httpBackend.whenGET('/api/list').respond(
            200,
            {
              'socials': [{
                'name': 'Facebook',
                'link': 'https://www.facebook.com'
              }, {
                'name': 'LinkedIn',
                'link': 'https://www.linkedin.com/'
              }, {
                'name': 'Google+',
                'link': 'https://plus.google.com/'
              }]
            }
          );
          $httpBackend.whenGET(/.*/).passThrough();
        });
    };

    browser.addMockModule('httpBackendMock', httpBackendMock);

    browser.get('#/list');
    browser.waitForAngular();
  });

  it('Take list page screenshot', function() {
    capture.takeScreenshot('list-page-DES', browser.params.sizes.DES);
    capture.takeScreenshot('list-page-TAB', browser.params.sizes.TAB);
  });
});
