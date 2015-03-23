
var app = angular.module('group', ['ngRoute','ui.bootstrap', 'angular-spinkit', 'ngDragDrop'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "js/views/homeTmpl.html",
			controller:  "homeCtrl",
			// resolve: {
			// 	getRandomProjects
			// }
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
			controller: 'bootcampCtrl',
			resolve: {
				getUsers: function(bootcampService) {
					return bootcampService.getUsers()
				}
			}
		})
		.when('/projects', {
			templateUrl: "js/views/projectTmpl.html",
			controller: "projectCtrl"
		})
		.when('/login', {
			templateUrl: "js/views/loginTmpl.html",
			controller: "loginCtrl"
		})
		.otherwise({
			redirectTo: "/"
		})
	})