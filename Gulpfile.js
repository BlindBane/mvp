var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('html', function() {
  gulp.src('public/pug/*.pug')
  .pipe(pug({
    pretty: true
    }))
  .pipe(gulp.dest('public/build'))
});

gulp.task('watch', function() {
  gulp.watch('public/pug/*.pug', ['html'])
});