module.exports = function(){
    $.gulp.task('room', function () {
        return $.gulp.src('src/pug/pages/alone/room/svgconverter.html')
            .pipe($.gulp.dest('build/pages/alone/room'))
    });

};
