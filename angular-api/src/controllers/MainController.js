app.controller('MainController', ['$scope', 'api', function($scope, api) {
    api.success(function(data) {
      $scope.food = data;
    });
  }]);
  