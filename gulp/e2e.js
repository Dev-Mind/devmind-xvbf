var protractor = require('gulp-protractor').protractor;

module.exports = function (gulp, config) {

  gulp.task('_e2e', function (done) {
    
    return gulp.src([])
      .pipe(protractor({
        configFile: config.paths.protractor,
        args: ['--baseUrl', 'http://localhost:4001']
      }))
      .on('error', function (e) {
        console.log(e);
        throw e;
      })
      .on('end', function () {
        done();
        process.exit(0);
      });
  });
};