'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: GenericViewCtrl});
    $routeProvider.when('/deeplearing', {templateUrl: 'partials/deeplearing.html', controller: GenericViewCtrl});
    $routeProvider.when('/soccer', {templateUrl: 'partials/soccer.html', controller: GenericViewCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
