var app = angular.module('group');

app.service('projectService', function($http) {

	this.saveProject = function (projectObj) {
		return $http({
			method: 'POST',
			url: "api/user/saveProject",
			data: projectObj
		})
	}

});