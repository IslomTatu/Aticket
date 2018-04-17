module.exports = function(){
    $.gulp.task('category', function () {
        return $.gulp.src('src/pug/pages/category/index.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('build/pages/category'))
            .on('end', $.bs.reload);
    });

};

//
// module.exports = function(){
//     $.gulp.task('pages:alone', function () {
//         return $.gulp.src('src/pug/pages/alone/index.pug')
//             .pipe($.gp.pug({
//                 pretty:true
//             }))
//             .pipe($.gulp.dest('build/pages/alone'))
//             .on('end', $.bs.reload);
//     });
//
// };