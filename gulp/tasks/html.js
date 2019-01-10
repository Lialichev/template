module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/pages/*.html"])
            .pipe($.rigger())
            .pipe($.replace("../public/", "./"))
            .pipe($.gulp.dest("./public/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
    });
};