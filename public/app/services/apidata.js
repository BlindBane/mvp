'use strict';

angular.module('Mealify')
.service('dataService', function($http) {
  this.getMealReviews = function() {
    return $http.get('/api/reviews').then(function(rev){
      console.log(rev.data.reviews);
      return rev.data.reviews;
     });
  };

});
