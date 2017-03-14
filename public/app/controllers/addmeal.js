'use strict';

angular.module('Mealify')
.controller('AddMealCtrl', function AddMealCtrl($scope) {
  $scope.addReview = function() {
    var meal = { name: $scope.meal.name,
                 rating: $scope.meal.rating,
                 details: $scope.meal.details
    };
    $scope.reviews.push(meal);
  };
});
