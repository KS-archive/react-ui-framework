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
    ['@babel/preset-stage-0', {
      decoratorsLegacy: true,
    }],
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
  gulp.src('./src/**/*.js')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('lib')));

gulp.task('transpile-jsx', () =>
  gulp.src('./src/**/*.jsx')
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('lib')));

gulp.task('transpile-css', () =>
  gulp.src('./src/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('lib')));

gulp.task('transpile-scss', () =>
  gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./lib')));

gulp.task('clean', () => del(['lib/**', '!lib'], { force: true }));

gulp.task('default', gulpsync.sync(['clean', ['transpile-js', 'transpile-jsx', 'transpile-css', 'transpile-scss'], 'watch']));

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['transpile-js']);
  gulp.watch('./src/**/*.jsx', ['transpile-jsx']);
  gulp.watch('./src/**/*.scss', ['transpile-scss']);
  gulp.watch('./src/**/*.css', ['transpile-css']);
});
