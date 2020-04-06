var gulp = require('gulp')

var postcss = require('gulp-postcss')
var cleanCss = require('gulp-clean-css')
var sourceMaps = require('gulp-sourcemaps')

var imagemin = require('gulp-imagemin')

var browserSync = require('browser-sync').create()


gulp.task("css", function(){
    return gulp.src("src/css/app.css")
    .pipe(sourceMaps.init())
    .pipe(
        postcss([
            require("autoprefixer"),
            require("postcss-preset-env")
        ])
    )
    .pipe(
        cleanCss({
            compatibility: 'ie8'
        })
    )
    .pipe(sourceMaps.write())

    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})

gulp.task("html", function(){
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist"))
})

gulp.task("fonts", function () {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
})

gulp.task("images", function() {
    return gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
})

gulp.task("watch", function(){

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
    gulp.watch("src/css/app.css", ["css"])
    gulp.watch("src/fonts/*", ["fonts"])
    gulp.watch("src/img/*", ["images"])
})

gulp.task('default', ["html", "css", "watch", "fonts", "images"]);