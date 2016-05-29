// Karma configuration
// Generated on Fri Jan 22 2016 15:15:27 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'node_modules/angular/angular.js', watched: false},
      {pattern: 'node_modules/angular-ui-router/build/angular-ui-router.js', watched: false},
      {pattern: 'node_modules/material-design-lite/material.js', watched: false},
      {pattern: 'node_modules/jquery/dist/jquery.js', watched: false},

      {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
      'src/app/**/*.js',
      'src/test/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/app/js/**/*.js': ['coverage'],
      'src/test/unit/**/*.js': ['babel']
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'build/reports/coverage/'
    },

    babelPreprocessor: {
          options: {
            presets: ['es2015'],
            sourceMap: 'inline'
          },
          filename: function (file) {
            return file.originalPath.replace(/\.js$/, '.es5.js');
          },
          sourceFileName: function (file) {
            return file.originalPath;
          }
        },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
