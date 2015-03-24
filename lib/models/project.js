var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var Random = require('mongoose-random');


var projectSchema = new Schema({
	projectName: { type: String },
	url: { type: String },
	img: { type: String },
	languagesFrameworks: { type: String },
	description: { type: String },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	votes: { type: Number }
})

projectSchema.plugin(Random, { path: 'r' });
module.exports = Mongoose.model('Project', projectSchema)

