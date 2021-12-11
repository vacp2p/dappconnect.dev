const { watch, series, src, dest } = require('gulp')
var browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
var postcss = require('gulp-postcss')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify-es').default

const css = () =>
  src('./src/css/*.css')
    .pipe(postcss())
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream())

const js = () =>
  src('./src/js/*.js')
    .pipe(uglify())
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream())

// Task for minifying images
const images = () =>
  src('./src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/assets/images'))

const html = () =>
  src('./src/*.html')
    .pipe(dest('./dist'))

const server = () =>
  browserSync.init({server: { baseDir: 'src/', }})

const reload = () =>
  browserSync.reload()

// Watch Files & Reload browser after tasks
const watchsrc = () => {
  watch('./src/**/*.html', reload)
  watch(['./src/css/*.css'], series(css, reload))
  watch(['./src/js/*.js'], series(js, reload))
}

const build = () =>
  src(
    [
      'src/css/*.css',
      'src/assets/images/**/*',
      'src/js/main.js',
      'src/**/*.html ',
    ], {base: 'src'}
  ).pipe(dest('dist'))

exports.js = js
exports.css = css
exports.html = html
exports.images = images
exports.server = server
exports.build = series(build)
exports.devel = series(css, js, html, server, watchsrc)
exports.default = exports.devel
