module.exports = function(){
    $.gulp.task('download', function () {
        return $.gulp.src('src/pug/pages/download/index.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/download'))
            .on('end', $.bs.reload);
    });

};
