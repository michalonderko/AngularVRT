'use strict';

exports.takeScreenshot = function(name) { return;

  var fs = require('fs');

    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream('visual-regression-test/imgs-test/' + name + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
};