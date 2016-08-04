'use strict';

var angular = require('angular');

angular.module('dbConnect', []).factory('dbConnect', ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject',

  function($rootScope, $location, $firebaseAuth, $firebaseObject) {

    var myObject = {
      getData: function(section){
        var ref = firebase.database().ref(section);
        var obj =  $firebaseObject(ref);
        return obj.$loaded()
          .then(function(data){
            return data;
          })
          .catch(function(error){
            console.log("Error:", error);
          });
      }
    };
    return myObject;
  }
]);

module.exports = 'dbConnect';
