var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var config = require('./gulp.config')();
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
	log('Analyzing source with JSHint and JSCS');

	return gulp
		.src(config.alljs)
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jscs())
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe($.jshint.reporter('fail'));
});

gulp.task('wiredep', ['clean-code','templatecache'], function() {
	log('Wire up the bower css js and our app js into the html');
	var options = config.getWiredepDefaultOptions();
	var wiredep = require('wiredep').stream;
	var templateCache = config.temp + config.templateCache.file;

	return gulp
		.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(templateCache, {ignorePath: 'app',read: false}), {
			starttag: '<!-- inject:templates:js -->'
		}))
		.pipe($.inject(gulp.src(config.js),{ignorePath: 'app'}))
		.pipe($.inject(gulp.src(config.css),{ignorePath: 'app'}))
		.pipe(gulp.dest(config.client));
});

gulp.task('clean-code', function(done) {
	var files = [].concat(
		config.temp + '**/*.js',
		config.build + '**/*.html',
		config.build + 'js/**/*.js'
	);
	clean(files, done);
});

gulp.task('templatecache', ['clean-code'], function() {
	log('Creating AngularJS $templateCache');

	return gulp
		.src(config.htmltemplates)
		//.pipe($.minifyHtml({empty: true}))
		.pipe($.angularTemplatecache(
			config.templateCache.filename,
			config.templateCache.options
		))
		.pipe(gulp.dest(config.temp));
});

gulp.task('serve-dev', ['wiredep'], function() {

	var isDev = true;
	var nodeOptions = {
		script: config.nodeServer,
		delayTime: 1,
		env: {
			'PORT': config.defaultPort,
			'NODE_ENV': isDev ? 'dev' : 'build'
		},
		watch: [config.server]
	};

	return $.nodemon(nodeOptions)
		.on('restart', function(ev) {
			log('*** nodemon restarted');
			log('files changed on restart:\n' + ev);
			setTimeout(function() {
				browserSync.notify('reloading now ...');
				browserSync.reload({stream: false});
			}, 1000);
		})
		.on('start', function() {
			log('*** nodemon started');
			startBrowserSync();
		})
		.on('crash', function() {
			log('*** nodemon crashed: script crashed for some reason');
		})
		.on('exit', function() {
			log('*** nodemon exited cleanly');
		});
});

////////////

function changeEvent(event) {
	var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
	log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync() {
	if (args.nosync || browserSync.active) {
		return;
	}

	log('Starting browser-sync on port 3000');

	gulp.watch([config.htmltemplates], ['templatecache'])
		.on('change', function(event) { changeEvent(event); });

	var options = {
		proxy: 'localhost:' + config.defaultPort,
		port: 3000,
		files: [
			config.client + '**/*.*',
			'!' + config.client + 'bower_components'
		],
		ghostMode: {
			clicks: true,
			location: false,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'gulp-patterns',
		notify: true,
		reloadDelay: 0 //1000
	};

	browserSync(options);
}

function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}

function clean(path, done) {
	log('Cleaning: ' + $.util.colors.blue(path));
	del(path, done);
}

