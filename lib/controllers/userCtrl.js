var User = require('./../models/user');
var Project = require('./../models/project');
var Bodyparser = require('body-parser');
var q = require('q');

module.exports = {
	updateOrCreate: function(profile) {
		console.log(profile);

		var dfd = q.defer();
		var queryObj = { githubId: profile.id };
		var updateObj = {
			name: profile.displayName,
			githubId: profile.id,
			gitLink: profile.profileUrl,
			profilePic: profile._json.avatar_url,
			accountType: profile._json.type
		}
		//if it doesn't find githubId this option will create a new user.
		var options = {
			upsert: true
		}

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if (!err) {
				dfd.resolve(result);
			} else {
				dfd.reject(err);
			}
		})
		return dfd.promise;
	},

	getProjects: function(req, res) {
		Project.find({ user: req.user._id }).exec(function(err, projects) {
			if(!err) {
				res.status(200).json(projects)
			} else {
				res.status(400).json(err)
			}
		})
	},

	removeProject: function(req, res) {
		Project.findById(req.params.imgId).exec().then(function(img) {
			if(req.user._id.trim() === JSON.stringify(img.user).trim().replace(/\"/g, '')) {
				img.remove(function(err, response) {
					if(!err) {
						return res.status(200).json(response);
					} else {
						return res.status(400).json(err);
					}
				})
			} else {
				return res.status(400);
			}
		}, function(err) {
			return res.status(500).json(err);
		})
	}
};
