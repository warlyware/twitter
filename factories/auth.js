twatter.factory('Auth', function($firebaseAuth) {
  var ref = new Firebase('https://twatter-sandwich.firebaseio.com/');
  return $firebaseAuth(ref);
});