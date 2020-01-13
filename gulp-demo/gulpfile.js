const gulp = require("gulp");
const sass = require("gulp-sass");
const autopref = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const uglifyjs = require("gulp-uglifyjs");

gulp.task("sass", function() {
  gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("script", function() {
  return gulp
    .src("./src/styles/*.css")
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
});
