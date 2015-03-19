var app = angular.module('group');

app.controller('userModalCtrl', function($scope, $log, $modalInstance, userObj, bootcampsObj) {

	console.log('bootcamp info from registerCtrl')
	console.log(bootcampsObj)

	$scope.bootcamps = bootcampsObj
	
	$scope.experience = {
		level:'Never Coded'
	}

	$scope.submit = function  () {
		var newUser = {
			name: $scope.name,
			bio: $scope.bio,
			bootcamp: $scope.bootcamp,
			skills: $scope.skills,
			experience: $scope.experience,
			gradYear: $scope.gradYear
		}
		
		$modalInstance.close(newUser)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});