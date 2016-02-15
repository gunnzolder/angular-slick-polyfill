'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('script', function () {
    gulp.src([
            'app/**/*.js'
        ], {base:'./app'})
        .pipe(concat('angular-slick-polyfill.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('script-min', function () {
    gulp.src([
            'app/**/*.js'
        ], {base:'./app'})
        .pipe(uglify())
        .pipe(concat('angular-slick-polyfill.min.js'))
        .pipe(gulp.dest('./dist'));
});


/* Watcher */

gulp.task('watch', function () {
    gulp.watch(['./app/**/*.js'], ['script','script-min']);
});

gulp.task('default', ['script','script-min']);