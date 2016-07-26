var angular = require('angular');
var ngRoute = require('angular-route');
var firebase = require('firebase');
var angularfire = require('angularfire');

angular.module('myApp', ['ngRoute', 'firebase']);

require('./../css/agency.scss');

require('./factory/authentication');
require('./factory/dbConnect');
require('./controllers/admin');
require('./controllers/portfolio');
require('./controllers/registration');
require('./config');

var config = {
  apiKey: "AIzaSyAj_o4s49Aowy7v4oUg0FTEme52ik306l4",
  authDomain: "emma-97b41.firebaseapp.com",
  databaseURL: "https://emma-97b41.firebaseio.com",
  storageBucket: "gs://emma-97b41.appspot.com",
};
firebase.initializeApp(config);
