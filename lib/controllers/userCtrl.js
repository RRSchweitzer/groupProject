var User = require('./../models/user');
var q = require('q');

module.exports = {
	updateOrCreate: function(req, res) {
		console.log("This is req.data: ")
		console.log(req.body);

		var dfd = q.defer();
		var queryObj = { githubId: req.body.githubId };
		var updateObj = req.body
		//if it doesn't find githubId this option will create a new user.
		var options = {
			upsert: true
		}

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if (!err) {
				res.status(200).json(result)
			} else {
				res.status(400).json(err)
			}
		})
	}
}
