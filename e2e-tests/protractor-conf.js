exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'mocks/**/*.js'
  ],

  multiCapabilities: [{
    'browserName': 'chrome' // chrome doesn't make screenshots of whole page, but only by size of window
  }, {
    'browserName': 'firefox'
  }],

  params: {
    'sizes': {
      'DES': [1200, 600], // desktop
      'TAB': [800, 600],  // tablet
      'MOB': [320, 480]   // cell phone
    }
  },

  // write url address of your tested application
  baseUrl: 'http://localhost:8234/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    var ScreenShotReporter = require('protractor-screenshot-reporter');

    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: './visual-regression-test/imgs-test',
      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
        return capabilities.caps_.browserName + '__' + descriptions.reverse().join('__').toLocaleLowerCase().replace(/ /g, '-');
      }
    }));
  }
};
