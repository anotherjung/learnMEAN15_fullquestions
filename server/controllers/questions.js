// //MVC2a controllers
var mongoose = require('mongoose');
var question = mongoose.model('Question');

//MVC2b export
module.exports =  {
	getquestions: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC model
		question.find({}, function(err, results) {
	       if(err) {
	         console.log('err con show', err);
	       } else {
	         res.json(results);
	         //console.log('con show', results)
	       }
		})
	},

	addquestion: function(req, res) {
		console.log('con addquestion', req.body);
		var questions = new question({name:req.body.name, context: req.body.context, created:Date.now()});
		questions.save(function(err) {
			// console.log('11');
			if(err) {
				console.log("err con create", err);
			} else {
				res.redirect('/');
			}
		})
	},

	getOneQuestion: function (req, res) {
		//console.log('11questions.js getOneQuestion req.query.id', req.query.id);
		
		question.findOne({_id:req.query.id})
		.populate('answers')
		.exec(function (err, allAnswers) {
			if(err) {
				console.log(err);
			} else {
				res.json(allAnswers);
			}
		})
	}	


}//ends module.exports