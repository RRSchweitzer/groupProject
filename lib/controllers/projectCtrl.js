var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');

var webshotUrl = 'http://webshot.okfnlabs.org/api/generate?url=';

module.exports = {
	saveProject: function (req, res) {
		webshot('https://www.google.com/', function(err, renderStream) {
			var buffer = ''

			renderStream.on('data', function(data) {
				buffer += data.toString('binary');
				
			});

			renderStream.on('end', function() {
				var project = new Project;
				project.img = buffer;
				project.save(function(err, project) {
					if(err) throw err;
				})
			})
		});
	}

	// saveProject: function (req, res) {
	// 	webshot('https://www.amazon.com/', 'amazon.png', function(err) {
	// 		if(err) {
	// 			console.log(err)
	// 		} else {
	// 			console.log('no errors')
	// 		}
	// 	})
	// }
}

