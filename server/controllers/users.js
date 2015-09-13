// //MVC2a controllers
var mongoose = require('mongoose');
var User = mongoose.model('User');


//MVC2b export
module.exports = (function () {
	return {

		login: function (req, res) {
			console.log('at users controller');
			console.log(req.body);
			User.findOne({name: req.body.name}, function (err, gotOne) {
				if(gotOne) {
					console.log('existing user found');
					console.log(gotOne);
					res.json(gotOne);
				} else {
					var u = new User({name: req.body.name});
					u.save(function (err, result) {
						if(err) {
							console.log(err);
						} else {
							res.json(result);
							console.log('this is the result');
							console.log(result);
						}
					})
				}
			})
		}

	}
})();