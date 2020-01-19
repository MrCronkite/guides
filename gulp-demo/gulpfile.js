const gulp = require("gulp");
const sass = require("gulp-sass");
const autopref = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cleanCss = require("gulp-clean-css");
const browsersync = require("browser-sync").create();
const del = require("del");

function styles() {
  return gulp
    .src("./src/styles/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("all.css"))
    .pipe(
      autopref({
        cascade: false
      })
    )
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.stream());
}

function image() {
  return gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
    .pipe(browsersync.stream());
}

function clean() {
  return del(["dist/css/"]);
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/styles/scss/*.scss", styles);
  gulp.watch("./src/img/", image);
  gulp.watch("./*.html").on("change", browsersync.reload);
}

gulp.task("watch", watch);

gulp.task("build", gulp.series(clean, gulp.parallel(styles, image)));

gulp.task("dev", gulp.series("build", "watch"));
