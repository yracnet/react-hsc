var gulp = require("gulp");
var del = require("del");

gulp.task("clean", function(cb) {
  return del(["dist/**/*", "build/**/*"], cb);
});
gulp.task("compile", function() {
  return gulp
    .src(["src/**/*.js", "src/*.d.ts", "!src/examples/**", "!src/index.js", "!src/setupTests.js"])
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("clean", "compile"));
