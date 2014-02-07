'use strict';

var animalTime = angular.module('animalTime', []);

animalTime.controller('AnimalListCtrl', function($scope){
  $scope.animals = [
    {
      "id": 1,
      "name": "giraffe",
      "hope": "to find someone tall enough to date",
      "fear": "not being able to reach the leaves at the top of the tree"
    },
    {
      "id": 2,
      "name": "hippo",
      "hope": "to one day be a ballerina",
      "fear": "losing his keys"
    },
    {
      "id": 3,
      "name": "lion",
      "hope": "that all the hyenas respect him",
      "fear": "that he'll never remember who he was born to be"
    }
  ]
});