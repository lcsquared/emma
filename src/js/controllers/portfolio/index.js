'use strict';

var angular = require('angular');

require('./../../../css/agency.scss');
require('./../../../css/style.css');

angular.module('portfolio', []).controller('PortfolioController', require('./portfolio.js'));

module.exports = 'portfolio';
