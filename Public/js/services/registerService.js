var app = angular.module('group');

app.service('registerService', function($http, $location) {

	this.getUser = function () {
		return $http({
			method: 'GET',
			url: 'api/user/userinfo'
		})
	}

	this.saveBootcamp = function (bootcampObj) {
		return $http({
			method: 'POST',
			url: 'api/bootcamp',
			data: bootcampObj
		})
	}
	
	this.saveUser = function (userObj) {
		return $http({
			method: 'POST',
			url: 'api/user',
			data: userObj
		})
	}	

})