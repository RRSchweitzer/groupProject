var app = angular.module('group');

app.service('projectService', function($http, $q) {

	this.saveProject = function (projectObj) {
		return $http({
			method: 'POST',
			url: "api/user/saveProject",
			data: projectObj
		})
	}

	this.getProjects = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'api/projects'
		}).then(function(res) {
			return dfd.resolve(res.data)
		})
		return dfd.promise;
	}

	this.submitVote = function (project) {
		return $http({
			method: 'POST',
			url: 'api/project/vote',
			data: project
		})
	}
});