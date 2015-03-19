var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
	name: { type: String },
	githubId: { type: Number, required: true},
	gitLink: { type: String, unique: true },
	profilePic: { type: String },
	accountType: { type: String },
	bio: { type: String },
	bootcamp: { type: String },
	skills: { type: String },
	gradYear: { type: Number },
	verified: { type: Boolean, default: false, required: true },
	registered: { type: Boolean, default: false, required: true },
	experience: { type: String, enum: ['Never coded','Beginner', 'Intermediate', 'Advanced'] }

});

module.exports = Mongoose.model('User', userSchema);