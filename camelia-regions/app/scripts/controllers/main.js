'use strict';

/**
 * @ngdoc function
 * @name cameliaRegionsApp.controller:MainCtrl
 * @description # MainCtrl Controller of the cameliaRegionsApp
 */
angular.module('cameliaRegionsApp').controller('MainCtrl', [ "$scope", "$resource", function($scope, $resource) {
	$scope.dataModel = $resource("http://camelia-regions.herokuapp.com/query");
} ]);
