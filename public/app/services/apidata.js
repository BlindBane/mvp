'use strict';

angular.module('Mealify')
.service('dataService', function($http) {
  this.getMealReviews = function() {
    return $http.get('/api/reviews')
    .then(function(res){
      return res.data.reviews;
    });
  };

  this.postMealReviews = function(data) {
    $http.post('/api/reviews', data, {})
    .then(function(res) {
      console.log('meal added!', res);
    });
  };
});
