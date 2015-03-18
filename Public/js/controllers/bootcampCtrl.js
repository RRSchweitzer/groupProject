app = angular.module('group');

app.controller('bootcampCtrl', function($scope) {
	$scope.list1 = {title: 'User Name'};
  $scope.list2 = {};

  $scope.getUnverifiedUsers = function() {
		bootcampService.getUnverifiedUsers()
		.then(function(res) {
			$scope.unverifiedUsers = res.data;
		})
	}
	$scope.getProjects();

})