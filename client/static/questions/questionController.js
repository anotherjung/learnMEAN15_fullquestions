myApp.controller('questionController', function ($scope, questionFactory, userFactory) { 
	//3 create scope for array 
	$scope.questions = [];
	//3 get data from factory
	questionFactory.getQuestions(function (data){
		$scope.questions = data;
		console.log('questionFactory.getQuestions', data);
	})

	//2a ng-click add
	$scope.addQuestion = function () {				
		console.log('con addQuestion',$scope.newQuestion);

		//6 use factory method, if new customer name is unique
		if(!questionFactory.checkQuestion($scope.newQuestion.name)){
			console.log('2');
			//$('.error').addClass('hide');					
			//6 passing object to factory
			questionFactory.addQuestion($scope.newQuestion);
			$('.error').addClass('hide');
		} else {
			$('.error').removeClass('hide');
		}
		//clear form values by giving it an empty object
		$scope.newQuestion = {};
	}

	//5c ng-click delete
	$scope.removeQuestion = function (question) {
		// $scope.heros.splice($index, 1);
		//  indexOf() calculates the index of the item whose value matches what we pass it.  Look it up!
		$scope.questions.splice($scope.questions.indexOf(question), 1);
	}

}); //ends controller