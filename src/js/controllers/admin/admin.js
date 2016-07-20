AdminController.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$firebaseObject'];

function AdminController($scope, $rootScope, $firebaseAuth, $firebaseObject){
	"use strict";

	var auth = $firebaseAuth();

	// these actions can only happen when someone is authenticated
	auth.$onAuthStateChanged(function(authUser){
		// if current user is authenticated
		if (authUser) {
			//create a new reference in the database called meetings
			var ref = firebase.database().ref("portfolio");
			var obj = $firebaseObject(ref);
			$scope.portfolio = obj;

			function saveChanges(obj){
				obj.$save().then(function(ref){
					ref.key === obj.$id;
				}, function(error){
					console.log("Error:", error);
				});
			}

			$scope.saveTab1 = function(){
				obj.name = $scope.portfolio.name;
				saveChanges(obj);
			};

			$scope.saveTab2 = function(){
				obj.testimonial = {
						0: {
	 						name: $scope.portfolio.testimonial[0].name,
	 						title: $scope.portfolio.testimonial[0].title,
	 						company: $scope.portfolio.testimonial[0].company,
	 						contents:$scope.portfolio.testimonial[0].contents
 						},
						1: {
	 						name: $scope.portfolio.testimonial[1].name,
	 						title: $scope.portfolio.testimonial[1].title,
	 						company: $scope.portfolio.testimonial[1].company,
	 						contents:$scope.portfolio.testimonial[1].contents
 						},
						2: {
	 						name: $scope.portfolio.testimonial[2].name,
	 						title: $scope.portfolio.testimonial[2].title,
	 						company: $scope.portfolio.testimonial[2].company,
	 						contents:$scope.portfolio.testimonial[2].contents
 						},
					};
				saveChanges(obj);
			};

			$scope.currentTab = 1;

			$scope.changeTab = function(num){
				$scope.currentTab = num;
			};
		}
	});
}

module.exports = AdminController;
