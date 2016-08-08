PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseObject', 'dbConnect', 'portfolio', '$http'];

function PortfolioController($scope, $rootScope, $firebaseObject, dbConnect, portfolio, $http){

  // Action when nav is clicked
  // $scope.scrollTo = function(scrollLocation) {
  // 	$location.hash(scrollLocation);
  	
  // 	var topoffset = $('nav#mainNav').outerHeight(true);
  // 	$anchorScroll.yOffset = topoffset;
  	
  	// var newHash = 'anchor';
  	// if ($location.hash() !== newHash) {
  	// 	$location.hash('anchor');
  	// } else {
  		// $anchorScroll();
  	// }
  // };

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
	// Get the availability hashes

	$scope.submitContact = function() {
		var data = {
			 "name": $scope.contactName,
			 "email": $scope.contactEmail,
			 "phone": $scope.contactPhone,
			 "message": $scope.contactMessage
		};
		$http.post('/contact', data).then(
			function(){
				$scope.contactSuccess = true;
				setTimeout(function(){ $scope.contactSuccess = false; }, 15000);
			}, function() {
				$scope.contactError = true;
				setTimeout(function(){ $scope.contactError = false; }, 15000);
			}
		);
	}

	var availability = $scope.portfolio.availability

	// Create an object with all of the available hours as key value

	var avail = {};

	for (var k in availability){
		var currentDay = availability[k];
		var hours = []
		for (var i=0; i<currentDay.length; i++){
			if (currentDay[i] === 1) {
				hours.push(i)
			}
		}
		var availStr = getAvail(hours)
		avail[k] = availStr;
	}

	function getAvail(list){
		var hours = list;
		var string = "";
		var sub = "";
		for (var i=0; i<hours.length; i++){

		  if (i===0){
				if(hours[i+1]-hours[i]>1){
					sub = hours[i] + ",";
				} else {
					sub = hours[i];
				}
				string += sub;
		  } else if (i===(hours.length-1)){
		    string += hours[i];
		  } else if (hours[i]-hours[i-1]===1 && hours[i+1]-hours[i]===1 && string.substr(string.length-1)!=="-"){
		    string += "-";
		  } else if (hours[i]-hours[i-1]===1 && hours[i+1]-hours[i]>1){
				if (string.substr(string.length-1)!=="-"){
					sub = "-" + hours[i] + ",";
				} else {
					sub =  hours[i] + ",";
				}
		    string += sub;
		  } else if (hours[i]-hours[i-1]>1 && hours[i+1]-hours[i]===1) {
		    sub = hours[i] + "-";
		    string += sub;
		  } else if (hours[i]-hours[i-1]>1 && hours[i+1]-hours[i]>1) {
				if (string.substr(string.length-1)!==","){
					sub =  "," + hours[i] +",";
				} else {
					sub = hours[i] + ",";
				}
		    string += sub;
		  }
		}
		return string;
	}

	$scope.availability = avail;
}


module.exports = PortfolioController;
