'use strict';

var angular = require('angular');

require('./../../../css/agency.scss');
// require('./../../../css/animate.css');
// require('./../../../css/BootSideMenu.css');
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

      // var topoffset = $('nav#mainNav').outerHeight(true);
      // var idToScroll = attrs.href;
      // element.on('click', function() {
      //   var $target;
      //   if (idToScroll) {
      //     $target = $(idToScroll);
      //   } else {
      //     $target = element;
      //   }
      //   $("body").animate({scrollTop: $target.offset().top-topoffset+2}, "slow");
      // });


    }
  }
})

module.exports = 'portfolio';
