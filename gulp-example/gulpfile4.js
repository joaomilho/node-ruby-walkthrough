var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('process', function () {
  gulp.src('./src/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest'))
})

gulp.task('default', ['process'])
