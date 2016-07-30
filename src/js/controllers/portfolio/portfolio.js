PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseObject', 'dbConnect', 'portfolio'];

function PortfolioController($scope, $rootScope, $firebaseObject, dbConnect, portfolio){

	// Connect the resolve portfolio to scope
	$scope.portfolio = portfolio;

	$scope.currentTestimonial = 0;

	$scope.changeTestimonial = function(num){
		$scope.currentTestimonial = num;
		console.log($scope.testimonialContent)
	};

	$scope.testimonialContent = portfolio.testimonial[$scope.currentTestimonial].contents
	$scope.testimonialName = portfolio.testimonial[$scope.currentTestimonial].name
	$scope.testimonialCompany = portfolio.testimonial[$scope.currentTestimonial].company
	$scope.testimonialTitle = portfolio.testimonial[$scope.currentTestimonial].title

	// $scope.$watch('currentTestimonial', function() {
	// 	$scope.testimonialContent = portfolio.testimonial[$scope.currentTestimonial].contents;
	// 	$scope.testimonialName = portfolio.testimonial[$scope.currentTestimonial].name;
	// 	$scope.testimonialCompany = portfolio.testimonial[$scope.currentTestimonial].company
	// 	$scope.testimonialTitle = portfolio.testimonial[$scope.currentTestimonial].title
	// });

}

module.exports = PortfolioController;
