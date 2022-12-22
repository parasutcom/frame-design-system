const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml')
const browserSync = require('browser-sync').create();


function handleError (err) {
  console.log(err.toString());
  this.emit('end');
}

const buildHtml = () => {
  return gulp
    .src('src/index.mjml')
    .pipe(mjml(mjmlEngine, {validationLevel: 'strict'}))
    .pipe(gulp.dest('./dist/'));
};

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    startPath: './dist/index.html',
  });
};

const watch = () => {
  gulp.watch(['src/index.mjml'], gulp.series(buildHtml));
  gulp.watch(['src/index.mjml']).on('change', browserSync.reload);
};

gulp.task(
  'default',
  gulp.series(
    gulp.parallel(buildHtml),
    gulp.parallel(browsersync, watch),
  ),
);
