define(['./app'], function(app) {
  app.service('appService', ['$http', function($http) {
    this.something = function() {
      alert("You can make http call here or whatever");
    }
  }])
});
