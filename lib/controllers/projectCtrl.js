var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');

var webshotUrl = 'http://webshot.okfnlabs.org/api/generate?url=';

module.exports = {
	saveProject: function (req, res) {
		webshot('https://www.google.com/', function(err, renderStream) {
			var file = fs.createWriteStream('google.png', {encoding: 'binary'});

			renderStream.on('data', function(data) {
				var project = new Project;
				project.img = file.write(data.toString('binary'), 'binary');
				project.save(function(err, project) {
					if(err) throw err;
				})
			});
		});
		

	}
}
