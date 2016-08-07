var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/contact', function(req, res){
  var transporter = nodemailer.createTransport('smtps://contact@emmabacani.com:EmmaLopezBacani85!@mail.privateemail.com');

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'contact@emmabacani.com',
      to: 'contact@emmabacani.com', // list of receivers
      subject: 'New Website Contact Form Submission', // Subject line
      html: '<p><b>Message from</b> : '+ req.body.InputName + '</p><br><p><b>Sender</b> : ' + req.body.InputEmail + "</p><br><p><b>Sender's Phone Number</b> :" + req.body.InputPhone + '</p><br><b><p>Message</b> : ' + req.body.InputMessage + '</p>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

  res.redirect('/');
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
