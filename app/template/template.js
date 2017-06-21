'use strict';

angular.module('eclimax')

.controller('templateCtrl', function($scope, $state) {
	var vm = this; 

	vm.listaSecao = [
		{menu: 'template.home', title: 'Home', color : '#aaa'},
		{menu: 'template.qualidade', title: 'Qualidade', color : '#098'},
		{menu: 'template.servicos', title: 'Serviços', color : '#907'},
		{menu: 'template.experiencia', title: 'Experiência', color : '#339'},
		{menu: 'template.parceiros', title: 'Parceiros', color : '#997'},
		{menu: 'template.contatos', title: 'Contatos', color : '#190'},
	]

	vm.currentMenuItem = $state.$current.name;
	vm.item = vm.listaSecao.filter(function(a){if(a.menu == vm.currentMenuItem) return a})[0]


	vm.toggleMenu = function(item){
		vm.item = item

	}

	

	

});
