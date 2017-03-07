var mealController = require('../meals/mealController.js');
var helpers = require('./helpers.js'); 

module.exports = function (app, express) {
  app.get('/api/meals/', mealController.allMeals);
  // app.post('/api/meals/', mealController.newMeal);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

