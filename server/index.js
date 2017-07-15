'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'build';

console.log("environment",environment)

server.connection({ port: port });

server.register(require('inert'));

var staticAssetPath = (environment === 'dev') ? 'src/app':'./../src/app';

//server.route({
//	path : '/',
//	method : 'GET',
//	handler : {
//		file:'./../src/app/index.html'
//	}
//
//});

server.route({
	path: '/{path*}',
	method: 'GET',
	handler: {
		directory:{
			path : staticAssetPath,
			listing:true,
			index:true
		}
	}

});

//server.ext('onRequest', function(request,reply){
//	console.log('Request Receivsdsded ', reply );
//})

server.start(function () {
	console.log('Server running at:', server.info.uri);
});
