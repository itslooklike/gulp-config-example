const srcFolder = $.path.srcFolder;

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch(srcFolder + '/scss/**/*.scss', $.gulp.series('sass', 'stylelint'));
    $.gulp.watch(srcFolder + '/js/**/*.js', $.gulp.series('rollup', 'eslint'));
    $.gulp.watch(srcFolder + '/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch(srcFolder + '/assets/**', $.gulp.series('copy'));
  });
};
