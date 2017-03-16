'use strict';

var mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  details: String
});

var Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;
