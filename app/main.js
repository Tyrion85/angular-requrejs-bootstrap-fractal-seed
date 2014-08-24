require.config({
  paths: {
    'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.19/angular',
    'angular-route': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.19/angular-route',
    'domReady': '../ext/lib/requirejs-domready/domready',
    'jquery': '../ext/lib/jquery/jquery-2.1.1.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angularAMD': ['angular'],
    'ngload': ['angularAMD']
  },

  deps: [
    // kick start application
    './bootstrap'
  ]
});
