twatter.service('AuthService', function(Auth, $location, $firebaseObject) {

  this.login = function(email, password) {
    console.log(email, password);
    Auth.$authWithPassword({
      email: email,
      password: password
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      $location.path('/main');
    });
  }

  this.logout = function() {
    Auth.$unauth();
    $location.path('/login');
  }

  this.register = function(username, email, password) {
    Auth.$createUser({
      email: email,
      password: password
    })
    .then(function(userData) {
      console.log("User " + userData.uid + " created successfully!");
      var userRef = new Firebase('https://twatter-sandwich.firebaseio.com/USERS/' + userData.uid);      
      var userRefObj = $firebaseObject(userRef);
      userRef.set({
        username: username,
        name: userData.uid,
        email: email
      });
      return Auth.$authWithPassword({
        email: email,
        password: password
      });
    })
    .then(function(authData) {
      console.log("Logged in as:", authData);
      $location.path('/main');
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });
  }

});