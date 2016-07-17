AdminController.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray']

function AdminController($scope, $rootScope, $firebaseAuth, $firebaseArray){
		var auth = $firebaseAuth();

		// these actions can only happen when someone is authenticated
		auth.$onAuthStateChanged(function(authUser){
			// if current user is authenticated
			if (authUser) {
				//create a new reference in the database called meetings
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

				$scope.deleteMeeting = function(key){
					meetingsInfo.$remove(key);
				}
			};
		});
}

module.exports = AdminController;
