var app = angular.module('group');

app.controller('projectCtrl', function ($scope, $modal, $log, projectService) {
	
	$scope.showSpinner = false;

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
			$scope.projects = res.data;
		})
	}
	$scope.getProjects();

})