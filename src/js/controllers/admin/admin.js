AdminController.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$firebaseObject', 'Upload'];

function AdminController($scope, $rootScope, $firebaseAuth, $firebaseObject, Upload){
	"use strict";
	var storage = firebase.storage()
	var storageRef = storage.ref();

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
					$scope.saveSuccess = true;
					setTimeout(function(){ $scope.saveSuccess = false; }, 5000);
					ref.key === obj.$id;
				}, function(error){
					$scope.saveError = true;
					setTimeout(function(){ $scope.saveError = false; }, 5000);
				});
			}

			$scope.mondayClick = function(num){
				$scope.portfolio.availability.mon[num] = ($scope.portfolio.availability.mon[num] === 0) ? 1 : 0
			}

			$scope.tuesdayClick = function(num){
				$scope.portfolio.availability.tue[num] = ($scope.portfolio.availability.tue[num] === 0) ? 1 : 0
			}

			$scope.wednesdayClick = function(num){
				$scope.portfolio.availability.wed[num] = ($scope.portfolio.availability.wed[num] === 0) ? 1 : 0
			}

			$scope.thursdayClick = function(num){
				$scope.portfolio.availability.thu[num] = ($scope.portfolio.availability.thu[num] === 0) ? 1 : 0
			}

			$scope.fridayClick = function(num){
				$scope.portfolio.availability.fri[num] = ($scope.portfolio.availability.fri[num] === 0) ? 1 : 0
			}

			$scope.saturdayClick = function(num){
				$scope.portfolio.availability.sat[num] = ($scope.portfolio.availability.sat[num] === 0) ? 1 : 0
			}

			$scope.sundayClick = function(num){
				$scope.portfolio.availability.sun[num] = ($scope.portfolio.availability.sun[num] === 0) ? 1 : 0
			}

			$scope.saveTab1 = function(){
				obj.availability = $scope.portfolio.availability;
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

			$scope.saveTab3 = function(){
				obj.about = {
 						name: $scope.portfolio.about.name,
 						title: $scope.portfolio.about.title,
 						bio: $scope.portfolio.about.bio,
					};
				saveChanges(obj);
			};

			$scope.currentUpload = null;
			var section;

			$scope.uploadImage = function(file, section, num=null) {
				$scope.currentUpload = num;
				section = section;
				if(file===undefined){
					$scope.noFileError = true;
					setTimeout(function(){ $scope.noFileError = false; }, 3000);
					return "err";
				}
				Upload.upload({
					url: '/admin/upload-image',
					method: 'POST',
					file: file,
					filename: file.name
				}).then(function(resp){
						if(section==="testimonial") {
							obj.testimonial[currentUpload].image = resp.data.filename
							$scope.uploadSuccess = {"current": currentUpload, "status": true};
							setTimeout(function(){ $scope.uploadSuccess.status = false; }, 5000);
						}
				}, function (resp) {
					$scope.uploadError = true;
					setTimeout(function(){ $scope.uploadError.status = false; }, 5000);
				}, function(evt) {
					var progressPercentage = parseInt(100.0 * evt.loaded/evt.total);
					console.log(progressPercentage +"%")
				});
			}

			$scope.currentTab = 1;

			$scope.changeTab = function(num){
				$scope.currentTab = num;
			};
		}
	});
}

module.exports = AdminController;
