module.exports = function(){
    $.gulp.task('alone', function () {
        return $.gulp.src('src/pug/pages/alone/index.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/alone'))
            .on('end', $.bs.reload);
    });

};