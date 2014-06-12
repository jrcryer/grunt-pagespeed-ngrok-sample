/**
 * grunt-pagespeed-ngrok
 * http://www.jamescryer.com/grunt-pagespeed-ngrok
 *
 * Copyright (c) 2014 James Cryer
 * http://www.jamescryer.com
 */ 
'use strict'

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true
      },
      local: {
        options: {
          url: "https://338934f6.ngrok.com/login",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      }
    }
  });

  // Register default tasks
  grunt.registerTask('default', ['pagespeed']);
}
