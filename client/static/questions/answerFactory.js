
//5b add factory to provide data to controller
myApp.factory('answerFactory', function ($http, $location, $routeParams) {
	//3 factory is a function that returns an object literal
	//7 add some data
	// var answers = [
	// 			// {name:'batman'}, 
	// 			// {name:'superman'},
	// 			// {name:'ironman'}, 
	// 			// {name:'hulk'} 
	// ];
	var thisQuestion = $routeParams.id;
	//var thisanswerid = '55f62b5c90a2f1e34f3111fd';

	var factory = {};

	factory.addAnswer = function(info, callback) {
		//console.log('fac addQuestion', info);
		//test local
		// questions.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addanswer', info).success(function(output) {
			//questions.push({name:info.name})
			callback(output);
			
			//reload the page to fresh the data
			// $location.path('showQuestions');
			$location.path('showQuestion/'+thisQuestion);
		});
	}

	factory.like = function (answer, callback) {
		console.log('liking in factory', answer);
		$http.post('/likeanswer', answer).success(function (output) {
			callback(output);
		});
	}

	// factory.getThisAnswer = function (callback) {
	// 	console.log('factory.getThisAnswer22');
	// 	$http.get('/getanswer/'+thisanswerid).success(function(output){
	// 		callback(output);
	// 	});
	// }



	return factory;
}) //ends factory