// var gulp = require("gulp");
// var serve = require("gulp-serve");

// gulp.task("serve",serve("public"));

// gulp.task("serve-build",serve(["public","build"]));

// gulp.task("serve-prod",serve({
// 	root : ["public","build"],
// 	port : 8080,
// 	middleware : function(req,res){

// 	}
// }));



var gulp = require('gulp');
var serve = require('gulp-serve');
 
gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 443,
  https: true,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));