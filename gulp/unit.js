var Server = require('karma').Server;

module.exports = function (gulp, config) {

  /**
   * unit tests once and exit
   */
  gulp.task('_unit', function (done) {
    return new Server({
        configFile: config.paths.karma,
        singleRun: true,
        autoWatch: false
      },
      function (exitCode) {
        done();
        process.exit(exitCode);
      }).start();
  });

  /**
   * unit tests in autowatch mode
   */
  gulp.task('unit:watch', function (done) {
    return new Server({
        configFile: config.paths.karma,
        singleRun: false,
        autoWatch: true
      },
      function (exitCode) {
        done();
        process.exit(exitCode);
      }).start();
  });
};