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
	
针对php语言的jade模板实现，利用gulp进行前端自动化.

因为 gulp-jade-php 不支持动态的属性写法，所以是这么实现的.

这个模块依赖jadegulp.
