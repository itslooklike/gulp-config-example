'use strict';

const buildFolder = $.path.buildFolder;

module.exports = () => {
  $.gulp.task('clean', () => $.del(buildFolder));
};
