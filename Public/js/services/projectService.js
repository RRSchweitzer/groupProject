var app = angular.module('group');

app.service('projectService', function($http, $q) {

	this.dashboardLink = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'api/user/dashboardLink'
		}).then(function(res) {
			console.log(res.data)
			return dfd.resolve(res.data)
		})
		return dfd.promise
	}

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
		var projectNoImg = {
			_id: project._id,
			votes: project.votes
		};

		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: 'api/project/vote',
			data: projectNoImg
		}).then(function(res) {
			if(res.status === 204) {
				dfd.resolve(false)
			} else if (res.status === 200) {
				dfd.resolve(res)
			}
		})
		return dfd.promise;
	}

	this.getRandomProjects = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'api/randomProjects'
		}).then(function(res) {
				return dfd.resolve(res.data)
		})
			return dfd.promise;
	}
});