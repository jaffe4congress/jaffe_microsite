module.exports = function() {
	var client = './app/';
	var server = './server/';
	var clientApp = client + 'modules/';
	var temp = clientApp + 'templatecache/';
	var config = {

		// all js to vet
		alljs: [
			'./app/modules/**/*.js'
		],
		client:client,
		build:"./build/",
		server:server,
		temp: temp,
		index: client + 'index.html',
		htmltemplates: clientApp + '**/*.html',
		css: clientApp + '**/*.css',
		js: [
			client + 'app.js',
			client + 'app.js',
			client + 'app.config.js',
			clientApp + '**/*Module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*-test.js',
			'!' + temp + '**/*.js'
		],

		/**
		 * Bower and NPM locations
		 */
		bower: {
			json: require('./bower.json'),
			directory: './app/bower_components/',
			ignorePath: '../'
		},

		/**
		 * template cache
		 */
		templateCache: {
			filename: 'temp.js',
			options: {
				module: 'home',
				standAlone: false,
				root: 'app/modules/'
			}
		},

		/**
		 * Node settings
		 */
		defaultPort: 8080,
		nodeServer: './server/index.js'
	};

	config.getWiredepDefaultOptions = function() {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath
		};
		return options;
	};

	return config;
};
