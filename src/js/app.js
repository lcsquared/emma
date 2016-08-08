var angular = require('angular');
var ngRoute = require('angular-route');
var firebase = require('firebase');
var angularfire = require('angularfire');
var animate = require('angular-animate');

require('./../js/myscript.js');
var auth = require('./factory/authentication');
var dbConnect = require('./factory/dbConnect');
var portfolio = require('./controllers/portfolio');
var registration = require('./controllers/registration');
var admin = require('./controllers/admin');
//require('./config');

angular.module('myApp', [animate, 'ngRoute', 'firebase', auth, dbConnect, portfolio, registration, admin])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $routeProvider.
 when('/', {
   templateUrl: '/views/portfolio.html',
   controller: 'PortfolioController',
   resolve: {
     portfolio: function(dbConnect){
       return dbConnect.getData("portfolio");
     }
   }
 }).
 when('/admin-login', {
   templateUrl: '/views/login.html',
   controller: 'RegistrationController'
 }).
 when('/admin', {
   templateUrl: '/views/admin.html',
   controller: 'AdminController',
   resolve: {
     currentAuth: function(Authentication) {
         return Authentication.requireAuth();
       }, //prevent unauthorized access
       portfolio: function(dbConnect){
         return dbConnect.getData("portfolio");
       }
   }
 }).
 otherwise({
   redirectTo: '/'
 });

 if(window.history && window.history.pushState){
   $locationProvider.html5Mode(true);
 }

}])
.run(["$rootScope", "$location", function($rootScope, $location) {
 $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
   // We can catch the error thrown when the $requireSignIn promise is rejected
   // and redirect the user back to the home page
   if (error === "AUTH_REQUIRED") {
     $location.path("/");
   }
 });
}]);;;

var config = {
  apiKey: "AIzaSyAj_o4s49Aowy7v4oUg0FTEme52ik306l4",
  authDomain: "emma-97b41.firebaseapp.com",
  databaseURL: "https://emma-97b41.firebaseio.com",
  storageBucket: "gs://emma-97b41.appspot.com",
};
firebase.initializeApp(config);

module.exports = 'myApp';
