'use strict';

var animalTime = angular.module('animalTime', []);

animalTime.controller('AnimalListCtrl', function($scope, $http){
  $http.get('animals/animals.json').success(function(data) {
    $scope.animals = data;
  })
  
});