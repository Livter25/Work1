const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('buildCSS', () => {
  return gulp.src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});
gulp.task('buildJS', function() {
    return gulp.src(['js/**.js', '!js/**.min.js'])
      .pipe(minify())
      .pipe(gulp.dest('dist/js/'))
});
gulp.task('buildHTML', () => {
    return gulp.src('**.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });
gulp.task('PHP', () => {
    return gulp.src(['**.php', 'phpmailer/**/**'])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
});
gulp.task('tinypng', function () {
    return gulp.src('img/**/**.{png,jpg,jpeg}')
            .pipe(tinypng({
                key: 'w6yZ9dfzC6kfZdtxzqkmlQt4PqChCVwx',
            
            }))
            .pipe(gulp.dest('dist/img/'));
});
  
  




exports.default = () => (
    gulp.src('./sass/*.sass')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);