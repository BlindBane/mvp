'use strict';

angular.module('Mealify')
.controller('ReviewsCtrl', function ReviewsCtrl($scope, dataService) {
    $scope.reviews = [];

    dataService.getMealReviews()
    .then(function(res) {
      $scope.reviews = res;
    });

    $scope.addReview = function() {
      var meal = { name: $scope.meal.name,
                   rating: $scope.meal.rating,
                   details: $scope.meal.details
      };
      dataService.postMealReviews($scope.meal);

    };

});
