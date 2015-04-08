module.exports = function(grunt) {

  grunt.initConfig({



    watch: {
      dev: {
        files: ['sass/*', '*.html', 'js/*js'],
        tasks: ['sass:dev']
      }
    },



    sass: {
      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'nested',
          precision: 7,
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      },
      dist: {
        options: {
          sourceMap: false,
          outputStyle: 'compressed',
          precision: 7,
        },
        files: {
          'dist/css/style.css': 'sass/style.scss'
        }
      }
    },



    browserSync: {
      default: {
        bsFiles: {
          src : ['style.css', '*.html', 'js/*.js']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },



    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/FitText.js/jquery.fittext.js',
          'bower_components/jquery-flex-vertical-center/jquery.flexverticalcenter.js',
          'js/script.js'
          ],
        dest: 'dist/js/script.js',
      },
    },



    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      dist: {
        files: {
          'dist/js/script.js': ['dist/js/script.js']
        }
      }
    },



    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },



    copy: {
      dist: {
        files: [
          {src: 'CNAME', dest: 'dist/'},
          {src: 'robots.txt', dest: 'dist/'},
          {src: 'index.html', dest: 'dist/'},
          {expand: true, src: ['img/*'], dest: 'dist/', filter: 'isFile'},
        ],
      },
    },



    preprocess : {
      options: {
        context : {
          DEBUG: false
        }
      },
      html : {
        src : 'dist/index.html',
        dest : 'dist/index.html'
      }
    }


  });


  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-preprocess');

  grunt.registerTask('dev', ['browserSync', 'watch']);
  grunt.registerTask('dist', ['sass:dist', 'copy:dist', 'preprocess', 'htmlmin:dist', 'concat:dist', 'uglify:dist']);


};