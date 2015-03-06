var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');
var Request = require('request');

var webshotUrl = 'http://webshot.okfnlabs.org/api/generate?url=';
var height = 500;
var width = 500;

module.exports = {
	saveProject: function (req, res) {
		console.log("this is req.body!!!")
		console.log(req.body)
		var url = webshotUrl + req.body.projectUrl + "&height=" + height + "&width=" + width

	var dfd = q.defer();
		var queryObj = { url: req.body.projectUrl };
		var updateObj = {
			projectName: req.body.projectName,
			url: url
		}

		//if it doesn't find githubId this option will create a new user.
		var options = {
			upsert: true
		}

		Project.findOneAndUpdate(queryObj, updateObj, options, function (err, result) {
			if (!err) {
				res.status(200).json(result)
			} else {
				res.status(400).json(err)
			}
		})
	}
}









	// 	webshot('https://www.google.com/', function(err, renderStream) {
	// 		var file = fs.createWriteStream('google.png', {encoding: 'binary'});

	// 		renderStream.on('data', function(data) {
	// 			var project = new Project;
	// 			project.img = file.write(data.toString('binary'), 'binary');
	// 			project.save(function(err, project) {
	// 				if(err) throw err;
	// 			})
	// 		});
	// 	});
		

// 	// }
// }
// }

