//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');

//start model 
var QuestionSchema = new mongoose.Schema({
	name: String,
	created: String
})
var Question = mongoose.model('Question', QuestionSchema);
//ends model
