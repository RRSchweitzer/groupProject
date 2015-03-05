var app = angular.module('group');

app.controller('registerCtrl', function($scope, $log, $modal, registerService) {
	
		$scope.user = registerService.getUser().then(function (res) {
			console.log(res);
			return res.data;
		})

	$scope.openIndividual = function() {
		var modalInstance = $modal.open({
			templateUrl: 'js/modals/userModalTmpl.html',
			controller: 'userModalCtrl',
			size: 'lg',
			resolve: {
				userObj: function () {
					return $scope.user;
				}
			}
		})

		modalInstance.result.then(function(data) {
			console.log(data);
		})
	} 

	$scope.openBootcamp = function() {
		var modalInstance = $modal.open({
			templateUrl: 'js/modals/bootcampModalTmpl.html',
			controller: 'bootcampModalCtrl',
			size: 'lg',
			resolve: {
				bootcampObj: function () {
					return $scope.user;
				}
			}
		})
	}

})