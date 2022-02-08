const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass', async function() {
  gulp.src('scss/globals/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
})
