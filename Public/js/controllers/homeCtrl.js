var app = angular.module('group');

app.controller('homeCtrl', function($scope, $log) {
	
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
//----- end dropdown 
})