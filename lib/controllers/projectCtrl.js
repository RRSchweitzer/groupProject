var Project = require('./../models/project');
var q = require('q');
var webshot = require('webshot');
var fs = require('fs');

module.exports = {
	saveProject: function (req, res) {
		console.log(req.body)

		webshot(req.body.projectUrl, function(err, renderStream) {
			var img = fs.createWriteStream(req.body.projectName + '.png', {encoding: 'binary'});
			console.log('img')
			console.log(img)

			renderStream.on('data', function(data) {
				var imgString = img.write(data.toString('binary'), 'binary')
				// console.log('img String')
				// console.log(imgString);
			});
		});
		

	}
}
