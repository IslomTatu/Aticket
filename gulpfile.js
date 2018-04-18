global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    concatCss: require('gulp-concat-css'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'category', 'alone', 'korzinka', 'download', 'user', 'stylus', 'stylus:lib', 'stylus:mater', 'stylus:fonts', 'stylus:tipso', 'scripts:jquery', 'scripts:lib', 'scripts', 'scripts:tipso', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'category', 'alone', 'korzinka', 'download', 'user', 'stylus', 'stylus:lib', 'stylus:mater', 'stylus:fonts', 'scripts', 'scripts:jquery', 'scripts:lib', 'img:build'),
    $.gulp.parallel('watch', 'serve')
));
