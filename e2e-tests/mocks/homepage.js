'use strict';

var capture = require('../screenshot');

describe('Homepage', function() {

  it('Take homepage screenshot', function() {

    browser.get('/');
    browser.waitForAngular();

    // sizes for desktop from protractor.conf - params.sizes
    browser.driver.manage().window().setSize(browser.params.sizes.DES[0], browser.params.sizes.DES[1]).then(function() {
      capture.takeScreenshot('homepage--DES', browser.params.sizes.DES);
    });

    // sizes for cell phone from protractor.conf - params.sizes
    browser.driver.manage().window().setSize(browser.params.sizes.MOB[0], browser.params.sizes.MOB[1]).then(function() {
      capture.takeScreenshot('homepage--MOB', browser.params.sizes.MOB);
    });
  });
});
