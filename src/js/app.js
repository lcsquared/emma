var angular = require('angular');
var ngRoute = require('angular-route');
var firebase = require('firebase');
var angularfire = require('angularfire');

angular.module('myApp', ['ngRoute', 'firebase']);

require('jquery');
// require('bootstrap');

// require("font-awesome-webpack");
// require('../node_modules/font-awesome/fonts');
// require('../node_modules/font-awesome/scss');

require('./../css/agency.scss');

require('./factory/authentication')
require('./controllers/admin');
require('./controllers/portfolio');
require('./controllers/registration');
require('./config')

// myApp.run(['$rootScope', '$location', function($rootScope, $location) {
//   $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
//     if (error == "AUTH_REQUIRED") {
//       $rootScope.message = 'Sorry, you must log in to access that page';
//       $location.path('/login');
//     }
//   })
// }])
//
