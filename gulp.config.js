module.exports = function() {
	var client = './src/app/';
	var server = './server/';
	var clientApp = client + 'modules/';
	var config = {

		// all js to vet
		alljs: [
			'./src/app/modules/**/*.js'
		],
		client:client,
		server:server,
		index: client + 'index.html',
		css: clientApp + '**/*.css',
		js: [
			client + 'app.js',
			client + 'app.config.js',
			clientApp + '**/*Module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*-test.js'
		],

		/**
		 * Bower and NPM locations
		 */
		bower: {
			json: require('./bower.json'),
			directory: './src/app/bower_components/',
			ignorePath: '../../'
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
