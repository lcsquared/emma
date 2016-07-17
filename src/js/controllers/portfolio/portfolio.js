PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseObject']

function PortfolioController($scope, $rootScope, $firebaseObject){
	var ref = firebase.database().ref("portfolio");
	var obj = $firebaseObject(ref);
	obj.$bindTo($scope, "portfolio").then(function(){
		console.log($scope.portfolio);
	})
	// meetingsInfo.$loaded().then(function(data){
	// 	$rootScope.howManyMeetings = meetingsInfo.length;
	// });
	//
	// meetingsInfo.$watch(function(data){
	// 	$rootScope.howManyMeetings = meetingsInfo.length;
	// });

	// $scope.addMeeting = function(){
	// 	meetingsInfo.$add({
	// 		name: $scope.meetingname,
	// 		date: Firebase.ServerValue.TIMESTAMP
	// 	}).then(function(){
	// 		$scope.meetingname = '';
	// 	})
	// };
};

module.exports = PortfolioController;
