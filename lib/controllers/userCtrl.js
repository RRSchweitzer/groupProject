var User = require('./../models/user');
var q = require('q');

module.exports = {
	updateOrCreate: function(token, refreshToken, profile, done) {
		var dfd = q.defer();
		var queryObj = { githubId: profile.id };
		var updateObj = {
					name: profile.login,
					githubId: profile.id,
					gitlink: profile._json.html_url,
					picture: profile._json.avatar_url,
					type: profile._json.type
				};
		//if it doesn't find githubId this option will create a new user.
		var options = {
			upsert: true
		}

		User.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if (err) {
				dfd.reject(err);
			} else {
				dfd.resolve(result);
			}
		})
		return dfd.promise
	}
}