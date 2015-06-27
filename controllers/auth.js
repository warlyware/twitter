twatter.controller('AuthCtrl', function($scope, $rootScope, $firebaseAuth, $firebaseObject, $location, Auth, AuthService){
  console.log('loaded AuthCtrl');

  $scope.registerUser = function() {
    AuthService.register($scope.reg.username, $scope.reg.email, $scope.reg.password);
  }

  $scope.loginUser = function() {
    AuthService.login($scope.login.email, $scope.login.password);
  }

  $scope.logoutUser = function() {
    AuthService.logout();
  }

});