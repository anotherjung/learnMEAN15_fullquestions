myApp.factory('userFactory', function ($http) {
	var factory = {};
	var currentUser;

	factory.login = function (user, callback) {
		console.log('factory.login',user);

		var dataObj = {name: user};

		$http.post('/login', dataObj).success(function (output) {
			currentUser = output;
			callback(output);
			console.log(output);
		})
	}

	factory.getThisUser = function(callback) {
		callback(currentUser);
		console.log('userfactory getThisUser',currentUser);
	}

	return factory;
})