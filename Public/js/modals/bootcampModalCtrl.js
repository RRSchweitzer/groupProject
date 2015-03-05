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
			url: $scope.url,
			githubId: bootcampObj.id,
			gitLink: bootcampObj.profileUrl,
			profilePic: bootcampObj._json.avatar_url,
			accountType: bootcampObj._json.type,
			location: {
				city: $scope.city,
				state: $scope.state
			},
			housing: $scope.checkboxModel.value1
		}
		
		$modalInstance.close(newBootcamp)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});