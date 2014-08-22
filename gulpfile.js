var gulp = require('gulp'),
    jshint = require('gulp-jshint')
    rename = require('gulp-rename')
    uglify = require('gulp-uglify');

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('lint', function() {
  return gulp.src(['src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['compress']);
});

gulp.task('default', function() {
    gulp.start('jslint', 'compress');
});