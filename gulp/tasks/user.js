module.exports = function(){
    $.gulp.task('user', function () {
        return $.gulp.src('src/pug/pages/user/index.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/user'))
            .on('end', $.bs.reload);
    });

};