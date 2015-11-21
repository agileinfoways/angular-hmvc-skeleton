module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js']
		},
		connect: {
			server: {
				options: {
					port: 9002,
					base: './public/',
					open: true
				}
			}
		},
		watch: {
			files: [
						'Gruntfile.js', 
						'<%= jshint.files %>', 
						'public/index.html', 
						'public/stylesheets/*.css',
						'public/app/*.js',
						'public/app/**/*.*',
					],
			tasks: ['jshint'],
			options: {
				livereload: true
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'connect', 'watch']);

};
