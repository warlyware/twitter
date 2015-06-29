twatter.controller('MainCtrl', function($scope, $rootScope, $firebaseObject, $firebaseArray, Auth,
  AuthService, $location, currentAuth) {

  // $scope.logoutUser = function() {
  //   AuthService.logout();
  // }

  console.log('loaded MainCtrl', currentAuth);
  // console.log('logged in: ' + $rootScope.authData.uid);
  var tweetsRef = new Firebase('https://twatter-sandwich.firebaseio.com/TWEETS');
  var usersRef = new Firebase('https://twatter-sandwich.firebaseio.com/USERS');

  // download the data into a local object
  var tweetsArray = $firebaseArray(tweetsRef);
  var usersObj = $firebaseObject(usersRef);
  $scope.tweets = tweetsArray;
  $scope.currentTweet = '';

  $scope.submitTweet = function(currentTweet, user) {
    console.log(currentTweet, user);
      $scope.tweets.$add({
        userID: user.$id,
        username: user.username,
        userimg: user.img,
        content: currentTweet,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });
      $scope.currentTweet = '';
  }

  $scope.followUser = function(index) {
    // console.log(index);
    // var length = $scope.tweets.length - 1; // Get array length
    // var idx = length - index; // Get proper index by subtracting $index from length
    // var userToFollow = usersRef.child(tweetsArray[idx]);
    // var userToFollowObj = $firebaseObject(userToFollow);
    // console.log(userToFollowObj);
    // userToFollow.update({
    //   follow: $scope.tweets[idx].userID
    // });
    // console.log(usersObj[$scope.tweets[idx].userID].following);
  }

});