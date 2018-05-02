const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const del = require('del');
const gulpsync = require('gulp-sync')(gulp);
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const babelConfig = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-stage-0',
  ],
  plugins: [
    'transform-class-properties',
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

gulp.task('transpile-css', () =>
  gulp.src('./lib/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build')));

gulp.task('transpile-scss', () =>
  gulp.src('./lib/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./build')));

gulp.task('clean', () => del(['build/**', '!build'], { force: true }));

gulp.task('default', gulpsync.sync(['clean', ['transpile-js', 'transpile-jsx', 'transpile-css', 'transpile-scss'], 'watch']));

gulp.task('watch', () => {
  gulp.watch('./lib/**/*.js', ['transpile-js']);
  gulp.watch('./lib/**/*.jsx', ['transpile-jsx']);
  gulp.watch('./lib/**/*.scss', ['transpile-scss']);
  gulp.watch('./lib/**/*.css', ['transpile-css']);
});
