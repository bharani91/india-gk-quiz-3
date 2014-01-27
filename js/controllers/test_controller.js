'use strict';

/* Controllers */

angular.module('App.controllers')
.controller('TestController', ["$scope", "Quiz", "$document", function($scope, Quiz, $document) {

    $scope.size = 25; // number of questions
    $scope.countdown = 10*60; // 10 mins

    $scope.subtitle = "Test Mode";
    


    var init = function() {
        
        // Restart timer
        $scope.$broadcast('timer-start');

        $scope.timer_stopped = false;
        $scope.viewing_results = false;


        $scope.$on('timer-stopped', function (event, data){
            $scope.timer_stopped = true;
            $scope.$apply();
        });

        $scope.test = Quiz.getCollection($scope.size);

    } 

    $scope.correct_answers = function(questions) {
        var count = 0;
        for(var i = 0; i < questions.length; i++) {
            if(questions[i].selected == questions[i].answer) {
                count++;
            }
        }

        return count;
    }

    $scope.select = function(answer) {
        $scope.selected = answer;
    }


    $scope.correct_answer = function(question, option_index) {
        return ($scope.viewing_results) && (question.answer == option_index);
    }

    $scope.incorrect_answer = function(question, option_index) {
        return ($scope.viewing_results)&&(question.selected == option_index);
    }

    $scope.reload = function() {
        init();
        $document.find(".content")[0].scrollTop = 0;
    }

    $scope.show_results = function(questions) {

        for(var i = 0; i < questions.length; i++) {
            if(questions[i] && (questions[i].selected == questions[i].answer)) {
                questions[i].answered_correctly = true;
            }
        }

        $scope.viewing_results = true;
        $document.find(".content")[0].scrollTop = 0;
    }


    $scope.remaining_questions = function(test) {
        var answered = [];
        for(var i = 0; i< test.length; i++) {
            if(test[i] && test[i].selected) {
                answered.push(test[i])
            }
        }

        return !!($scope.size - answered.length)
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


    $scope.show_ad = function(index) {
        if((index+1) % 6 == 0) {
            return true;
        }
    }


    init();

}])
