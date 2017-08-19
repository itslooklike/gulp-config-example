const srcFolder = $.path.srcFolder;
const buildFolder = $.path.buildFolder;

module.exports = () => {
  $.gulp.task('copy', () =>
    $.gulp
      .src(
        [
          srcFolder + '/assets/fonts/**/*.{woff,woff2}',
          srcFolder + '/assets/img/**/*.{svg,png,jpg}',
        ],
        { base: srcFolder }
      )
      .pipe($.gulp.dest(buildFolder))
  );
};
