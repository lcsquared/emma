PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseObject', 'dbConnect', 'portfolio'];

function PortfolioController($scope, $rootScope, $firebaseObject, dbConnect, portfolio){

	$scope.portfolio = portfolio;
	
}

module.exports = PortfolioController;
