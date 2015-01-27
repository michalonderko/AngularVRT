'use strict';

var capture = require('../screenshot');

describe('Homepage', function() {

  it('Take homepage screenshot', function() {

    browser.get('/');
    browser.waitForAngular();

    capture.takeScreenshot('homepage');
    
  });
});
