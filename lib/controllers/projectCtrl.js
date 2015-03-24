var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');
var random = require('mongoose-random');


module.exports = {
	saveProject: function (req, res) {
		var options = {
			renderDelay: 2000
		}

		webshot(req.body.url, options, function(err, renderStream) {
			var buffer = ''


			renderStream.on('data', function(data) {
				buffer += data.toString('base64');
				
			});

			renderStream.on('end', function() {
				var project = new Project;
				project.projectName = req.body.projectName;
				project.url = req.body.url;
				project.languagesFrameworks = req.body.languagesFrameworks;
				project.description = req.body.description
				project.user = req.user._id;
				project.img = buffer;
				project.votes = 0;
				project.voters = [];
				project.save(function(err, project) {
					if(err) throw err;
					else {
						Project.findOne({_id: project._id }, function(err, populatedProject) {
							var opts = [{path: 'user'}];
							var promise = Project.populate(populatedProject, opts);
							promise.then(function(result) {
								if(!err) {
									res.status(200).json(populatedProject)
								} else {
									console.log(err)
									res.status(400).json(err)
								}
							})
						})
					}
				})
			})
		})
	},

	getProjects: function (req, res) {
		Project.find({}, function(err, projects) {
			var opts = [{path: 'user'}];
			var promise = Project.populate(projects, opts);
			promise.then(function(result) {
				if(!err) {
					res.status(200).json(result);
				} else {
					console.log(err);
					res.status(400).json(err);
				}
			})
		})
	},

	submitVote: function (req, res) {
		var dfd = q.defer()
		Project.findOne({ _id: req.body._id}, function(err, project) {
			if(!err) {
				var voterArr = project.voters;
				for (var i = 0; i < voterArr.length; i++) {
					if(voterArr[i] === req.user._id) {
						return dfd.resolve(res.status(204).json(project))
					}
				};
				voterArr.push(req.user._id);
				project.votes = project.votes += 1;
				project.voters = voterArr;
				project.save();
				return dfd.resolve(res.status(200).json(project));
			} else {
				return dfd.resolve(res.status(400).json(err));
			}
		})
		return dfd.promise;
	},

	getRandomProjects: function (req, res) {
		Project.findRandom().limit(4).exec(function (err, projects) {
			var opts = [{ path: 'user' }];
			var promise = Project.populate(projects, opts);
			promise.then(function (result) {
					if (!err) {
						res.status(200).json(projects)
					} else {
						console.log(err);
						res.status(400).json(err)
					}
			})	
		})
		Project.syncRandom(function (err, result) {
  		console.log(result.updated);
		});
	}

};


