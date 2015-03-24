var app = angular.module('group');

app.controller('userCtrl', function($scope, userService, loginService) {
	$scope.getProjects = function() {
		userService.getProjects().then(function(res) {
			console.log(res)
			$scope.projects = res.data;
		})
	}
	$scope.getProjects();

	$scope.removeProject = function(img) {
		userService.removeProject(img).then(function(res) {
			$scope.getProjects();
		})
	}
	$scope.logout = function () {
		loginService.logout()
	}
})