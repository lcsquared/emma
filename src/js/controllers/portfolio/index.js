'use strict';

var angular = require('angular');
var animate = require('angular-animate');

require('./../../../css/agency.scss');
// require('./../../../css/animate.css');
// require('./../../../css/BootSideMenu.css');
require('./../../../css/style.scss');


angular.module('portfolio', [animate]).controller('PortfolioController', require('./portfolio.js'))
.run(function ($anchorScroll, $window) {
  var wWidth = $(window).width(); // get the width of the window
  var topoffset = 0;
  if (wWidth < 768) {
    topoffset = 56;
  } else if (wWidth >= 768 & wWidth <= 991) {
    topoffset = 135;
  } else {
    // when window width is greater than 992
    topoffset = 85;
  }
  $anchorScroll.yOffset = topoffset-2;
})
.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function($scope, element, attrs) {
      $scope.scrollTo = function(id) {
        $anchorScroll(id);
      }
    }
  }
})
.directive('scrollFade', function($window) {
  return {
    scope: false,
    link: function($scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 100) {
          $scope.changeBackground = true;
         } else {
           $scope.changeBackground = false;
         }
        $scope.$apply();
      })
    }
  }
});

module.exports = 'portfolio';
