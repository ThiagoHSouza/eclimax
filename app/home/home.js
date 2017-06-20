'use strict';

angular.module('eclimax')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', function($scope) {
	
	$scope.listaSecao = [
		{menu: 'home', title: 'Home', color : '#aaa'},
		{menu: 'qualidade', title: 'Qualidade', color : '#098'},
		{menu: 'servicos', title: 'Serviços', color : '#907'},
		{menu: 'experiencia', title: 'Experiência', color : '#339'},
		{menu: 'parceiros', title: 'Parceiros', color : '#997'},
		{menu: 'contatos', title: 'Contatos', color : '#190'},
	]

	

});