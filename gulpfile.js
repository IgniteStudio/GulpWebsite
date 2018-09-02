const gulp = require('gulp');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Copy all HTML files
gulp.task('copyHtml', function(){
    gulp.src('src/*html')
        .pipe(gulp.dest('dist'));
})

// Set Default Message
gulp.task('default', function(){
    return console.log('Gulp is running...');
});