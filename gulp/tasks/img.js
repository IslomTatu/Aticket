module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif,svg}')
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('HV-sFyTo387u4SV3vcIExc-ickYAcRV1'))
            .pipe($.gulp.dest('build/static/img'));
    });

};