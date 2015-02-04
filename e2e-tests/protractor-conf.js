exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'mocks/**/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

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
  }
};
