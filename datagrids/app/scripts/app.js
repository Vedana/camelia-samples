'use strict';

/**
 * @ngdoc overview
 * @name datagridsApp
 * @description # datagridsApp
 * 
 * Main module of the application.
 */
angular.module('datagridsApp',
		[ 'ngResource', 'ngRoute', 'camelia.directives.grid', 'camelia.directives.pager', 'camelia.criteria' ]).config(
		function($routeProvider) {
			$routeProvider.when('/grid1', {
				templateUrl: 'views/grid1.html',
				controller: 'Grid1Ctrl'

			}).when('/grid2', {
				templateUrl: 'views/grid2.html',
				controller: 'Grid2Ctrl'

			}).otherwise({
				redirectTo: '/grid1'
			});
		});
