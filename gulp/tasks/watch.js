'use strict';

const srcFolder = $.path.srcFolder;

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch(srcFolder + '/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch(srcFolder + '/js/**/*.js', $.gulp.series('rollup'));
    $.gulp.watch(srcFolder + '/pug/**/*.pug', $.gulp.series('pug'));
  });
};
