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
				$scope.getProjects();
				$scope.showSpinner = false;
			})
			})
		}
	
	$scope.submitVote = function(project) {
		var projectNoImg = {
			_id: project._id,
			votes: project.votes
		}
		var updatedProject = {
			_v: project._v,
			_id: project._id,
			img: project.img,
			projectName: project.projectName,
			url: project.url,
			user: project.user,
			votes: project.votes += 1
		}
		$scope.projects.splice($scope.projects.indexOf(project), 1)
		$scope.projects.push(updatedProject)
		projectService.submitVote(projectNoImg).then(function(res) {
		})
	}

		$scope.logout = function () {
			loginService.logout()
		}

})