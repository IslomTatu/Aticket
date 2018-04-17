module.exports = function () {
    $.gulp.task('stylus', function () {
        return $.gulp.src('src/static/style/myStylus/*.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))

            .on('error', $.gp.notify.onError({
                title: "stile"
            }))
            .pipe($.concatCss('main.min.css'))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream:true
            }));
    });



    $.gulp.task('stylus:mater', function(){
        return $.gulp.src('node_modules/materialize-css/dist/css/materialize.min.css')
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('stylus:fonts', function(){
        return $.gulp.src('node_modules/materialize-css/dist/fonts/roboto/*.*')
            .pipe($.gulp.dest('build/static/fonts/roboto'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('stylus:lib', function(){
        return $.gulp.src('src/static/style/font-awesome.min.css')
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('stylus:tipso', function(){
        return $.gulp.src('node_modules/tipso/src/tipso.min.css')
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

};