angular.module('Mealify').controller('ReviewsCtrl', function ReviewsCtrl($scope) {
  $scope.reviews = [
    {
      name: 'Paddys\'s potato\'s',
      rating: '5 out of 5',
      details: 'The best potato in SOMA!'
    },
    {
      name: 'Larry\'s Burger',
      rating: '1 out of 5',
      details: 'Larry need\'s to be stopped'
    },
    {
      name: 'Chipoltle',
      rating: '5 out of 5',
      details: 'amazing!!!!'
    },
  ];

  $scope.addReview = function() {
    var meal = { name: "Bob's Burger's",
                 rating: "5 out of 5",
                 details: "Sooo goood!"
    };
    $scope.reviews.push(meal);
  };
});
