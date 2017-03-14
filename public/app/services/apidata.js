'use strict';

angular.module('Mealify')
.service('dataService', function($http) {
  this.getMealReviews = function(callback) {
    $http.get('/api/reviews').then(callback);
  };
});
