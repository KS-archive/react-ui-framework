const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const del = require('del');
const gulpsync = require('gulp-sync')(gulp);
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const babelConfig = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-stage-0',
  ],
  plugins: [
    'transform-decorators-legacy',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-styled-components',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-constant-elements',
  ],
};

gulp.task('transpile-js', () =>
  gulp.src('./lib/**/*.js')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('build')));

gulp.task('transpile-jsx', () =>
  gulp.src('./lib/**/*.jsx')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('build')));

gulp.task('transpile-scss', () =>
  gulp.src('./lib/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./build')));

gulp.task('clean', () => del(['build/**', '!build'], { force: true }));

gulp.task('default', gulpsync.sync(['clean', ['transpile-js', 'transpile-jsx', 'transpile-scss'], 'watch']));

gulp.task('watch', () => {
  gulp.watch('./lib/**/*.js', ['default']);
  gulp.watch('./lib/**/*.jsx', ['default']);
  gulp.watch('./lib/**/*.scss', ['default']);
});
