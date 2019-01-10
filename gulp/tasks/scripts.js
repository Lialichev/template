module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src(["./src/js/main.js", "!./src/js/vendor/**/*.js"])
            .pipe($.sourcemaps.init())
            .pipe($.concat("main.js"))
            .pipe($.babel({presets: ["es2015"]}))
            .pipe($.uglify())
            .pipe($.rename({suffix: ".min"}))
            .pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./public/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.browsersync.reload);
    });
};