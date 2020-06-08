const gulp = require('gulp');
const bs = require('browser-sync').create();

bs.watch("*.html").on("change", bs.reload);
bs.watch("*.js").on("change", bs.reload);

// Static server
gulp.task('default', function() {
  bs.init({
    server: {
      baseDir: "./",
    }
  });
});