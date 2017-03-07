angular.module('app', ['app.meals', 'ngResource', 'ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: 'build/partials/meals.html',
    controller: 'MealController'
  })
});






