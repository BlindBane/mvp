'use strict';

angular.module('Mealify')
.controller('ReviewsCtrl', function ReviewsCtrl($scope, dataService) {
  dataService.getMealReviews(function(res) {
    var reviews = res.data;
    $scope.reviews = reviews;
  });

});
