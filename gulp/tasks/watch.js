module.exports = function () {
    $.gulp.task("watch", function () {
        return new Promise(res => {
            $.watch("./src/views/**/*.html", $.gulp.series("html"));
            $.watch("./src/styles/**/*.scss", $.gulp.series("styles"));
            $.watch("./src/img/pictures/*", $.gulp.series("images"));
            $.watch("./src/js/**/*.js", $.gulp.series("scripts"));
            $.watch("./src/fonts/*", $.gulp.series("add"));
            res();
        });
    });
};