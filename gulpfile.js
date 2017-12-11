const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");

gulp.task("build", function() {
  return browserify({
    entries: "./src/index.js",
    extensions: [".js"],
    debug: true
  })
    .transform("glslify")
    .transform("babelify", { presets: ["env"] })
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("dist/js"));
});
