var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var User = require('../models/user');
var nodemailer = require('nodemailer');



db.on('error', console.error.bind(console, 'connection:error:'));

db.once('open', function(callback) {
	console.log("Connected to MongoDB");
}); 




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mail Server' });
});

router.post('/send', function(req, res, next) {


  var email = req.body.email;
  var mail = req.body.mail;

  User.find({email:email},function(err, users) {
  	
    if (err)
  		return res.send("err");
  	else if (users.length > 0)
		return res.send("User Already Invited");
  	else {
  		if (users.length === 0) {
  			var newUser = new User({email:email}); 
  			newUser.save(function(err, newUser) {
  				if (err)
  					res.send(err);
  			});
  		}
    }

  });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deanesmichael@gmail.com',
        pass: 'archimedes14'
    }
});


var mailOptions = {
    from: 'deanesmichael@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Welcome to Fraternity', // Subject line
    text: mail, // plaintext body
    html: '<b>Hello Fraternity '+ mail +'</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.send("An invitation has been successfully delivered");

});


});

module.exports = router;
