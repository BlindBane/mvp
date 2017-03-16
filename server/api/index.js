'use strict';

var express = require('express');
var router = express.Router();
// var mockData = require('../../mock/reviews.json');
var Review = require('./../db/schemas/reviewSchema.js');

  router.get('/reviews', function(req, res) {
    Review.find({}, function(err, review) {
      if (err) {
        res.status(500).json({message: err.message});
      } else {
        res.json({reviews: review});
      }
    });
  });

  router.post('/reviews', function(req, res) {
    var nReview = new Review({
      name: req.body.name,
      rating: req.body.rating,
      details: req.body.details
    });
    nReview.save(function (err, user) {
      if (err) { return next(err) }
      res.json(201, user);
    });
  });


module.exports = router;
