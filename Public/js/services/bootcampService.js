var app = angular.module('group');

app.service('bootcampService', function($http, $q) {

	this.getUsers = function () {
		var dfd = $q.defer() 
		$http({
			method: 'GET',
			url: 'api/bootcampUsers'
		}).then(function(res) {
			var userArr = res.data
			var unverified = [];
			var verified = [];
			for (var i = 0; i < userArr.length; i++) {
				if(userArr[i].verified === false) {
					unverified.push(userArr[i])
				} else {
					verified.push(userArr[i])
				}
			}
			return dfd.resolve([unverified, verified])
		})
	return dfd.promise
	}
});