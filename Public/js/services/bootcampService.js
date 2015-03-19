var app = angular.module('group');

app.service('bootcampService', function($http) {

	this.getUsers = function () {
		return $http({
			method: 'GET',
			url: 'api/bootcampUsers'
		})
	}
});