'use strict';

const pug = $.gp['pug'];

module.exports = () => {
  $.gulp.task('pug', () =>
    $.gulp
      .src('./src/pug/**/*.pug')
      .pipe(
        pug({
          pretty: true,
          // doctype: 'doctype html',
          // client: true,
          verbose: true,
        })
      )
      .pipe($.gulp.dest($.path.buildFolder))
  );
};
