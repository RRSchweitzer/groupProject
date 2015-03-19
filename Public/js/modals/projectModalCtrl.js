var app = angular.module('group');

app.controller('projectModalCtrl', function($scope, $modalInstance, userObj) {

	console.log(userObj)


	$scope.submit = function  () {
		var projectObj = {
			projectName: $scope.name,
			projectUrl: $scope.url,
			description: $scope.description
		}

		$modalInstance.close(projectObj)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});