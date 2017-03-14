'use strict';

var express = require('express');
var router = express.Router();

router.get('/reviews', function(req, res) {
  res.send('you send a GET request to the mealily Meals api!');
});

router.post('/reviews', function(req, res) {
  res.send('you send a POST request to the mealily Meals api!');
});

module.exports = router;
