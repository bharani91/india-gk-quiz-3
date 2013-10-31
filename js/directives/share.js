'use strict';

/* Directives */
angular.module('App.directives')
.directive('share', ["$window", function($window) {
    return function(scope, elem, attrs) {
        elem.bind("click", function(e) {
            e.preventDefault();

            var source = elem.attr("share");
            var play_store_link = "https://play.google.com/store/apps/details?id=com.abhayam.indiagkquiz";


            if(source == 'facebook') {
                var ref = $window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(play_store_link), '_blank', 'location=yes');
            } else if(source == 'twitter') {
                var ref = $window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(play_store_link) + "&text=India GK Quiz Android App - 1000+ questions, Download for free.", '_blank', 'location=yes');

            } else if(source == 'gplus') {
                var ref = $window.open('https://plus.google.com/share?url=' + encodeURIComponent(play_store_link), '_blank', 'location=yes');

            }
        })
    }
}])
