var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var Bootcamp = require('../models/bootcamp')

var userSchema = new Schema({
	name: { type: String },
	githubId: { type: Number, required: true},
	gitLink: { type: String, unique: true },
	profilePic: { type: String },
	accountType: { type: String },
<<<<<<< HEAD
	bio: {type: String},
	bootcamp:[Bootcamp],
	skills: {type: String},
	gradYear: {type: Number},
	verified: {type: Boolean, default: false, required: true},
	registered: {type: Boolean, default: false, required: true},
	experience: {type: String, enum: ['Never coded','Beginner', 'Intermediate', 'Advanced']}
=======
	bio: { type: String },
	bootcamp: { type: String },
	skills: { type: String },
	gradYear: { type: Number },
	verified: { type: Boolean, default: false, required: true },
	registered: { type: Boolean, default: false, required: true },
	experience: { type: String, enum: ['Never coded','Beginner', 'Intermediate', 'Advanced'] }
>>>>>>> upstream/master

});

module.exports = Mongoose.model('User', userSchema);