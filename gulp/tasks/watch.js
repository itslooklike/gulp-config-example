'use strict';

const buildFolder = $.path.buildFolder;
const srcFolder = $.path.srcFolder;

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch(srcFolder + '/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch(srcFolder + '/pug/**/*.pug', $.gulp.series('pug'));
  });
};
