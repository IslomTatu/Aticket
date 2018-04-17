module.exports = function(){
    $.gulp.task('reg', function () {
        return $.gulp.src('src/pug/pages/registration/*.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/registration'))
            .on('end', $.bs.reload);
    });

};