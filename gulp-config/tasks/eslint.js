const eslint = $.gp['eslint'];

module.exports = () => {
  $.gulp.task('eslint', () =>
    $.gulp.src(['**/*.js', '!node_modules/**']).pipe(eslint()).pipe(eslint.format())
  );
};
