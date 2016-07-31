PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseObject', 'dbConnect', 'portfolio'];

function PortfolioController($scope, $rootScope, $firebaseObject, dbConnect, portfolio){

	// Connect the resolve portfolio to scope
	$scope.portfolio = portfolio;

	$scope.currentTestimonial = portfolio.testimonial[0];

	$scope.changeTestimonial = function(num){
		$scope.currentTestimonial = portfolio.testimonial[num];
	};

// Control the status of the services dropdown

	$scope.serviceOpen = false;
	$scope.serviceDefault = true;
	$scope.selectService = function(num) {
		if ($scope.serviceDefault === true || $scope.serviceOpen === false || $scope.currentService===num){
			$scope.serviceOpen = $scope.serviceOpen === false ? true: false;
			if ($scope.serviceOpen === false) {
				$scope.serviceDefault = true;
			}
			$scope.serviceDefault = false;
		}
		$scope.currentService = num;
	}

}

module.exports = PortfolioController;
