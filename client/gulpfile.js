/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    watch = require("gulp-watch"),
    ts = require("gulp-typescript"),
    less = require("gulp-less"),
    install = require("gulp-install");

var paths = {
    webroot: "./wwwroot/",
    noderoot: "./node_modules/",
    sourceroot: "./source/",
    lessroot: "./source/less/",
    contentroot: "./content/"
};

paths.jsLibs = [
	paths.noderoot + "angular2/bundles/angular2.dev.js",
    paths.noderoot + "angular2/bundles/angular2-polyfills.js",
    paths.noderoot + "es6-shim/es6-shim.js",
    paths.noderoot + "systemjs/dist/system.src.js",
    paths.noderoot + "rxjs/bundles/Rx.js",
    paths.noderoot + "reflect-metadata/Reflect.js",
    paths.noderoot + "angular2/bundles/http.dev.js",
    paths.noderoot + "angular2/bundles/router.dev.js",
    paths.noderoot + "angular2/platform/common.js",
    paths.noderoot + "jquery/dist/jquery.min.js",
    paths.noderoot + "typescript-dotnet/dist/system/System/Text/Utility.js",
    paths.noderoot + "underscore/underscore-min.js",
    paths.noderoot + "spin.js/spin.min.js"
];
paths.cssLibs = [
	paths.noderoot + "bootstrap/dist/css/bootstrap.min.css"
];

gulp.task("output:cssLibs", function () {
    return gulp.src(paths.cssLibs)
        .pipe(gulp.dest(paths.webroot + "css/lib/"));
});

gulp.task("output:libs", function () {
    return gulp.src(paths.jsLibs)
        .pipe(gulp.dest(paths.webroot + "js/lib/"));
});

gulp.task("output:contents", function () {
  return gulp.src([paths.contentroot + "/**/*", "!" + paths.contentroot + "/**/*.css"])
    .pipe(gulp.dest(paths.webroot));
});

gulp.task("output", ["output:libs", "output:contents", "output:cssLibs"]);

var tsProject = ts.createProject('tsconfig.json');

gulp.task("build:typescript", function () {
    return gulp.src(paths.sourceroot + "/**/*.ts")
        .pipe(ts(tsProject)).pipe(gulp.dest(paths.webroot + "js/app/"));
});

// var tsNetProject = ts.createProject({
//     emitDecoratorMetadata: true,
//     experimentalDecorators: true,
//     noImplicitAny: false,
//     noEmitOnError: true,
//     removeComments: false,
//     sourceMap: true,
//     target: "ES5",
//     module: "system",
//     moduleResolution: "node",
//     outFile: "typescript-dotnet.js"
// });

// gulp.task("build:typescript-dotnet", function () {
//    return gulp.src(paths.noderoot + "typescript-dotnet/source/System/**/*.ts")
//         .pipe(ts(tsNetProject)).pipe(gulp.dest(paths.webroot + "js/lib/"));
// });

gulp.task("build:less", function () {
    return gulp.src([
            paths.lessroot + "*.less", 
            paths.contentroot + "css/vcs-bootstrap-theme.css",
            paths.gridless + "*.less"
        ])
        .pipe(less())
        .pipe(concat("main.css"))
        .pipe(gulp.dest(paths.webroot + "css/"));
});

gulp.task("build:install", function() {
    return gulp.src("./package.json")
        .pipe(install());
});

gulp.task("build", ["build:typescript", "build:less"]);

gulp.task("build:full", ["build:install", "build", "output"]);