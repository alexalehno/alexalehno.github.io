const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const autoPrefixer = require("gulp-autoprefixer");
// //if node version is lower than v.0.1.2
// require("es6-promise").polyfill();
const cssComb = require("gulp-csscomb");
const cmq = require("gulp-merge-media-queries");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const del = require("del");
const minifyHtml = require("gulp-minify-html");
const browserSync = require("browser-sync").create();

// массив css файлов
const cssFiles = [
  "./src/css/normolize.css",
  "./src/css/fonts.css",
  "./src/css/setting.css",
  "./src/scss/main.scss",
  "./src/scss/blog.scss"
];

// // массив js файлов
const jsFiles = [
 "./src/js/js.js",
 "./src/js/video-play.js",
 "./src/js/tabs.js"
];

// СТИЛИ/
function styles() {
  return gulp
    .src(cssFiles)
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cssComb())
    .pipe(cmq({ log: true }))
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./src/css"))
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

// // СКРИПТЫ
function scripts() {
  return gulp
    .src(jsFiles)
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./src/scripts"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"))
    .pipe(browserSync.stream());
}

// оптимизируем и перебрасываем images в папку dist 
function images() {
  return gulp
    .src("./src/media/**/*")
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    )
    .pipe(gulp.dest("dist/media/"));
}

// ...........................................................................
// перебрасываем папку fonts в dist
function fonts() {
  return gulp.src("./src/fonts/**/*").pipe(gulp.dest("dist/fonts/"));
}

// перебрасываем папку jquery в dist
function jquery() {
  return gulp.src("./src/jquery/**/*").pipe(gulp.dest("dist/jquery/"));
}

// перебрасываем папку slick в dist
function slick() {
  return gulp.src("./src/slick/**/*").pipe(gulp.dest("dist/slick/"));
}
// ............................................................................

// минификация HTML
function html() {
  return gulp
    .src(["./src/**/*.html"])
    .pipe(
      plumber({
        handleError: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(minifyHtml())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
}

// очистка папки dist
function clean() {
  return del(["dist/*"]);
}

// запуск browser sync, watcher
function serve() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch(cssFiles, styles);
  gulp.watch(jsFiles, scripts);
  gulp.watch("./src/*.html").on("change", html, browserSync.reload);
}

// // задачи
gulp.task("slick", slick);
gulp.task("jquery", jquery);
gulp.task("fonts", fonts);
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("images", images);
gulp.task("html", html);
gulp.task("del", clean);
gulp.task("serve", serve);

gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts, html, fonts, images, jquery, slick)));

gulp.task("dev", gulp.series("build", serve));
