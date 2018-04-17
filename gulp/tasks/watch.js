module.exports = function () {
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/pug/**/category/**/*.pug', $.gulp.series('category'));
        $.gulp.watch('src/pug/**/alone/**/*.pug', $.gulp.series('alone'));
        $.gulp.watch('src/pug/**/korzinka/**/*.pug', $.gulp.series('korzinka'));
        $.gulp.watch('src/pug/**/download/**/*.pug', $.gulp.series('download'));
        $.gulp.watch('src/pug/**/user/**/*.pug', $.gulp.series('user'));
        $.gulp.watch('src/static/style/**/*.styl', $.gulp.series('stylus'));
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:build'));
    });
};