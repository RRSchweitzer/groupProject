var app = angular.module('group');


app.controller('registerCtrl', function($scope, $log, $modal, $location, registerService) {
	
		$scope.user = registerService.getUser().then(function (res) {
			console.log(res);
			return res.data;
		})

	$scope.openIndividual = function() {
		var modalInstance = $modal.open({
			templateUrl: 'js/modals/userModalTmpl.html',
			controller: 'userModalCtrl',
			windowClass: 'modals',
			size: 'lg',
			resolve: {
				userObj: function () {
					return $scope.user;
				}
			}
		})

		modalInstance.result.then(function(data) {
			registerService.saveUser(data)
			.then(function (res) {
				$location.path('/projects')
				return res
		})
			
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

		modalInstance.result.then(function(newBootcamp) {
			console.log(newBootcamp);
			registerService.saveBootcamp(newBootcamp).then(function(result) {
				$location.path('/projects')
			});
		})
	}

})