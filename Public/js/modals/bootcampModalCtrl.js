var app = angular.module('group');

app.controller('bootcampModalCtrl', function($scope, $log, $modalInstance, bootcampObj) {

	console.log('user info from registerCtrl')
	console.log(bootcampObj);

	$scope.checkboxModel = {
		value1: true
	}

	$scope.submit = function  () {
		var newBootcamp = {
			name: $scope.name,
			githubId: bootcampObj.githubId,
			gitLink: bootcampObj.gitLink,
			profilePic: bootcampObj.profilePic,
			url: $scope.url,
			location: {
				city: $scope.city,
				state: $scope.state
			},
			housing: $scope.checkboxModel.value1,
			registered: true
		}
		
		$modalInstance.close(newBootcamp)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});