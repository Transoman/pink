var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		notify: false
	});
});


gulp.task('styles', function() {
	return gulp.src('sass/style.sass')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('sass/style.sass', ['styles']);
	gulp.watch('*.html').on("change", browserSync.reload);
});

gulp.task('default', ['styles', 'browser-sync', 'watch']);