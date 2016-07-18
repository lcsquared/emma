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

			$scope.saveChanges = function(){
				obj.name = $scope.portfolio.name;
				obj.$save().then(function(ref){
					ref.key === obj.$id;
				}, function(error){
					console.log("Error:", error);
				});
			};

			$scope.currentTab = 1;

			$scope.changeTab = function(num){
				$scope.currentTab = num;
			};
		}
	});
}

module.exports = AdminController;
