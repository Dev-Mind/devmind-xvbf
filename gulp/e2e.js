var protractor = require('gulp-protractor').protractor;
var path = require('path');
var child_process = require('child_process');

module.exports = function (gulp, config) {

  function getProtractorBinary(binaryName){
    var pkgPath = require.resolve('protractor');
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/'+binaryName);
  }

  gulp.task('_e2e-install', function(done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
      stdio: 'inherit'
    }).once('close', done);
  });

  gulp.task('_e2e', ['_e2e-install'], function (done) {
    var argv = process.argv.slice(3); // forward args to protractor
    child_process.spawn(getProtractorBinary('protractor'), argv, {
      stdio: 'inherit'
    }).once('close', function () {
      done();
      process.exit(0);
    });
  });
};