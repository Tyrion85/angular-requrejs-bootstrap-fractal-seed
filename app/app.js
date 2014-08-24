define(['angular', 'angular-route', './first-partial/index', './second-partial/index'], function(angular) {
	'use-strict';

	var app = angular.module('app', ['app.first', 'app.second', 'ngRoute']);
	return app;
});
