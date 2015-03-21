var Bootcamp = require('./../models/bootcamp');
var User = require('./../models/user');
var q = require('q');

module.exports = {
	updateOrCreate: function (req, res) {
		var dfd = q.defer();
		var queryObj = { githubId: req.body.githubId };
		var updateObj = {
			name: req.body.name,
			url: req.body.url,
			githubId: req.body.githubId,
			gitLink: req.body.gitLink,
			profilePic: req.body.profilePic,
			location: req.body.location,
			programs: req.body.programs,
			housing: req.body.housing,
			registered: true
		}
		var options = {
			upsert: true
		}

		Bootcamp.findOneAndUpdate(queryObj, updateObj, options,
			function(err, bootcamp) {
				if (!err) {
					console.log('updated bootcamp')
				} else {
					res.status(400).json(err);
				}
			})

		User.findById(req.user._id).exec().then(function(user) {
			user.remove(function(err, response) {
				if(!err) {
					res.status(200).json(response);
				} else {
					res.status(400).json(err);
				}
			})
		})
	},

	getUsers: function (req, res) {
		User.find({bootcamp: req.user._id}, function (err, results) {
			if (!err) {
				console.log("this is results");
				console.log(results)
				res.status(200).json(results)
			} else {
				console.log(err)
				res.status(400).end()
			}
		})
	},

	getBootcamps: function (req, res) {
		Bootcamp.find({}, function(err, results) {
			if (!err) {
				return res.status(200).json(results)
			} else {
				return res.status(500).end()
			}
		})
	},

	verifyStudent: function(req, res) {
		var queryObj = {_id: req.body._id};
		var updateObj = {
			verified: true
		};
		var options = {upsert: false};

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if(!err) {
				res.status(200).json(result)
			} else {
				res.status(400)
			}
		})

	},

	unverifyStudent: function(req, res) {
		console.log(11111111, req.body)
		var queryObj = {_id: req.body._id};
		var updateObj = {
			verified: false
		};
		var options = {upsert: false};

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if(!err) {
				res.status(200).json(result)
			} else {
				res.status(400)
			}
		})

	}
	
};