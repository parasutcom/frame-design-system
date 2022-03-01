const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass', async function() {
  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function() {
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
})
