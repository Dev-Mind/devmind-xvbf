//Concats files
var concat = require('gulp-concat');
//Convert HTML teplates in JS
var html2js = require('gulp-ng-html2js');
//Replaces files import in HTML
var htmlreplace = require('gulp-html-replace');
//Compiles less file in css file
var less = require('gulp-less');
//Merges several files
var merge = require('merge-stream');
//Changes angular files to prepare minification
var ngAnnotate = require('gulp-ng-annotate');
//Rename a file
var rename = require('gulp-rename');
//Replaces element in file
var replace = require('gulp-replace');
//Writes inline source maps
var sourcemaps = require('gulp-sourcemaps');
//several class utils for gulp
var utils = require('gulp-util');


module.exports = function(gulp, config) {
  var paths = config.paths;

  gulp.task('_build', [
    'build:vendors',
    'build:js',
    'build:mock:data',
    'build:mock:js',
    'build:css',
    'build:font',
    'build:images',
    'build:favicon',
    'build:html'
  ]);


  gulp.task('build:font', function () {
    return gulp.src(paths.assets.fonts)
      .pipe(gulp.dest(paths.build.dev + '/fonts'));
  });
  gulp.task('build:images', function () {
    return gulp.src(paths.assets.images)
      .pipe(gulp.dest(paths.build.dev + '/img'));
  });
  gulp.task('build:favicon', function () {
    return gulp.src(paths.assets.favicon)
      .pipe(gulp.dest(paths.build.dev));
  });
  gulp.task('build:css:vendors', function () {
    return gulp.src(paths.css)
      //In Angular Material Lite we don't use the standard primary color
      .pipe(replace('63,81,181', '3,155,229'))
      .pipe(gulp.dest(paths.build.dev+ '/css'));
  });
  gulp.task('build:css', ['build:css:vendors'], function () {
    return gulp.src(paths.less.main)
      .pipe(less())
      .pipe(replace('assets/img', '../img'))
      .pipe(replace('../../node_modules/material-design-icons/iconfont', '../fonts'))
      .pipe(gulp.dest(paths.build.dev + '/css'));
  });

  gulp.task('build:js', function() {

    var tpl = gulp.src(paths.templates)
      .pipe(html2js({
        moduleName: 'jstest-templates',
        prefix: 'js/'
      }));

    var app = gulp.src(paths.js.app)
      .pipe(ngAnnotate({
        'single_quotes': true,
        add: true
      }));

    return merge(app, tpl)
      .pipe(gulp.dest(paths.build.dev + '/js'));
  });

  gulp.task('build:mock:data', function () {
    return gulp.src(paths.assets.data)
      .pipe(gulp.dest(paths.build.dev + '/data'));
  });

  gulp.task('build:mock:js', function () {
    return gulp.src(paths.js.mock)
      .pipe(ngAnnotate({
        'single_quotes': true,
        add: true
      }))
      .pipe(concat('e2e.js'))
      .pipe(gulp.dest(paths.build.dev + '/js'));
  });

  gulp.task('build:vendors', function () {
     return gulp.src(paths.js.vendor)
      .pipe(gulp.dest(paths.build.dev + '/js/lib'));
  });

  gulp.task('build:html', function () {
    gulp.src(paths.index)
      .pipe(htmlreplace({
        'e2e': 'js/e2e.js'
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest(paths.build.dev));
    return gulp.src(paths.html)
      .pipe(gulp.dest(paths.build.dev));
  });

  gulp.task('_watch', function() {
    gulp.watch(paths.js.app, ['build:js']);
    gulp.watch([paths.templates], ['build:js']);
    gulp.watch([paths.html], ['build:html']);
    gulp.watch(paths.less.path, ['build:css']);
    gulp.watch(paths.assets.i18n, ['build:i18n']);
  });
};
