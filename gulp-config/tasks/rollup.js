const srcFolder = $.path.srcFolder;
const rollup = $.gp['rollup'];
const sourcemaps = $.gp['sourcemaps'];
const plumber = $.gp['plumber'];

module.exports = () => {
  $.gulp.task('rollup', () =>
    $.gulp
      .src(srcFolder + '/js/**/*.js')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        rollup({
          entry: srcFolder + '/js/main.js',
          format: 'iife',
        })
      )
      .pipe(sourcemaps.write())
      .pipe($.gulp.dest($.path.buildFolder + '/js'))
  );
};
