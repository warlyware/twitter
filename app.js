'use strict';

var twatter = angular.module('twatter', ['ngRoute', 'firebase'])
.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    controller: "AuthCtrl",
    templateUrl: "views/login.html",
    resolve: {
      // controller will not be loaded until $waitForAuth resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": ["Auth", function(Auth) {
        // $waitForAuth returns a promise so the resolve waits for it to complete
        return Auth.$waitForAuth();
      }]
    }
  })
  .when("/", {
    controller: "MainCtrl",
    templateUrl: "views/main.html",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        // $requireAuth returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return Auth.$requireAuth();
      }]
    }
  })
  .otherwise({
    redirectTo: '/'
  });
  
})
.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}])
.constant('FIREBASE_URL', 'https://twatter-sandwich.firebaseio.com/');