var Bootcamp = require('./..models/user');
var q = require('q');

module.exports = {
	var dfd = q.defer();
	var queryObj = { githubId: profile.id };
	var updateObj = {
		githubId: profile.id,
		name: profile.login,
		gitlink: profile.__json.html_url,
		picture: profile.__json.avatar_url,
		type: profile.__json.type
	};
	var options = {
		upsert: true
	}

	
}