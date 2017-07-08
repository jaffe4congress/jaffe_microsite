(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:profilesService
	 * @description
	 * # profilesService
	 * Service of the app
	 */

  	angular
		.module('profiles')
		.factory('ProfilesService', Profiles);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Profiles.$inject = ['$http'];

		function Profiles ($http) {

		}

})();
