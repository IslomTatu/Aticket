module.exports = function () {
    $.gulp.task('scripts:jquery', function () {
        return $.gulp.src('node_modules/jquery/dist/jquery.min.js')
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
            'node_modules/zoomooz/jquery.zoomooz.min.js',
            'node_modules/materialize-css/dist/js/materialize.min.js',])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('src/static/js/**/*.js')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({
                presets: ['env']
            }))
            .pipe($.gp.concat('main.min.js'))
            .pipe($.gp.sourcemaps.write(''))
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:tipso', function () {
        return $.gulp.src('node_modules/tipso/src/tipso.min.js')
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

};

