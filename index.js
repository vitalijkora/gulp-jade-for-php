
var through = require("through2");
var jade = require('jade');
var phpjade = require('phpjade');
var ext = require('gulp-util').replaceExtension;

const PLUGIN_NAME = 'gulp-phpjade';

phpjade.init(jade); // apply modifier. 

function handleExtension(filepath, opts) {
  return ext(filepath, opts.extension || '.php');
}

module.exports = function (opt) {
	  opt = opt || {};

	  var phpJader = function (file, enc, callback) {
	    if (file.isNull()) {
	      throw PluginError(PLUGIN_NAME, "file is null!");
	    }

	    if (file.isBuffer()) {
	      var newContents = jade.render(String(file.contents));
	      file.contents = new Buffer(newContents);
	    }
	    
	    file.path = handleExtension(file.path, opt);

	    return callback(null, file);
	  }

	  return through.obj(phpJader);
	};
