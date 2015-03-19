var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');


module.exports = {
	saveProject: function (req, res) {
		var options = {
			renderDelay: 2000
		}

		webshot(req.body.projectUrl, options, function(err, renderStream) {
			var buffer = ''


			renderStream.on('data', function(data) {
				buffer += data.toString('base64');
				
			});

			renderStream.on('end', function() {
				var project = new Project;
				project.user = req.user._id;
				project.img = buffer;
				project.save(function(err, project) {
					if(err) throw err;
					else res.status(200).json(project);
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
	}
}

