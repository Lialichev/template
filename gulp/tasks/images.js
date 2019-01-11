module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src("./src/img/pictures/*")
            .pipe($.newer("./public/img/"))
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({loops: 1, quality: "low"}),
                $.imagemin.svgo(),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.pngquant({quality: "65-70", speed: 5})
            ]))
            .pipe($.gulp.dest("./public/img/"))
            .pipe($.debug({"title": "images"}))
            .on("end", $.browsersync.reload);
    });
};