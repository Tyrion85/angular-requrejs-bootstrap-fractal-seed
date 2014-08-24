define(['./module'], function(first) {
    first.service('firstService', ['$http', function($http) {
        this.somethingFirst = function() {
            console.log("do something useful here");
        }
    }]);
});
