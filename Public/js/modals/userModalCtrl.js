var app = angular.module('group');

app.controller('userModalCtrl', function($scope, $log, $modalInstance, userObj) {

	console.log('user info from registerCtrl')
	console.log(userObj);
	
	$scope.experience = {
		level:'Never Coded'
	}

	$scope.submit = function  () {
		var newUser = {
			name: userObj.displayName,
			githubId: userObj.id,
			gitLink: userObj.profileUrl,
			profilePic: userObj._json.avatar_url,
			accountType: userObj._json.type,
			bio: $scope.bio,
			bootcamp: $scope.bootcamp,
			experience: $scope.experience
		}
		
		$modalInstance.close(newUser)
		}

	// $scope.cancel = function () {
	// 	$modalInstance.dismiss('cancel');
	// }

});