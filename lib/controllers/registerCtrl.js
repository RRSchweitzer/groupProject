var User = require('./../models/user');

module.exports = {
	updateOrCreate: function(req, res) {
		console.log(1111111, req.body)
		var queryObj = { _id: req.user._id };
		var updateObj = {
			name: req.body.name,
			githubId: req.user.githubId,
			gitLink: req.user.gitLink,
			profilePic: req.user.profilePic,
			bootcamp: req.body.bootcamp._id,
			bio: req.body.bio,
			skills: req.body.skills,
			gradYear: req.body.gradYear,
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
				res.status(400).json(err);
			}
		})
		
	}


}