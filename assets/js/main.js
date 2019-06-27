/* scripts/main.js */

(function( $, window, document, undefined ) {

    $(function() {

        $('.linkedin').find('a').hover(function(e) {
            e.preventDefault();
            $(this).find('i').toggleClass('fa-linkedin-square').toggleClass('fa-linkedin');
        });

        $('.github').find('a').hover(function(e) {
            e.preventDefault();
            $(this).find('i').toggleClass('fa-github').toggleClass('fa-github-alt');
        });

        $('.tooltip-item').hover(function(e) {
            $(this).tooltip('show');
        });

    });

})( jQuery, window, document );