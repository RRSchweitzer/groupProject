var Bootcamp = require('./../models/bootcamp');
var User = require('./../models/user');
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
		console.log("this is req.user")
		console.log(req.user)
		User.find({ 'bootcamp': JSON.stringify(req.user._id).trim().replace(/\"/g, '')}, function (err, results) {
			if (!err) {
				console.log("this is results");
				console.log(results)
				return res.status(200).json(results)
			} else {
				console.log(err)
				return res.status(500).end()
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
	}

	
};