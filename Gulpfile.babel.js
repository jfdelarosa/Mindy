import gulp from "gulp";
import sass from "gulp-sass";
import babel from "gulp-babel";

gulp.task('styles', () => {
  gulp.src('public/sass/**/*.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('default', () => {
  gulp.watch('public/sass/**/*.scss', ['styles']);
});