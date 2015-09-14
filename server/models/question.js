//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var QuestionSchema = new mongoose.Schema({
	name: String,
	context: String,
	created: {type: Date, default: new Date},
	answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]
});

var Question = mongoose.model('Question', QuestionSchema);
//ends model
