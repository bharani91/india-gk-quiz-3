'use strict';

/*
 *  Title: India GK Quiz v2
 *  Author: Bharani Muthukumaraswamy <bharani@abhayam.co.in>
 *  Author URL: http://abhayam.co.in
 */

// Declare app level module which depends on filters, and services
angular.module('App', [
    'ngMobile',
    'ajoslin.mobile-navigate',
    'App.filters',
    'App.services',
    'App.directives',
    'App.controllers',
    ])

.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/practice/:id', {templateUrl: 'partials/practice.html', controller: "PracticeController"});
    $routeProvider.when('/test', {templateUrl: 'partials/test.html', controller: "TestController"});

    $routeProvider.when('/info', {templateUrl: 'partials/info.html' });
    $routeProvider.when('/recommended-books', {templateUrl: 'partials/recommended_books.html' });
    $routeProvider.when('/share', {templateUrl: 'partials/share.html' });
    $routeProvider.when('/', {templateUrl: 'partials/home.html', reverse: true, controller: "HomeController"});
    $routeProvider.otherwise({ redirectTo: "/" });

}])

.run(function($route, $http, $templateCache) {
    angular.forEach($route.routes, function(r) {
        if (r.templateUrl) { 
            $http.get(r.templateUrl, {cache: $templateCache});
        }
    });
});



// Module declarations
angular.module('App.filters', []);
angular.module('App.services', []);
angular.module('App.directives', []);
angular.module('App.controllers', []);
