angular.module('app', ['ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
	.when('/', {
  templateUrl: '/partials/main',
  controller: 'mainCtrl'
});
})
.controller('mainCtrl', function($scope) {
  $scope.hello = 'Hello, ng!';
});




