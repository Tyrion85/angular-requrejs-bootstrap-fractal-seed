define(['./module', './first-service'], function(first, firstService) {
    'use strict';
    first.controller('FirstController', [
        '$scope',
        '$route',
        '$routeParams',
        '$location',
        'firstService',
        function($scope, $route, $routeParams, $location, firstService) {
            $scope.firstText = "Text from first controller";
        }
    ]);
});
