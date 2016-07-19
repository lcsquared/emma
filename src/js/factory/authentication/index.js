'use strict';

var angular = require('angular');

angular.module('myApp').factory('Authentication', ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject',

  function($rootScope, $location, $firebaseAuth, $firebaseObject) {

    var rootRef = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
      if (authUser) {
        $rootScope.currentUser = firebase.app().auth().currentUser;
      } else {
        $rootScope.currentUser = '';
      }
    });

    var myObject = {
      login: function(user) {
        auth.$signInWithEmailAndPassword(user.email,user.password)
        .then(function(regUser) {
          $location.path('/admin');
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
