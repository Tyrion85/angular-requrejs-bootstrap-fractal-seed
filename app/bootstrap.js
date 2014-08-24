define([ 'require', 'jquery', 'angular', 'app', 'app-controller', 'routes' ], function(require, jquery, ng) {
	'use strict';

	/* Operations that need to initialize prior to app start should be placed here */
	/* example: https://github.com/StarterSquad/startersquad.github.com/blob/master/examples/angularjs-requirejs-2/js/bootstrap.js */

	require(['domReady!'], function(document) {
		ng.bootstrap(document, ['app']);
	});
});
