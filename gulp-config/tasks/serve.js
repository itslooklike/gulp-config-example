const buildFolder = $.path.buildFolder;

module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({
      open: false,
      server: buildFolder,
    });
    $.browserSync.watch(buildFolder, $.browserSync.reload);
  });
};
