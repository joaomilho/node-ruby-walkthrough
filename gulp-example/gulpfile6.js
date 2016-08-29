var gulp = require('gulp')
var browserify = require('gulp-browserify')

gulp.task('process', function () {
  gulp.src('./src/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dest'))
})

gulp.task('default', ['process'])
