(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:profilesCtrl
	* @description
	* # profilesCtrl
	* Controller of the app
	*/

  	angular
		.module('profiles')
		.controller('ProfilesCtrl', Profiles);

		Profiles.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Profiles() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
