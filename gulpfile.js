const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSyns = require('browser-sync').create()


gulp.task('js', function() {
    return gulp.src('./src/js/script.js')
      .pipe(concat('scripts.min.js'))
      .pipe(babel {
      	presets: ['env']
      }) 
      .pipe(uglify())
      .pipe(gulp.dest('./disk.js'));
      .pipe(browserSyns.reload({
      	stream: true
      }))   
});
gulp.task('watch', () =>{
	gulp.watch('./src/**/.js', ['js'])
});

gulp.task('build', 'js');
gulp.task('start', ['watch', 'build']);