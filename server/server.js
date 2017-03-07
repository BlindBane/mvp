var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mealify');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB is connected...');
});

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 1337;

app.listen(port, function(err) {
  if (err) { console.log(err); } 
  console.log('Server.js is now listening on port: ' + port + '!');
});
