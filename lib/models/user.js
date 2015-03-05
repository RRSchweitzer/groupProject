var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
	name: { type: String, required: true },
	githubId: { type: Number, required: true, unique: true },
	gitLink: { type: String, required: true, unique: true },
	profilePic: { type: String, required: true },
	accountType: { type: String, required: true },
	bio: {type: String},
	// bootcamp: {type: Schema.Types.ObjectId, ref: 'Bootcamp'},
	// projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
	experience: {type: String, enum: ['Never coded','Begginer', 'Intermediate', 'Advanced']},

});

module.exports = Mongoose.model('User', userSchema);