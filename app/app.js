'use strict';

// Declare app level module which depends on views, and components
angular.module('eclimax', [
  'ngRoute',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('blue');
}]);
