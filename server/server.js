'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');

var router = require('./api');
var app = express();
require('./seed.js');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use('/api', router);

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('Express server is now listening on PORT: ', PORT);
  }
});
