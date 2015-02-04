'use strict';

var capture = require('../screenshot');

describe('Homepage', function() {

  it('Take homepage screenshot', function() {

    browser.get('/');
    browser.waitForAngular();

    // sizes from protractor.conf - params.sizes
    capture.takeScreenshot('homepage-DES', browser.params.sizes.DES);
    capture.takeScreenshot('homepage-MOB', browser.params.sizes.MOB);
  });
});
