'use strict';


var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require("gulp-sass"),
  sourcemaps = require('gulp-sourcemaps'),
  concatCss = require('gulp-concat-css'),
  cleanCSS = require('gulp-clean-css');

 

//Sass
var sassDest = ["./assets/sass/*.scss","./assets/sass/libraries/*.css","./app/**/*.scss"];
gulp.task("sass",function(){
	return gulp.src(sassDest)
	.pipe(sass().on('error', sass.logError))
	 .pipe(sass())
	 .pipe(concatCss("css/main.css"))
	 // .pipe(cleanCSS({compatibility: 'ie8'}))
	 .pipe(gulp.dest('./assets'))
	 .pipe(connect.reload());
});


 


// Watch
gulp.task('watch', function () {
 gulp.watch(sassDest,['sass'])
});



//Creating the server 
gulp.task('serve',['watch'], function() {
  connect.server({
     // port: 8888,
    livereload: true,
    // https:true
  });
});



