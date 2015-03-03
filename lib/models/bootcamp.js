var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var bootcampSchema = new Schema({
	name: {type: String, required: true, unique: true},
	url: {type: String},
	location: {
		city: {type: String, required: true},
		state: {type: String, required: true}
	},
	programs: [
		{
			name: {type: String},
			length: {type: String},
			languages: [{type: String}],
			frameworks:[{type: String}],
			cost: {type: String},
			avgClassSize: {type: Number}
		}
	],
	housing: {type: Boolean},
	enrollment: {
		annual: {type: Number},
		class: {type: Number}
	}
});

module.exports = Mongoose.model('Bootcamp', bootcampSchema)