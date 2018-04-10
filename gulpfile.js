const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", () => {
  return gulp
    .src("./test/*.scss")
    .pipe(sass({outputStyle: "expanded", noLineComments: true}).on("error", sass.logError))
    .pipe(gulp.dest("./test"));
});
