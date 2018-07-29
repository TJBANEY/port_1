var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('compileJS', function () {
    return gulp.src('./js/non_bundled/*.js')
        .pipe(concat('angular_bundle.js'))
        .pipe(gulp.dest('./js/'))
});

gulp.task('watch', function () {
    gulp.watch('./js/non_bundled/*.js', ['compileJS']);
});

gulp.task('default', ['compileJS'])
