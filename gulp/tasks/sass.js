'use strict';

const sass = $.gp['sass'];

module.exports = () => {
  $.gulp.task('sass', () =>
    $.gulp
      .src('./src/scss/index.scss')
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe($.gulp.dest($.path.buildFolder + '/css'))
  );
};
