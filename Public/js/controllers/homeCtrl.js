var app = angular.module('group');


app.controller('homeCtrl', function ($scope, $log, $location, getRandomProjects, isLoggedIn, loginService, registerService, projectService, dashboardLink) {
  console.log(isLoggedIn)
  $scope.loggedIn = isLoggedIn;
  $scope.dashboardLink = dashboardLink;


  $scope.logout = function() {
    loginService.logout()
  };

  $scope.go = function () {
    $location.path('/register');
  };

  $(".fa-question-circle").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-wrapper").offset().top
    }, 1500);
  });

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

});

