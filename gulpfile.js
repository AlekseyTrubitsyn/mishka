var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: "./build"
  });
  gulp.watch('src/styles/**/*.scss', ['css']);
  gulp.watch('src/pug/**/*.pug', ['html']);
});

gulp.task('html', function() {
  return gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
});

gulp.task('css', function(){
  gulp.src('src/styles/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('build/styles/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['html', 'css', 'serve']);
