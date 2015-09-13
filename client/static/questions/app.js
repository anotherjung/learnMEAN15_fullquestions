//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/view4.html'
	})
	.when('/showQuestions',{
		templateUrl: 'partials/view1.html'
	})
	.when('/addQuestion',{
		templateUrl: 'partials/view2.html'
	})
	.when('/showQuestion/:id?',{
		templateUrl: 'partials/view3.html'
	})	
	.when('/login',{
		templateUrl: 'partials/view4.html'
	})
	// .otherwise({
	// 	redirectTo: '/'
	// });
})//ends config

