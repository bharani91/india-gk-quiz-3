'use strict';

/* Controllers */

angular.module('App.controllers')
    .controller('HomeController', ["$scope", "Quiz", "$route", function($scope, Quiz, $route) {

        $scope.rand = Math.floor(Math.random() * 1000);

        

    }])
