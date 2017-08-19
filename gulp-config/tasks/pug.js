const pug = $.gp['pug'];
const plumber = $.gp['plumber'];

module.exports = () => {
  $.gulp.task('pug', () =>
    $.gulp
      .src('./src/pug/pages/*.pug')
      .pipe(plumber())
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
