var app = angular.module('group');

app.controller('bootcampCtrl',function($scope, bootcampService, getUsers, loginService) {
	$scope.unverified = getUsers[0];
  	$scope.verified = getUsers[1];

	$scope.unverifiedActive = false;
	$scope.verifiedActive = true;

	$scope.verify = function(student) {
		bootcampService.verifyStudent(student).then(function(res) {
			console.log(res.data)
		})
		$scope.unverified.splice($scope.unverified.indexOf(student), 1);
		$scope.verified.push(student);
		console.log($scope.verified);

	}

	$scope.unverify = function(student) {
		bootcampService.unverifyStudent(student).then(function(res) {
			console.log(res.data);
		})
		$scope.verified.splice($scope.verified.indexOf(student), 1);
		$scope.unverified.push(student);
		console.log($scope.unverified);	
	}

			$scope.logout = function () {
			loginService.logout()
		}


})