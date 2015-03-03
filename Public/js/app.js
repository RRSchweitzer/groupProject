var app = angular.module('group', ['ngRoute'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: "js/views/loginTmpl.html",
			controller:  "loginCtrl"
		})
		.when('/projects', {
			templateUrl: "js/views/projectTmpl.html",
			controller: "projectCtrl",
		
		})
		.otherwise({
			redirectTo: "/login"
		})
	})