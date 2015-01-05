'use strict';

/**
 * @ngdoc overview
 * @name cameliaRegionsApp
 * @description # cameliaRegionsApp
 * 
 * Main module of the application.
 */
angular
		.module(
				'cameliaRegionsApp',
				[ 'ngResource',
					'ngRoute',
					'camelia.directives.grid',
					'camelia.directives.pager',
					'camelia.criteria',
					'ngResource' ]).config(function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			}).when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			}).otherwise({
				redirectTo: '/'
			});
		});
