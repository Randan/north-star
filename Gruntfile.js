module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      dist: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          'assets/main.min.js': [
            'js/lib/jquery-3.3.1.min.js',
            'js/lib/jquery-ui.min.js',
            'js/lib/jquery.fancybox.min.js',
            'js/main.js'
          ]
        }
      }
    },

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'assets/main.min.css': 'sass/main.scss'
        }
      }
    },

    watch: {
      js: {
        files: ['js/*'],
        tasks: ['uglify']
      },
      sass: {
        files: ['sass/**/*'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('default', 'build');

};