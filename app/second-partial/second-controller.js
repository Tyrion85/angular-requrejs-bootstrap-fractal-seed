define(['./module'], function(second) {
  'use strict';
  second.controller('SecondController', [
    '$scope',
    function($scope) {
      $scope.secondText = "Text from second controller";
    }
  ]);
});
