const srcFolder = $.path.srcFolder;
const sass = $.gp['sass'];
const postcss = $.gp['postcss'];
const cssnano = $.gp['cssnano'];
const rename = $.gp['rename'];
const plumber = $.gp['plumber'];
const sourcemaps = $.gp['sourcemaps'];
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('autoprefixer');

module.exports = () => {
  $.gulp.task('sass', () =>
    $.gulp
      .src(srcFolder + '/scss/index.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(postcss([autoprefixer({ browsers: ['last 1 versions'], cascade: false })]))
      .pipe(sourcemaps.write())
      .pipe($.gulp.dest($.path.buildFolder + '/css'))
      .pipe(cssnano())
      .pipe(rename('index.min.css'))
      .pipe($.gulp.dest($.path.buildFolder + '/css'))
  );
};
