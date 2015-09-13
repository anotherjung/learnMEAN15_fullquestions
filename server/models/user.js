//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');

//start model 
var UserSchema = new mongoose.Schema({
	name: String,
	created_date: {type: Date, default: new Date},
	// answers: [{type: Schema.Types.ObjectId, ref:'answers'}]
});

var User = mongoose.model('User', UserSchema);
//ends model
