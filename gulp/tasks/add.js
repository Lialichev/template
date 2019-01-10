module.exports = function () {
    const add = [
        "src/fonts/*",
    ];

    $.gulp.task("add", function () {
        return $.gulp.src(add)
            .pipe($.gulp.dest("./public/fonts/"))
            .on("end", $.browsersync.reload);
    });
};
