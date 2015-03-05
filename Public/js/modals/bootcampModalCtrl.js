var app = angular.module('group');

app.controller('bootcampModalCtrl', function($scope, $log, $modalInstance, bootcampObj) {

	console.log('user info from registerCtrl')
	console.log(userObj);

	$scope.submit = function  () {
		var newBootcamp = {
			name: userObj.displayName,
			githubId: userObj.id,
			gitLink: userObj.profileUrl,
			profilePic: userObj._json.avatar_url,
			accountType: userObj._json.type
		}
		
		$modalInstance.close(newBootcamp)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});