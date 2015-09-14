myApp.controller('answerController', function ($scope, $routeParams, questionFactory, userFactory, answerFactory) { 
 console.log('thisquestionController $routeParams.id req',$routeParams.id);

	//3 create scope for array 
	//$scope.questions = [];
	var thisQuestion = $routeParams.id;

	//3 get data from factory
	questionFactory.getThisQuestion(thisQuestion, function (data) {
		console.log('questionFactory.getThisQuestion',thisQuestion);
		//give $scope the data in the response
		$scope.oneQuestion = data;
		console.log('questionFactory.getThisQuestion res',data);
	});

	userFactory.getThisUser(function (data) {
		$scope.currUser = data;
		console.log('con userFactory.getThisUser', data)
	})

	//2a ng-click add
	$scope.addAnswer = function (newAnswer) {				
		console.log('con addAnswer',$scope.newAnswer);

			var dataObj = {
				questionid: thisQuestion, 
				userid: $scope.currUser._id, 
				username: $scope.currUser.name, 
				answering: $scope.newAnswer.answering, 
				supporting: $scope.newAnswer.supporting
			};
			answerFactory.addAnswer(dataObj, function (data) {
				console.log('back after adding new answer');
				$scope.thisQ = data;
			});
			$scope.newAnswer = {};
	
	}

}); //ends controller