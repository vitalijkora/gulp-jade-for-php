# gulp-jade-for-php #

Compiles jade-php templates using gulp.

For gulp-jade-php does not support parsing attributes,so i wrote this.

This module is based on the well written jadegulp.

usage:

    npm install gulp-jade-for-php

    var phpJade = require('gulp-jade-for-php');
    gulp.task('jade-php', function() {
	  gulp.src('../**/*.jade')
	    .pipe(phpJade())
	    .pipe(gulp.dest('../'));
	});
	
针对php语言的jade模板实现，利用gulp进行前端自动化.

因为 gulp-jade-php 不支持动态的属性写法，所以是这么实现的.

这个模块依赖jadegulp.

## Documentation

### Modified syntax
The following syntax sample is formatted as if pretty print option is set.

#### attribute as php expression with escape.

```
tag(attr=php_function())
```

```html
<tag attr="<?php echo htmlspecialchars(php_function(), ENT_QUOTES, 'UTF-8'); ?>"></tag>
```

#### attribute as php expression without escape.

```
tag(attr!=php_function())
```

```html
<tag attr="<?php echo php_function(); ?>"></tag>
```

#### attribute as php expression without echo.

```
tag(attr!=-php_function())
```

```
<tag attr="<?php php_function(); ?>"></tag>
```

#### nameless attribute

```
tag(__=php_function())
```

```html
<tag <?php php_function(); ?> ></tag>
```
_____________

```
tag(__=php_function(), ___=php_function2())
```

```html
<tag <?php php_function(); ?> <?php php_function2(); ?> ></tag>
```

#### codes
```
tag
  - php_code
```

```html
<tag><?php php_code ;?></tag>
```

#### php filter

```
:php
  /* some php codes comes here */
  call_php_function();
html
```

```
<?php
/* some php codes comes here */
call_php_function();
?>
<html>
</html>
```

## Examples
```
html
  body
    - testfunc();
    div(__=some_php_function())
      | test
    - foreach ($this->list as $list):
      li!= $list
    - endforeach

```

```html
<html>
  <body>
    <?php testfunc(); ?>
    <div <?php some_php_function(); ?> >test</div>
    <?php foreach ($this->list as $list): ?>
      <li><?php echo $list; ?></li>
    <?php endforeach; ?>
  </body>
</html>
```
