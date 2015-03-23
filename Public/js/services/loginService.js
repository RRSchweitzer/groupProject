var app = angular.module('group');

app.service('loginService', function($http, $location) {	
	
	this.logout = function () {
		return $http({
			method: 'GET',
			url: '/api/user/logout'
		}).then(function (res) {
			$location.path('/')
			return res
		})
	}

});