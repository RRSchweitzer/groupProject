var app = angular.module('group');

app.controller('projectModalCtrl', function($scope, $modalInstance) {


	$scope.submit = function  () {
		var projectObj = {
			projectName: $scope.name,
			url: $scope.url,
			languagesFrameworks: $scope.languagesFrameworks,
			description: $scope.description
			
		}

		$modalInstance.close(projectObj)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});