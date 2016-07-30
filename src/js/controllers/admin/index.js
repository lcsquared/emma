'use strict';
require('./../../../css/admin.scss');

var angular = require('angular');

angular.module('admin', []).controller('AdminController', require('./admin.js'));

module.exports = 'admin';
