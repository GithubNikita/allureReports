exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        '../specs/AccountCreate.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 6000000
    },

    framework: 'jasmine2',
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

    }
};