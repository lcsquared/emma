'use strict';

var angular = require('angular');

angular.module('myApp').factory('Authentication', ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject',

  function($rootScope, $location, $firebaseAuth, $firebaseObject) {

    var config = {
      apiKey: "AIzaSyAj_o4s49Aowy7v4oUg0FTEme52ik306l4",
      authDomain: "emma-97b41.firebaseapp.com",
      databaseURL: "https://emma-97b41.firebaseio.com",
      storageBucket: "",
    };
    firebase.initializeApp(config);
    var rootRef = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
      if (authUser) {
        var userRef = firebase.database().ref('users/' + authUser.uid);
        var userObj = $firebaseObject(userRef);
        $rootScope.currentUser = userObj;
      } else {
        $rootScope.currentUser = '';
      }
    });

    var myObject = {
      login: function(user) {
        auth.$signInWithEmailAndPassword(user.email,user.password)
        .then(function(regUser) {
          $location.path('/');
        }).catch(function(error) {
          $rootScope.message = error.message;
        });
      },
      logout: function() {
        $location.path('/');
        return auth.$signOut();
      },
      requireAuth: function() {
        return auth.$requireSignIn();
      },
      register: function(user) {
        auth.$createUserWithEmailAndPassword({
          email: user.email,
          password: user.password
        }).then(function(regUser) {
          var regRef = firebase.database().ref('users')
            .child(regUser.uid).set({
              date: Firebase.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            });
          myObject.login(user);
        }).catch(function(error) {
          $rootScope.message = error.message
        });
      }
    }
    return myObject
  }
])
