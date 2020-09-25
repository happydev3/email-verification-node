var express = require('express');
var router = express.Router();

var passport = require('passport');
var flash    = require('connect-flash');
var nodemailer = require('nodemailer');

var index = require('../controller/index');
var TokenModel = require('../model/token');
var ResetTokenModel = require('../model/reset');
var UserModel = require('../model/user');

router.get('/', function(req, res){
  res.redirect('/login');
});

router.get('/login', index.login);
//User LogIn
router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/dashboard',
  failureRedirect : '/',
  failureFlash: true
}));

router.get('/register', index.register);

//User SignUp
// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/success',
  failureRedirect : '/failure',
  failureFlash: true
}));

router.get('/success', function(req, res){
  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "wangming9142017@gmail.com",
        pass: "eoauswnrdj123"
    }
  });
  var mailOptions,host,link;

  const sendVerifyEmail = (token) =>{
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?token="+token+'&id='+req.user._id;
    mailOptions={
      to : req.user.local.email,
      subject : "Please confirm your Email account",
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        res.render('exception', {text: 'Error while sending Verification Email.'});
      }else{
        res.render('exception', {text: 'Verification Email was sent successfully.'});
      }
    });
  };
  var id = req.user._id;
  var newToken = new TokenModel();
  newToken.id = id;
  newToken.token = newToken.generateToken();
  newToken.save(function(err) {
    if (err)
      res.render('exception', {text: 'Error while creating new Token. Please contact support team.'});
    sendVerifyEmail(newToken.token);
  });
})
router.get('/failure', function(req, res){
  res.render('exception', {text: 'Cannot create user. Please try with another information'});
})

router.get('/verify', async function(req, res){
  var token = req.query.token;
  var id = req.query.id;
  var tokenModel = await TokenModel.find({token: token, id: id}).exec();
  if(tokenModel[0] == undefined){
    res.render('exception', {text: 'Token is not existed or expired.'});
  }else{
    UserModel.update({'_id': id}, {$set:{active: true}}, function(err, data){
      if(err)
      res.render('exception', {text: 'Error while updating verifying user. Please contact support team.'});
      else
        res.redirect('/login');
    });
  };
})

router.get('/forget', index.forget);

router.post('/forget', async function(req, res){  
  var email = req.body.email;
  var user = await UserModel.find({'local.email': email, active: true}).exec();
  if(user.length == 1){
    var smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "wangming9142017@gmail.com",
          pass: "eoauswnrdj123"
      }
    });
    var mailOptions,host,link;

    const sendResetEmail = (token, id) =>{
      host=req.get('host');
      link="http://"+req.get('host')+"/reset?token="+token+'&id='+id;
      mailOptions={
        to : email,
        subject : "Reset your password",
        html : "Hello,<br> You are receiving this email because you (or someone else) have requested the reset of the password for your account.<br>Please click on the following link, or paste this into your browser to complete the process:<br>"
          + "<a href=" +link+">Click here to verify</a>"
      }
      smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
          res.render('exception', {text: 'Error while sending message. Please contact support team.'});
        }else{
          res.render('exception', {text: 'Message is sent successfully.'});
        }
      });
    };
    var id = user[0]._id;
    var newToken = new ResetTokenModel();
    newToken.id = id;
    newToken.token = newToken.generateToken();
    newToken.save(function(err) {
      if (err)
          res.render({ret: false});
      sendResetEmail(newToken.token, newToken.id);
    });
  }else{
    res.render('exception', {text: 'User is not registered or activated.'})
  }
})

router.get('/reset', async function(req, res){
  var token = req.query.token;
  var id = req.query.id;
  var resetTokenModel = await ResetTokenModel.find({token: token, id: id}).exec();
  if(resetTokenModel[0] == undefined){
    res.render('exception', {text: 'Token is not existed or expired.'})
  }else{
    res.render('reset', {id: id, token: token});
  }
})
router.post('/reset', async function(req, res){
  var token = req.body.token;
  var id = req.body.id;
  var pwd = req.body.password;
  var resetTokenModel = await ResetTokenModel.find({token: token, id: id}).exec();
  const generateHash = (password) =>{
    var bcrypt   = require('bcrypt-nodejs');
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }
  if(resetTokenModel[0] == undefined){
    res.render('exception', {text: 'Reset Token has expired or not existed. Please try again.'});
  }else{
    ResetTokenModel.find({token: token, id: id}).remove().exec();
    UserModel.update({'_id': id}, {$set:{'local.password': generateHash(pwd)}}, function(err, data){
      if(err)
        res.render('exception', {text: 'Password is not updated. Please contact support team.'})
      else
        res.redirect('/login');
    });
  }
})

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

module.exports = router;