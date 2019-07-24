/* scripts/main.js */

(function( $, window, document, undefined ) {

    $(function() {

        $('.linkedin').find('a').hover(function(e) {
            e.preventDefault();
            $(this).find('i').toggleClass('fa-linkedin').toggleClass('fa-linkedin-in');
        });

        $('.email-envelope').find('a').hover(function(e) {
            e.preventDefault();
            $(this).find('i').toggleClass('fa-envelope').toggleClass('fa-envelope-open');
        });

        $('.tooltip-item').hover(function(e) {
            $(this).tooltip('show');
        });

    });

})( jQuery, window, document );
