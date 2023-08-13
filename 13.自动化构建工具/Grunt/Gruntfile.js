module.exports = function (grunt) {
    // 初始化配置grunt任务
    // Project configuration.
    grunt.initConfig({
        concat: { // 任务名
            options: {
                separator: ';', // 两个文件的分割符
            },
            dist: {
                src: ['src/js/*.js'], // 合并源文件（src/js/下的所有.js文件）
                dest: 'build/js/build.js' // 目标位置和文件名
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            // 压缩后的注释信息
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    'build/js/build.min.js': ['build/js/build.js'] // ‘压缩后的文件’：压缩前的文件
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc' // 指定配置文件
            },
            build: ['Gruntfile.js', 'src/js/*.js'] // 指定要检查的文件
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false, // 停用快速压缩
                roundingPrecision: -1 // 不进行四舍五入
            },
            target: {
                files: {
                    'build/css/build.min.css': ['src/css/*.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.css'], // 指定监视文件
                tasks: ['jshint', 'concat', 'uglify', 'cssmin'], // 指定文件发生变化后执行的任务
                options: {
                    spawn: false, // 停用大量生产  变量更新  true:全量更新
                },
            },
        },
    });
    // grunt任务执行的时候去加载对应的任务插件
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 注册grunt的默认任务
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
    // 注册监听任务，监听前先执行default
    grunt.registerTask('myWatch',['default','watch']);

};