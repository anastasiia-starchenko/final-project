'use strict';

let gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

// Scss compiler Task
gulp.task('sass', function () {
	return gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});


// Scss compiler Task Minify CSS
gulp.task('minify-css', () => {
	return gulp.src('css/*.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('css'));
});