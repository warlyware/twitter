twatter.controller('MainCtrl', function($scope, $rootScope, $firebaseObject, Auth, AuthService, $location){

  $scope.logoutUser = function() {
    AuthService.logout();
  }

  console.log('loaded MainCtrl');
  // console.log('logged in: ' + $rootScope.authData.uid);
  var tweetsRef = new Firebase('https://twatter-sandwich.firebaseio.com/TWEETS');

  // download the data into a local object
  var tweetsObj = $firebaseObject(tweetsRef);
  tweetsObj.$bindTo($scope, 'tweets');

});