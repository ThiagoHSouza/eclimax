'use strict';

// Declare app level module which depends on views, and components
angular.module('eclimax', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'anim-in-out'
]).
config([ '$mdThemingProvider', '$stateProvider',  function($mdThemingProvider, $stateProvider) {
	$stateProvider
	.state('template', {
		url:'/',    	
    	templateUrl: 'template/template.html',
    	controller: 'templateCtrl',
    	controllerAs: 'temCtrl'
	})

	.state('template.home', {
		url: '^/home',
		templateUrl: 'template/home/home.html',
		controller: 'homeCtrl',
		controllerAs: 'homCtrl'
	})

	.state('template.qualidade', {
		url: '^/qualidade',
		templateUrl: 'template/qualidade/qualidade.html',
		controller: 'qualidadeCtrl',
		controllerAs: 'quaCtrl'
	})
	

  

	$mdThemingProvider.theme('default')
	.primaryPalette('pink')
	.accentPalette('blue');
}]);



