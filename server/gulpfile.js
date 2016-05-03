/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    tsd = require("gulp-tsd");
    
var paths = {
	buildroot: "./bin",
	noderoot: "./node_modules/",
    sourceroot: "./source/"
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});

gulp.task("build:typescript", function () {
    return gulp.src(paths.sourceroot + "/**/*.ts")
        .pipe(ts(tsProject)).pipe(gulp.dest(paths.buildroot));
});

gulp.task("build", ["build:typescript"]);