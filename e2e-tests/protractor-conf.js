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
      'TAB': [800, 600],
      'MOB': [320, 480]
    }
  },

  baseUrl: 'http://localhost:8234/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
