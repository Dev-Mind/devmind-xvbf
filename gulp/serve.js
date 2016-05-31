var browserSync = require('browser-sync');
var connectModeRewrite = require('connect-modrewrite');
var serveStatic = require('serve-static');

module.exports = function (gulp, config) {

  require('./build.js')(gulp, config);

  var paths = config.paths;

  var staticProxyfiedFiles = [
    /^\/api\/.*/,               // http://localhost:8080/api/...
  ];


  function browserSyncInit(baseDir, port) {
    browserSync.init([
      paths.build.dev + '/**/*.js',
      paths.build.dev + '/**/*.css'
    ], {
      startPath: '/index.html',
      server: {
        baseDir: baseDir,
        middleware: [
          connectModeRewrite([
            //Rewrite for the backend calls
            '^/api/(.*)$ http://localhost:8080/api/$1 [P]',
            //Rewrite for HML
            //'!\\.\\w+$ /index.html [L]'
            '^[^\\.]*$ /index.html [L]'
          ])
        ]
      },
      port : port,
      notify: false,
      ghostMode: false
    });
  }

  gulp.task('watch', function() {
    gulp.watch(paths.js.app, ['build:js']);
    gulp.watch([paths.templates], ['build:js']);
    gulp.watch([paths.html], ['build:html']);
    gulp.watch(paths.less.path, ['build:css']);
  });

  /**
   * This task is not working with the WebSocket connection, but SockJS falls back on long-polling
   * so the live reload in preview still work
   */
  gulp.task('_serve', ['_build', '_watch'], function () {
    browserSyncInit(paths.build.dev, 4000);
  });

};
