module.exports = function() {
    $.gulp.task("clean", function() {
        return $.gulp.src("./public/*", {read: false})
            .pipe($.clean())
            .pipe($.debug({"title": "clean"}));
    });
};