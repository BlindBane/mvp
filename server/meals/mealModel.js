var mongoose = require('mongoose');

var MealSchema = new mongoose.Schema({
  views: Number,
  link: String,
  title: String,
  review: String,
  baseUrl: String,
  url: String
});

module.exports = mongoose.model('Meal', MealSchema);