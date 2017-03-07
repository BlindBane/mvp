var Q = require('q');
var Meal = require('./mealModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findMeal = Q.nbind(Meal.findOne, Meal);
var createMeal = Q.nbind(Meal.create, Meal);
var findAllMeals = Q.nbind(Meal.find, Meal);

module.exports = {
  allMeals: function (req, res, next) {
    findAllMeals({})
      .then(function (meals) {
        res.json(meals);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newMeal: function (req, res, next) {

  }
};
