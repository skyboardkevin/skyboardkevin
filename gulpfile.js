"use strict";

// REQUIRED PLUGINS
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlreplace = require('gulp-html-replace');


//CONFIG PATHS
var config = {
    scss  : 'src/assets/sass/saastrend.scss',
    css : './src/assets/css',
    js : './src/assets/js',
    fonts : './src/assets/webfonts',
    dest : './src/assets',
    watch: 'src/assets/sass/**/*.scss',
    src:'./src',
    build:'../template',
};

// GULP TASK TO COMPILE SCSS FILES INTO CSS
function sass_compile(){
    var normal = gulp.src( config.scss )
        .pipe( sourcemaps.init() )
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest( config.css ) );

    var min = gulp.src( config.scss )
        .pipe( sourcemaps.init() )
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest( config.css ) );

    return merge( normal, min );
};

// GULP TASK FOR MINIFY AND CONCAT ALL EXTERNAL PLUGINS SCRIPTS FILES TO ONE CALLED PLUGINS.JS
function scripts(){
    return gulp.src([
        'src/assets/plugins/jquery.min.js',
        'src/assets/plugins/modernizr.js',
        'src/assets/plugins/bootstrap/js/bootstrap.min.js',
        'src/assets/plugins/swiper/js/swiper.min.js',
        'src/assets/plugins/owl.carousel2/owl.carousel.min.js',
        'src/assets/plugins/magnific-popup/jquery.magnific-popup.min.js',
        'src/assets/plugins/meanmenu/jquery.meanmenu.min.js',
        'src/assets/plugins/wow.min.js',
        'src/assets/plugins/sticky-kit/sticky-kit.js',
        'src/assets/plugins/prism/prism.js',
        'src/assets/plugins/jquery-ajaxchimp/jquery.ajaxchimp.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('plugins.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.js));
};


// GULP TASK FOR MINIFY AND CONCAT ALL EXTERNAL PLUGINS STYLES FILES TO ONE CALLED PLUGINS.CSS
function styles(){
    return gulp.src([
        'src/assets/plugins/bootstrap/css/bootstrap.min.css',
        'src/assets/plugins/animate/animate.css',
        'src/assets/plugins/fontawesome/fontawesome-all.min.css',
        'src/assets/plugins/et-line/style.css',
        'src/assets/plugins/swiper/css/swiper.min.css',
        'src/assets/plugins/owl.carousel2/assets/owl.carousel.min.css',
        'src/assets/plugins/magnific-popup/magnific-popup.css',
        'src/assets/plugins/meanmenu/meanmenu.min.css',
        'src/assets/plugins/prism/prism.css',
        ])
        .pipe(sourcemaps.init())
        .pipe(csso({
            sourceMap: true
        }))
        .pipe(concat('plugins.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.css));
};

// CLONE ALL WEBSFONT TO ASSETS/FONTS/ FOLDER
function fonts() {
    return gulp.src([
        'src/assets/plugins/fontawesome/webfonts/**/*',  //select all files
        'src/assets/plugins/et-line/webfonts/**/*',  //select all files
    ])
    .pipe(gulp.dest(config.fonts));
};

// GULP TASK FOR MINIFY AND CONCAT TO BUNDLE.CSS
function styles_bundle(){
    return gulp.src([
        'src/assets/css/plugins.min.css',
        'src/assets/css/saastrend.min.css',
        'src/assets/css/custom.css',
        ])
        .pipe(sourcemaps.init())
        .pipe(csso({
            sourceMap: true
        }))
        .pipe(concat('bundle.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.css));
};

// GULP TASK FOR MINIFY AND CONCAT TO BUNDLE.JS
function scripts_bundle(){
    return gulp.src([
        'src/assets/js/plugins.min.js',
        'src/assets/js/sliderInit.js',
        'src/assets/js/saastrend.js',
        'src/assets/js/custom.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.js));
};


// GULP TASK TO MINIFY HTML FILES
function html_minify() {
    return gulp.src(['../template/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest( config.build ));
};


// CLEAN TEMPLATE DIRECTORY
function clean() {
    return del([config.build], {force: true})
};


// CLONE SRC FOLDER TO TEMPLATE DIRECTORY
function copy() {
    return gulp.src([
        'src/**/*',         //select all files
        '!src/**/plugins/', // exclude plugins folder
        '!src/**/plugins/**/*', // exclude plugins as sub-folder
        '!src/**/sass/',  // exclude sass folder
        '!src/**/sass/**/*', // exclude sass as sub-folder
        ])
        .pipe(gulp.dest(config.build));
};

// GULP TASK FOR REPLACE STYLESHEET AND SCRIPT LINKING
function links_minify() {
    gulp.src('../template/**/*.html')
        .pipe(htmlreplace({
            'css': 'assets/css/bundle.min.css',
            'js': 'assets/js/bundle.min.js'
        }))
        .pipe(gulp.dest(config.build));
};

// GULP TASK TO WATCH SCSS FILES AND JS FILES CHANGES
function watch() {
    gulp.watch('src/assets/sass/**/*.scss', (typeof gulp.series === "function") ? gulp.series(sass_compile, styles_bundle) : ['sass', 'styles_bundle']);
    gulp.watch('src/assets/sass/**/*.css', styles_bundle);
    gulp.watch('src/assets/js/**/*.js', scripts_bundle);
};

gulp.task('sass', sass_compile);
gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('clean', clean);
gulp.task('fonts', fonts);
gulp.task('styles_bundle', styles_bundle);
gulp.task('scripts_bundle', scripts_bundle);
gulp.task('html_minify', html_minify);
gulp.task('copy', copy);
gulp.task('links_minify', links_minify);
gulp.task('watch', watch);


if (typeof gulp.series === "function") { 
    var build_styles = gulp.series(sass_compile, fonts, styles, styles_bundle);
    var build_scripts = gulp.series(scripts, scripts_bundle);
    var build = gulp.series(clean, fonts, styles, scripts, copy);
    var extreme_build = gulp.series(clean, fonts, build_styles, build_scripts, copy, links_minify);
    exports.build_styles = build_styles;
    exports.build_scripts = build_scripts;
    exports.build = build;
    exports.extreme_build = extreme_build;
} else {
    gulp.task('build_styles', function(){
        runSequence(
            'sass',
            'fonts',
            'styles',
            'styles_bundle'
        );
    });
    gulp.task('build_scripts', function(){
        runSequence(
            'scripts',
            'scripts_bundle'
        );
    });
    // GULP TASK TO MINIFY ALL FILES AND CLONE TO TEMPLATE DIRECTORY
    gulp.task('build', ['clean'], function () {
        runSequence(
            'fonts',
            'styles',
            'scripts',
            'copy',
        );
    });
    
    // GULP TASK TO MINIFY ALL FILES AND CLONE TO TEMPLATE DIRECTORY ( extreme version )
    // @ will be only one minified stylesheet file called bundle.min.css
    // @ will be only one minified scripts file called bundle.min.js
    // @ html will be also minified
    gulp.task('extreme_build', ['clean'], function () {
        runSequence(
            'fonts',
            'build_styles',
            'build_scripts',
            'copy',
            'links_minify'
        );
    });
}


