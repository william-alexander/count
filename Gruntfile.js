module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		cssmin: {
			target: {
				files: [{
					cwd: "src",
					expand: "true",
					ext: ".min.css",
					src: ["*.css"]
				}]
			}
		},
		uglify: {
			options: {
				banner: "// \@source: <%= pkg.repository.url %>\n"
			},
			build: {
				cwd: "src",
				expand: "true",
				ext: ".min.js",
				src: "*.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default", ["cssmin", "uglify"]);
}
