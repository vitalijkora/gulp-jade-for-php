//引入需要的库
var through = require("through2");
var jade = require('jade');
var phpjade = require('phpjade');
var ext = require('gulp-util').replaceExtension;

//定义插件名称
const PLUGIN_NAME = 'gulp-jade-for-php';

//phpjade针对jade引擎进行修改
phpjade.init(jade); // apply modifier. 

//处理文件后缀，默认改为.php
function handleExtension(filepath, opts) {
  return ext(filepath, opts.extension || '.php');
}

//这个导出实际是个生成器，参数是配置，生成的是根据这个配置的处理函数
module.exports = function (opt) {
	  opt = opt || {};
          
          //用于处理文件的函数，配置作为闭包变量传入
	  var phpJader = function (file, enc, callback) {
	    if (file.isNull()) {
	      throw PluginError(PLUGIN_NAME, "file is null!");
	    }

	    if (file.isBuffer()) {
	      //把传入流处理成输出流
	      var newContents = jade.render(String(file.contents));
	      file.contents = new Buffer(newContents);
	    }
	    
	    //修改文件后缀，当然可以不止是后缀
	    file.path = handleExtension(file.path, opt);

	    return callback(null, file);
	  }
          //返回生成的函数
	  return through.obj(phpJader);
	};
