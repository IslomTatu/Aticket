module.exports = function(){
    $.gulp.task('korzinka', function () {
        return $.gulp.src('src/pug/pages/korzinka/index.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/korzinka'))
            .on('end', $.bs.reload);
    });

};