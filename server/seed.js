'use strict';

var Reviews = require('./db/schemas/reviewSchema.js');

var reviews = [
  {
    "name": "Paddys's potato's SEED DATA",
    "rating": "4",
    "details": "The best potato in SOMA!"
  },
  {
    "name": "Chipoltle",
    "rating": "5",
    "details": "It's never a bad decision!"
  },
  {
    "name": "Magic Burger",
    "rating": "2",
    "details": "The not so magical burger in SOMA!"
  }
]

reviews.forEach(function(review, index) {
  Reviews.find({}, function(err, review) {
    if (!err && !reviews.length) {
      review.create({
        name: review.name,
        rating: review.rating,
        details: review.details
      });
    }
  });
});
