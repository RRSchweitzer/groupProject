var User = require('./../models/user');
var Bootcamp = require('./../models/bootcamp');
var q = require('q')

module.exports = {
	updateOrCreate: function(req, res) {
		var queryObj = { _id: req.user._id };
		var updateObj = {
			name: req.body.name,
			githubId: req.user.githubId,
			gitLink: req.user.gitLink,
			profilePic: req.user.profilePic,
			bootcamp: req.body.bootcamp._id,
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
		
	},

	dashboardLink: function(req, res) {
		var dfd = q.defer();
		if(req.user) {
			Bootcamp.findOne({'_id': req.user._id}, function(err, result) {
				if(!result) {
					return dfd.resolve(res.status(200).json('#/user/dashboard'));
				} else {
					return dfd.resolve(res.status(200).json('#/bootcamp/dashboard'));
				}
			})
			
		} else {
			return dfd.resolve(res.status(200).json(false));
		}
		return dfd.promise;
	},

	isLoggedIn: function(req, res) {
		if(!req.isAuthenticated()) {
			return res.status(204).json('');
		} else {
			return res.status(200).json('');
		}
	},

	logout: function(req, res) {
		req.logout();
		res.redirect('/')
	}


}