var app = angular.module('group');

app.controller('homeCtrl', function ($scope, $log, $location, getRandomProjects) {
  $scope.randomProjects = getRandomProjects;
  // $scope.topProjects = getTopProjects;

  console.log($scope.randomProjects)
//menu dropdown in index.hmtl js
  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };



  // $scope.getRandomProjects = function() {
  //  projectService.getRandomProjects().then(function(res) {
  //    console.log("Random Project: ")
  //    console.log(res.data);
  //    $scope.randomProjects = res.data;
  //  })
  // }
  // $scope.getRandomProjects();

})