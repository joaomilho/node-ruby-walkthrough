var gulp = require('gulp')

gulp.task('process', function () {
  gulp.src('./src/index.js')
    .pipe(gulp.dest('./dest'))
})

gulp.task('default', ['process'])
