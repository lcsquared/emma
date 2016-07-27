var myApp = require('./../app.js')

angular.module(myApp).run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/");
    }
  });
}]);


angular.module(myApp).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/views/portfolio.html',
    controller: 'PortfolioController',
    resolve: {
      portfolio: function(dbConnect){
        return dbConnect.getData("portfolio");
      }
    }
  }).
  when('/admin-login', {
    templateUrl: '/views/login.html',
    controller: 'RegistrationController'
  }).
  when('/admin', {
    templateUrl: '/views/admin.html',
    controller: 'AdminController',
    resolve: {
      currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //prevent unauthorized access
    }
  }).
  otherwise({
    redirectTo: '/'
  });

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }

}]);
