var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var projectSchema = new Schema({
	title: {type: String, required: true},
	url: {type: String},
	languages:[{type: String}],
	frameworks:[{types: String}],
	user: {type: Schema.Types.ObjectId, ref: 'User'}
})