var Express = require('express');
var Mongoose = require('mongoose');
var BodyParser = require('body-parser');
var Passport = require('passport');
var Session = require('express-session');
var request = require('request');
var GithubStrategy = require('passport-github').Strategy;


//Express
var port = 8888
var app = Express();

//controllers
var userCtrl = require('./lib/controllers/userCtrl');
var bootcampCtrl = require('./lib/controllers/bootcampCtrl');
var projectCtrl = require('./lib/controllers/projectCtrl');
var registerCtrl = require('./lib/controllers/registerCtrl');

//models
var User = require('./lib/models/user')


//Mongoose
var mongoUri = 'mongodb://localhost:27017/groupProject';
Mongoose.connect(mongoUri);
var db = Mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
	console.log('connected to db at ' + mongoUri)
});

//middleware
app.use(Express.static(__dirname+'/Public'));
app.use(BodyParser.json());
app.use(Session({
	secret: 'JFDSF98hew98h8hDSOIFoiDiji3333',
	saveUninitialized: true,
	resave:true
}));
app.use(Passport.initialize());
app.use(Passport.session());

//passport cereal-lizers
Passport.serializeUser(function(user, done) {
  done(null, user);
});

Passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


//endpoints
app.get('/api/user/userInfo', function (req, res) {
	res.status(200).json(req.user)
})

app.post('/api/user', registerCtrl.updateOrCreate)
app.post('/api/user/saveProject', projectCtrl.saveProject)
app.post('/api/bootcamp', bootcampCtrl.updateOrCreate)
app.get('/api/project', projectCtrl.getProjects);
app.get('/api/user/projects', userCtrl.getProjects);
app.delete('/api/user/projects/:imgId', userCtrl.removeProject);
app.get('api/bootcampUsers', userCtrl.getUnverifiedUsers);




//Github Login
Passport.use(new GithubStrategy({
	clientID: '7711a028c6230935c259',
	clientSecret: '34062aa6e6f4711ca6822b0bb3240d06074dcafb',
	callbackURL: 'http://localhost:8888/auth/github/callback'
}, 
function (token, refreshToken, profile, done) {
	userCtrl.updateOrCreate(profile)
		.then(function(user) {
			done(null, user);
		}, function(err) {
			done(err, profile);
		})
}
));



//Passport endpoints
app.get('/auth/github',
	Passport.authenticate('github'))

app.get('/auth/github/callback',
	Passport.authenticate('github',{ failureRedirect: '/#/login'}),
	function(req, res) {
		User.findOne({_id: req.user._id}, function(err, user) {
			if(err) {
				res.redirect('/#/register')
			} else {
				res.redirect('/#/projects')
			}
		})
	});

var requireAuth = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(403).end();
	}
	return next()
}




app.listen(port);
console.log('listening on port ' + port)









