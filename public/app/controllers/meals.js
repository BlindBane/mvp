'use strict';

angular.module('Mealify')
.controller('ReviewsCtrl', function ReviewsCtrl($scope, dataService) {
    $scope.reviews = [];

    dataService.getMealReviews()
    .then(function(res) {
      $scope.reviews = res;
    });

});
