module.exports = function () {
    const vendors = [
        "node_modules/swiper/dist/css/swiper.css",
        "node_modules/selectric/public/selectric.css",
    ];

    $.gulp.task("styles-vendor", function () {
        return $.gulp.src(vendors)
            .pipe($.concat("vendors.css"))
            .pipe($.gulp.dest("./public/styles/"))
            .pipe($.debug({"title": "styles vendor"}))
            .on("end", $.browsersync.reload);
    });
};
