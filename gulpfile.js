var gulp = require('gulp')

var postcss = require('gulp-postcss')
var cleanCss = require('gulp-clean-css')
var sourceMaps = require('gulp-sourcemaps')
var concat = require("gulp-concat")

var webpack = require('webpack-stream')

var htmlmin = require('gulp-htmlmin');

var imagemin = require('gulp-imagemin');
var imageminWebp = require('imagemin-webp');

var browserSync = require('browser-sync').create()

var ghpages = require('gh-pages');


gulp.task("css", function(){
    return gulp.src([
        "src/css/normalize.css",
        "src/css/typography.css",
        "src/css/app.css"
    ])
    .pipe(sourceMaps.init())
    .pipe(
        postcss([
            require("autoprefixer"),
            require("postcss-preset-env")({
                stage: 1,
                browsers: ["IE 11", "last 2 versions"]
            }),
        ])
    )
    .pipe(concat("app.css"))
    .pipe(
        cleanCss({
            compatibility: 'ie8'
        })
    )
    .pipe(sourceMaps.write("."))

    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})

gulp.task("html", function(){
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"))
})

gulp.task("js", function(){
   return gulp.src("src/js/*")
    .pipe(
        webpack({
            mode: 'production',
            devtool: 'source-map',
            output: {
                filename: "app.js"
            }
        })
    )
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream())
})

gulp.task("fonts", function () {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
})

gulp.task("images", function() {
    return gulp.src("src/img/*")
        .pipe(
            imagemin(
            )
        )
        .pipe(gulp.dest("dist/img"))
})

gulp.task("watch", function(){

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
    gulp.watch("src/js/*.js", ["js"])
    gulp.watch("src/css/app.css", ["css"])
    gulp.watch("src/fonts/*", ["fonts"])
    gulp.watch("src/img/*", ["images"])
})
gulp.task('deploy', function() { 
    ghpages.publish('dist', function(err) {});
})

gulp.task('default', ["html", "js", "css", "watch", "fonts", "images"]);