PortfolioController.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray']

function PortfolioController($scope, $rootScope, $firebaseAuth, $firebaseArray){
	var meetingsRef = firebase.database.ref('users/'+ $rootScope.currentUser.$id + '/meetings');
	// an array of arrays in the database
	var meetingsInfo = $firebaseArray(meetingsRef);
	$scope.meetings = meetingsInfo;

	meetingsInfo.$loaded().then(function(data){
		$rootScope.howManyMeetings = meetingsInfo.length;
	});

	meetingsInfo.$watch(function(data){
		$rootScope.howManyMeetings = meetingsInfo.length;
	});

	$scope.addMeeting = function(){
		meetingsInfo.$add({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function(){
			$scope.meetingname = '';
		})
	};
};

module.exports = PortfolioController;
