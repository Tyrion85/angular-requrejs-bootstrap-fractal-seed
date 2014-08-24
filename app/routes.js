define(['./app'], function(app) {
  'use strict';
  return app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/first/first.html',
      controller: 'FirstController'
    });

    $routeProvider.when('/first', {
      templateUrl: 'app/first/first.html',
      controller: 'FirstController'
    });

    $routeProvider.when('/second', {
      templateUrl: 'app/second/second.html',
      controller: 'SecondController'
    });

    $routeProvider.otherwise({
      redirectTo: '/first'
    });

  }]);
});
