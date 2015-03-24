var app = angular.module('group');

app.service('registerService', function($http, $location, $q) {

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

	this.getBootcamps = function () {
		return $http({
			method: 'GET',
			url: 'api/getBootcamps'
		})
	}	

	this.isLoggedIn = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'api/user/isLoggedIn'
		}).then(function(res) {
			console.log(res)
			if(res.status === 200) {
				return dfd.resolve(true)
			} else {
				return dfd.resolve(false)
			}
		})
		return dfd.promise
	}

})