'use strict';

var twatter = angular.module('twatter', ['ngRoute', 'firebase'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: '/views/main.html'
    })
    .when('/login', {
      controller: 'AuthCtrl',
      templateUrl: '/views/login.html'
    })
    .when('/register', {
      controller: 'AuthCtrl',
      templateUrl: '/views/register.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.constant('FIREBASE_URL', 'https://twatter-sandwich.firebaseio.com/');