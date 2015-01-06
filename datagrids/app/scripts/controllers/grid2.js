'use strict';

/**
 * @ngdoc function
 * @name datagridsApp.controller:Grid2Ctrl
 * @description # Grid2Ctrl Controller of the datagridsApp
 */
angular.module('datagridsApp').controller('Grid2Ctrl', [ "$scope", "$resource", function($scope, $resource) {
	$scope.dataModel = $resource("http://camelia-regions.herokuapp.com/query");
} ]);
