'use strict';

global.$ = {
  path: {
    task: require('./gulp/path/tasks.js'),
    buildFolder: './build',
    srcFolder: './src',
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync').create(),
};

$.path.task.forEach(task => {
  require(task)();
});

$.gulp.task('build', $.gulp.series('clean', $.gulp.parallel('sass', 'pug')));

$.gulp.task('default', $.gulp.series('build', $.gulp.parallel('watch', 'serve')));
