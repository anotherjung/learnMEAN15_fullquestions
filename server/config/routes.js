//MVC1a for routes
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
//MVC2h moved to model

//MVC2c for controller
var friends = require('../controllers/friends.js');

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
	})

	//route to display data from db
	app.get('/friends', function (req, res) {
		//hard-coded json data
		// res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		friends.getfriends(req,res)

		//MVC-test
		// Quote.find({}, function (err, quotes) {
		// 	res.render('main', {quotes:quotes});
		// });
	})
	//route to add data to db
	app.post('/addfriend', function (req, res) {
		console.log('rou addfriend', req.body)
		friends.addfriend(req,res)
	})

	//ends routes

}//ends MVC export




