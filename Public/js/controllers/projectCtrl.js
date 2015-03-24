var app = angular.module('group');

app.controller('projectCtrl', function ($scope, $modal, $log, projectService, registerService, getProjects, loginService) {
	$scope.projects = getProjects;

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
				console.log(res.data)
				$scope.projects.push(res.data)
				$scope.showSpinner = false;
			})
			})
		}

	$scope.getSubmittedProject = function() {
		$scope.projects = projectService.getProjects()
	}
	
	$scope.submitVote = function(project) {
		projectService.submitVote(project).then(function(res) {
			if(res === false) {
				console.log('You already voted on that project!!!!')
			} else {
				$scope.projects.splice($scope.projects.indexOf(project), 1)
				$scope.projects.push(res.data)	
			}
		})
	}

		$scope.logout = function () {
			loginService.logout()
		}

})