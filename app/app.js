'use strict';

// Declare app level module which depends on views, and components
angular.module('eclimax', [
  'ngRoute',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
