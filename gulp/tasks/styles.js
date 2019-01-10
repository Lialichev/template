module.exports = function() {
    $.gulp.task("styles", function() {
        return $.gulp.src(["./src/styles/**/main.scss", "!./src/vendor/**/*.css"])
            .pipe($.sourcemaps.init())
            .pipe($.plumber())
            .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
            .pipe($.autoprefixer({browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"]}))
            .pipe($.mincss({compatibility: "ie8", level: {1: {specialComments: 0}}}))
            .pipe($.rename({suffix: ".min"}))
            .pipe($.replace("../../public/", "../"))
            .pipe($.plumber.stop())
            .pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./public/styles/"))
            .pipe($.debug({"title": "styles"}))
            .on("end", $.browsersync.reload);
    });
};
