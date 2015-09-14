myApp.controller('thisquestionController', function ($scope, $routeParams, questionFactory, userFactory, answerFactory) { 
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

	$scope.like = function(answer) {
		answerFactory.like(answer);
		// answerFactory.getThisAnswer(answer, function(data){
		// 	$scope.oneQuestion = data;
		// 	console.log('like',data);			
		// })

	}


}); //ends controller