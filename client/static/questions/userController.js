myApp.controller('userController', function ($scope, userFactory, $location) {

	var currentUser = prompt("What is your name?");
	console.log('currentUser',currentUser);

	userFactory.login(currentUser, function (data) {
		$scope.thisUser = data;
		console.log('serFactory.login', $scope.thisUser.name);
		$location.path('/showQuestions');
	})
})
