const postcss = $.gp['postcss'];
const stylelint = require('stylelint');
const postcssScss = require('postcss-scss');
const postcssReporter = require('postcss-reporter');

const srcFolder = $.path.srcFolder;

module.exports = () => {
  $.gulp.task('stylelint', () =>
    $.gulp
      .src(srcFolder + '/scss/**/*.scss')
      .pipe(
        postcss([stylelint(), postcssReporter({ clearReportedMessages: true })], {
          syntax: postcssScss,
        })
      )
  );
};
