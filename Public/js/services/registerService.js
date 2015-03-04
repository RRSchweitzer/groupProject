var app = angular.module('group');

app.service('registerService', function($http) {

	this.getUser = function () {
		return $http({
			method: 'GET',
			url: 'api/user/userinfo'
		})
	}
		
})