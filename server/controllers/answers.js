// //MVC2a controllers
var mongoose = require('mongoose');
var question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var user = mongoose.model('User');

//MVC2b export
module.exports =  {

	addanswer: function(req, res) {
		console.log('con addanswer', req.body);
      var ans= new Answer(req.body);
      question.findOne({_id: req.body.questionid}, function(err, que){
          // data from form on the front end
          console.log('found question in db', que);
          var ans= new Answer(req.body);
          //  set the reference like this:
          ans.questionid = que._id;
          console.log('herehere1',que);
          console.log('herehere2',ans);
          que.answers.push(ans);
          // now save both to the DB
          ans.save(function(err){
            que.save(function(err){
              if(err) {
               console.log('Error');
             } else {
              res.redirect('/');
            }
          });
          });
        });
	},//end addanswer

  likeanswer: function(req, res) {
    //console.log('con likeanswer', req.body._id);
    Answer.update({_id:req.body._id}, 
      {$inc:{like:1}}, 
      function(err, results){});
  },

  getOneAnswer: function(req, res) {
    console.log('answers.js getOneAnswer', req.params.id);
    Answer.findOne({_id:req.body.id})
    .populate('answers')
    .exec(function (err, allAnswers) {
      res.json(allAnswers);
      console.log('allAnswers',allAnswers);
    })
  } 




}//ends module.exports