var mongoose = require('mongoose');

//USER MODEL SCHEMA AND MODEL 
var userSchema = mongoose.Schema({
	email: String
});

var User = mongoose.model('Subscribers', userSchema);

module.exports = User; 
