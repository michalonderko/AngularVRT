'use strict';

var capture = require('../screenshot');

describe('Homepage', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('Desktop', function() {

    // sizes for desktop from protractor.conf - params.sizes
    browser.driver.manage().window().setSize(browser.params.sizes.DES[0], browser.params.sizes.DES[1]).then(function() {});
  });

  it('Mobile', function() {

    // sizes for cell phone from protractor.conf - params.sizes
    browser.driver.manage().window().setSize(browser.params.sizes.MOB[0], browser.params.sizes.MOB[1]).then(function() {});
  });
});
