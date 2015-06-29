twatter.controller('AuthCheckCtrl', function($scope, $rootScope, $firebaseObject, Auth, AuthService, $location){
  Auth.$onAuth(function(authData) {
    if (authData) {
      console.log(authData);
      $scope.authData = authData;
      var userRef = new Firebase('https://twatter-sandwich.firebaseio.com/USERS/' + authData.uid);      
      var userObj = $firebaseObject(userRef);
      userObj.$bindTo($rootScope, 'currentUser');
    } else {
      // $location.path('/login');
    }
  });

  $scope.logoutUser = function() {
    $rootScope.currentUser = null;
    console.log(AuthService.resolveUser());
    $location.path('/');
    Auth.$unauth();
  }
});