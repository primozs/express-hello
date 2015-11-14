var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('default', function () {
  nodemon({
    script: 'server.js',
    exec: 'babel-node',
    ext: 'js',
    ignore: ['./node_modules/**'],
    env: {
      PORT: 3000
    }
  }).on('restart', function () {
    console.log('nodemon restarting');
  });
});
