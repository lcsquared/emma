'use strict';
require('./../../../css/admin.scss');

var angular = require('angular');
var ngFileUpload = require('ng-file-upload');

angular.module('admin', ['ngFileUpload']).controller('AdminController', require('./admin.js'));

module.exports = 'admin';
