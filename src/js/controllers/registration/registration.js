RegistrationController.$inject = ['$scope', 'Authentication'];

function RegistrationController($scope, Authentication) {

  $scope.login = function() {
    Authentication.login($scope.user);
  };

  $scope.logout = function() {
    Authentication.logout();
  }

  $scope.register = function() {
    Authentication.register($scope.user);
  };
}

module.exports = RegistrationController;
