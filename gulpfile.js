const gulp = require('gulp');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  dist: './src',
  src: './src'
}

gulp.task('sass', function () {
  return gulp.src(`${paths.src}/**/*.scss`)
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.dist));
});


gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('dev', ['sass:watch'])

gulp.task('default', ['sass']);