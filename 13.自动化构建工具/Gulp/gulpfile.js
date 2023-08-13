var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var less = require('gulp-less')
var cleanCss = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var livereload = require('gulp-livereload')

// 注册任务
/*
gulp.task('任务名', function(){
    // 配置人物的操作
})
*/

// 注册 合并压缩js的任务 
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js') // 找到目标源文件(js文件夹下所有文件夹内的js)，将数据读取到gulp的内存。
        .pipe(concat('build.js')) // 合并文件
        .pipe(gulp.dest('dist/js')) // 临时输出文件到本地
        .pipe(uglify()) // 压缩文件
        .pipe(rename({
            suffix: '.min'
        })) // 重命名添加文件尾部
        .pipe(gulp.dest('dist/js')) // 输出至dist文件夹
        .pipe(livereload()) // 实时刷新
})

// 注册 转换less并压缩css的任务
// 1.转换less
gulp.task("less", function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css/lessCss'))
        .pipe(livereload()) // 实时刷新
})
// 2.压缩css    ['less']：指定任务依赖，当less任务执行后才能执行css任务
gulp.task("css", gulp.series(['less'], function () {
    return gulp.src('src/css/lessCss/*.css')
        .pipe(concat('build.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload()) // 实时刷新
}))
// 3.注册合并事件
// gulp.parallel： 可以并行计算
// gulp.series：按照顺序执行
gulp.task('lessToCss', gulp.series('less', 'css'))

// 注册压缩html任务
gulp.task("html", function () {
    return gulp.src('index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload()) // 实时刷新
})

// 注册默认任务
gulp.task('default', gulp.series(['js', 'less', 'css', 'html']))

// 注册监听任务
gulp.task('watch', gulp.series(['default'], function () {
    // 开启监听
    livereload.listen();
    // 确认监听的目标以及绑定相应的任务
    gulp.watch('src/js/**/*.js', gulp.series(['js']));
    gulp.watch(['src/css/**/*.css'], gulp.series(['css']));
}))
