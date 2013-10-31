'use strict';

/* Controllers */

angular.module('App.controllers')
.controller('PracticeController', ["$scope", "Quiz", "$routeParams", "$location", "Navigation", function($scope, Quiz, $routeParams, $location, Navigation) {


    var init = function() {
        $scope.$parent.practice_questions_attempted++;
        $scope.show_answer = false;
        $scope.question = Quiz.getOne($routeParams.id);
        $scope.next_question_id = Math.round(Math.random() * 1000);

        $scope.subtitle = "Practice Mode"


        // Rating Overlay
        if($scope.$parent.show_notification && $scope.$parent.practice_questions_attempted % 20 == 0) {
            $scope.show_rating_overlay = true;
        }
    } 

    // Rating Overlay
    $scope.show_rating_overlay = false;

    $scope.close_overlay = function() {
        $scope.show_rating_overlay = false;
    }

    $scope.rate = function() {
        $scope.show_rating_overlay = false;
        $scope.$parent.rate();
    }

    $scope.disable_notification = function() {
        $scope.$parent.show_notification = false;
        $scope.show_rating_overlay = false;
    }




    $scope.has_attempted = function(question) {
        return !!question.attempted;
    }

    $scope.correct_answer = function(question, option_index) {
        return ($scope.has_attempted(question)) && (question.answer == option_index);
    }

    $scope.incorrect_answer = function(question, option_index) {
        return ($scope.has_attempted(question))&&(question.selected == option_index);
    }

    $scope.skip = function() {
        Navigation.slidePage("/practice/" + $scope.next_question_id);
    }

    $scope.back = function() {
        Navigation.back();
        // Navigation.slidePage("/practice/" + $scope.next_question_id);
    }

    $scope.select = function(answer) {
        $scope.selected = answer;
    }


    // Single Question - Verify answer
    $scope.check_answer = function(question) {
        if(question.selected == question.answer) {
            $scope.answered_correctly = true;
        } else {
            $scope.answered_correctly = false;
        }

        $scope.show_answer = true;
        question.attempted = true;

    }


    // 50-50 option
    $scope.hide_two_options = function(question) {
        var options = question.options,
        answer = question.answer;
        question.strike_array = []; // CSS display none added to elements of this array


        while(question.strike_array.length != 2) {
            var rand = Math.ceil(Math.random()*3);
            if(rand != answer && question.strike_array.indexOf(rand) < 0) {
                question.strike_array.push(rand);
            }
        }

        question.hide_help_button = true;
    }


    init();

}])
