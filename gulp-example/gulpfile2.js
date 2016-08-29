var gulp = require('gulp')

gulp.task('hello1', function () {
  setTimeout(() => console.log("Hello, world1!"), Math.random()*1000)
})

gulp.task('hello2', function () {
  setTimeout(() => console.log("Hello, world2!"), Math.random()*1000)
})

gulp.task('default', ['hello1', 'hello2'])
