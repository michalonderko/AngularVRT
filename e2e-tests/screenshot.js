'use strict';

exports.takeScreenshot = function(name, size) {

  var fs = require('fs');

  browser.driver.manage().window().setSize(size[0], size[1]).then(function() {

    browser.takeScreenshot().then(function(png) {

      var stream = fs.createWriteStream('visual-regression-test/imgs-test/' + name + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();

    });

   });
};