var app = angular.module('group');

app.controller('homeCtrl', function($scope, $log, $location, projectService) {

  $scope.go = function () {
    $location.path('/register');
  };

  $(".fa-question-circle").click(function() {
    $('html, body').animate({
        scrollTop: $("#main-wrapper").offset().top
    }, 1500);
  });


  // $scope.getRandomProject = function() {
  //   projectService.getProjects().then(function(res) {
  //     console.log("this is res.data from homeCtrl")
  //     console.log(res.data)

  //     };

  //    $scope.randomProject = res.data;
  //  })
  // }
  // $scope.getRandomProject();
});