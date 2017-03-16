'use strict';
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mealify-0');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Sever connected to MongoDB ...');
});

module.exports = db;
