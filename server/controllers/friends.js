// //MVC2a controllers
var mongoose = require('mongoose');
var friend = mongoose.model('Friend');

//MVC2b export
module.exports =  {
	getfriends: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC model
		friend.find({}, function(err, results) {
	       if(err) {
	         console.log('err con show', err);
	       } else {
	         res.json(results);
	         console.log('con show', results)
	       }
		})
	},

	addfriend: function(req, res) {
		console.log('con addfriend', req.body);
		var friends = new friend({name:req.body.name, created:Date.now()});
		friends.save(function(err) {
			// console.log('11');
			if(err) {
				console.log("err con create", err);
			} else {
				res.redirect('/');
			}
		})
	}
}