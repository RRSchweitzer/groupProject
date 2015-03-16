
var app = angular.module('group', ['ngRoute','ui.bootstrap', 'angular-spinkit'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "js/views/homeTmpl.html",
			controller:  "homeCtrl"
		})
		.when('/register', {
			templateUrl: 'js/views/registerTmpl.html',
			controller: 'registerCtrl'
		})
		.when('/user/dashboard', {
			templateUrl: 'js/views/userTmpl.html',
			controller: 'userCtrl'
		})
		.when('/bootcamp/dashboard', {
			templateUrl: 'js/views/bootcampTmpl.html',
			controller: 'bootcampCtrl'
		})
		.when('/projects', {
			templateUrl: "js/views/projectTmpl.html",
			controller: "projectCtrl"
		})
		.otherwise({
			redirectTo: "/"
		})
	})