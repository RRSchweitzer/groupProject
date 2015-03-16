var app = angular.module('group');

app.service('userService', function($http) {
	this.getProjects = function() {
		return $http({
				method: 'GET',
				url: '/api/user/projects'
			})
	}

	this.removeProject = function(img) {
		return $http({
			method: 'DELETE',
			url: '/api/user/projects/' + img
		})
	}
})