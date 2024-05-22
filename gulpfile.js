const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const buildStyles = () => {
  return gulp
    .src('src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
};

const buildStylesMinify = () => {
  return gulp
    .src('src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css/'));
};

const watchFiles = () => {
  gulp.watch(['src/**/*.scss'], gulp.series(buildStyles, buildStylesMinify));
};

gulp.task('build', gulp.series(buildStyles, buildStylesMinify));

gulp.task(
  'default',
  gulp.series(gulp.parallel(buildStyles, buildStylesMinify), watchFiles),
);
