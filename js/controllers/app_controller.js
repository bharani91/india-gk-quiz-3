'use strict';

/* Controllers */

angular.module('App.controllers')
.controller('AppController', ["$scope", "$navigate", "$location", "$window", function($scope, $navigate, $location, $window) {
    $scope.title = "India GK Quiz";
    $scope.$navigate = $navigate;

    $scope.rand = Math.floor(Math.random() * 1000);


    // Rating Overlay
    $scope.practice_questions_attempted = 0;
    $scope.show_notification = true;

    $scope.slidePage = function (path, type) {
        $navigate.go(path,type);
        $scope.showSideMenu = false; // Close side menu if open
    };


    $scope.back = function () {
        $navigate.back();
    };

    $scope.rate = function() {
        $window.open('market://details?id=com.abhayam.indiagkquiz');
        $scope.show_notification = false;
    }

    $scope.isActive = function(path) {
        var path_regex = new RegExp(path.substr(1));
        return path_regex.test($location.path());
    }


}])
