var app = angular.module('group');

app.controller('bootcampCtrl',function($scope, bootcampService, getUsers) {
	$scope.unverified = getUsers[0];
  	$scope.verified = getUsers[1];

	$scope.unverifiedActive = false;
	$scope.verifiedActive = true;

	$scope.toggleUnverified = function(student) {
		$scope.unverifiedActive = !$scope.unverifiedActive
		$scope.unverified.splice($scope.unverified.indexOf(student), 1);
		$scope.verified.push(student);
		console.log($scope.verified);
		
	}

	$scope.toggleVerified = function(student) {
		$scope.verifiedActive = !$scope.verifiedActive;
		$scope.verified.splice($scope.verified.indexOf(student), 1);
		$scope.unverified.push(student);
		console.log($scope.unverified);
	}

})