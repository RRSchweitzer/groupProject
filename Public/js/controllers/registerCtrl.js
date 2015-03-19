var app = angular.module('group');


app.controller('registerCtrl', function($scope, $log, $modal, $location, registerService) {
<<<<<<< HEAD
	 	// $scope.bootcamps = registerService.getBootcamps().then(function(res) {
	 	// 	return res.data
	 	// })
=======
		$scope.bootcamps = registerService.getBootcamps()
			.then(function(res) {
				console.log("this is res.data")
				console.log(res.data)
				return res.data
			})
>>>>>>> upstream/master
		$scope.user = registerService.getUser().then(function (res) {
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
				},
				bootcampsObj: function () {
<<<<<<< HEAD
					return $scope.bootcamps;
=======
					return $scope.bootcamps
>>>>>>> upstream/master
				}
			}
		})

		modalInstance.result.then(function(data) {
			registerService.saveUser(data)
			.then(function (res) {
				$location.path('/projects')
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
				$location.path('/bootcamp/dashboard')
			});
		})
	}

})