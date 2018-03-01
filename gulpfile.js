'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    minifyCSS   = require('gulp-clean-css'),
    uglify      = require('gulp-uglify'),
    rename      = require("gulp-rename"),
    changed = require('gulp-changed');


// SCSS
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
gulp.task('style' , function(){
  gulp.src(SCSS_SRC)
      .pipe(sass().on('error' , sass.logError))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(changed(SCSS_DEST))
      .pipe(gulp.dest(SCSS_DEST));
});

//  default change scss
gulp.task('watch' , function(){
  gulp.watch(SCSS_SRC, ['style']);
});

//  run task
gulp.task('default' , ['watch']);
