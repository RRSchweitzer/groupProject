var User = require('./../models/user');

module.exports = {
	updateOrCreate: function(req, res) {
		var queryObj = { _id: req.user._id };
		var updateObj = {
			bio: req.body.bio,
			skills: req.body.skills,
			gradYear: req.body.gradYear,
			registered: true
		}
		
		//if it doesn't find githubId this option will create a new user.
		var options = {
			upsert: true
		}

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if (!err) {
				res.status(200).json(result)
			} else {
				console.log(err);
				res.status(400).json(err);
			}
		})
		
	}
}