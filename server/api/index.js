'use strict';

var express = require('express');
var router = express.Router();
var mockData = require('../../mock/reviews.json');

router.get('/reviews', function(req, res) {
  res.send(mockData);
});

router.post('/reviews', function(req, res) {
  res.send('you send a POST request to the mealily Meals api!');
});

module.exports = router;
