# gulp-phpjade #

Compiles jade-php templates using gulp.

For gulp-jade-php does not support parsing attributes,so i wrote this.

This module is based on the well written jadegulp.

usage:

    var phpJade = require('gulp-phpjade');
    gulp.task('jade-php', function() {
	  gulp.src('../**/*.jade')
	    .pipe(phpJade())
	    .pipe(gulp.dest('../'));
	});