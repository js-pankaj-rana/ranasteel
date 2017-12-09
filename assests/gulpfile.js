'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');


const config = {
    sassPath: ["./sass/*.scss", "./sass/**/*.scss"],
    sassGroupPath: ["./sassGroup/*.scss"],
    cssPath: "./css",
    cssGroupPath: "./cssGroup",
    cssMapPath: "./maps",
}

gulp.task('sass', () => {
    var sassFiles = gulp.src(config.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write(config.cssMapPath))
        .pipe(gulp.dest(config.cssPath));
    console.log('Creating CSS at: ' + new Date());
    return sassFiles;
});

gulp.task('sassGroup', () => {
    var sassFiles = gulp.src(config.sassGroupPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write(config.cssMapPath))
        .pipe(gulp.dest(config.cssGroupPath));
    console.log('Creating CSS_Group at: ' + new Date());
    return sassFiles;
});

gulp.task('watch', () => {
    gulp.watch(config.sassPath, ['sass']);
    gulp.watch(config.sassGroupPath, ['sassGroup']);
});

gulp.task('sassMin', () => {
    var sassFiles = gulp.src(config.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write(config.cssMapPath))
        .pipe(gulp.dest(config.cssPath));
    console.log('Creating CSS_MIN at: ' + new Date());
    return sassFiles;
});

gulp.task('sassGroupMin', () => {
    var sassFiles = gulp.src(config.sassGroupPath)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write(config.cssMapPath))
        .pipe(gulp.dest(config.cssGroupPath));
    console.log('Creating CSS_GROUP_MIN at: ' + new Date());
    return sassFiles;
});



gulp.task('deploy', ['sass', 'sassMin', 'sassGroup', 'sassGroupMin']);