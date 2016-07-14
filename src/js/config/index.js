angular.module('myApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/views/portfolio.html',
    controller: 'RegistrationController'
  }).
  when('/login', {
    templateUrl: '/views/login.html',
    controller: 'RegistrationController'
  }).
  when('/meetings', {
    templateUrl: '/views/meetings.html',
    controller: 'MeetingsController',
    resolve: {
      currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //prevent unauthorized access
    }
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
