var app = angular.module('group');

app.service('bootcampService', function($http) {

	this.getUnverifiedUsers = function () {
		return $http({
			method: 'GET',
			url: 'api/bootcampUsers'
		})
	}
});