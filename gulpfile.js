'use strict';
var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var nano = require('gulp-cssnano');
var server = require('gulp-server-livereload');

var files = "./app/*";



module.exports = gulp;

gulp.task('lint', function () {
    return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src(['./bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/bootstrap.min.js',
        './bower_components/velocity/*.js',
        './app/js/main.js'])
      .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});


gulp.task('image', () => {
    return gulp.src('./app/images/*')
		//.pipe(imagemin({
		//    progressive: true,
		//    svgoPlugins: [{ removeViewBox: false }],
		//    use: [pngquant()]
		//}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('base-css', function () {
    return gulp.src
        ([
            './bower_components/bootstrap/dist/css/bootstrap.css',
            //'./bower_components/bootstrap/dist/css/bootstrap-theme.css',
            './bower_components/font-awesome/css/font-awesome.css',
            './app/css/typebase.css',
            './bower_components/typeplate-starter-kit/css/typeplate.css',
            
        ])
        .pipe(concat('base.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(nano())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('css', function () {
    return gulp.src
        ([
            //'./bower_components/**/*.css',
            //'./app/css/typebase.css',
            './app/css/sprite.css',
            './app/css/style.css'
        ])
        .pipe(concat('style.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(nano())
        .pipe(gulp.dest('./dist/css/'));
});

//gulp.task('image', function () {
//    gulp.src('./app/images/*')
//      //.pipe(image())
//      .pipe(gulp.dest('dist/images/'));
//});

gulp.task('fonts', function () {
    return gulp.src(['./bower_components/font-awesome/fonts/fontawesome-webfont.*', './app/fonts/*'])
            .pipe(gulp.dest('dist/fonts/'));
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/css', 'dist/js', 'dist/images'], { read: false }).pipe(clean());
});

gulp.task('inject', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['dist/**/*.js', 'dist/css/*.css'], { read: false });

    return target.pipe(inject(sources))
      .pipe(gulp.dest('./app'));
});

// Build
gulp.task('build', ['scripts', 'image', 'fonts', 'base-css', 'css', 'inject', 'watch']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


//gulp.task('watch', function () {
//    gulp.watch('gulpfile.js', ['default'])
//    // Watch .js files
//    gulp.watch('./app/js/*.js', ['scripts']);
//    // Watch .scss files
//    gulp.watch('./app/css/*.css', ['css']);
//    // Watch image files
//    //gulp.watch('./app/images/**/*', ['images']);
//});

// Watch
gulp.task('watch', function () {
    
    

    // Watch .css files
    gulp.watch('app/css/**/*.css', ['css']);

    // Watch .js files
    gulp.watch('app/js/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('app/images/**/*', ['image']);

    // Watch bower files
    gulp.watch('bower.json', ['inject']);
});

//gulp.task('default', ['scripts', 'css', 'inject', 'watch']);
