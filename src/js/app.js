var angular = require('angular');
var ngRoute = require('angular-route');
var firebase = require('firebase');
var angularfire = require('angularfire');

angular.module('myApp', ['ngRoute', 'firebase']);

require('./lib/jquery.easing.min.js');
require('./lib/agency.js');
require('./../css/agency.scss');
require('./factory/authentication');
require('./controllers/admin');
require('./controllers/portfolio');
require('./controllers/registration');
require('./config');

var config = {
  apiKey: "AIzaSyAj_o4s49Aowy7v4oUg0FTEme52ik306l4",
  authDomain: "emma-97b41.firebaseapp.com",
  databaseURL: "https://emma-97b41.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

// myApp.run(['$rootScope', '$location', function($rootScope, $location) {
//   $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
//     if (error == "AUTH_REQUIRED") {
//       $rootScope.message = 'Sorry, you must log in to access that page';
//       $location.path('/login');
//     }
//   })
// }])
//
