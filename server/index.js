'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.register(require('inert'));

server.route({
	method : 'GET', path : '/{param*}',
	handler : {
		directory : {
			path : './../',
			listing : false,
			index : true
		}
	}

});

server.start(function () {
	console.log('Server running at:', server.info.uri);
});
