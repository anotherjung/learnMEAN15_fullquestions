//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model TIP: ref is model name
var AnswerSchema = new mongoose.Schema({
	_user: {type: Schema.ObjectId, ref:'Answer'},
	_question: {type: Schema.ObjectId, ref:'Question'},
	username: String,
	answering: String,
	supporting: String,
	like: {type: Number, default: 0},
	created_date: {type:Date, default: new Date}
});


var Answer = mongoose.model('Answer', AnswerSchema);
//ends model
