module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      generate_fortunes: 'node --use-strict src/util/generate_fortunes_list.js',
      sw: 'npm run sw',
      build: {command: 'ng build --prod', options: {maxBuffer: 1024*1000}}
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', ['exec:generate_fortunes', 'exec:build', 'exec:sw']);
  grunt.registerTask('gen_fortunes', ['exec:generate_fortunes']);
};
