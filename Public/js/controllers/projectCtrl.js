var app = angular.module('group');

app.controller('projectCtrl', function ($scope, $modal, $log, projectService, registerService) {
	
	$scope.showSpinner = false;

		$scope.user = registerService.getUser().then(function (res) {
			return res.data;
		})

	$scope.openProject = function() {
		var modalInstance = $modal.open({
			templateUrl: 'js/modals/projectModalTmpl.html',
			controller: 'projectModalCtrl',
			windowClass: 'modals',
			size: 'lg'
		})

		modalInstance.result.then(function(projectObj) {
			$scope.showSpinner = true;
			projectService.saveProject(projectObj).then(function(res) {
				$scope.showSpinner = false;
				$scope.getProjects();
			})
			})
		}
	

	$scope.getProjects = function() {
		projectService.getProjects().then(function(res) {
			console.log(res.data);
			$scope.projects = res.data;
			console.log(res.data)
		})
	}
	$scope.getProjects();
	

})