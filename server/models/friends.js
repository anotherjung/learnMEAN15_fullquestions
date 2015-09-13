//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');

//start model 
var FriendSchema = new mongoose.Schema({
	name: String,
	created: String
})
var Friend = mongoose.model('Friend', FriendSchema);
//ends model
