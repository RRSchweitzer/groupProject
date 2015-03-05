var app = angular.module('group');

app.controller('projectCtrl', function ($scope, $modal, $log, projectService) {
	
	$scope.openProject = function() {
		var modalInstance = $modal.open({
			templateUrl: 'js/modals/projectModalTmpl.html',
			controller: 'projectModalCtrl',
			windowClass: 'modals',
			size: 'lg'
		})

		modalInstance.result.then(function(projectObj) {
			projectService.saveProject(projectObj)
		})
	} 



})