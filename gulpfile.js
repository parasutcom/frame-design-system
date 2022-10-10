const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
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

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    startPath: './html/index.html',
  });
};

const watch = () => {
  gulp.watch(['src/**/*.scss'], gulp.series(buildStyles, buildStylesMinify));
  gulp.watch(['dist/css/main.css']).on('change', browserSync.reload);
};

gulp.task(
  'default',
  gulp.series(
    gulp.parallel(buildStyles, buildStylesMinify),
    gulp.parallel(browsersync, watch),
  ),
);
