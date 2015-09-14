//MVC1a for routes
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

//MVC2h moved to model

//MVC2c for controller
var questions = require('../controllers/questions.js');
var users = require('../controllers/users.js');
var answers = require('../controllers/answers.js');


//start MVC1d export
module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		console.log('home page loaded');
	})

	//route to display data from db
	app.get('/getquestions', function (req, res) {
		//hard-coded json data
		// res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		questions.getquestions(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})



	//route to add data to db
	app.post('/addanswer', function (req, res) {
		//console.log('rou addanswer req', req.body)
		answers.addanswer(req,res)
	})

	//route to add data to db
	app.post('/addquestion', function (req, res) {
		//console.log('rou addquestion', req.body)
		questions.addquestion(req,res)
	})
	//route login
	app.post('/login', function (req, res) {
		//console.log('rou login', req.body)
		users.login(req, res)
	})

	//route to add data to db
	app.get('/getquestion', function (req, res) {
		//console.log('rou getquestion', res.body)
		questions.getOneQuestion(req,res)
	})

	//route to add data to db
	app.post('/likeanswer', function (req, res) {
		//console.log('rou addlike req', req.body)
		answers.likeanswer(req,res)
	})

	//route to add data to db
	app.get('/getanswer/:id', function (req, res) {
		console.log('rou getOneanswer11', req.body)
		answers.getOneAnswer(req,res)
	})


	//ends routes

}//ends MVC export
