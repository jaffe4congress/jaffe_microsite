(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:profilesTest
	 * @description
	 * # profilesTest
	 * Test of the app
	 */

	describe('profiles test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('jaffe-microsite');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ProfilesCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
