var gulp = require("gulp");
var del = require("del");
var asciidoctor = require('@asciidoctor/gulp-asciidoctor')

gulp.task("clean", function(cb) {
  return del(["dist/**/*", "build/**/*", "docs/**/*.html"], cb);
});
gulp.task("compile", function() {
  return gulp
    .src(["src/**/*.js", "src/*.d.ts", "!src/examples/**", "!src/index.js", "!src/setupTests.js"])
    .pipe(gulp.dest("dist"));
});
gulp.task("docs", function() {
  return gulp.src(['docs/**/*.adoc', '!node_modules/**/*.adoc'])
    .pipe(asciidoctor({
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task("default", gulp.series("clean", "compile", "docs"));
