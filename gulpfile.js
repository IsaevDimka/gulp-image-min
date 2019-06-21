const gulp = require('gulp');
const imagemin = require('gulp-image');

 
gulp.task('image_run', function () {

  gulp.src('./imagemin/source/*/*.png')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./imagemin/min/'));

  gulp.src('./imagemin/source/*/*.jpg')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./imagemin/min/'));


});

gulp.task('image_build', function () {

  gulp.src('./imagemin/min/*/*.png')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./imagemin/min/'));

  gulp.src('./imagemin/min/*/*.jpg')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./imagemin/min/'));


});
 
gulp.task('default', ['image_run', 'image_build']);