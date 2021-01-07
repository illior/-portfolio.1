const gulp = require('gulp');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('scss-compile', function () {
	return gulp.src('./#source/scss/style.scss')
	.pipe(sourcemaps.init())
	.pipe(scss().on('error', scss.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
	gulp.watch('./#source/scss/**/*.scss', gulp.series('scss-compile'))
})