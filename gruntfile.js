module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.initConfig({
    eslint: {
      src: ['src/*.js', 'test/*.test.js']
    }
  });

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('coverage', ['mocha_istanbul']);
  grunt.registerTask('build', ['lint', 'coverage']);
};
