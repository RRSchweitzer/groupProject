app = angular.module('group');

app.controller('bootcampCtrl', function($scope, bootcampService) {
	$scope.list1 = {title: 'User Name'};
  $scope.list2 = {};

  $scope.getUsers = function() {
		bootcampService.getUsers()
		.then(function(res) {
			console.log(res)
			$scope.users = res.data;
		})
	}
	$scope.getUsers();
})