var User = require('./../models/user');

module.exports = {
	updateOrCreate: function(req, res) {
		console.log("LOOK HERE!!!!!")
		console.log(req.body.bio);
		var queryObj = { _id: req.user._id };
		var updateObj = {
			// name: req.body.name,
			bio: req.body.bio,
			bootcamp: req.body.bootcamp,
			skills: req.body.skills,
			graduationYear: req.body.gradYear,
			verified: false,
			registered: true,
			experience: req.body.experience 
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
				res.status(400).json(err)
			}
		})
		
	}
}