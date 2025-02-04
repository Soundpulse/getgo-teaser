(function ($) {
    "use strict";
	
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    $(document).ready(function () {
        if ($(this).scrollTop() > 300) {
			$('.bar-logo-content').css('opacity', '100%');
			$('.bar-content').css('left', '98%');
        }else{
			$('.bar-logo-content').css('opacity', '0%');
			$('.bar-content').css('left', '60%');
		}
    });

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
			$('.bar-logo-content').css('opacity', '100%');
			$('.bar-content').css('left', '98%');
        }else{
			$('.bar-logo-content').css('opacity', '0%');
			$('.bar-content').css('left', '60%');
		}
    });
    

    
})(jQuery);

