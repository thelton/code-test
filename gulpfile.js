var gulp = require('gulp');
    less = require('gulp-less');
    minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('default', ['css']);
