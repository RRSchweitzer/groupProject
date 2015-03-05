var Bootcamp = require('./../models/bootcamp');
var q = require('q');

module.exports = {
	updateOrCreate: function (req, res) {
		var dfd = q.defer();
		var queryObj = { githubId: req.body.githubId };
		var updateObj = req.body
		var options = {
			upsert: true
		}

		Bootcamp.findOneAndUpdate(queryObj, updateObj, options,
			function(err, bootcamp) {
				if (!err) {
					res.status(200).json(bootcamp)
				} else {
					res.status(400).json(err);
				}
			})
	}


	
}