'use strict';

var angular = require('angular');

require('./../../../css/agency.scss');
// require('./../../../css/animate.css');
require('./../../../css/BootSideMenu.css');
require('./../../../css/style.css');

angular.module('portfolio', []).controller('PortfolioController', require('./portfolio.js')).directive('scrollFade', function($window) {
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
})

module.exports = 'portfolio';
