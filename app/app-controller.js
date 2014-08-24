define(['./app', './app-service', 'jquery'], function(app, appService, jquery) {
  'use strict';

  app.controller('AppController', [
    '$scope',
    '$route',
    '$routeParams',
    '$location',
    'appService',
    function($scope, $route, $routeParams, $location, appService) {
      $scope.mainText="Hello World from AppController!";
    }
  ])
});
