'use strict';

/**
 * @ngdoc function
 * @name app.route:profilesRoute
 * @description
 * # profilesRoute
 * Route of the app
 */

angular.module('profiles')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.profiles', {
				url:'/profiles',
				templateUrl: 'app/modules/profiles/profiles.html',
				controller: 'ProfilesCtrl',
				controllerAs: 'vm'
			});


	}]);
