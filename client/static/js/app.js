//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/view1.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})//ends config


myApp.controller('friendController', function ($scope, friendFactory) { 
	//3 create scope for array 
	$scope.friends = [];
	//3 get data from factory
	friendFactory.getFriends(function (data){
		$scope.friends = data;
		console.log('aa');
	})

	//2a ng-click add
	$scope.addFriend = function () {				
		console.log('con addFriend',$scope.newFriend);

		//6 use factory method, if new customer name is unique
		if(!friendFactory.checkFriend($scope.newFriend.name)){
			console.log('2');
			//$('.error').addClass('hide');					
			//6 passing object to factory
			friendFactory.addFriend($scope.newFriend);
			$('.error').addClass('hide');
		} else {
			$('.error').removeClass('hide');
		}
		//clear form values by giving it an empty object
		$scope.newFriend = {};
	}

	//5c ng-click delete
	$scope.removeFriend = function (friend) {
		// $scope.heros.splice($index, 1);
		//  indexOf() calculates the index of the item whose value matches what we pass it.  Look it up!
		$scope.friends.splice($scope.friends.indexOf(friend), 1);
	}

}); //ends controller

//5b add factory to provide data to controller
myApp.factory('friendFactory', function ($http, $location) {
	//3 factory is a function that returns an object literal
	//7 add some data
	var friends = [
				// {name:'batman'}, 
				// {name:'superman'},
				// {name:'ironman'}, 
				// {name:'hulk'} 
	];

	var factory = {};

	//3 create getHeros method to a callback 
	factory.getFriends = function (callback) {
		console.log('here in factory');
		//ask nodejs route
		$http.get('/friends').success(function(output) {
			console.log('http');
			friends = output;
			//pass the heros object to callback
			callback(friends);
			console.log(friends);
		})
	}

	factory.addFriend = function(info) {
		//console.log('fac addFriend', info);
		//test local
		// friends.push({
		// 	name: info.name,
		// 	created: Date.now()
		// })
		$http.post('/addfriend', info).success(function(output) {
			//friends.push({name:info.name})
			console.log('baby added friend', info);
			//reload the page to fresh the data
			$location.path('#/');
		})
	}	

	//6 check array to see if customer name exists
	factory.checkFriend = function(newFriendName) {
		console.log('fac checkFriend', newFriendName);
		for (var i = 0; i < friends.length; i++) {
			console.log('1');
			if (friends[i].name == newFriendName) {
				return true;
			}
		}
		return false;
	}

	return factory
}) //ends factory