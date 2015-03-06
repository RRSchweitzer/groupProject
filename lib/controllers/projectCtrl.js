var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');

var webshotUrl = 'http://webshot.okfnlabs.org/api/generate?url=';

module.exports = {
	saveProject: function (req, res) {
		webshot('https://www.amazon.com/', function(err, renderStream) {
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
		});
	},

	getProject: function (req, res) {
		Project.findById('54fa1e6654818a203e12e376', function(err, project) {
			// res.contentType(project.imageType);
			res.status(200).json(project);
		})
	}
	
}
