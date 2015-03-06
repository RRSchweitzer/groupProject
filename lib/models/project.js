var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var projectSchema = new Schema({
	projectName: {type: String},
	url: {type: String},
	img: {type: String},
	// languages:[{type: String}],
	// frameworks:[{types: String}],
	user: {type: Schema.Types.ObjectId, ref: 'User'}
})
module.exports = Mongoose.model('Project', projectSchema)