module.exports = function () {
    const vendors = [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/swiper/dist/js/swiper.min.js",
        "node_modules/selectric/public/jquery.selectric.min.js",
    ];

    $.gulp.task("scripts-vendor", function () {
        return $.gulp.src(vendors)
            .pipe($.concat("vendors.js"))
            .pipe($.gulp.dest("./public/js/"))
            .pipe($.debug({"title": "scripts vendor"}))
            .on("end", $.browsersync.reload);
    });
};