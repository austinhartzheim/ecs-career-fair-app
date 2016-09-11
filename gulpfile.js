var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var svgmin = require('gulp-svgmin');
var reload = browserSync.reload;

var JS_BLOB = 'js/*.js';
var CSS_BLOB = 'css/*.css';
var HTML_BLOB = '*.html';
var STATIC_BLOB = 'static/*';
var BUILD_BLOBS = ['build/*', 'build/*/*'];

gulp.task('lint', function() {
    return gulp.src(JS_BLOB)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build_html', function() {
    gulp.src(HTML_BLOB)
        .pipe(gulp.dest('./build/'));
});

gulp.task('build_js', function() {
    gulp.src(JS_BLOB)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('build_css', function() {
    gulp.src(CSS_BLOB)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('build_static', function() {
    gulp.src(STATIC_BLOB)
        .pipe(gulp.dest('build/static/'));
});

gulp.task('build_map_svg', function() {
    gulp.src('static/map.svg')
        .pipe(svgmin({
            plugins: [{
                mergePaths: false,
                cleanupIDs: false
            }]
        }))
        .pipe(gulp.dest('build/static/'));
});

gulp.task('build', ['build_html', 'build_js', 'build_css', 'build_map_svg',
                    'build_static']);

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './build/'
        }
    });
    
    gulp.watch(BUILD_BLOBS, {cwd: '.'}, function() {
        reload();
    });
});
