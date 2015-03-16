var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');

			var options = {
				renderDelay: 2000
			}

module.exports = {
	saveProject: function (req, res) {
		console.log(req.body)

		webshot(req.body.projectUrl, options, function(err, renderStream) {
			var buffer = ''


			renderStream.on('data', function(data) {
				buffer += data.toString('base64');
				
			});

			renderStream.on('end', function() {
				console.log(buffer);
				var project = new Project;
				project.img = buffer;
				project.save(function(err, project) {
					if(err) throw err;
				})
			})
		})
	},

	getProjects: function (req, res) {
		console.log(req.body)
		Project.find({}, function(err, project) {
			if (!err) {
				res.status(200).json(project);
			} else {
				res.status(400).json(err);
			}
		})
	}
}

