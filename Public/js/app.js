
var app = angular.module('group', ['ngRoute','ui.bootstrap', 'angular-spinkit', 'ngDragDrop'])

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "js/views/homeTmpl.html",
			controller:  "homeCtrl",
			resolve: {
				getRandomProjects: function(projectService) {
					return projectService.getRandomProjects()
				},
				isLoggedIn: function(registerService) {
					return registerService.isLoggedIn()
				}
			}
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
			controller: "projectCtrl",
			resolve: {
				getProjects: function(projectService) {
					return projectService.getProjects()
				},
				isLoggedIn: function(registerService) {
					return registerService.isLoggedIn()
				},
				dashboardLink: function(projectService) {
					return projectService.dashboardLink()
				}
			}
		})
		.when('/login', {
			templateUrl: "js/views/loginTmpl.html",
			controller: "loginCtrl"
		})
		.otherwise({
			redirectTo: "/"
		})
	})