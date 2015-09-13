
//5b add factory to provide data to controller
myApp.factory('questionFactory', function ($http, $location) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var questions = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];

	var factory = {};

	factory.getThisQuestion = function(thisQuestion, callback) {
		console.log('factory.getThisQuestion', thisQuestion)
		$http({url:'/getquestion', method:'GET', params:{id:thisQuestion}}).success(function (output) {
			callback(output);
		});
	}

	//3 create getHeros method to a callback 
	factory.getQuestions = function (callback) {
		console.log('here in factory');
		//ask nodejs route
		$http.get('/getquestions').success(function(output) {
			console.log('factory.getQuestions http');
			questions = output;
			//pass the heros object to callback
			callback(questions);
			console.log('factory.getQuestions',questions);
		})
	}

	factory.addQuestion = function(info) {
		//console.log('fac addQuestion', info);
		//test local
		// questions.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addquestion', info).success(function(output) {
			//questions.push({name:info.name})
			console.log('baby added question', info);
			//reload the page to fresh the data
			$location.path('#/');
		})
	}	

	//6 check array to see if customer name exists
	factory.checkQuestion = function(newQuestionName) {
		console.log('fac checkQuestion', newQuestionName);
		for (var i = 0; i < questions.length; i++) {
			console.log('1');
			if (questions[i].name == newQuestionName) {
				return true;
			}
		}
		return false;
	}

	return factory
}) //ends factory