/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;
    var target = {
            html: 'public/index.html',
            test: 'public/test.html',
            zip: 'dev-test.tar.gz'
    };

    grunt.event.on('qunit.begin', function() {
        grunt.log.ok('');
    });
    grunt.event.on('qunit.moduleStart', function(name) {
    });

    grunt.event.on('qunit.testStart', function(name) {
    });

    grunt.event.on('qunit.log', function(result,actual,expected,message,source) {
    });

    grunt.event.on('qunit.testDone', function(name,failed,passed,total) {
        grunt.log.ok('')
        grunt.log.ok("Running "+name+': '+failed+' '+'failed');
        grunt.log.ok("Running "+name+': '+passed+' '+'passed');
    });

    grunt.event.on('qunit.moduleDone', function(name,failed,passed,total) {
    });

    grunt.event.on('qunit.done', function(failed,passed,total,runtime) {
    });

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    
        // Tests will be added soon
        qunit: {
            files: [ target.test ]
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: 'public'
                }
            }
        },

        jade: {
            test: {
                options: {
                    data: {
                        include_shell: 0,
                        testing: true
                    }
                },
                files: [
                    {dest:target.test, src:"views/index.jade"}
                ]
            },
            release: {
                options: {
                    data: {
                        include_shell: 0
                    }
                },
                files: [
                    {dest:target.html, src:"views/index.jade"}
                ]
            }
        },

        compress: {
            main: {
                options: {
                    archive: target.zip,
                    mode: 'tgz'
                },
                files: [
                  {src:['public/**','!'+target.test, '!public/qunit/**']}
                ]
            }
        },

        watch: {
            main: {
                files: [ 'Gruntfile.js', 'views/*.jade' ],
                tasks: 'default'
            }
        },

        clean: {
            test: [target.test],
            release: [target.html, target.zip]
        }
    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-qunit' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-jade' );
    grunt.loadNpmTasks( 'grunt-contrib-compress' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );

    // Default task
    grunt.registerTask( 'default', [ 'jade', 'qunit' ] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'compress' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

    // Run tests
    grunt.registerTask( 'test', [ 'jade:test', 'qunit' ] );

};
